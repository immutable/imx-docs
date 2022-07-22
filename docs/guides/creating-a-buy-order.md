## Creating a Buy Order
This guide will explain how to create a buy order and execute a trade using [IMX Core SDK in Typescript](https://docs.x.immutable.com/docs/imx-core-sdk-ts), specifically by using methods exposed by the [`Workflow`](https://github.com/immutable/imx-core-sdk#workflows) class in the Core SDK.

Before diving further, it is important to understand the distinction between creating a buy order and executing a trade.

 - Creating a buy order means listing an asset to be sold in the [shared Immutable X orderbook](https://docs.x.immutable.com/docs/showing-orders-from-other-marketplaces/). Others can then view the buy order to then execute a trade.

 - Executing a trade means filling buy orders that were created.

Example:

 - Person A lists *Collectible One* for *1 ETH*. This means that there will be an order in the shared Immutable X orderbook ready to be filled by others. This action of **listing an asset for sale** is named **creating a buy order**.

 - Person B sees the order for *Collectible One* and deems that the price of *1 ETH* is fair. Person B then proceeds to buy *Collectible One* for *1 ETH*. This action of **buying the asset (filling the order)** named **executing a trade**.

With that out of the way, let us dive into how to create a buy order and execute a trade in Typescript.

### Creating a buy order

Here are the steps on how to create a buy order using the methods exposed by the `Workflow` class in the Core SDK.

 1. Create a [configuration object](https://github.com/immutable/imx-core-sdk#configuration), which is necessary to use the Core SDK
 2. Instantiate a [`Wallet`](https://docs.ethers.io/v5/api/signer/#Wallet) from a private key of your L1 Ethereum wallet and connect it to a [`Provider`](https://docs.ethers.io/v5/api/providers/). *Read more about private key of an example wallet called MetaMask [here](https://metamask.zendesk.com/hc/en-us/articles/4404722782107-User-Guide-Secret-Recovery-Phrase-password-and-private-keys#:~:text=our%20article%20here.-,Private%20keys,only,%20into%20a%20different%20wallet.)*
 3. Generate your L2 [Stark Wallet](https://github.com/immutable/imx-core-sdk#stark-wallet) from your L1 Ethereum wallet
 4. Create the order with the method `createOrderWithSigner`, passing the signer parameters and an object that implements the [`GetSignableOrderRequest`](https://github.com/immutable/imx-core-sdk/blob/f7180ce13b0cc7b9b48fb81f9b1efec073acbf77/src/api/models/get-signable-order-request.ts#L24) interface (the order parameters). *Note: do check the `GetSignableOrderRequest` interface to know the key-value pairs that are required and not required for the object*

After these steps are done, a listing of your asset will now appear in the shared Immutable X orderbook, ready for others to fill.

Code sample.
```ts
import { ethers } from 'ethers';
import { AlchemyProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { BaseSigner, generateStarkWallet, getConfig, Workflows } from '@imtbl/core-sdk';

// Setting up
const ethNetwork = 'ropsten'; // Use 'ropsten' for testing purposes; use 'mainnet' for live purposes

// You need to get the provider's API key. In this example, you need to get Alchemy's API key.
const provider = new AlchemyProvider(ethNetwork, alchemyApiKey);

// Replace privateKey with the privateKey of your L1 wallet
// This will be the L1 signer used in the createOrderWithSigner method later
const L1OrderSigner = new Wallet(privateKey).connect(provider);

// Generate the Stark Wallet from your L1 wallet
const starkWallet = await generateStarkWallet(L1OrderSigner);

// This will be the L2 signer used in the createOrderWithSigner method later 
const L2OrderSigner = new BaseSigner(starkWallet.starkKeyPair);

// Configure Core SDK and the Workflow class
const config = getConfig(ethNetwork);
const workflows = new Workflows(config);

/**
* Function to set the parameters required to create a buy order and to call the createOrderWithSigner function
* You can see the parameters of required for an order by checking the GetSignableOrderRequest interface
*/
const createOrder = async () => {
    // Order expiration in UNIX timestamp
    // In this case, set the expiration date as 1 month from now
    const now = new Date(Date.now());
    now.setMonth(now.getMonth() + 1);
    const timestamp = Math.floor(now.getTime() / 1000);
    
    // Object with key-value pairs that implement the GetSignableOrderRequest interface
    const orderParameters = {
    
	    // Change '0.1' to any value of the currency wanted to sell this asset
        amount_buy: ethers.utils.parseEther('0.1').toString(),
        
        // Change '1' to any value indicating the number of assets you are selling
        amount_sell: '1',
        
        expiration_timestamp: timestamp,
        
        // Fees are optional; for simplicity, no maker or taker fees are added in this sample
        fees: [],
        
        // The currency wanted to sell this asset
        token_buy: {
        
            type: 'ETH', // Or 'ERC20' if it's another currency    
            data: {
                token_address: '', // Or the token address of the ERC20 token
                decimals: 18, // Or any decimals used by the token
            },
        },
        
        // The asset being sold
        token_sell: {
        
            type: 'ERC721',
            data: {
	            // The collection address of this asset
                token_address: collectionAddress,
                
                // The ID of this asset
                token_id: tokenID,
            },
        },

		// The ETH address of the L1 Wallet
        user: await L1OrderSigner.getAddress(),
    };

	// Call the createOrderWithSigner method exposed by the Workflow class
    const response = await workflows.createOrderWithSigner(
        { L1OrderSigner, L2OrderSigner }, 
        orderParameters
    );

	// This will log the response specified in this API: https://docs.x.immutable.com/reference/#/operations/createOrder
    console.log(response);
};
```

### Executing a trade

The first few steps of executing a trade are similar to the first few steps of creating an order. Here are the steps to execute a trade.

 1. Create a [configuration object](https://github.com/immutable/imx-core-sdk#configuration), which is necessary to use the Core SDK
 2. Instantiate a [`Wallet`](https://docs.ethers.io/v5/api/signer/#Wallet) from a private key of your L1 Ethereum wallet and connect it to a [`Provider`](https://docs.ethers.io/v5/api/providers/). *Read more about private key of an example wallet called MetaMask [here](https://metamask.zendesk.com/hc/en-us/articles/4404722782107-User-Guide-Secret-Recovery-Phrase-password-and-private-keys#:~:text=our%20article%20here.-,Private%20keys,only,%20into%20a%20different%20wallet.)*
 3. Generate your L2 [Stark Wallet](https://github.com/immutable/imx-core-sdk#stark-wallet) from your L1 Ethereum wallet
 4. Execute the trade with the method `createTradeWithSigner`, passing the signer parameters and an object that implements the [`GetSignableTradeRequest`](https://github.com/immutable/imx-core-sdk/blob/f7180ce13b0cc7b9b48fb81f9b1efec073acbf77/src/api/models/get-signable-trade-request.ts#L23) interface (the trade parameters). One important value in the object is the `order_id`, which indicates the order to be filled. *Note: do check the `GetSignableTradeRequest` interface to know the key-value pairs that are required and not required for the object*

Note that as an `order_id` value is required, you might need to retrieve a valid order ID using [Immutable X `listOrders` API](https://docs.x.immutable.com/reference/#/operations/listOrders) beforehand. After these steps are done, the buy order with `order_id` will be filled.

Code sample.

```ts
import { ethers } from 'ethers';
import { AlchemyProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { BaseSigner, generateStarkWallet, getConfig, Workflows } from '@imtbl/core-sdk';

const ethNetwork = 'ropsten';
const provider = new AlchemyProvider(ethNetwork, alchemyApiKey);

// This will be the L1 signer used in the createTradeWithSigner method later
const L1TradeSigner = new Wallet(privateKey).connect(provider);

const starkWallet = await generateStarkWallet(L1TradeSigner);

// This will be the L2 signer used in the createTradeWithSigner method later 
const L2TradeSigner = new BaseSigner(starkWallet.starkKeyPair);

const config = getConfig(ethNetwork);
const workflows = new Workflows(config);

/**
* Function to set the parameters required to create a trade and to call the createTradeWithSigner function
* You can see the parameters of required for a trade by checking the GetSignableTradeRequest interface
*/
const createTrade = async (orderID) => {
    const now = new Date(Date.now());
    now.setMonth(now.getMonth() + 1);
    const timestamp = Math.floor(now.getTime() / 1000);

    const tradeParameters = {
	    // The ID of the buy order to be filled
        'order_id': orderID,
        'user': await L1TradeSigner.getAddress()
    }
	
	// Call the createTradeWithSigner method exposed by the Workflow class
    const response = await workflows.createTradeWithSigner(
        { L1TradeSigner, L2TradeSigner }, 
        tradeParameters
    );

	// This will log the response specified in this API: https://docs.x.immutable.com/reference/#/operations/createTrade
    console.log(response);
};
```

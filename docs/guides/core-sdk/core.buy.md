---
title: 'Creating a Buy order'
slug: '/core-create-buy-order'
excerpt: 'Core SDK can now be used to kick off buy flows'
sidebar_position: 1
---

This guide will explain on how to create buy order using **[Core SDK](./imx-core-sdk-ts)**, specifically by using methods exposed by the **[`Workflow`](./imx-core-sdk-ts#workflows)** class in the Core SDK.

Before diving further, it is important to understand the distinction between creating a buy order and executing a trade.

- Creating a buy order means listing an asset to be sold in the [Immutable X Orderbook](./showing-orders-from-other-marketplaces/). This order can be fetched by other marketplaces and [Immutable X's Marketplace](https://market.immutable.com/) as well

- Executing a trade means fulfilling the buy orders created using this guide. _In simple terms this can be considered as simply purchasing the NFT._

## Prerequisite

- Core SDK [(Install Instructions)](./imx-core-sdk-ts#installation)
- Collection Linked to Immutable [(Steps)](./collection-registration)

## Steps to Create the Buy Order

### Configuration

A configuration object is required to be passed into Core SDK requests. This can be obtained by using the `getConfig` function available within the Core SDK. You are required to select the Ethereum network. The Immutable X platform currently supports `ropsten` for testing and `mainnet` for production.

```ts
import { getConfig } from '@imtbl/core-sdk';

const ethNetwork = 'ropsten'; // or mainnet;
// Use the helper function to get the config
const config = getConfig(ethNetwork);
```

### Wallet

You can connect a wallet either using a private key of your L1 Ethereum wallet or using a `Provider` like Metamask. For this guide we are using [ethers](https://www.npmjs.com/package/ethers), buy you are free to use any web3 library.

We also need to generate L2 Stark Wallet using the L1 Ethereum wallet which will be later used to sign the buy order. This is achieved with the help of `generateStarkWallet` method.

#### Using Private Key

```ts
import { AlchemyProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { getConfig, Workflows, generateStarkWallet } from '@imtbl/core-sdk';

const ethNetwork = 'ropsten'; // or mainnet;
// Use the helper function to get the config
const config = getConfig(ethNetwork);

// You need to get the provider's API key. In this example, you need to get Alchemy's API key.
const alchemyApiKey = 'UPDATE WITH THE ALCHEMY API KEY HERE';
const alchemyProvider = new AlchemyProvider(ethNetwork, alchemyApiKey);

// Replace privateKey with the privateKey of your L1 wallet
const privateKey = 'UPDATE WITH THE PRIVATE KEY HERE';
const l1Wallet = new Wallet(privateKey);

// This will be the L1 signer used in the createOrderWithSigner method later
const l1Signer = l1Wallet.connect(alchemyProvider);

// Generate the Stark Wallet from your L1 wallet
const l2Wallet = await generateStarkWallet(l1Signer);

// This will be the L2 signer used in the createOrderWithSigner method later
const l2Signer = new BaseSigner(l2Wallet.starkKeyPair);
```

#### Using Metamask

Add the following package [@metamask/detect-provider](npmjs.com/package/@metamask/detect-provider) by using npm/yarn.

```ts
import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import { getConfig, Workflows, generateStarkWallet } from '@imtbl/core-sdk';

const ethNetwork = 'ropsten'; // or mainnet;
// Use the helper function to get the config
const config = getConfig(ethNetwork);

const metaMaskProvider =
  (await detectEthereumProvider()) as ethers.providers.ExternalProvider;

if (!metaMaskProvider?.request) {
  throw new Error('MetaMask not found'); // Handle your custom user feedback flow
}

await metaMaskProvider.request({ method: 'eth_requestAccounts' });

const l1Provider = new ethers.providers.Web3Provider(metaMaskProvider);

// This will be the L1 signer used in the createOrderWithSigner method later
const l1Signer = l1Provider.getSigner();

// Generate the Stark Wallet from your L1 wallet
const l2Wallet = await generateStarkWallet(l1Signer);

// This will be the L2 signer used in the createOrderWithSigner method later
const l2Signer = new BaseSigner(l2Wallet.starkKeyPair);
```

### Workflows

The Workflows can be be initialized by the config object.

```ts
import { Workflows } from '@imtbl/core-sdk';

const coreSdkWorkflows = new Workflows(config);
```

### Create Order

All the required parameters are ready at this point to be sent to the `createOrderWithSigner` method. The method takes 2 inputs:

- `walletConnection` which is an object of l1Signer & l2Signer created in above steps

- `request` which is of type `GetSignableOrderRequest`.

On execution an object of the following type will be returned by `createOrderWithSigner`:

```ts
{
  order_id: number;
  status: string;
  time: number;
}
```

#### Here's the complete code:

```ts
import { AlchemyProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import {
  getConfig,
  generateStarkWallet,
  BaseSigner,
  GetSignableOrderRequest,
  WalletConnection,
  Workflows,
} from '@imtbl/core-sdk';

const ethNetwork = 'ropsten'; // or mainnet;

// Use the helper function to get the config
const config = getConfig(ethNetwork);

// You need to get the provider's API key. In this example, you need to get Alchemy's API key.
const alchemyApiKey = 'UPDATE WITH THE ALCHEMY API KEY HERE';
const alchemyProvider = new AlchemyProvider(ethNetwork, alchemyApiKey);

// Replace privateKey with the privateKey of your L1 wallet
const privateKey = 'UPDATE WITH THE PRIVATE KEY HERE';
const l1Wallet = new Wallet(privateKey);

// This will be the L1 signer used in the createOrderWithSigner method later
const l1Signer = l1Wallet.connect(alchemyProvider);

// Generate the Stark Wallet from your L1 wallet
const l2Wallet = await generateStarkWallet(l1Signer);

// This will be the L2 signer used in the createOrderWithSigner method later
const l2Signer = new BaseSigner(l2Wallet.starkKeyPair);

// Collection Address
const collectionAddress = 'UPDATE WITH THE COLLECTION ADDRESS HERE';

/**
 * createOrder method to generate the order using createOrderWithSigner function
 **/
const createOrder = async () => {
  // Order expiration in UNIX timestamp
  // In this case, set the expiration date as 1 month from now
  // Note: will be rounded down to the nearest hour
  const now = new Date(Date.now());
  now.setMonth(now.getMonth() + 1);
  const timestamp = Math.floor(now.getTime() / 1000);

  // Object that implements the WalletConnection interface
  const walletConnection: WalletConnection = {
    l1Signer,
    l2Signer,
  };

  // Object with key-value pairs that implement the GetSignableOrderRequest interface
  const orderParameters: GetSignableOrderRequest = {
    // Fee-exclusive amount to buy the asset
    // Change '0.1' to any value of the currency wanted to sell this asset
    amount_buy: ethers.utils.parseEther('0.1').toString(),

    // Amount to sell (quantity)
    // Change '1' to any value indicating the number of assets you are selling
    amount_sell: '1',

    expiration_timestamp: timestamp,

    // Optional Inclusion of either maker or taker fees.
    // For simplicity, no maker or taker fees are added in this sample
    fees: [],

    // The currency wanted to sell this asset
    token_buy: {
      type: 'ETH', // Or 'ERC20' if it's another currency
      data: {
        token_address: '', // Or the token address of the ERC20 token
        decimals: 18, // decimals used by the token
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
    user: await l1Signer.getAddress(),
  };

  // Call the createOrderWithSigner method exposed by the Workflow class
  const response = await coreSdkWorkflows.createOrderWithSigner(
    walletConnection,
    orderParameters
  );

  // This will log the response specified in this API: https://docs.x.immutable.com/reference/#/operations/createOrder
  console.log('order created: ', response);
};
```

### Cancel Order

Immutable X provides the ability to cancel an order within its orderbook. The Workflow `cancelOrderWithSigner` can be used for this functionality, which requires the signers and wallet created above and an object that implements the `GetSignableCancelOrderRequest` interface.

```ts
// Only ID of the order is required
const orderId = 'ID OF THE ORDER TO CANCEL';
const requestParams = {
  order_id: orderId,
};

// Object that implements the WalletConnection interface
const walletConnection: WalletConnection = {
  l1Signer,
  l2Signer,
};

// Execute
const cancelResponse = await coreSdkWorkflows.cancelOrderWithSigner(
  walletConnection,
  requestParams
);
// Print the result, see: https://docs.x.immutable.com/reference#/operations/cancelOrder
console.log('order cancelled: ', response); //{ "order_id": 0,"status": "string" }
```

---
title: 'Creating a Buy Order'
slug: '/creating-a-buy-order'
sidebar_position: 4.5
---

This guide explains how to create a buy order and execute a trade using our Core SDK. Before starting, it's important to understand the difference between order and trade:

- When you create a buy order, it's like list your asset on the market. Every application that have a marketplace on Immutable X will show your item, Immutable X stored all the buy orders in a _[shared orderbook](./minting-on-immutable-x.md#liquidity)_.

- When you execute a trade, you are substantially purchasing an asset in the market.

:::note

In this guide, we don't set any **fees** for simplicity. If you are interested how it works and implementing it, you can start by reading **[fees mechanism](./getting-started-guide.md)**.

:::

## Configuration

For executing the operations, you use methods exposed from the [Workflows](../sdks/Core%20SDK%20Typescript.md#workflows) class. These methods are a combination of API and contract calls that simplify the interaction with Immutable X, but required some parameters that we're going to initialize in this first step:
1. Create a [configuration object](../sdks/Core%20SDK%20Typescript.md#configuration), basically which network you will use. The Immutable X platform currently supports ropsten for testing and mainnet for production
2. Instantiate a [Wallet](https://docs.ethers.io/v5/api/signer/#Wallet) from a private key of your L1 Ethereum wallet and connect it to a [Provider](https://docs.ethers.io/v5/api/providers/)
3. Generate your L2 [Stark Wallet](../sdks/Core%20SDK%20Typescript.md#stark-wallet) from your L1 Ethereum wallet

```ts
import { ethers } from 'ethers';
import { AlchemyProvider } from '@ethersproject/providers';
import { getConfig, Workflows } from '@imtbl/core-sdk';
import { generateStarkWallet } from '@imtbl/core-sdk';

const ethNetwork = 'ropsten'; // or mainnet;

// Use the helper function to get the config
const config = getConfig(ethNetwork);
const workflow = new Workflows(config);

// Setup a provider
const privateKey = YOUR_PRIVATE_KEY;
const provider = new AlchemyProvider(ethNetwork, YOUR_ALCHEMY_API_KEY);

// Setup signer who creates the order
const signerOrder = new Wallet(privateKeyOrder).connect(provider);

// Setup signer who executes the trade
const signerTrade = new Wallet(privateKeyTrade).connect(provider);

// Generate stark wallets
const starkWalletOrder = await generateStarkWallet(signerOrder);
const starkWalletTrade = await generateStarkWallet(signerTrade);

```

## Create an Order

The method utilized for creating an order is `createOrderWithSigner`, which required over the signer and its relative stark wallet, an object that implements the [`GetSignableOrderRequest`](https://github.com/immutable/imx-core-sdk/blob/f7180ce13b0cc7b9b48fb81f9b1efec073acbf77/src/api/models/get-signable-order-request.ts#L24) interface. `GetSignableOrderRequest` price data and asset data with the structure described [Token data object](./token-data-object).

```ts
// Eth address of the owner
const addressOrder = await signerOrder.getAddress();

// Asset data 
const assetOrder = {
  type: 'ERC721',
  data: {
    token_address: addressCollection,
    token_id: assetId,
  },
};

// Price of the asset in wei
const priceOrder = ethers.utils.parseEther(price).toString();

// Price data
const tokenOrder = {
  type: 'ERC20', //or ETH
  data: {
    token_address: tokenAddress, // For type ETH isn't required
    decimals: tokenDecimals, // 18 for most of the cases, but can change (e.g. USDC)
  },
};

// Generate the date when order expire, in this case after one month by now
const timestamp = new Date(Date.now());
timestamp.setMonth(timestamp.getMonth() + 1);
const timestampUnix = parseInt(timestamp.getTime() / 1000); // Unix format is required

let requestOrder = {
  amount_buy: priceOrder,
  amount_sell: '1', // Quantity of the asset
  expiration_timestamp: timestampUnix,
  fees: [], // Optional
  token_buy: tokenOrder,
  token_sell: assetOrder,
  user: addressOrder,
};

// Execute
const l2SignerOrder = new BaseSigner(starkWalletOrder.starkKeyPair);
const response = await workflow.createOrderWithSigner(
  { l1Signer: signerOrder, l2Signer: l2SignerOrder },
  requestOrder
);

// Print the result, see: https://docs.x.immutable.com/reference/#/operations/createOrder
console.log(response); //{ "order_id": 0, "status": "string", "time": 0 }
```

:::tip

Do you want to modify an order already created? You can simply update `priceOrder` and `tokenOrder`, then call again `createOrderWithSigner`. Isn't necessary to [cancel the order](./creating-a-buy-order.md#cancel-an-order) previously, but remember that the updated order will have a new order ID. 

:::

## Execute a Trade

The method utilized for executing a trade is `createTradeWithSigner`, which required over the signer and its relative stark wallet, an object that implements the [`GetSignableTradeRequest`](https://github.com/immutable/imx-core-sdk/blob/f7180ce13b0cc7b9b48fb81f9b1efec073acbf77/src/api/models/get-signable-trade-request.ts#L23) interface. 
`GetSignableTradeRequest` required the unique ID of the order to create a trade. You can retrieve it with Immutable X [**APIs**](https://docs.x.immutable.com/reference#/operations/listOrders).

```ts

// Eth address of the buyer
const addressTrade = await signerTrade.getAddress();

// Generate the date when trade expire, in this case after one month by now
const timestamp = new Date(Date.now());
timestamp.setMonth(timestamp.getMonth() + 1);
const timestampUnix = parseInt(timestamp.getTime() / 1000); // Unix format is required

let requestTrade = {
  expiration_timestamp: timestampUnix,
  user: addressTrade,
  order_id: orderId, // Unique ID of the order
};

// Execute
const l2SignerTrade = new BaseSigner(starkWalletTrade.starkKeyPair);
const response = await workflow.createTradeWithSigner(
  { l1Signer: signerTrade, l2Signer: l2SignerTrade },
  requestTrade
);

// Print the result, see: https://docs.x.immutable.com/reference#/operations/createTrade
console.log(response); //{ "request_id": "string", "status": "string", "trade_id": 0 }
```

## Utils

### Cancel an Order
Immutable X provides the ability to cancel an order within its orderbook. Worflows class includes the method `cancelOrderWithSigner`, which required over the signer and its relative stark wallet, an object that implements the [`GetSignableCancelOrderRequest`](https://github.com/immutable/imx-core-sdk/blob/f7180ce13b0cc7b9b48fb81f9b1efec073acbf77/src/api/models/get-signable-cancel-order-request.ts) interface.

```ts

// Only ID of the order is required
let cancelOrder = {
  order_id: orderId
}

// Execute
const l2SignerOrder = new BaseSigner(starkWalletOrder.starkKeyPair);
const response = await workflow.cancelOrderWithSigner(
  {l1Signer: signerOrder, l2Signer: l2SignerOrder },
  cancelOrder
);

// Print the result, see: https://docs.x.immutable.com/reference#/operations/cancelOrder
console.log(response) //{ "order_id": 0,"status": "string" }


```
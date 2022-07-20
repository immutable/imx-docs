---
title: 'Creating a Buy Order'
slug: '/creating-a-buy-order'
sidebar_position: 4
---

This guide explains how to create a buy order and execute a trade using our Core SDK. Before starting, it's important to understand the difference between order and trade:

- When you create a buy order, it's like list your asset on the market. Every application that have a marketplace on Immutable X will show your item, Immutable X stored all the buy orders in a _[shared orderbook](./minting-on-immutable-x.md#liquidity)_.

- When you execute a trade, you are substantially purchasing an asset in the market.

## Configuration

For executing the operations, a configuration object is required to be passed into Core SDK requests.

**[Learn more about Core SDK configuration](./imx-core-sdk-ts#configuration)**

```ts
import { ethers } from 'ethers';
import { AlchemyProvider } from '@ethersproject/providers';
import { getConfig, Workflows } from '@imtbl/core-sdk';
import { generateStarkWallet } from '@imtbl/core-sdk';

const ethNetwork = 'ropsten'; // or mainnet;

// Use the helper function to get the config
const config = getConfig(ethNetwork);

// Setup a provider and signer for create an order and execute a trade
const privateKey = YOUR_PRIVATE_KEY;
const provider = new AlchemyProvider(ethNetwork, YOUR_ALCHEMY_API_KEY);

// Who create order
const signerOrder = new Wallet(privateKeyOrder).connect(provider);

// Who exceute trade
const signerTrade = new Wallet(privateKeyTrade).connect(provider);

// Generate stark wallets
const starkWalletOrder = await generateStarkWallet(signerOrder);
const starkWalletTrade = await generateStarkWallet(signerTrade);

const workflow = new Workflows(config);
```

For simplifying our requests we use methods exposed from the [Workflow](./imx-core-sdk-ts#configuration#workflows) class.

## Create an Order

The parameters for choosing price and asset in an order required the structure described [here](./token-data-object).

```ts
//eth address
const addressOrder = await signerOrder.getAddress();
//asset data
const assetOrder = {
  type: 'ERC721',
  data: {
    token_address: addressCollection,
    token_id: assetId,
  },
};
//price of the asset in wei
const priceOrder = ethers.utils.parseEther(price).toString();
//price data
const tokenOrder = {
  type: 'ERC20', //or ETH
  data: {
    token_address: tokenAddress, //for type ETH isn't required
    decimals: tokenDecimals, //18 for most of the cases
  },
};

// Generate the date when order expire, in this case after one month
const timestamp = new Date(Date.now());
timestamp.setMonth(timestamp.getMonth() + 1);
const timestampUnix = parseInt(timestamp.getTime() / 1000); //Unix format is required

let requestOrder = {
  amount_buy: priceOrder,
  amount_sell: '1', //quantity
  expiration_timestamp: timestampUnix,
  fees: [],
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

console.log(response); //{ "order_id": 0, "status": "string", "time": 0 }
```

## Execute a Trade

The ID of the order is required to create a trade. You can retrieve it with Immutable X **APIs** or Workflow method.

```ts
const addressTrade = await signerTrade.getAddress();

const timestamp = new Date(Date.now());
timestamp.setMonth(timestamp.getMonth() + 1);
const timestampUnix = parseInt(timestamp.getTime() / 1000); //Unix format is required

let requestTrade = {
  expiration_timestamp: timestampUnix,
  user: addressTrade,
  order_id: orderId,
};

// Execute
const l2SignerTrade = new BaseSigner(starkWalletTrade.starkKeyPair);
const response = await workflow.createTradeWithSigner(
  { l1Signer: signerTrade, l2Signer: l2SignerTrade },
  requestTrade
);

console.log(response); //{ "request_id": "string", "status": "string", "trade_id": 0 }
```

In this guide, we don't set any **fees** for simplicity. If you are interested how it works and implementing it, you can start by reading **[fees mechanism here](./getting-started-guide.md)**.

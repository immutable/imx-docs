---
title: "Create buy and sell orders"
slug: "/create-buy-and-sell-orders"
sidebar_position: 1
---

## Creating a buy order

Using Core SDK you can create buy order, which means putting your asset for sale in the shared Immutable orderbook. Below is an example how to create a buy order using **[Workflows](./imx-core-sdk-ts#workflows)** that are included in Core SDK. First import and initialize required modules:

```ts
import { ethers } from 'ethers';
import { AlchemyProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { BaseSigner, generateStarkWallet, getConfig, Workflows } from '@imtbl/core-sdk';

// Setup provider and singer
const ethNetwork = 'ropsten'; // or mainnet
const provider = new AlchemyProvider(ethNetwork, alchemyApiKey);
const l1singer = new Wallet(privateKey).connect(provider);
const starkWallet = await generateStarkWallet(l1singer);
const l2signer = new BaseSigner(starkWallet.starkKeyPair);

// Configure Core SDK Workflow class
const config = getConfig(ethNetwork);
const workflows = new Workflows(config);

```

Order parameters include order ID in numberic format, buy and sell amount in wei, optional fees, seller address, order expiration, token_buy and token_sell which are **[Token data objects](./token-data-object)**:

```ts
// Create a new buy order
const createOrder = async () => {

    // Order expiration in unix timestamp
    const now = new Date(Date.now());
    now.setMonth(now.getMonth() + 1);
    const timestamp = Math.floor(now.getTime() / 1000);

    const orderParameters = {
        amount_buy: ethers.utils.parseEther('0.1').toString(),
        amount_sell: '1',
        expiration_timestamp: timestamp,
        fees: [],
        token_buy: {
            type: 'ETH',
            data: {
                token_address: '',
                decimals: 18,
            },
        },
        token_sell: {
            type: 'ERC721',
            data: {
                token_address: collectionAddress,
                token_id: tokenID,
            },
        },
        user: await l1singer.getAddress(),
    };

    const response = await workflows.createOrderWithSigner(
        { l1singer, l2signer }, 
        orderParameters
    );
    console.log(response);
};
```

## Executing a trade order

Executing a trade order means filling an active buy order in the Immutable orderbook in other words buying an asset. Included workflow **createTradeWithSigner** is used to create a trade:

```ts
const createTrade = async (orderID) => {
    // Trade expiration in unix timestamp
    const now = new Date(Date.now());
    now.setMonth(now.getMonth() + 1);
    const timestamp = Math.floor(now.getTime() / 1000);

```

Trade parameters include order ID in numberic format, optional fees, buyer address, and trade expiration in unix timestamp:

```ts
    const tradeParameters = {
        'expiration_timestamp': timestamp,
        fees: [],
        'order_id': orderID,
        'user': await l1singer.getAddress()
    }

    const response = await workflows.createTradeWithSigner(
        { l1singer, l2signer }, 
        tradeParameters
    );
    console.log(response);
};
```
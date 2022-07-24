---
title: "Creating a buy order"
slug: "/creating-a-buy-order"
excerpt: "A guide on how to create a buy order and execute a trade using IMX Core SDK"
sidebar_position: 11
---
This guide will explain how to create a new order, cancel an order and how to execute a trade using IMX Core SDKs workflow methods.
Trades are created by finding a pair of orders which want to exchange equivalent assets. Order requests to trade can be either a listing (sell an NFT, buy 1 ETH), or an offer (sell 1 ETH, buy an NFT). For now Immutable only allows to create listings and fill listings. Lets explain the difference between "maker" and "taker" orders on Immutable listings in detail:
 - "maker" order is the initial order that sells ERC-721 (NFT) in exchange for a buy token or a payment token (Coin) which can be either ETH native token or any other ERC-20 token whitelisted on IMX.
 - "taker" order is the opposite order that "fills" the maker order and creates a trade, meaning its "sell" key represents a payment token and the "buy" key represents ERC-721 (NFT).

Maker and taker orders can be viewed on [shared Immutable X orderbook](https://docs.x.immutable.com/docs/showing-orders-from-other-marketplaces/).

## Configuration object
Before using any Core SDKs methods we need to create a [Configuration object](/docs/imx-core-sdk-ts) - setup a Provider, `L1Signer`, generate our own `StarkWallet` and `BaseSigner`. After that we can generate wallet connection which will be used to sign orders:

```ts
const wc: WalletConnection = {
    l1Signer: L1Signer,
    l2Signer: new BaseSigner(starkWallet.starkKeyPair)
}
```

## Create a new maker order
To create a new maker order we can use `createOrderWithSigner` method. First we need to generate the sell token parameters (ERC-721 token):
```ts
createERC721Token(token_address, token_id) {
    return {
        type: ERC721TokenType.ERC721,
        data: {
            tokenAddress: token_address,
            tokenId: token_id,
        }
    }
}
```
Now we have to generate buy token (Coin token). Coin token is either type ETH or ERC-20, we can find whitelisted tokens on IMX API ([Get tokens](/reference#/operations/listTokens)). The following function can be used to generate the Coin token from tokenSymbol:
```ts
createCoinToken(tokenSymbol) {
    if(tokenSymbol == "ETH") {
        return { 
        type: ETHTokenType.ETH, 
            data: {
                decimals: whitelistedTokens[tokenSymbol].decimals
            }
        }
    } else {
        return {
        type: ERC20TokenType.ERC20, 
            data: {
                symbol: tokenSymbol,
                decimals: whitelistedTokens[tokenSymbol].decimals, 
                tokenAddress: whitelistedTokens[tokenSymbol].token_address
            }
        }
    }
}
```
Now we can generate the order parameters and call the workflow function:
```ts
const orderParameters = {
    // buying 1 ETH, can use parseEther to convert it to bigNumber
    amount_buy: ethers.utils.parseEther('1').toString(),
    amount_sell: '1',
    // expiration_timestamp: timestamp, // optional UNIX timestamp
    // fees: [], // optional
    token_buy: createCoinToken("ETH")
    token_sell: createERC721Token(token_address, token_id)
    // The ETH address of the L1 Wallet
    user: await L1OrderSigner.getAddress(),
};
// call the workflow method. This method will call https://docs.x.immutable.com/reference/#/operations/createOrder
await workflows.createOrderWithSigner(wc, orderParameters).then(res => {
    console.log("creating order successful!", res)
}).catch(err => {
    console.log("creating order unsuccessful!", err)
})
```
In this example we don't add any additional fees. More info on **[Fees on Immutable](/docs/fees)**.
To modify an existing order we can call the createOrder method again with different orderParameters. If we decide to modifiy then the existing order will be canceled and a new order will be generated.

## Create a new taker order and execute a trade
To create a new taker order and execute a trade, we can use `createTradeWithSigner` method. When viewing an active `order`, then the "sell" key represents ERC721 token and "buy" key represents a Coin token. To fill it we must match the order in reverse. The Core SDK does the hard part for us and can generate the ERC-721 token, Coin token and other required parameters to fill the order for us. We just need to send `WalletConnection` and `GetSignableTradeRequest`.

```ts
const tradeRequest: GetSignableTradeRequest = {
    order_id: order.order_id,
    user: L1Signer.publicKey
}
// call the workflow method. This method will call https://docs.x.immutable.com/reference/#/operations/createTrade
await workflows.createTradeWithSigner(wc, tradeRequest).then(res => {
    console.log("Trade successful!", res)
}).catch(err => {
    console.log("Trade unsuccessful!", err)
})
```

## Cancel an order
To cancel an existing order we can use `cancelOrderWithSigner` method.

```ts
const cancelOrder = {
  order_id: orderId
}
// call the workflow method. This method will call https://docs.x.immutable.com/reference/#/operations/cancelOrder
await workflows.cancelOrderWithSigner(wc, cancelOrder).then(res => {
    console.log("Cancel successful!", res)
}).catch(err => {
    console.log("Cancel unsuccessful!", err)
})
```
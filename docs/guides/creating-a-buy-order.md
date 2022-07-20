---
title: "Creating a buy order"
slug: "/creating-a-buy-order"
excerpt: "A guide on how to create a buy order and execute a trade using IMX Core SDK"
sidebar_position: 11
---
Immutable Core SDK workflow `createTradeWithSigner` method is used for buying ERC-721 (NFT) with a payment token (coin) which can be either ETH native token or any other ERC-20 token whitelisted on IMX. To execute this method we first need to:
- Setup a provider, `L1Signer` and generate our own `starkWallet` [Configuration](/docs/imx-core-sdk-ts) 
- Use IMX orderbook APIs to display assets that are currently for sale and select the asset we want to buy. [Get Orders](/reference#/operations/listOrders)
- Generate the paramaters to fill an existing active order.

## Generate the paramaters from active order
When viewing an active `order`, then the "sell" key represents ERC721 token and "buy" key represents a Coin token. To fill it we must match the order in reverse. The Core SDK does the hard part for us and can generate the ERC-721 token, coin token and other required parameters to fill the order for us. We just need to send `WalletConnection` and `GetSignableTradeRequest`.

```javascript
const wc: WalletConnection = {
    l1Signer: L1Signer,
    l2Signer: new BaseSigner(starkWallet.starkKeyPair)
}
const tradeRequest: GetSignableTradeRequest = {
    order_id: order.order_id,
    user: L1Signer.publicKey
}
```
Now lets call the workflow method:
```javascript
await workflows.createTradeWithSigner(wc, tradeRequest).then(res => {
    console.log("Trade successful!", res)
}).catch(err => {
    console.log("Trade unsuccessful!", err)
})
```
## Notes
- Trading ERC-721 with ERC-721 is currently not possible.
- On error there won't be any transactions and no funds will be lost.
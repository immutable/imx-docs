---
title: "Creating a buy order"
slug: "/creating-a-buy-order"
excerpt: "A guide on how to create a buy order and execute a trade using IMX Core SDK"
sidebar_position: 11
---
Immutable Core SDK workflow `createTrade` method is used for buying ERC-721 (NFT) with a currency token (coin) which can be either ETH native token or any other ERC-20 token whitelisted on IMX. To execute this method we first need to:
- Build ImmutableXClient on the wallet that will purchase the asset¸ [ImmutableXClient](/docs/immutable-x-sdk) 
- Use our orderbook APIs to display assets that are currently for sale and select the asset we want to buy. [Get Orders](/reference#/operations/listOrders)
- Generate the paramaters to fill the existing active order.

```javascript title="createTrade method"
createTrade({ user, tokenSell, tokenBuy, amountSell, amountBuy, orderId, include_fees, fees, }: ImmutableMethodParams.ImmutableGetSignableTradeParams)
```

## Generate the paramaters from order
When viewing an active order, then the "sell" key represents ERC721 token and "buy" key represents a Coin token. To fill it we must match the order in reverse. The following function can be used to generate the ERC-721 token from order.sell (orderERC721):

```javascript
createERC721Token(orderERC721) {
    return {
        type: ERC721TokenType.ERC721,
        data: {
            tokenAddress: orderERC721.data.token_address,
            tokenId: orderERC721.data.token_id,
        }
    }
}
```
Coin token is either type ETH or ERC-20, we can find whitelisted tokens on IMX API ([Get tokens](/reference#/operations/listTokens)). The following function can be used to generate the Coin token from order.buy (orderCoin):
```javascript
createCoinToken(orderCoin) {
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
parseBuyTokenSymbol(orderCoin) {
    return orderCoin.type == "ETH" ? "ETH" : whitelistedTokens[orderCoin.data.token_address]?.symbol
}
```
Now we have everything ready to execute the createTrade method on the client:
```javascript
async buy(order) {
    var tokenSell = createCoinToken(order.buy)
    var tokenBuy = createERC721Token(order.sell)
    await client.createTrade({
        user: client.address,
        tokenSell: tokenSell,
        tokenBuy: tokenBuy,
        amountSell: order.buy.data.quantity,
        amountBuy: BigNumber.from(1),
        orderId: order.order_id,
        include_fees: true,
    }).then(res => {console.log("Success!", res)})
    .catch(error => {console.log("error!", error.message)})
}
```
## Notes
- Trading ERC-721 with ERC-721 is currently not possible.

---
title: 'Fees'
slug: '/fees'
excerpt: 'Marketplace trading fees'
---

To start, here are some explanations of common terms:

- **Maker marketplace:** The marketplace that lists the asset for sale.
- **Taker marketplace:** The marketplace that completes the purchase for an asset. It is possible for a marketplace to be both the maker and the taker marketplace.
- **Asset originator:** The entity who will receive royalty fees. The asset originator does not necessarily have to be the minter themselves.
- **Royalties:** A royalty fee represents a percentage of secondary sales that will go to the original asset creator.
- **Secondary sale fees:** Refers to fees collected when assets are traded on the Immutable X protocol.

## Trading fees

| Fee          | Description                                                                                                | Current Value                                                           |
| ------------ | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Protocol fee | Exchange fee on transactions, to support maker marketplace for providing liquidity. <br /><br />See this <a href="https://immutablex.medium.com/fees-on-immutable-x-79d3e7207b12">blog post</a> for more information. | 2% of an item's traded price, in the currency of the trade |
| Maker fee    | Fee to support maker marketplace for providing liquidity. Requires `>=v1.3.49` of the SDK to set maker fees. | x% <br /><br /> Set by the maker marketplace when listing an asset for sale |
| Taker fee    | Fee to support taker marketplace for providing liquidity. Requires `>=v1.3.49` of the SDK to set maker fees. | x% <br /><br /> Set by the taker marketplace when purchasing an asset       |
| Royalty fee  | Fee distributed to the asset originator when the asset is sold.                                            | x% <br /><br /> Set at the time of minting by the asset originator.         |

Here's an example breakdown of a transaction to understand how trading fees work:

Base price: 100 ETH

Sale / listing price: 100 + 0.5 + 2 + 2 = 104.5 ETH (what’s shown on the marketplace)

- Royalty: .5% = 0.5 ETH
- Marketplace: 2% = 2 ETH on Immutable X’s marketplace
  - Maker MP: 1
  - Taker MP: 1
- Protocol: 2% = 2 ETH
  - Immutable/Protocol Development: 1.6
  - IMX token reward pool: 0.4

## Distributions

Immutable X will pay out these fees immediately after each transaction is confirmed. Each party wanting to collect fees must have [registered an Immutable X account](../getting-started-guide.md#register-a-user-account) to allow the settlement of gas-less fees.

## Royalties

Royalty percentages for one or more recipients can be set at the time an asset is minted. Royalties will be distributed to [the recipients' Immutable X wallet](../getting-started-guide.md#wallet).

At this stage, royalties for assets minted on Immutable X are only enforced on layer 2. If withdrawn assets are re-deposited onto Immutable X at a later date, royalties will continue to work alongside gas-free trading. Read more about [minting with royalties](./minting-with-royalties.md).

## Maker fees

Marketplaces can create orders through [Link](../link-sdk/index.md) using `Link.sell` which supports specifying an arbitrary list of fees that are added to the order at the time of creation.
```javascript
const makerFees = [{
    percentage: 0.5 // 0.5%
    recipient: ‘0x987…’ // Beneficiary eth address
}];

link.sell({
    tokenId: ‘123’,
    tokenAddress: ‘0x2ca…’,
    fees: makerFees,
});
```
Maker fee example flow:

1. A user browsing their inventory on marketplace A clicks to list their NFT for sale.
2. Marketplace A makes a call to `Link.sell(...)` with a 1% maker fee.
3. Link pops up and the user enters sale amount of 1 ETH and confirms listing.
4. Marketplace page updates to show listed asset for 1.01ETH (1ETH base price + 1% maker fee).

Maker fees can alternatively be added to SDK’s `createOrder()` directly although this is discouraged since it’s best practice that all order creation is done through Link.
```javascript
sdkClient.createOrder({
    …,
    fees: makerFees,
});
```
Once an order has been created with maker fees the fees are added to orders in the same way as royalties. Orders show a fee breakdown with royalties and maker fees, and order amounts are inclusive of royalty and maker fee amounts.

Example return value of `getOrder()` where the order has a 1% maker fee and 10% royalty fee. Maker/taker fees show up in the order with type “ecosystem”. The base price of this order was 10000.
```javascript
{
    order_id: 9,
    buy: {
        data: {
            quantity: “11100”
        },
        …
    },
    fees: [
        {
            type: “ecosystem”,
            address: “0x987…”
            amount: “100”
            …
        },
        {
            type: “royalty”,
            address: “0x456…”
            amount: “1000”
            …
        }
    ],
    …
}
```
Maker fee validation is as follows:

- You can’t specify more than 3 recipients.
- You can’t specify the same recipient more than once.
- The combined fee percentage can’t exceed 100%.
- Individual percentage fees can’t be <= 0%.

## Taker fees

Marketplaces can use Link.buy to fill open orders. Link.buy supports specifying an arbitrary list of fees that are added to the order before purchase.
```javascript
const takerFees = [{
    percentage: 1 // 1%
    recipient: ‘0x123…’ // Beneficiary eth address
}];

link.buy({
    orderIds: [‘1’],
    fees: takerFees,
});
```
Taker fee example flow:

1. A user browsing orders on marketplace B clicks to fill an order at a price of 1ETH.
2. Marketplace B makes a call to `Link.buy(...)` with a 1% taker fee.
3. Link window pops up and the user sees a price of 1.01 ETH (1 ETH base price + 1% taker fee) and confirms purchase.

One of the issues of this flow is that there is a discrepancy of price between the orders listed on marketplace B and the price that Link shows in the popup due to the addition of the 1% taker fee. To resolve this issue the SDK’s `getOrders()` allows specifying a list of auxiliary fees that are included in order amounts and their fee breakdowns so there is no discrepancy between prices in the marketplace and Link.

For example:
```javascript
sdkClient.getOrders()
```
Response:
```javascript
{
    result: [
        {
            order_id: 1,
            buy: {
                data: {
                    quantity: “10000”,
                },
                …
            },
            …
        },
    ],
}
```
Or:
```javascript
sdkClient.getOrders({
    auxiliaryFees: takerFees,
})
```
Response:
```javascript
{
    result: [
        {
            order_id: 1,
            buy: {
                data: {
                    quantity: “10100”
                },
                …
            },
            fees: [
                {
                    type: “ecosystem”,
                    address: “0x123…”
                    amount: “100”
                    …
                }
            ]
            …
        },
    ],
}
```
Auxiliary fees appear in the return value with type “ecosystem” since it’s assumed this feature will be used by marketplaces to pre-calculate order amounts inclusive of their taker fees.

Taker fee validation works as follows:

- You cannot specify more than 3 recipients.
- You cannot specify the same recipient more than once.
- The combined fee percentage cannot exceed 100%.
- Individual percentage fees can’t be <= 0%.

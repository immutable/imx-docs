---
title: 'Link.cryptoToFiat'
slug: '/link-crypto-to-fiat'
sidebar_position: 12
---

The crypto to fiat functionality is available in SDK v1.21.3+ and is a collaboration between Immutable X and Moonpay.

The exchange process allows users to sell crypto held on L2 on the Immutable X platform directly for fiat funds. These funds will be deposited directly into the users nominated bank account. There is no gas fee for this exchange, only a [Moonpay transaction fee](https://support.moonpay.com/hc/en-gb/articles/360011930117-What-fees-do-you-charge-).

The withdraw happens directly on L2 via the transfer to Moonpay accounts.

:::info Minimal withdraw amount
There's a minimal withdraw amount of 0.015 ETH.
:::

The current available cryptocurrencies are:
- ETH


:::caution Supported countries

The crypto to fiat off-ramp only available in EU, UK, and select US states. 

For more information please refer to [Moonpay’s help desk](https://support.moonpay.com/hc/en-gb/articles/4406268234641-What-countries-are-supported-to-sell-crypto-with-MoonPay-)
:::

:::danger Exchange requires authenticated user
`Link.cryptoToFiat({})` should only be called when user is authenticated and logged in, otherwise it will require user to reconnect
:::

To initialize the offramp process with an option to choose any available currency and amount, marketplace needs to call the offramp function:

```typescript
await link.cryptoToFiat({})
```

This displays the Link UI with a screen when a user need to choose currency and anter amount:

![Offramp without parameters](../../../static/img/link-sdk-cryptotofiat/offramp-without-params.png 'Offramp without parameters')

To initialize the offramp process for a specific currency:
```typescript
await link.cryptoToFiat({ cryptoCurrencies: ['ETH'] })
```

This displays the Link UI with a screen when a user can only enter amount with already populated currency:

![Offramp with specific currency](../../../static/img/link-sdk-cryptotofiat/offramp-with-currency.png 'Offramp with specific currency')

To initialize the offramp process with defined currency and amount:

```typescript
await link.cryptoToFiat({ cryptoCurrencies: ['ETH'], amount: '0.01' })
```
This displays the Link UI with loaded Moonpay widget:

![Offramp with specific currency and amount](../../../static/img/link-sdk-cryptotofiat/offramp-with-currency-and-amount.png 'Offramp with specific currency and amount')

## Errors

See error responses [here](./link-errors.md#fiat-to-crypto).

---
title: 'Link.setup'
slug: '/link-setup'
sidebar_position: 1
---

:::note Link reference tool
Check out our **[Link reference tool](https://tools.immutable.com/link-reference/)** to understand how `Link` methods work without having to write any code.
:::

A user's web3 wallet (e.g. Metamask) is used to create, connect, and sign transactions on Immutable X. Before a user can do this, they need to be registered on Immutable and signed into their wallet. Both these steps can be done with a single call to `Link.setup`. If a user is already registered, this function can also be called to sign them in.

## Supported wallets

Wallets supported in Link:
- Metamask
- Magic Link
- Gamestop Wallet

## Parameters

```typescript
// Use the default Link.setup params (providerPreference is "metamask")
link.setup({})

// Specify the provider preference
link.setup({providerPreference: ProviderPreference})

enum ProviderPreference {
    GAMESTOP = 'gamestop',
    METAMASK = 'metamask',
    MAGIC_LINK = 'magic_link',
    NONE = 'none',
}

```

:::info Gamestop Wallet
**Gamestop Wallet** is available in SDK v1.22.0
:::

## Usage

```typescript
// Sample link.setup call using the default provider:
const setupResponsePayload: SetupResultsCodec = await link.setup({})

// Using none as option (list all available options including Magic):
const setupResponsePayload: SetupResultsCodec = await link.setup({ providerPreference: "none" })

// Specifying a provider:
const setupResponsePayload: SetupResultsCodec = await link.setup({ providerPreference: "magic_link" })
```

`Link.setup` returns the user's signed-in address and Stark public key if the setup or sign in was completed successfully.

```typescript
const SetupResultsCodec = t.intersection([
  t.type({
    address: EthAddress,
    starkPublicKey: HexadecimalString,
    ethNetwork: t.string,
    providerPreference: t.string,
  }),
  t.partial({
    email: t.string,
  }),
]);

// Sample response block
// ie. await link.setup({})
result = {
    "address": "0x...",
    "starkPublicKey": "0x...",
    "providerPreference": null,
    "ethNetwork": "ropsten"
}

// `email` field is returned in the response if the magic_link provider is requested
// ie. await link.setup({ providerPreference: "magic_link" })
{
    "address": "0x...",
    "starkPublicKey": "0x...",
    "providerPreference": "magic_link",
    "ethNetwork": "ropsten",
    "email": "name@domain.com"
}
```

### List all available options
```typescript
// Using none as option (list all available options including Magic):
const setupResponsePayload: SetupResultsCodec = await link.setup({ providerPreference: "none" })
```
![none](../../../static/img/link-setup/none.png 'none')

# UI based on different providers

### Metamask (default)
```typescript
// Sample link.setup call using the default provider:
const setupResponsePayload: SetupResultsCodec = await link.setup({})
```
![default/metamask](../../../static/img/link-setup/default-metamask.png 'default/metamask')

### Magic Link
```typescript
// Specifying Magic as provider:
const setupResponsePayload: SetupResultsCodec = await link.setup({ providerPreference: "magic_link" })
```
![magic_link](../../../static/img/link-setup/magic_link.png 'magic_link')


### Gamestop Wallet
```typescript
// Specifying Magic as provider:
const setupResponsePayload: SetupResultsCodec = await link.setup({ providerPreference: "gamestop" })
```

:::caution
Gamestop Wallet is available only on mainnet
:::

![Gamestop Wallet](../../../static/img/link-setup/gamestop.png 'Gamestop Wallet')

## Multiple browser wallets detected

:::caution
Immutable supports different wallets to be used to connect to our platform. However, the wallet has the option to be set as the default wallet extension and, if this option is enabled, you might find issues when trying to connect using your another wallet.

For more information see [How to manage multiple wallet extensions for Immutable](https://support.immutable.com/hc/en-us/articles/5160531224079-Managing-multiple-wallet-extensions-for-Immutable)
:::


![multiple-wallets](../../../static/img/link-setup/multiple-wallets.png 'multiple-wallets')

For more information about user wallet registration, see [User Registration](../user-registration.md) and [Account Management](../integrate-your-application/account-management.md).

## Errors

See error responses [here](./link-errors.md#general-errors).
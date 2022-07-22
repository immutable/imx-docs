---
title: 'Wallet SDK Android'
slug: '/imx-wallet-sdk-android'
---

# Immutable X Wallet SDK Android

The Immutable X Wallet SDK Android lets you easily connect user's wallets to your mobile app and perform transactions.

## Supported Wallet Providers

* MetaMask and Rainbow via [WalletConnect](https://walletconnect.com/)

## Requirements
* Android version 8.1 (API 27) and above

## Installation
1. Add dependency to your app `build.gradle` file:
```groovy
dependencies {
    implementation 'com.immutable.wallet:imx-wallet-sdk-android:$version'
}
```
2. In your `Application` class:
```kotlin
class ExampleApplication : Application() {
  override fun onCreate() {
    super.onCreate()
    ImmutableWallet.init(this)
  }
}
```

## Handle callbacks
All of the `ImmutableWallet` methods (connect, disconnect etc) are synchronous and changes to the status are communicated via the callback.

Set callback
```kotlin
ImmutableWallet.setCallback(object: ImmutableWalletCallback {
    override fun onStatus(status: ImmutableWalletStatus?, throwable: Throwable?) {
        when (status) {
            ImmutableWalletStatus.Connected -> { showProfileScreen() }
            ImmutableWalletStatus.Disconnected -> { showLoginScreen() }
            ImmutableWalletStatus.Connecting -> { showProgressScreen() }
            is ImmutableWalletStatus.PendingConnection -> { showConnectPopup(status.intent) }
            is ImmutableWalletStatus.PendingSignature -> { showSignaturePopup(status.intent) }
        }
    }
})
```

Remove callback
```kotlin
ImmutableWallet.removeCallback()
```

## Connect wallet

### Connect via WalletConnect
```kotlin
ImmutableWallet.connect(
    Provider.WalletConnect(
        appUrl = "https://www.marketplace.com/",
        appName = "My NFT Marketplace",
        appDescription = "This is a marketplace where all my favorite NFTs can be traded.",
        appIcons = listOf("http://www.marketplace.com/appicon.svg")
    )
)
```
If you want to use your own bridge server instead of the default provide it via `bridgeServerUrl` when connecting. For more info on how WalletConnect and the bridge works [see here](https://docs.walletconnect.com/tech-spec).

### Restart existing session
The users previous wallet sessions will be automatically restored once your first activity is launched however it can also be manually triggered.
```kotlin
ImmutableWallet.restartSession()
```

## Disconnect wallet
```kotlin
ImmutableWallet.disconnect()
```

## Usage with the Core SDK
This Wallet SDK is designed to be used in tandem with the [Immutable Core SDK for Kotlin/JVM](https://github.com/immutable/imx-core-sdk-kotlin-jvm).

Once you connect a user's wallet with the Wallet SDK you can provide the `Signer` and `StarkSigner` instances to Core SDK workflows.
```kotlin
val signer = ImmutableWallet.signer
val starkSigner = ImmutableWallet.starkSigner
if (signer != null && starkSigner != null) {
    ImmutableXCore.buy(orderId, emptyList(), signer, starkSigner).whenComplete { ... }
} else {
    // handle not connected
}
```
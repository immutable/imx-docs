---
title: "Onboarding"
slug: "/onboarding"
---
Below is a high-level overview of the steps required to onboard with Immutable X.

# Before you start
The Immutable X test environment uses Ropsten. If you haven’t already, get [prepared to test](./getting-started-guide.md#prepare-to-test) with an Ethereum wallet and some test ETH. You also need to [register as a user](getting-started-guide.md#register-a-user-account) before you can register a project.
:::info Common Terms
The following explains a couple of Immutable X terms used throughout our guides:

When you register a **collection** with Immutable X it creates a **project**. A project is an administrative-level entity that is associated with a [crypto-wallet address](../getting-started-guide.md#wallet), also referred to as an **owner address**. One project can have many associated **collections**.
:::
## 1. Deploy a smart contract
All smart contracts on L2 currently require a corresponding contract on L1 Ethereum, to ensure their tokens can be deposited and withdrawn correctly.

To test your assets, minting, and trading flows, you need to deploy an ERC-721 contract on the Ropsten test network, then register it with Immutable X. Similarly, to mint on mainnet Ethereum, you need to deploy an ERC-721 contract on mainnet, then follow the same steps.

Example smart contracts are available in our [imx-contracts](https://github.com/immutable/imx-contracts) repo. 

To ensure that you can withdraw assets from L2 to L1 Ethereum, follow the testing guidelines in [asset minting](../asset-management/asset-minting.md).

## 2. Register a project
In order to create a collection of NFTs, you must first register a project as the creator of the collection.

A project is an administrative level entity that is associated with an owner address, i.e. the address of the Ethereum wallet used to [register a user account](../getting-started-guide.md#register-a-user-account). Only the project owner will be authorized to perform administrative tasks such as creating and updating collections and metadata schema.

- One user account (defined by a wallet address) can own many projects. 
- One project can have multiple collections.
- All projects are limited to **five** collections and **50,000** mint requests in each four-week rolling period.

View the guide: [Project registration](./project-registration.md))

## 3. Register a collection
A collection refers to a series of NFTs, minted under a project, and corresponds to a specific deployed smart contract.

All minted assets belong to a collection, and in order to mint assets on L2 you must first register your collection (smart contract) with Immutable X.

- Each collection belongs to a project.
- Each collection may contain many similar or different NFTs.

View the guide: [Collection registration](./collection-registration.mdx) 

## 4. Register the metadata schema
A collection's metadata schema describes the properties of the NFTs it can mint, as well as the potential values and types of those properties.

For example, "image background may be a random hue value between 0-255" vs "a specific hue value from this list"; or "marketplace traders can filter this collection by this property" vs "they cannot".

- Each collection has a metadata schema.
- Each NFT is defined by the properties in the metadata schema.

View the guide: [Metadata schema registration](./metadata-schema-registration.mdx) 

**[Learn more about asset metadata](../asset-management/asset-metadata.mdx)**

:::caution Metadata refreshing requires support
While you can register your own collections and metadata on Ropsten, you **cannot** execute a metadata refresh yourself. 

To refresh metadata changes, you need to [contact support](https://support.immutable.com) and identify the tokens that need to be re-crawled, and the updates that have been made to them.

Requests may take up to 2 business days (AEST).
:::
## 5. Mint assets
Once your contract has been registered, you can mint gas-free on Immutable X. 

See the following guides to learn more:
- [Minting on Immutable X](../minting-on-immutable-x.md)
- [Asset minting](../asset-management/asset-minting.md) 

## 6. Integrate your application
To start building an application on Immutable X, see our [integrate your application](../integrate-your-application/index.md) guides.

---
title: "NFT Metadata"
slug: "/nft-metadata"
excerpt: "Store as little data on-chain as possible."
sidebar_position: 9
---

# NFT Metadata

## Why Is Metadata Important?

Metadata is data that provides information about other data. All the information about your NFT is stored in it's metadata.

There are two types of metadata:

1. Immutable / On-Chain 🔗
  * Permanent.
  * Used to uniquely identify the NFT.
  * Should be used as little as possible.
  * Immutable metadata is defined as a blueprint (string) at mint time (when called through the SDK/API).

2. Mutable / Off-Chain ☁️
  * Used because storing data on-chain is costly.
  * Should be used as much as possible.
  * Best for artwork and other media.
  * Should be accessible through Hypertext Transfer Protocol (HTTP).


## On-Chain 🔗 vs Off-Chain ☁️

*On-Chain* metadata refers to any information stored within the smart contract itself, <u>on the blockchain</u>.

If the metadata is *Off-Chain*, it means that the information is stored somewhere else that is <u>*not* on the blockchain</u> and whoever controls the storage location has the ability to change it at anytime.

The table below gives a short summary of the differences:

<table>
  <thead>
  <tr>
    <th>
      Facet 💎
    </th>
    <th>
      On-Chain 🔗
    </th>
    <th>
      Off-Chain ☁️
    </th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      Stored on the blockchain?
    </td>
    <td>
      Yes ✅
    </td>
    <td>
      No ❌
    </td>
  </tr>
  <tr>
    <td>
      Mutable?
    </td>
    <td>
      No ❌ <br/>
      This is where you should store permanent properties.
    </td>
    <td>
      Yes ✅ <br/>
      Fully controlled by the application and can be changed at anytime.
    </td>
  </tr>
  <tr>
    <td>
      Cost?
    </td>
    <td>
      High 💰
    </td>
    <td>
      Low 🪙
    </td>
  </tr>
  <tr>
    <td>
      Mechanism?
    </td>
    <td>
      Set "blueprint" when minting.
    </td>
    <td>
      Set "metadata_api_url" when creating a collection, and create a metadata schema.
    </td>
  </tr>
  </tbody>
</table>

## Examples

These examples follow the [NFT Minting Tutorial](./zero-to-hero-nft-minting).

### On-Chain 🔗

When minting on Immutable X, you will give us the token ID, which is the L1 token ID representing the token in your smart contract. 

You also have to provide a [blueprint](./minting-on-immutable-x.md#metadata-blueprint) for each token. 

The blueprint represents the immutable, on-chain metadata of the NFT that will be passed (along with the token ID) to your mintFor function.

If you take a look at the [bulk mint example](https://github.com/immutable/imx-examples/blob/main/src/bulk-mint.ts#L77), you can see that the 'blueprint' key is set to 'onchain-metadata' and that string will be saved on the blockchain when this NFT is minted.

```
  const tokens = Array.from({ length: number }, (_, i) => i).map(i => ({
    id: (tokenId + i).toString(),
    blueprint: 'onchain-metadata',
  }));

  const payload: ImmutableMethodParams.ImmutableOffchainMintV2ParamsTS = [
    {
      contractAddress: env.tokenAddress, // NOTE: a mintable token contract is not the same as regular erc token contract
      users: [
        {
          etherKey: wallet.toLowerCase(),
          tokens,
        },
      ],
    },
  ];

  const result = await minter.mintV2(payload);
```

### Off-Chain ☁️

A large majority of metadata is stored off-chain. Projects are expected to self-host their media assets, including both the endpoints for the metadata of the assets, as well as other media defined by the metadata.

When registering your collection's contract with Immutable X, you need to provide a metadata API endpoint for us to retrieve metadata properties for each of your NFTs. 

If you follow along with the [NFT Minting Tutorial](./zero-to-hero-nft-minting), you'll notice that on step 5 you use pinata.cloud to store your NFT metadata and generate a metadata API URL that you  use when you register a collection on step 13.

The JSON stored on pinata.cloud looks like this:
```
{
  "name": "1st NFT",
  "description": "This is your 1st nft",
  "image_url":"<replace this with your own IPFS picture link>",
  "attack": 123,
  "collectable": true,
  "class": "EnumValue1"   
}
```


After creating a collection, you need to add a metadata schema to it.
```
{
  name :  'name' ,
  type :  MetadataTypes.Text
    
},

{
  name :  'description' ,
  type :  MetadataTypes.Text  
},

{
  name :  'image_url' ,
  type :  MetadataTypes.Text  
},

{
  name :  'attack' ,
  type :  MetadataTypes.Discrete,
  filterable : true
},

{
  name :  'collectable' ,
  type :  MetadataTypes.Boolean,
  filterable : true
},

{
  name : 'class' ,
  type :  MetadataTypes.Enum ,
  filterable : true
}
```

Here's what the command `npm run onboarding:add-metadata-schema` does under the hood.
```
  const params: AddMetadataSchemaToCollectionParams = {
    metadata: [
      {
        name: 'EXAMPLE_BOOLEAN',
        type: MetadataTypes.Boolean,
        filterable: true,
      },
      // ..add rest of schema here
    ],
  };

  const collection = await user.addMetadataSchemaToCollection(
    collectionContractAddress,
    params,
  );
```

## Read More
[Minting on Immutable X](./minting-on-immutable-x)

[Asset Minting](./asset-minting)

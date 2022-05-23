import clsx from 'clsx'
import React from 'react'
import Layout from '@theme/Layout'

import styles from './index.module.css'
import Title from '../components/Title'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Article from '../components/Article'
import IconButton from '../components/IconButton'
import GlobalHeader from '../components/GlobalHeader'
import ArticleStack from '../components/ArticleStack'
import CommunityCard from '../components/CommunityCard'
import StatisticsCard from '../components/StatisticsCard'

import SdkDarkIcon from '@site/static/icons/SdkDark'
import SdkLightIcon from '@site/static/icons/SdkLight'
import SaleDarkIcon from '@site/static/icons/SaleDark'
import SaleLightIcon from '@site/static/icons/SaleLight'
import GoSdkDarkIcon from '@site/static/icons/GoSdkDark'
import DappsDarkIcon from '@site/static/icons/DappsDark'
import GoSdkLightIcon from '@site/static/icons/GoSdkLight'
import DappsLightIcon from '@site/static/icons/DappsLight'
import RightArrowIcon from '@site/static/icons/RightArrow'
import ContractDarkIcon from '@site/static/icons/ContractDark'
import ExplorerDarkIcon from '@site/static/icons/ExplorerDark'
import NftDarkIcon from '@site/static/icons/pictograms/NftDark'
import ContractLightIcon from '@site/static/icons/ContractLight'
import ExplorerLightIcon from '@site/static/icons/ExplorerLight'
import NftLightIcon from '@site/static/icons/pictograms/NftLight'
import UtilityDarkIcon from '@site/static/icons/pictograms/UtilityDark'
import UtilityLightIcon from '@site/static/icons/pictograms/UtilityLight'
import BugBountyDarkIcon from '@site/static/icons/pictograms/BugBountyDark'
import BugBountyLightIcon from '@site/static/icons/pictograms/BugBountyLight'
import DevelopersDarkIcon from '@site/static/icons/pictograms/DevelopersDark'
import DevelopersLightIcon from '@site/static/icons/pictograms/DevelopersLight'
import MarketplaceDarkIcon from '@site/static/icons/pictograms/MarketplaceDark'
import MarketplaceLightIcon from '@site/static/icons/pictograms/MarketplaceLight'
import ContributorsDarkIcon from '@site/static/icons/pictograms/ContributorsDark'
import ContributorsLightIcon from '@site/static/icons/pictograms/ContributorsLight'

const Homepage = () => {
  const articleSectionData = [
    {
      LightIcon: NftLightIcon,
      DarkIcon: NftDarkIcon,
      title: (
        <>
          Launch an
          <br className={styles.hideForExtraSmall} /> NFT project
        </>
      ),
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      cta: ['IP Collectible projects', 'Web3 NFT games'],
    },
    {
      LightIcon: MarketplaceLightIcon,
      DarkIcon: MarketplaceDarkIcon,
      title: (
        <>
          Build a
          <br className={styles.hideForExtraSmall} /> Marketplace
        </>
      ),
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      cta: ['Create a new marketplace', 'Integrating IMX'],
    },
    {
      LightIcon: UtilityLightIcon,
      DarkIcon: UtilityDarkIcon,
      title: (
        <>
          Build
          <br className={styles.hideForExtraSmall} /> WEB3 utility
        </>
      ),
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      cta: ['IP Collectible projects', 'Web3 NFT games'],
    },
  ]

  const articleStackSectionData = [
    {
      LightIcon: SdkLightIcon,
      DarkIcon: SdkDarkIcon,
      title: 'IMX SDKs',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      LightIcon: SaleLightIcon,
      DarkIcon: SaleDarkIcon,
      title: 'Primary sale',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Open Docs',
    },
    {
      LightIcon: ContractLightIcon,
      DarkIcon: ContractDarkIcon,
      title: 'Contracts',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Open Docs',
    },
    {
      LightIcon: GoSdkLightIcon,
      DarkIcon: GoSdkDarkIcon,
      title: 'IMX Go SDK',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Open Docs',
    },
    {
      LightIcon: DappsLightIcon,
      DarkIcon: DappsDarkIcon,
      title: 'DAPPs',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Open Docs',
    },
    {
      LightIcon: ExplorerLightIcon,
      DarkIcon: ExplorerDarkIcon,
      title: 'Explorer',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Open Docs',
    },
  ]

  const articleSection2Data = [
    {
      LightIcon: DevelopersLightIcon,
      DarkIcon: DevelopersDarkIcon,
      title: 'Developer grants',
      subtitle: (
        <>
          Early BUIDL grants, marketing support,
          <br /> technical guidance and much more.
        </>
      ),
      cta: ['Know more'],
    },
    {
      LightIcon: BugBountyLightIcon,
      DarkIcon: BugBountyDarkIcon,
      title: 'Bug bounty',
      subtitle: (
        <>
          Find out our vulnerabilities
          <br /> and win a bounty.
        </>
      ),
      cta: ['Know more'],
    },
    {
      LightIcon: ContributorsLightIcon,
      DarkIcon: ContributorsDarkIcon,
      title: 'Help contribute',
      subtitle:
        'Help us close the gaps in knowledge by contributing to ImmutableX developer documentaion.',
      cta: ['Contributer guidelines'],
    },
  ]

  const statisticsSectionData = [
    {
      image: '/static/img/vyWorlds.png',
      statisticsNumber: '18m',
      statisticsLabel: 'Gas saved',
      subtitle: 'VY Worlds',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices fringilla pharetra nullam placerat tellus.',
    },
    {
      image: '/static/img/illuvium.png',
      statisticsNumber: '20m',
      statisticsLabel: 'NFTs TRADED',
      subtitle: 'Illuvium',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices fringilla pharetra nullam placerat tellus.',
    },
  ]

  const communitySectionData = [
    {
      title: 'ImmutableX forum',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'View channel',
      isLongCard: true,
    },
    {
      title: 'Discord',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Join',
      isLongCard: false,
    },
    {
      title: 'Twitter',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Follow',
      isLongCard: false,
    },
    {
      title: 'Contribute & earn',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Contribute',
      isLongCard: true,
    },
  ]

  return (
    <>
      <GlobalHeader />
      <Layout>
        <div className={styles.root}>
          <div className={styles.heroImage} />
          <Title
            title={
              <div className={clsx('grad', styles.title)}>
                Build your
                <br className={styles.displayForExtraSmall} /> NFT project
              </div>
            }
            subtitle={
              <>
                Immutable X. The one stop shop to create
                <br /> world-class NFTs projects
              </>
            }
            className={styles.heroTitle}
          />
          <div className={styles.heroButtonSection}>
            <Button onClick={() => console.log('Explore Docs Page')}>
              Explore <span className={styles.displayFromExtraSmall}>Developer</span> Docs
            </Button>
            <IconButton
              onClick={() => console.log('Explore Docs Page')}
              Icon={<RightArrowIcon />}
              className={styles.displayFromExtraSmall}
            />
          </div>
          <div className={styles.articlesSection}>
            {articleSectionData.map((article, index) => (
              <Article {...article} key={index} />
            ))}
          </div>

          <Title
            title="IMX tools"
            subtitle={
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                <br /> ultrices fringilla pharetra nullam placerat tellus."
              </>
            }
          />
          <div className={styles.articleStackSection}>
            {articleStackSectionData.map((article, index) => (
              <ArticleStack {...article} key={index} />
            ))}
          </div>

          <div
            className={clsx(
              styles.articlesSection,
              styles.displayFromSmall,
              styles.articlesSection2
            )}
          >
            {articleSection2Data.map((article, index) => (
              <Article {...article} key={index} />
            ))}
          </div>

          <Title
            title="Built with IMX"
            subtitle={
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                <br /> ultrices fringilla pharetra nullam placerat tellus."
              </>
            }
          />
          <div className={styles.statisticsSection}>
            {statisticsSectionData.map((statisticsInfo, index) => (
              <StatisticsCard {...statisticsInfo} key={index} />
            ))}
          </div>

          <Title
            title="Join the community"
            subtitle={
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                <br /> ultrices fringilla pharetra nullam placerat tellus."
              </>
            }
          />
          <div className={styles.communityCardSection}>
            {communitySectionData.map((communityInfo, index) => (
              <CommunityCard {...communityInfo} key={index} />
            ))}
          </div>

          <Footer />
        </div>
      </Layout>
    </>
  )
}

export default Homepage

import clsx from 'clsx'
import React from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import styles from './index.module.css'
import Title from '../components/Title'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Article from '../components/Article'
import IconButton from '../components/IconButton'
import GlobalHeader from '../components/GlobalHeader'
import ArticleStack from '../components/ArticleStack'
import StatisticsCard from '../components/StatisticsCard'
import CommunityCard from '../components/CommunityCard'

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
import ContractLightIcon from '@site/static/icons/ContractLight'
import ExplorerLightIcon from '@site/static/icons/ExplorerLight'

const Homepage = () => {
  const articleSectionData = [
    {
      image: 'nft',
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
      image: 'marketplace',
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
      image: 'utility',
      title: (
        <>
          Build
          <br className={styles.hideForExtraSmall} /> WEB3 utility
        </>
      ),
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      cta: ['See solutions'],
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
    },
    {
      LightIcon: ContractLightIcon,
      DarkIcon: ContractDarkIcon,
      title: 'Contracts',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      LightIcon: GoSdkLightIcon,
      DarkIcon: GoSdkDarkIcon,
      title: 'IMX Go SDK',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      LightIcon: DappsLightIcon,
      DarkIcon: DappsDarkIcon,
      title: 'DAPPs',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      LightIcon: ExplorerLightIcon,
      DarkIcon: ExplorerDarkIcon,
      title: 'Explorer',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ]

  const articleSection2Data = [
    {
      image: 'developers',
      title: 'Developer grants',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      cta: ['Learn more'],
    },
    {
      image: 'bug-bounty',
      title: 'Bug bounty',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      cta: ['Learn more'],
    },
    {
      image: 'contributors',
      title: 'Help contribute',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      cta: ['Contributer guidelines'],
    },
  ]

  const statisticsSectionData = [
    {
      image: '/static/img/vyWorlds.jpg',
      statisticsNumber: '18m',
      statisticsLabel: 'Gas saved',
      subtitle: 'VY Worlds',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices fringilla pharetra nullam placerat tellus.',
    },
    {
      image: '/static/img/illuvium.jpg',
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
      title: 'Contribute & earn',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Contribute',
      isLongCard: false,
    },
    {
      title: 'Twitter',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Follow',
      isLongCard: false,
    },
    {
      title: 'Discord',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Join',
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
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices fringilla pharetra nullam placerat tellus."
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
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices fringilla pharetra nullam placerat tellus."
          />
          <div className={styles.statisticsSection}>
            {statisticsSectionData.map((statisticsInfo, index) => (
              <StatisticsCard {...statisticsInfo} key={index} />
            ))}
          </div>

          <Title
            title="Join the community"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices fringilla pharetra nullam placerat tellus."
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

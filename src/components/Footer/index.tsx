import DiscordDarkIcon from '@site/static/icons/DiscordDark'
import FooterODarkIcon from '@site/static/icons/FooterODark'
import FooterSDarkIcon from '@site/static/icons/FooterSDark'
import FooterXDarkIcon from '@site/static/icons/FooterXDark'
import RedditDarkIcon from '@site/static/icons/RedditDark'
import TelegramDarkIcon from '@site/static/icons/TelegramDark'
import TwitterDarkIcon from '@site/static/icons/TwitterDark'
import clsx from 'clsx'
import React from 'react'
import styles from './styles.module.css'
import { useColorMode } from '@docusaurus/theme-common'
import FooterOLightIcon from '@site/static/icons/FooterOLight'
import FooterSLightIcon from '@site/static/icons/FooterSLight'
import FooterXLightIcon from '@site/static/icons/FooterXLight'
import DiscordLightIcon from '@site/static/icons/DiscordLight'
import RedditLightIcon from '@site/static/icons/RedditLight'
import TelegramLightIcon from '@site/static/icons/TelegramLight'
import TwitterLightIcon from '@site/static/icons/TwitterLight'

const Footer = () => {
  const theme = useColorMode()

  return (
    <div className={styles.footerContainer}>
      <div>
        <p className={styles.footerText}>Made for people who love the world of NFTs</p>
        <p className={clsx(styles.footerText, styles.displayFromSmall)}>
          IMX Whitepaper • IMX Tokenomics • API •  SDK •  Immutascan.io • Careers at
          Immutable
        </p>
      </div>
      <div className={styles.iconsContainer}>
        <div className={styles.center}>
          {theme.colorMode === 'dark' ? (
            <>
              <FooterODarkIcon className={styles.footerIcon} />
              <FooterXDarkIcon className={styles.footerIcon} />
              <FooterSDarkIcon className={styles.footerIcon} />
            </>
          ) : (
            <>
              <FooterOLightIcon className={styles.footerIcon} />
              <FooterXLightIcon className={styles.footerIcon} />
              <FooterSLightIcon className={styles.footerIcon} />
            </>
          )}
        </div>
        <div className={styles.center}>
          {theme.colorMode === 'dark' ? (
            <>
              <DiscordDarkIcon className={styles.footerIcon} />
              <TwitterDarkIcon className={styles.footerIcon} />
              <TelegramDarkIcon className={styles.footerIcon} />
              <RedditDarkIcon className={styles.footerIcon} />
            </>
          ) : (
            <>
              <DiscordLightIcon className={styles.footerIcon} />
              <TwitterLightIcon className={styles.footerIcon} />
              <TelegramLightIcon className={styles.footerIcon} />
              <RedditLightIcon className={styles.footerIcon} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Footer

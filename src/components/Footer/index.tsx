import FooterODarkIcon from '@site/static/icons/FooterODark'
import FooterSDarkIcon from '@site/static/icons/FooterSDark'
import FooterXDarkIcon from '@site/static/icons/FooterXDark'
import clsx from 'clsx'
import React from 'react'
import styles from './styles.module.css'
import { useColorMode } from '@docusaurus/theme-common'
import FooterOLightIcon from '@site/static/icons/FooterOLight'
import FooterSLightIcon from '@site/static/icons/FooterSLight'
import FooterXLightIcon from '@site/static/icons/FooterXLight'

const Footer = () => {
  const theme = useColorMode()

  return (
    <div className={styles.footerContainer}>
      <div>
        <p className={styles.footerText}>Made for people who love the world of NFTs</p>
        <p className={clsx(styles.footerText, styles.displayFromSmall)}>
          <a
            href="https://support.immutable.com/hc/en-us/articles/4405227590799-Immutable-X-Whitepaper"
            className="hyperlink"
          >
            IMX Whitepaper
          </a>{' '}
          •{' '}
          <a
            href="https://support.immutable.com/hc/en-us/articles/4404531555855-Immutable-X-Token"
            className="hyperlink"
          >
            IMX Tokenomics
          </a>{' '}
          •{' '}
          <a href="/" className="hyperlink">
            API
          </a>{' '}
          •{' '}
          <a href="/" className="hyperlink">
            SDK
          </a>{' '}
          •{' '}
          <a href="https://immutascan.io/" className="hyperlink">
            Immutascan.io
          </a>{' '}
          •{' '}
          <a href="https://www.immutable.com/careers" className="hyperlink">
            Careers at Immutable
          </a>
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
          <button className={clsx(styles.socialIcons, styles.discord)} />
          <button className={clsx(styles.socialIcons, styles.twitter)} />
          <button className={clsx(styles.socialIcons, styles.telegram)} />
          <button className={clsx(styles.socialIcons, styles.reddit)} />
        </div>
      </div>
    </div>
  )
}

export default Footer

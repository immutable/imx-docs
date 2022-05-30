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
import { useHistory } from '@docusaurus/router'

const Footer = () => {
  const theme = useColorMode()
  let history = useHistory()

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
          <a href="/reference" className="hyperlink">
            API
          </a>{' '}
          •{' '}
          <a href="/guides/getting-started-guide" className="hyperlink">
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
          <button
            onClick={() => history.push('https://discord.gg/6GjgPkp464')}
            className={clsx(styles.socialIcons, styles.discord)}
          />
          <button
            onClick={() => history.push('https://twitter.com/Immutable')}
            className={clsx(styles.socialIcons, styles.twitter)}
          />
          <button
            onClick={() => history.push('https://discord.gg/6GjgPkp464')}
            className={clsx(styles.socialIcons, styles.telegram)}
          />
          <button
            onClick={() => history.push('https://discord.gg/6GjgPkp464')}
            className={clsx(styles.socialIcons, styles.reddit)}
          />
        </div>
      </div>
    </div>
  )
}

export default Footer

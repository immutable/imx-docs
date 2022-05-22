import RightArrowIcon from '@site/static/icons/RightArrow'
import React, { ReactNode } from 'react'
import styles from './styles.module.css'
import { useColorMode } from '@docusaurus/theme-common'
import clsx from 'clsx'

interface ArticleProps {
  image: string
  title: string | ReactNode
  subtitle: string
  cta: string[]
}

const Article = ({ image, title, subtitle, cta }: ArticleProps) => {
  const theme = useColorMode()

  return (
    <div
      className={clsx(
        styles.articleContainer,
        theme.colorMode === 'light' ? 'card-light-04' : ''
      )}
    >
      <div className={styles.contentSection}>
        <img
          className={styles.image}
          src={require(`/static/img/pictograms/${image}-${theme.colorMode}.jpg`).default}
          alt="image"
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles.ctaSection}>
        {cta.map((ctaTitle, index) => {
          return (
            <div className={styles.ctaContainer} key={index}>
              <RightArrowIcon className={styles.ctaIcon} />
              <p className={styles.ctaTitle}>{ctaTitle}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Article

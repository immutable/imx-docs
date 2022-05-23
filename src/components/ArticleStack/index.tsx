import React, { ReactNode } from 'react'
import styles from './styles.module.css'
import { useColorMode } from '@docusaurus/theme-common'
import Button from '../Button'

interface ArticleStackProps {
  LightIcon?: ({ className }: { className?: string }) => JSX.Element
  DarkIcon?: ({ className }: { className?: string }) => JSX.Element
  title: string | ReactNode
  subtitle: string
  buttonText?: string
}

const ArticleStack = ({
  LightIcon,
  DarkIcon,
  title,
  subtitle,
  buttonText = 'Learn More',
}: ArticleStackProps) => {
  const theme = useColorMode()

  return (
    <div className={styles.articleStackContainer}>
      <div className={styles.contentSection}>
        {LightIcon && theme.colorMode === 'light' && (
          <LightIcon className={styles.image} />
        )}
        {DarkIcon && theme.colorMode === 'dark' && <DarkIcon className={styles.image} />}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <Button variant="solid" onClick={() => console.log('Learn more clicked')}>
        {buttonText}
      </Button>
    </div>
  )
}

export default ArticleStack

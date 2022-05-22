import React, { ReactNode } from 'react'
import styles from './styles.module.css'
import { useColorMode } from '@docusaurus/theme-common'
import Button from '../Button'
import clsx from 'clsx'

interface CommunityCardProps {
  title: string | ReactNode
  subtitle: string
  buttonText: string
  isLongCard?: boolean
}

const CommunityCard = ({
  title,
  subtitle,
  buttonText,
  isLongCard = false,
}: CommunityCardProps) => {
  const theme = useColorMode()
  return (
    <div
      className={clsx(
        styles.communityCardContainer,
        theme.colorMode === 'light' && isLongCard ? styles.imageBackground : ''
      )}
    >
      <div className={styles.contentSection}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <Button className={styles.cardButton} onClick={() => console.log('Button clicked')}>
        {buttonText}
      </Button>
    </div>
  )
}

export default CommunityCard

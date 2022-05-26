import React, { ReactNode } from 'react'
import styles from './styles.module.css'

interface StatisticsCardProps {
  statisticsNumber: number | string
  statisticsLabel: string
  subtitle: string | ReactNode
  description: string | ReactNode
  image: string
}

const StatisticsCard = ({
  statisticsLabel,
  statisticsNumber,
  subtitle,
  description,
  image,
}: StatisticsCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}></div>
      <div className={styles.titleContainer}>
        <h1 className={styles.statisticsNumber}>{statisticsNumber}</h1>
        <p className={styles.statisticsLabel}>{statisticsLabel}</p>
      </div>
      <div className={styles.subtitleContainer}>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default StatisticsCard

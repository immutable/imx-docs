import React, { ReactNode } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'

interface TitleProps {
  title: string | ReactNode
  subtitle?: string | ReactNode
  className?: string
}

const Title = ({ title, subtitle, className }: TitleProps) => {
  return (
    <div className={styles.titleSection}>
      <h1 className={clsx(styles.title, className)}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}

export default Title

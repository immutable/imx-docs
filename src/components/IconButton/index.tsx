import clsx from 'clsx'
import React, { ReactNode } from 'react'
import styles from './styles.module.css'

interface IconButtonProps {
  variant?: 'default' | 'solid'
  Icon: ReactNode
  onClick: () => void
  disabled?: boolean
  className?: string
}

const IconButton = ({
  variant = 'default',
  Icon,
  onClick,
  disabled = false,
  className,
}: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        variant === 'default' ? styles.defaultIconButton : styles.solidIconButton,
        className
      )}
      disabled={disabled}
    >
      {Icon}
    </button>
  )
}

export default IconButton

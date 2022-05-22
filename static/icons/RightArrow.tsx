import React from 'react'

type Props = {
  className?: string
  color?: string
}

const RightArrowIcon = ({ className, color = '#131313' }: Props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
      fill="currentColor"
    />
  </svg>
)

export default RightArrowIcon

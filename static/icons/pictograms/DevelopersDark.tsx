import React from 'react'

type Props = {
  className?: string
  color?: string
}

const DevelopersDarkIcon = ({ className, color = '#EEEEEE' }: Props) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 0H0V24V48H24L0 24L24 0Z"
      fill="#EEEEEE"
    />
    <path d="M24 0L48 24L24 48V0Z" fill="url(#pattern0)" />
    <path d="M16 16H27V32H16V16Z" fill="url(#pattern1)" />
    <rect x="24" y="16" width="8" height="16" fill="#EEEEEE" />
    <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use
          xlinkHref="#image0_79_3977"
          transform="translate(-0.627551) scale(0.00255102 0.00170068)"
        />
      </pattern>
      <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use
          xlinkHref="#image0_79_3977"
          transform="translate(-0.627551) scale(0.00255102 0.00170068)"
        />
      </pattern>
      <image
        id="image0_79_3977"
        width="884"
        height="588"
      />
    </defs>
  </svg>
)

export default DevelopersDarkIcon
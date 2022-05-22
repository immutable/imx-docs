import React from 'react'

type Props = {
  className?: string
  color?: string
}

const SdkDarkIcon = ({ className }: Props) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className={className}>
    <path
      d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
      fill="#EEEEEE"
    />
    <path
      d="M19.9999 22.3333L17.6666 20L19.9999 17.6667L22.3333 20L19.9999 22.3333ZM18.1111 15.8L16.2666 13.9556L19.9999 10.2222L23.7333 13.9556L21.8888 15.8L19.9999 13.9111L18.1111 15.8ZM13.9555 23.7333L10.2222 20L13.9555 16.2667L15.7999 18.1111L13.9111 20L15.7999 21.8889L13.9555 23.7333ZM26.0444 23.7333L24.1999 21.8889L26.0888 20L24.1999 18.1111L26.0444 16.2667L29.7777 20L26.0444 23.7333ZM19.9999 29.7778L16.2666 26.0444L18.1111 24.2L19.9999 26.0889L21.8888 24.2L23.7333 26.0444L19.9999 29.7778Z"
      fill="#404040"
    />
  </svg>
)

export default SdkDarkIcon

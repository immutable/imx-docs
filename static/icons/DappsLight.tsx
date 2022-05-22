import React from 'react'

type Props = {
  className?: string
  color?: string
}

const DappsLightIcon = ({ className }: Props) => (
  <svg width="41" height="40" viewBox="0 0 41 40" fill="none" className={className}>
    <path
      d="M0.666626 20C0.666626 8.95431 9.62093 0 20.6666 0C31.7123 0 40.6666 8.95431 40.6666 20C40.6666 31.0457 31.7123 40 20.6666 40C9.62093 40 0.666626 31.0457 0.666626 20Z"
      fill="#131313"
    />
    <path
      d="M13.5555 16.4444H17.111V12.8889H13.5555V16.4444ZM18.8888 27.1111H22.4444V23.5555H18.8888V27.1111ZM13.5555 27.1111H17.111V23.5555H13.5555V27.1111ZM13.5555 21.7777H17.111V18.2222H13.5555V21.7777ZM18.8888 21.7777H22.4444V18.2222H18.8888V21.7777ZM24.2221 12.8889V16.4444H27.7777V12.8889H24.2221ZM18.8888 16.4444H22.4444V12.8889H18.8888V16.4444ZM24.2221 21.7777H27.7777V18.2222H24.2221V21.7777ZM24.2221 27.1111H27.7777V23.5555H24.2221V27.1111Z"
      fill="white"
    />
  </svg>
)

export default DappsLightIcon

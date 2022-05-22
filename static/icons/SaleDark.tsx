import React from 'react'

type Props = {
  className?: string
  color?: string
}

const SaleDarkIcon = ({ className }: Props) => (
  <svg width="41" height="40" viewBox="0 0 41 40" fill="none" className={className}>
    <path
      d="M0.666626 20C0.666626 8.95431 9.62093 0 20.6666 0C31.7123 0 40.6666 8.95431 40.6666 20C40.6666 31.0457 31.7123 40 20.6666 40C9.62093 40 0.666626 31.0457 0.666626 20Z"
      fill="#EEEEEE"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.1822 11.6266L29.031 19.4755C29.7333 20.1777 29.7333 21.2977 29.0399 21.9911L22.6666 28.3644C21.9733 29.0577 20.8444 29.0577 20.151 28.3644L12.3022 20.5155C11.9644 20.1866 11.7777 19.7333 11.7777 19.2622V12.8889C11.7777 11.9111 12.5777 11.1111 13.5555 11.1111H19.9288C20.3999 11.1111 20.8533 11.2978 21.1822 11.6266ZM13.5555 19.2622L21.4044 27.1111L27.7777 20.7378L19.9288 12.8889H13.5555V19.2622ZM17.111 15.1111C17.111 15.8475 16.5141 16.4444 15.7777 16.4444C15.0413 16.4444 14.4444 15.8475 14.4444 15.1111C14.4444 14.3747 15.0413 13.7778 15.7777 13.7778C16.5141 13.7778 17.111 14.3747 17.111 15.1111Z"
      fill="#404040"
    />
  </svg>
)

export default SaleDarkIcon

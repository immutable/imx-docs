import React from 'react'

type Props = {
  className?: string
  color?: string
}

const StudioIcon = ({ className, color = '#EEEEEE' }: Props) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.9079 13.9119C23.9066 14.3923 23.3845 14.6901 22.9703 14.4465L16.3068 10.5281C16.1167 10.4163 16 10.2124 16 9.99178V6.82613C16 6.34685 16.519 6.04749 16.9338 6.28749L23.6061 10.1486C23.7989 10.2602 23.9174 10.4662 23.9168 10.6888L23.9079 13.9119ZM23.9089 21.3124C23.9089 21.5346 23.7903 21.7401 23.5978 21.8511L21.9162 22.8221V18.6344C21.9162 18.4117 21.7972 18.206 21.6042 18.095L12.362 12.7784C12.169 12.6675 12.05 12.4617 12.05 12.2391V8.03099L13.0998 7.42315C13.5146 7.18291 14.0339 7.48227 14.0339 7.96155V11.1294C14.0339 11.3517 14.1525 11.5571 14.345 11.6683L23.5978 17.0103C23.7903 17.1215 23.9089 17.3269 23.9089 17.5492V21.3124ZM19.9188 23.9752L18.8994 24.5637C18.4846 24.8032 17.9661 24.5039 17.9661 24.0249V20.9349C17.9661 20.7127 17.8475 20.5073 17.655 20.3962L8.40286 15.0544C8.20996 14.9431 8.09135 14.7371 8.09184 14.5144L8.09924 10.6761C8.09973 10.4545 8.21797 10.2499 8.40965 10.1388L10.0661 9.17976V13.3512C10.0661 13.5733 10.1845 13.7786 10.3768 13.8898L19.6082 19.2305C19.8005 19.3417 19.9188 19.547 19.9188 19.7692V23.9752ZM15.9992 25.1757C15.9977 25.6529 15.4816 25.9511 15.0675 25.7137L8.40395 21.8953C8.21044 21.7844 8.09111 21.5785 8.09111 21.3555V18.1933C8.09111 17.7138 8.61081 17.4144 9.02562 17.6553L15.698 21.5282C15.8904 21.6398 16.0085 21.8457 16.0078 22.0681L15.9992 25.1757ZM16 0C7.16339 0 0 7.16349 0 15.9999C0 24.8365 7.16339 32 16 32C24.8366 32 32 24.8365 32 15.9999C32 7.16349 24.8366 0 16 0Z"
      fill={color}
    />
  </svg>
)

export default StudioIcon
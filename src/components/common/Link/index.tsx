import React from 'react'

export interface Props {
  url: string
  children: React.ReactNode
  className?: string
}

function Link({ url, children, className }: Props) {
  const redirectProps = url.startsWith('#') || url.startsWith('/') || url.startsWith('https://sebx.io')
    ? {target: '_self'}
    : {
        target: '_blank', rel: 'noreferrer'
      }
  return (
    <a href={url.startsWith('https://sebx.io') ? url.split("https://sebx.io")[1] : url} className={className} {...redirectProps}>
      {children}
    </a>
  )
}

export default Link

import React from 'react'

export default function LinkBox({ href , alt , src , iconSize , className , children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${className} flex items-center max-w-xs gap-4 py-4 px-6 rounded-lg transition duration-300`}>
        {src &&
          <img src={src} alt={alt} className={`h-12 ${iconSize}`} />
        }
        <div>{ children }</div>
    </a>
  )
}
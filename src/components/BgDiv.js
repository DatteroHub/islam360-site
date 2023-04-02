import React from 'react'

export default function BgDiv({ className , style , children }) {
  return (
    <div className={`${className}`} style={style}>
        { children }
    </div>
  )
}
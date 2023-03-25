import React from 'react'

export default function BgDiv({ className , children }) {
  return (
    <div className={`${className}`}>
        { children }
    </div>
  )
}
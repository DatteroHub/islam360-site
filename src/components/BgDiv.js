import React from 'react'

export default function BgDiv({ className , children }) {
  return (
    <div className={`py-24 ${className}`}>
        { children }
    </div>
  )
}
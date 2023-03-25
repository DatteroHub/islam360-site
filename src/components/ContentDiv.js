import React from 'react'

export default function ContentDiv({ className , children }) {
  return (
    <div className={`px-8 max-w-7xl mx-auto ${className}`}>
        { children }
    </div>
  )
}
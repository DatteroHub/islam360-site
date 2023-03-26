import React from 'react'
import { Link } from 'gatsby'

export default function LinkUnderline({ to , className , children }) {
  return (
    <Link to={to} className={`group text-sky-500 ${className}`}>
        { children }
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sky-500"></span>
    </Link>
  )
}
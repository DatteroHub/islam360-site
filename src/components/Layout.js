import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='bg-neutral-50 mt-24'>
          { children }
      </div>
      <Footer />
    </div>
  )
}

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className='bg-neutral-50'>
          { children }
      </div>
      <Footer />
    </>
  )
}

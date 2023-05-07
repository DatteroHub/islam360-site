import React from 'react'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'

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

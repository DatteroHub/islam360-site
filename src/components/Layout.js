import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className='bg-neutral-50 mt-28 lg:mt-12 xl:mt-0'>
          { children }
      </div>
      <Footer />
    </>
  )
}

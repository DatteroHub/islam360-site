import React from 'react'
import { Link } from 'gatsby'
import LinkUnderline from './LinkUnderline'
import BgDiv from './BgDiv'
import ContentDiv from './ContentDiv'

export default function Navbar() {
  return (
    <BgDiv className="fixed top-0 left-0 right-0 py-0 backdrop-blur bg-white/80">
      <ContentDiv>
        <header className='flex items-center'>
          <Link to='/'>
            <img src={'/logo.png'} alt="Dattero logo" className='h-20' />
          </Link>
          <div className='flex flex-1 justify-end gap-5'>
            <LinkUnderline to='/dawah'>Dawah</LinkUnderline>
            <LinkUnderline to='/mentoring'>Mentoring</LinkUnderline>
            <LinkUnderline to='/eventi'>Eventi</LinkUnderline>
          </div>
        </header>
      </ContentDiv>
    </BgDiv>
  )
}

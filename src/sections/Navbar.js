import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import LinkUnderline from '../components/LinkUnderline'
import BgDiv from '../components/BgDiv'
import ContentDiv from '../components/ContentDiv'

export default function Navbar() {

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [menuBgColor, setMenuBgColor] = useState('rgba(255,255,255,0)');

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onscroll = () => {
        if(window.pageYOffset < 200)
          setMenuBgColor('rgba(255,255,255,'+ 0.9 * window.pageYOffset/200 +')')
        else
          setMenuBgColor('rgba(255,255,255,0.9')
      }
    }
  }, [])

  const toggleMobileMenu = () => {
    setShowMobileMenu (prevState => {
      return !prevState
    });
  }

  return (
    <BgDiv className={`fixed z-50 top-0 left-0 right-0 ${showMobileMenu ? 'h-full' : ''} backdrop-blur `} style={{ backgroundColor: !showMobileMenu ? menuBgColor : 'rgba(255,255,255,0.8'}}>
      <ContentDiv>
        <header className='flex items-center h-14'>
          <Link to='/'>
            <img src={'/logo.png'} alt="Islam360 logo" className='h-12 py-2.5' />
          </Link>
          <div className='hidden md:flex flex-1 justify-end gap-5'>
          </div>
          <div className='hidden flex-1 justify-end'>
            <div className='active:bg-sky-900/10 py-3 px-3 rounded-md' onClick={toggleMobileMenu} >
              {!showMobileMenu ?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 fill-sky-500"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
              :
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-8 fill-sky-500"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
              }
            </div>
          </div>
          {showMobileMenu &&
            <div className='absolute top-20 right-0 left-0 flex flex-col h-screen'>
              <div className='flex flex-col items-center py-4'>
              </div>
              <div className='flex-1' onClick={toggleMobileMenu} />
            </div>
          } 
        </header>
      </ContentDiv>
    </BgDiv>
  )
}

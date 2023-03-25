import React from 'react'
import BgDiv from './BgDiv'
import ContentDiv from './ContentDiv'
import LinkBox from './LinkBox'

export default function Footer() {
  return (
    <BgDiv className="pt-12 pb-16 bg-sky-700">
      <ContentDiv>
        <footer className="flex flex-col md:flex-row gap-6 md:gap-4">
          <div className='flex-1'>
            <div className='font-medium text-sky-200 pl-6 mb-2'>Contattaci</div>
            <LinkBox href="mailto:islam360@outlook.it" className="text-medium text-neutral-50 hover:bg-white/10">
              <div className='flex items-center gap-4'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-7 fill-sky-100"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                islam360@outlook.it
              </div>
            </LinkBox>
          </div>
          <div className='flex-1'>
            <div className='font-medium text-sky-200 pl-6 mb-2'>I nostri social</div>
            <LinkBox href="https://instagram.com/islam360ita/" src={'/insta.svg'} alt="Instagram Logo" iconSize="h-8" className="text-medium text-neutral-50 hover:bg-white/10">Seguici su Instagram</LinkBox>
            <LinkBox href="https://www.facebook.com/islam360italia/" src={'/fb.svg'} alt="Facebook Logo" iconSize="h-8" className="text-medium text-neutral-50 hover:bg-white/10">Seguici su Facebook</LinkBox>
          </div>
          <div>
            <div className='font-medium text-sky-200 pl-6'>Powered by</div>
            <LinkBox href="https://dattero.org/" src={'/dattero.png'} alt="Dattero Logo" iconSize="h-8" className="text-medium text-neutral-50 hover:bg-white/10">Dattero</LinkBox>
          </div>
        </footer>
      </ContentDiv>
    </BgDiv>
  )
}

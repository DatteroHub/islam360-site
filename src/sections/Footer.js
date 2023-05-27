import React from 'react'
import BgDiv from '../components/BgDiv'
import ContentDiv from '../components/ContentDiv'
import LinkBox from '../components/LinkBox'

export default function Footer() {
  return (
    <BgDiv className="pt-12 pb-8 bg-sky-700">
      <ContentDiv className="pb-8">
        <footer className="flex flex-col md:flex-row gap-6 md:gap-4">
          <div className='flex-1 text-sky-50 pl-6 md:pl-0'>
            <div className='h-24 w-24 bg-white flex items-center rounded-md p-4'><img src={'/logo.png'} alt="Islam360 logo" className='' /></div>
            <div className='text-xl pt-4'>Islam 360</div>
            <div className='text-gray-300'>Organizzazione Non Profit</div>
            <div className='text-sm mt-1'>CF: 97943640157</div>
            <div className='font-medium text-sky-200 mt-2 py-2'>Sostieni la dawah</div>
            <div className="text-md mt-4">
              <a href="https://pay.sumup.io/b2c/QNVJQ9TR" target="_blank" rel="noreferrer" className="bg-emerald-500 hover:bg-emerald-600 py-4 px-6 rounded-lg duration-300">
                Dona ora
              </a>
            </div>
          </div>
          <div className='h-0.5 mx-6 mt-4 md:hidden bg-sky-800 rounded-b-full' />
          <div className='flex-1'>
            <div className='font-medium text-sky-200 pl-6 mb-2'>Contattaci</div>
            <LinkBox href="https://t.me/islam360it/" src={'/telegram.svg'} alt="Telegram Logo" iconSize="h-8" className="text-medium text-sky-50 hover:bg-white/10">Scrivici su Telegram</LinkBox>
            <LinkBox href="mailto:islam360@outlook.it" className="ml-1 text-medium text-sky-50 hover:bg-white/10">
              <div className='flex items-center gap-5'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-6 fill-sky-100"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                islam360@outlook.it
              </div>
            </LinkBox>
          </div>
          <div className=''>
            <div className='font-medium text-sky-200 pl-6 mb-2'>I nostri social</div>
            <LinkBox href="https://instagram.com/islam360ita/" src={'/insta.svg'} alt="Instagram Logo" iconSize="h-8" className="text-medium text-sky-50 hover:bg-white/10">Seguici su Instagram</LinkBox>
            <LinkBox href="https://www.facebook.com/islam360italia/" src={'/fb.svg'} alt="Facebook Logo" iconSize="h-8" className="text-medium text-sky-50 hover:bg-white/10">Seguici su Facebook</LinkBox>
          </div>
        </footer>
      </ContentDiv>
      <ContentDiv className="flex flex-col md:flex-row justify-center items-center text-sm text-sky-200">
        <div>Copyright © 2023</div>
        <div className='pl-3 hidden md:flex'>‧</div>
        <a href="https://dattero.org/" target="_blank" rel="noreferrer" className="flex items-center max-w-xs p-4 rounded-lg hover:bg-white/10 transition duration-300">
          <img src="/poweredby.png" alt="Dattero Logo" className="h-8" />
        </a>
      </ContentDiv>
    </BgDiv>
  )
}

import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import BgDiv from "../components/BgDiv"
import ContentDiv from "../components/ContentDiv"

export default function NotFound() {
  return (
    <Layout>
      <BgDiv className="pt-6 pb-0">
        <ContentDiv>
          <Link to='/'>
              <img src={'/logo.png'} alt="Dattero logo" className='h-12' />
          </Link>
          <div className='h-1 w-32 bg-primary rounded-r-full' />
          <div className='h-12 w-1 bg-primary rounded-b-full' />
        </ContentDiv>
      </BgDiv>
      <BgDiv className="">
        <ContentDiv className="flex justify-center items-center gap-40">
          <div>
            <h1 className="font-semibold text-8xl md:text-9xl text-gray-700">404</h1>
            <div className="font-medium text-2xl text-gray-500 mt-6">Pagina non trovata</div>
          </div>
          <img src={'/404.svg'} alt="Hero" className='h-56 xl:h-64 hidden lg:flex' />
        </ContentDiv>
      </BgDiv>
      <BgDiv className="pt-8">
        <ContentDiv className="flex justify-center">
          <Link to="/" className="text-medium text-gray-500 flex items-center gap-4 bg-neutral-200/50 hover:bg-neutral-200 py-4 px-6 rounded-lg transition duration-300">
              <img src={'/logo.png'} alt="Dattero logo" className='h-12' />
              <div>Torna alla Home</div>
          </Link>
        </ContentDiv>
      </BgDiv>
      <BgDiv className="pt-8 pb-12 bg-gray-700">
        <ContentDiv className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center content-center">
          <a href="https://t.me/iAbou/" target="_blank" rel="noreferrer" className="text-medium text-neutral-50 flex items-center gap-4 max-w-xs hover:bg-white/10 py-4 px-6 rounded-lg transition duration-300">
            <img src={'/telegram.svg'} alt="Instagram Logo" className='h-12' />
            <div>Contattaci su Telegram</div>
          </a>
          <a href="https://instagram.com/dattero_community/" target="_blank" rel="noreferrer" className="text-medium text-neutral-50 flex items-center gap-4 max-w-xs hover:bg-white/10 py-4 px-6 rounded-lg transition duration-300">
            <img src={'/insta.svg'} alt="Instagram Logo" className='h-12' />
            <div>Segui i prossimi progetti di <span className="font-bold text-primary-dark">Dattero</span> su Instagram</div>
          </a>
        </ContentDiv>
      </BgDiv>
    </Layout>
  )
}

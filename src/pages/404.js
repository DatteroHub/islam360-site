import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import BgDiv from "../components/BgDiv"
import ContentDiv from "../components/ContentDiv"

export default function NotFound() {
  return (
    <Layout>
      <BgDiv className="py-24 mt-12">
        <ContentDiv className="flex justify-center items-center gap-40">
          <div>
            <h1 className="font-semibold text-8xl md:text-9xl text-gray-700">404</h1>
            <div className="font-medium text-2xl text-gray-500 mt-6">Pagina non trovata</div>
          </div>
          <img src={'/404.svg'} alt="Hero" className='h-56 xl:h-64 hidden lg:flex' />
        </ContentDiv>
      </BgDiv>
      <BgDiv className="pt-8 pb-24">
        <ContentDiv className="flex justify-center">
          <Link to="/" className="text-medium text-gray-500 flex items-center gap-4 bg-neutral-200/50 hover:bg-neutral-200 py-4 px-6 rounded-lg transition duration-300">
              <img src={'/logo.png'} alt="Dattero logo" className='h-12' />
              <div>Torna alla Home</div>
          </Link>
        </ContentDiv>
      </BgDiv>
    </Layout>
  )
}

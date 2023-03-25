import * as React from "react"
import { Link } from 'gatsby'
import { SEO } from "../components/seo"
import Layout from "../components/Layout"
import InfoCard from "../components/InfoCard"
import BgDiv from "../components/BgDiv"
import ContentDiv from "../components/ContentDiv"
import LinkBox from "../components/LinkBox"

export default function Home() {
  return (
    <Layout>
      <BgDiv className="pt-8 pb-4 bg-white">
        <ContentDiv className="flex justify-center items-center">
          <div className="mr-4">
            <h1 className="font-semibold text-5xl md:text-6xl text-sky-500">Islam360 Italia<br/>per dawah e mentoring</h1>
          </div>
          <img src={'/hero.gif'} alt="Hero" className='h-56 xl:h-64 hidden lg:flex' />
        </ContentDiv>
      </BgDiv>
      <BgDiv className="">
        <ContentDiv className="flex flex-col items-center gap-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-12 fill-emerald-500"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
          <div className="max-w-2xl font-medium text-center text-emerald-500">
            <div className="text-3xl">Invita al sentiero del tuo Signore con la saggezza e la buona parola e discuti con loro nella maniera migliore</div>
            <div className="text-xl mt-10">
              <a href="https://quran.com/16/125" target="_blank" rel="noreferrer" className="hover:bg-emerald-700/10 hover:text-emerald-600 py-4 px-10 rounded-lg duration-300">
                Corano 16, 125
              </a>
            </div>
          </div>
        </ContentDiv>
      </BgDiv>
    </Layout>
  )
}

export const Head = () => (
  <SEO />
)
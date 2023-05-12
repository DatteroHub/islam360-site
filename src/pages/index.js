import * as React from "react"
import { Link } from 'gatsby'
import { SEO } from "../components/seo"
import Layout from "../components/Layout"
import BgDiv from "../components/BgDiv"
import ContentDiv from "../components/ContentDiv"
import MiddleSection from "../sections/MiddleSection"

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <div className="bg-cover bg-bottom bg-fixed -z-10" style={{backgroundImage: `url("/big dawah team.jpg")`}}>
        <BgDiv className="pt-28 lg:pt-12 xl:pt-0 pb-56 lg:pb-8 backdrop-blur-sm bg-white/80">
          <ContentDiv className="flex justify-center items-center">
            <div className="mr-8 xl:max-w-lg">
              <h1 className="font-semibold text-4xl md:text-5xl xl:text-6xl text-sky-500">Islam360 Italia<br/>per dawah e mentoring</h1>
              <br/><br/><Link to="#contacts" className="bg-sky-500 hover:bg-sky-600 text-sky-50 py-4 px-10 rounded-lg duration-300">Contattaci</Link>
            </div>
            <img src={'/dawah team.jpg'} alt="dawah team" className='h-96 xl:h-128 hidden lg:flex rounded-xl translate-y-16 xl:translate-y-20' />
          </ContentDiv>
        </BgDiv>
      </div>
      {/* Middle Section */}

      <MiddleSection />

      {/* Ayah */}
      <div className="bg-cover bg-center bg-fixed -z-10" style={{backgroundImage: `url("/big dawah team.jpg")`}}>
        <BgDiv className="py-24 backdrop-blur-sm bg-white/80">
          <ContentDiv className="flex flex-col items-center gap-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-12 fill-emerald-600"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
            <div className="max-w-2xl font-medium text-center text-emerald-600">
              <div className="text-3xl">Invita al sentiero del tuo Signore con la saggezza e la buona parola e discuti con loro nella maniera migliore</div>
              <div className="text-xl mt-10">
                <a href="https://quran.com/16/125" target="_blank" rel="noreferrer" className="hover:bg-emerald-800/10 hover:text-emerald-700 py-4 px-10 rounded-lg duration-300">
                  Corano 16, 125
                </a>
              </div>
            </div>
          </ContentDiv>
        </BgDiv>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <SEO />
)
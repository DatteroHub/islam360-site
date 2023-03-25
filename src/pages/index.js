import * as React from "react"
import { Link } from 'gatsby'
import { SEO } from "../components/seo"
import Layout from "../components/Layout"
import InfoCard from "../components/InfoCard"
import BgDiv from "../components/BgDiv"
import ContentDiv from "../components/ContentDiv"
import LinkBox from "../components/LinkBox"
import LinkUnderline from "../components/LinkUnderline"

export default function Home() {
  return (
    <Layout>
      <BgDiv className="pt-0 lg:pb-4 bg-white">
        <ContentDiv className="flex justify-center items-center">
          <div className="mr-8 xl:max-w-lg">
            <h1 className="font-semibold text-4xl md:text-5xl xl:text-6xl text-sky-500">Islam360 Italia<br/>per dawah e mentoring</h1>
            <br/><br/><Link to="/gorap" className="bg-sky-500 hover:bg-sky-600 text-sky-50 py-4 px-10 rounded-lg duration-300">Conosci l'Islam</Link>
          </div>
          <img src={'/dawah team.jpg'} alt="Hero" className='h-96 xl:h-128 hidden lg:flex rounded-xl translate-y-12 xl:translate-y-20' />
        </ContentDiv>
      </BgDiv>
      <BgDiv className="py-12 mt-8">
        <ContentDiv className="flex gap-20 justify-center items-center mt-12 xl:mt-20">
          <img src={'/follow dawah.jpg'} alt="Hero" className='h-96 xl:h-128 hidden lg:flex rounded-xl outline-dashed outline-2 outline-sky-500 outline-offset-4' />
          <div className="flex flex-col gap-6">
            <div className="font-medium text-2xl text-sky-50 bg-sky-500 py-2 px-4 w-fit"><h1>Vuoi unirti alla dawah?</h1></div>
            <div className="text-medium text-lg text-gray-700 max-w-md">La dawah è una cosa molto mportante e in queste righe ti faccio capire quanto lo è così da farti venire voglia di unirti al nostro gruppo.</div>
            <LinkUnderline to="/dawah" className="w-fit">Street Dawah</LinkUnderline>
          </div>
        </ContentDiv>
      </BgDiv>
      <BgDiv className="py-12">
        <ContentDiv className="flex gap-20 justify-center items-center">
          <div className="flex flex-col gap-6">
            <div className="font-medium text-2xl text-sky-50 bg-sky-500 py-2 px-4 w-fit"><h1>Vuoi imparare l'Islam?</h1></div>
            <div className="text-medium text-lg text-gray-700 max-w-md">Sei nuovo nell'Islam e hai bisogno di qualcuno che ti segua e ti insegni le basi dell'Islam, oppure ti stai avvicinando da poco a questa religione e hai bisogno di imparare di più a riguardo.</div>
            <LinkUnderline to="/mentoring" className="w-fit">Segui i nostri pogrammi</LinkUnderline>
          </div>
          <img src={'/follow mentoring.jpg'} alt="Hero" className='h-96 xl:h-128 hidden lg:flex rounded-xl outline-dashed outline-2 outline-sky-500 outline-offset-4' />
        </ContentDiv>
      </BgDiv>
      <div className="bg-cover bg-center" style={{backgroundImage: `url("/big dawah team.jpg")`}}>
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
import React from 'react'
import BgDiv from '../components/BgDiv'
import ContentDiv from '../components/ContentDiv'
import LinkChevronUnderline from '../components/LinkChevronUnderline'

export default function MiddleSectionOld() {
  return (
    <>
        <BgDiv className="py-12 mt-8">
            <ContentDiv className="flex gap-20 justify-center items-center mt-12 xl:mt-20">
                <img src={'/follow dawah.jpg'} alt="follow dawah" className='h-96 xl:h-128 hidden lg:flex rounded-xl outline-dashed outline-2 outline-sky-500 outline-offset-4' />
                <div className="flex flex-col gap-6">
                    <div className="font-normal text-2xl lg:text-3xl text-sky-50 uppercase bg-sky-500 py-2 px-4 w-fit"><h1>unisciti alla dawah</h1></div>
                    <div style={{ backgroundImage: `url("/follow dawah.jpg")` }} className='h-96 bg-cover bg-center xl:h-128 lg:hidden rounded-xl outline-dashed outline-2 outline-sky-500 outline-offset-4' />
                    <div className="font-normal text-md text-gray-700 max-w-md">La dawah è una cosa molto mportante e in queste righe ti faccio capire quanto lo è così da farti venire voglia di unirti al nostro gruppo.</div>
                    <LinkChevronUnderline to="/dawah" className="group uppercase w-fit" chevronH="h-5">scopri di più su street dawah</LinkChevronUnderline>
                </div>
            </ContentDiv>
        </BgDiv>
        <BgDiv className="py-12">
            <ContentDiv className="flex gap-20 justify-center items-center">
                <div className="flex flex-col gap-6">
                    <div className="font-normal text-2xl lg:text-3xl text-sky-50 uppercase bg-sky-500 py-2 px-4 w-fit"><h1>Impara di più sull'islam</h1></div>
                    <div style={{ backgroundImage: `url("/follow mentoring.jpg")` }} className='h-96 bg-cover bg-center xl:h-128 lg:hidden rounded-xl outline-dashed outline-2 outline-sky-500 outline-offset-4' />
                    <div className="font-normal text-md text-gray-700 max-w-md">Sei nuovo nell'Islam e hai bisogno di qualcuno che ti segua e ti insegni le basi dell'Islam, oppure ti stai avvicinando da poco a questa religione e hai bisogno di imparare di più a riguardo.</div>
                    <LinkChevronUnderline to="/mentoring" className="groyp uppercase w-fit" chevronH="h-5">scopri di più sui nostri pogrammi</LinkChevronUnderline>
                </div>
                <img src={'/follow mentoring.jpg'} alt="follow mentoring" className='h-96 xl:h-128 hidden lg:flex rounded-xl outline-dashed outline-2 outline-sky-500 outline-offset-4' />
            </ContentDiv>
        </BgDiv>
    </>
  )
}
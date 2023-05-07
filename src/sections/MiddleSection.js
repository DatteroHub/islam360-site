import React from 'react'
import BgDiv from '../components/BgDiv'
import ContentDiv from '../components/ContentDiv'
import Card from '../components/Card'

export default function MiddleSection() {
  return (
    <>
        <BgDiv className="py-24 md:mt-8 xl:mt-18">
            <ContentDiv className="flex flex-col">
                <div className="mb-12 text-center font-medium text-3xl text-sky-500">Cosa facciamo</div>
                <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
                    <Card src="/follow dawah.jpg" title="street dawah" />
                    <Card src="/follow mentoring.jpg" title="formazione e mentoring" />
                </div>

                <div className="mt-24 mb-12 text-center font-medium text-3xl text-sky-500" id="contacts">Come contattarci</div>
                <div className='flex flex-col md:flex-row gap-24 justify-center items-center'>
                    <div className='flex justify-center items-center text-md h-40 w-56 bg-sky-100'>whatsapp</div>
                    <div className='flex justify-center items-center text-md h-40 w-56 bg-sky-100'>telegram</div>
                </div>
            </ContentDiv>
        </BgDiv>
    </>
  )
}
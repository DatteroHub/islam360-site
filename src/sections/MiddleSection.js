import React from 'react'
import BgDiv from '../components/BgDiv'
import ContentDiv from '../components/ContentDiv'
import Card from '../components/Card'

export default function MiddleSection() {
  return (
    <>
        <BgDiv className="py-24">
            <ContentDiv className="flex flex-col mt-8 xl:mt-18">
                <div className="py-12 text-center font-medium text-3xl text-sky-500">Cosa facciamo</div>
                <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
                    <Card src="/follow dawah.jpg" title="street dawah" />
                    <Card src="/follow mentoring.jpg" title="formazione e mentoring" />
                </div>

                <div className="pt-20 pb-12 text-center font-medium text-3xl text-sky-500" id="contacts">Come contattarci</div>
                
            </ContentDiv>
        </BgDiv>
    </>
  )
}
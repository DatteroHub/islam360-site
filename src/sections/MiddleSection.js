import React from 'react'
import BgDiv from '../components/BgDiv'
import ContentDiv from '../components/ContentDiv'
import Card from '../components/Card'
import HrefChevron from '../components/HrefChevron'

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

                <div className="pt-24 mb-12 text-center font-medium text-3xl text-sky-500" id="contacts">Come contattarci</div>
                <div className='mb-12 flex flex-col md:flex-row gap-8 md:gap-24 justify-center items-center'>
                    <div className='flex justify-center items-center'>
                        <img src="/big telegram.png" alt="icona telegram" className="w-28 md:w-40" />
                    </div>
                    <div className='flex flex-col'>
                        <div className="font-normal text-lg lg:text-xl text-sky-500 text-center md:text-left uppercase"><h1>scrivici su telegram</h1></div>
                        <div className="mt-4 font-normal text-md text-gray-700 max-w-md">Per qualsiasi informazione, dubbio o richiesta puoi contattarci su Telegram e saremo felici di supportarti.</div>
                        <HrefChevron to="https://t.me/islam360it/" className="mt-4 group w-fit bg-sky-500 hover:bg-sky-600 py-4 px-6 rounded-lg duration-300" chevronH="h-5">Apri Telegram</HrefChevron>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-8 md:gap-24 justify-center items-center'>
                    <div className='flex justify-center items-center'>
                        <img src="/big messenger.png" alt="icona telegram" className="w-28 md:w-40" />
                    </div>
                    <div className='flex flex-col'>
                        <div className="font-normal text-lg lg:text-xl text-sky-500 text-center md:text-left uppercase"><h1>non hai telegram?</h1></div>
                        <div className="mt-4 font-normal text-md text-gray-700 max-w-md">Nessun problema! Puoi scriverci sulla nostra pagina Facebook o su Instagram. Per aprire una chat veloce trovi il popup di Messenger in fondo allo schermo.</div>
                    </div>
                </div>
            </ContentDiv>
        </BgDiv>
    </>
  )
}
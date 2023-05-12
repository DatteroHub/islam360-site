import React from 'react'

export default function Card({ className , src, title }) {
  return (
    <div style={{ backgroundImage: `url("${src}")` }} className={`h-96 xl:h-128 w-80 xl:w-96 bg-cover 
            rounded-xl ${className}`}>
        <div className="font-normal text-xl xl:text-2xl 
            text-sky-50 uppercase bg-sky-500 py-2 px-4 rounded-t-xl">
            <div className='text-center'>{ title }</div>
        </div>
    </div>
  )
}
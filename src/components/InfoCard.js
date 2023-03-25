import React from 'react'

export default function InfoCard({ children }) {
  return (
    <div className="bg-primary-dark rounded-lg">
      <div className="-translate-y-3 translate-x-2 flex flex-col md:flex-row items-center 
              font-medium w-full h-full text-lg text-primary-dark bg-white rounded-lg
              border-2 border-primary-dark p-6 hover:rotate-1 duration-200">
          <div className="text-5xl mr-4 mb-2">🌴</div>
          { children }
      </div>
    </div>
  )
}
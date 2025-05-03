import React from 'react'

export default function RedButton({ children, className = " " }) {
      return (
            <button className={`py-3.5 lg:py-4.5 px-3 lg:px-4 2xl:px-5.5 bg-[#E50000] text-white text-sm lg:text-md 2xl:text-lg w-fit text-nowrap font-semibold rounded-lg flex items-center gap-0.5 ${className} hover:opacity-70`}>
                  {children}
            </button>
      )
}

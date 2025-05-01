import React from 'react'

export default function RedButton({ children, className = " " }) {
      return (
            <button className={`py-4.5 px-5.5 bg-[#E50000] text-white text-lg font-semibold rounded-lg flex items-center gap-0.5 ${className} hover:opacity-70`}>
                  {children}
            </button>
      )
}

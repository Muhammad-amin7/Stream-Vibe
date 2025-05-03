import React from 'react'
import bg from "../../assets/FreeTodayBackground.png"
import RedButton from '../../Layouts/RedButton'

export default function FreeToday() {
      return (
            <section>
                  <div className='w-9/10 lg:w-4/5 m-auto mt-12 lg:mt-30 2xl:mt-40 py-12.5 px-7.5 lg:py-20 lg:px-15 2xl:py-25 2xl:px-20 rounded-md lg:flex justify-between max-lg:text-center' style={{ background: `url(${bg}) no-repeat center / cover` }}>
                        <div>
                              <h1 className='text-white font-bold text-2xl lg:text-3xl 2xl:text-3xl'>Start your free trial today!</h1>
                              <p className='text-[#999] text-sm lg:text-md 2xl:text-lg mt-1 lg:mt-2 2xl:mt-2.5'>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
                        </div>
                        <RedButton className='max-lg:m-auto max-lg:mt-4'>Start a Free Trail</RedButton>
                  </div>
            </section>
      )
}

import React, { useState } from 'react'
import RedButton from '../../Layouts/RedButton'

export default function PlansAndPrice() {
      const [priceFor, setPriceFor] = useState("month")

      // mock data
      const plansdata = [
            { id: 1, title: "Basic Plan", description: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.", priceMonth: 9.99, priceYear: 119.88 },
            { id: 2, title: "Standard Plan", description: "Access to a wider selection of movies and shows, including most new releases and exclusive content", priceMonth: 12.99, priceYear: 155.88 },
            { id: 3, title: "Premium Plan", description: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing", priceMonth: 14.99, priceYear: 179.88 },
      ]

      return (
            <section id='pricing'>
                  <div className='w-9/10 lg:w-4/5 m-auto mt-12 lg:mt-30 2xl:mt-40'>
                        {/* top || title */}
                        <div className='lg:flex justify-between'>
                              <div>
                                    <h1 className='text-xl lg:text-3xl 2xl:text-4xl text-white font-bold mb-2.5 lg:mb-3.5'>We Provide you streaming experience across various devices.</h1>
                                    <p className='lg:w-9/10 text-sm lg:text-md 2xl:text-lg text-[#999]'>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
                              </div>

                              <ul className='flex justify-between border-1 border-[#262626] bg-[#0F0F0F] h-fit rounded-xl p-2 2xl:p-2.5 w-fit max-lg:mt-5'>
                                    <li className={`px-5 2xl:px-6 py-3 2xl:py-3.5 rounded-xl cursor-pointer ${priceFor === 'month' ? "bg-[#1F1F1F] text-white" : "bg-transparent text-[#999]"}`} onClick={() => setPriceFor("month")}>Monthly</li>
                                    <li className={`px-5 2xl:px-6 py-3 2xl:py-3.5 rounded-xl cursor-pointer ${priceFor === 'year' ? "bg-[#1F1F1F] text-white" : "bg-transparent text-[#999]"}`} onClick={() => setPriceFor("year")}>Yearly</li>
                              </ul>
                        </div>

                        {/* Bottom || Content */}

                        <div className='mt-10 lg:mt-15 2xl:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-5 2xl:gap-7.5'>
                              {plansdata.map(({ id, title, priceMonth, priceYear, description }) => (
                                    <div key={id} className='p-6 2xl:p-12.5 rounded-xl bg-[#1A1A1A] border-1 border-[#262626]'>
                                          <h1 className='text-lg lg:text-xl 2xl:text-2xl text-white font-bold mb-2.5 lg:mb-3 2xl:mb-4'>{title}</h1>
                                          <p className='text-sm lg:text-md 2xl:text-lg h-[63px] lg:h-[72px] 2xl:h-[88px] text-[#999] mb-7.5 lg:mb-10 2xl:mb-12.5'>{description}</p>
                                          <p className='text-2xl lg:text-3xl 2xl:text-[40px] text-white font-bold mb-2.5 lg:mb-3 2xl:mb-4'>
                                                {priceFor === "month" ? priceMonth : priceYear}
                                                <span className='text-sm lg:text-md 2xl:text-lg text-[#999] mb-7.5 lg:mb-10 2xl:mb-12.5'>{priceFor === "month" ? "/month" : "/year"}</span>
                                          </p>
                                          <div className="flex items-center justify-between">
                                                <RedButton className='bg-[#141414]! outline-1 outline-[#262626] max-2xl:px-2! max-2xl:py-3.5! text-xs!'>Start Free Trial</RedButton>
                                                <RedButton className='max-2xl:px-2! max-2xl:py-3.5! text-xs!'>Choose Plan</RedButton>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      )
}

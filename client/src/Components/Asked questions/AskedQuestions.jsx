import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import RedButton from '../../Layouts/RedButton'

export default function AskedQuestions() {
      // opened question
      const [active, setActive] = useState(null)

      // mock data
      const questionsdata = [
            { id: 1, title: "What is StreamVibe?", response: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
            { id: 2, title: "How do I sign up for StreamVibe?", response: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
            { id: 3, title: "What is the StreamVibe free trial?", response: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
            { id: 4, title: "How much does StreamVibe cost?", response: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
            { id: 5, title: "How do I contact StreamVibe customer support?", response: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
            { id: 6, title: "What content is available on StreamVibe?", response: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
            { id: 7, title: "What are the StreamVibe payment methods?", response: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
            { id: 8, title: "How can I watch StreamVibe?", response: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
      ]

      return (
            <section id='faq'>
                  <div className='w-9/10 lg:w-4/5 m-auto mt-12 lg:mt-30 2xl:mt-40'>
                        {/* top || title */}
                        <div className='lg:flex justify-between gap-5'>
                              <div>
                                    <h1 className='text-xl lg:text-3xl 2xl:text-4xl text-white font-bold mb-2.5 lg:mb-3.5'>Frequently Asked Questions</h1>
                                    <p className='text-sm lg:text-md 2xl:text-lg text-[#999]'>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
                              </div>

                              <RedButton className='h-min max-lg:mt-5'>Ask a Question</RedButton>
                        </div>

                        {/* bottom || content */}

                        <div className='mt-10 lg:mt-15 2xl:mt-20 lg:flex flex-wrap lg:gap-x-10 2xl:gap-x-20 justify-between'>
                              {questionsdata.map(({ id, title, response }, index) => (
                                    <div key={id} className='px-2.5 py-5 lg:p-6 2xl:p-8.5 flex gap-x-4 2xl:gap-x-5 border-b-1 border-red-500 last:border-0 lg:nth-[7]:border-0 lg:w-14/30 2xl:w-9/20'>
                                          <h1 className='p-5 w-11 h-11 lg:w-12 2xl:w-16 lg:h-12 2xl:h-16 text-sm lg:text-md 2xl:text-xl rounded-xl bg-[#1F1F1F] border-1 border-[#262626] text-white font-semibold flex items-center justify-center'>{(index + 1).toString().padStart(2, "0")}</h1>

                                          <div className='flex justify-between items-center w-full gap-2'>
                                                <div>
                                                      <h1 className='text-sm lg:text-md 2xl:text-xl lg:mb-4 2xl:mb-5 font-medium text-white'>{title}</h1>
                                                      {active === (index) && <p className='text-xs lg:text-sm 2xl:text-lg text-[#999]'>{response}</p>}
                                                </div>

                                                {active === (index)
                                                      ? <button className='text-sm lg:text-md 2xl:text-xl text-white' onClick={() => setActive(null)} ><FaMinus /></button>
                                                      : <button className='text-sm lg:text-md 2xl:text-xl text-white' onClick={() => setActive(index)}><FaPlus /></button>}
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </section >
      )
}

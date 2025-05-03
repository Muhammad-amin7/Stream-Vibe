import React from 'react'
import logo from "../../assets/Abstract Design.svg"
import RedButton from '../../Layouts/RedButton'
import { FaPlay } from 'react-icons/fa'

export default function Header() {
      return (
            <header className='py-[130px] 2xl:py-[195px] w-screen bg-cover bg-center bg-no-repeat relative h-screen'>
                  <div className='w-9/10 lg:w-[70%] mx-auto flex flex-col items-center'>
                        <div className='w-50 lg:w-[300px] 2xl:w-[470px] absolute top-2/5 lg:top-1/2 left-1/2 -translate-1/2'>
                              <img src={logo} alt="Abstract Design" />
                        </div>

                        <div className='-bottom-[100px] w-[90%] lg:w-[60%] absolute flex flex-col items-center text-center'>
                              <h1 className='text-2xl lg:text-5xl 2xl:text-6xl mb-3.5 text-white font-bold'>
                                    The Best Streaming Experience
                              </h1>
                              <p className='text-xs lg:text-md 2xl:text-lg text-[#999]'>
                                    StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.
                              </p>
                              <RedButton className="mt-6 mx-auto flex items-center gap-2">
                                    <FaPlay /> Start Watching Now
                              </RedButton>
                        </div>
                  </div>
            </header >
      )
}

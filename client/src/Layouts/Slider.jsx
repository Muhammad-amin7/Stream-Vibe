import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function Slider({ title, subtitle, data, className }) {
      const [showItems, setShowItems] = useState(5)
      const [activeItem, setActiveItem] = useState(0)

      useEffect(() => {
            // Ekran kichik bo‘lsa, 2 ta slayd ko‘rsatilsin
            if (window.innerWidth < 1280) {
                  setShowItems(2)
            }
      }, [])

      // Touch swipe funksiyasi
      useEffect(() => {
            const slider = document.querySelector('.slider-wrapper')

            let startX = 0
            let endX = 0

            const handleTouchStart = (e) => {
                  startX = e.touches[0].clientX
            }

            const handleTouchMove = (e) => {
                  endX = e.touches[0].clientX
            }

            const handleTouchEnd = () => {
                  if (startX - endX > 50) {
                        handleNextItem()
                  } else if (endX - startX > 50) {
                        handlePrevItem()
                  }
            }

            if (slider) {
                  slider.addEventListener('touchstart', handleTouchStart)
                  slider.addEventListener('touchmove', handleTouchMove)
                  slider.addEventListener('touchend', handleTouchEnd)
            }

            return () => {
                  if (slider) {
                        slider.removeEventListener('touchstart', handleTouchStart)
                        slider.removeEventListener('touchmove', handleTouchMove)
                        slider.removeEventListener('touchend', handleTouchEnd)
                  }
            }
      }, [activeItem, showItems])

      const handleNextItem = () =>
            setActiveItem((activeItem + 1) % Math.ceil(data.length / showItems))

      const handlePrevItem = () =>
            setActiveItem(
                  (activeItem - 1 + Math.ceil(data.length / showItems)) %
                  Math.ceil(data.length / showItems)
            )

      return (
            <div className={`w-screen ${className}`}>
                  <div className='w-9/10 lg:w-4/5 m-auto'>
                        {/* top */}
                        <div className='lg:flex justify-between items-end'>
                              <div>
                                    <h1 className='text-xl lg:text-3xl 2xl:text-4xl text-white mb-3.5 block font-bold'>
                                          {title}
                                    </h1>
                                    <p className='text-sm lg:text-lg 2xl:text-lg text-[#999] block'>
                                          {subtitle}
                                    </p>
                              </div>

                              {/* arrows only for large screens */}
                              <div className='hidden lg:flex rounded-xl p-4 bg-[#0F0F0F] border-[#1f1f1f] items-center gap-4'>
                                    <button className={buttonStyle} onClick={handlePrevItem}>
                                          <FaArrowLeft />
                                    </button>
                                    <ul className='flex items-center gap-0.5'>
                                          {data &&
                                                Array(Math.ceil(data.length / showItems))
                                                      .fill(null)
                                                      .map((_, index) => {
                                                            return (
                                                                  <li
                                                                        className={`w-4 h-1 rounded-[100px] duration-300 ${index === activeItem
                                                                              ? 'bg-[#E50000] w-6'
                                                                              : 'bg-white w-4'
                                                                              }`}
                                                                        key={index}
                                                                  ></li>
                                                            )
                                                      })}
                                    </ul>
                                    <button className={buttonStyle} onClick={handleNextItem}>
                                          <FaArrowRight />
                                    </button>
                              </div>
                        </div>

                        {/* Carousel items */}
                        <div className='slider-wrapper grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-10 mt-10 lg:mt-20 grid items-center'>
                              {data
                                    ?.slice(
                                          activeItem * showItems,
                                          activeItem * showItems + showItems
                                    )
                                    .map(({ id, img, name }) => {
                                          return (
                                                <div
                                                      key={id}
                                                      className='p-3 lg:p-7.5 rounded-xl bg-[#1a1a1a] border-[#262626] relative overflow-hidden'
                                                >
                                                      <span className='w-10 h-10 bg-red-500 absolute top-0 left-0 rounded-4xl shadow-3xl shadow-red-900 blur-3xl'></span>
                                                      <img src={img} alt={name} />
                                                      <div className='text-sm lg:text-md 2xl:text-lg flex items-center justify-between text-white font-semibold md:hover:text-[#E50000]'>
                                                            {name} <FaArrowRight className='text-sm' />
                                                      </div>
                                                </div>
                                          )
                                    })}
                        </div>

                        {/* pagination for mobile devices */}
                        <ul className='flex justify-center w-full lg:hidden items-center gap-0.5'>
                              {data &&
                                    Array(Math.ceil(data.length / showItems))
                                          .fill(null)
                                          .map((_, index) => {
                                                return (
                                                      <li
                                                            onClick={() => setActiveItem(index)}
                                                            className={`w-7 h-1 mt-5 rounded-[100px] duration-300 ${index === activeItem
                                                                  ? 'bg-[#E50000] w-6'
                                                                  : 'bg-white w-4'
                                                                  }`}
                                                            key={index}
                                                      ></li>
                                                )
                                          })}
                        </ul>
                  </div>
            </div>
      )
}

const buttonStyle =
      'w-14 rounded-[0.5rem] text-md text-white bg-[#1f1f1f] flex justify-center items-center aspect-square'

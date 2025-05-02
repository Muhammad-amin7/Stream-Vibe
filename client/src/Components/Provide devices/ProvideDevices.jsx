import React from 'react'
import img1 from '../../assets/devices (1).svg'
import img2 from '../../assets/devices (2).svg'
import img3 from '../../assets/devices (3).svg'
import img4 from '../../assets/devices (4).svg'
import img5 from '../../assets/devices (5).svg'
import img6 from '../../assets/devices (6).svg'

export default function ProvideDevices() {

      // mock data
      const devicesdata = [
            { id: 1, title: "Smartphones", img: img1, description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" },
            { id: 2, title: "Tablet", img: img2, description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" },
            { id: 3, title: "Smart TV", img: img3, description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" },
            { id: 4, title: "Laptops", img: img4, description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" },
            { id: 5, title: "Gaming Consoles", img: img5, description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" },
            { id: 6, title: "VR Headsets ", img: img6, description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" },
      ]

      return (
            <section>
                  <div className='w-9/10 lg:w-4/5 m-auto mt-40'>
                        {/* top || title */}
                        <div>
                              <h1 className='text-xl lg:text-3xl 2xl:text-4xl text-white font-bold mb-2.5 lg:mb-3.5'>We Provide you streaming experience across various devices.</h1>
                              <p className='lg:w-9/10 text-sm lg:text-md 2xl:text-lg text-[#999]'>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
                        </div>

                        {/* bottom || content */}
                        <div className='mt-10 lg:mt-15 2xl:mt-20 grid grid-cols-1 2xl:grid-cols-3 gap-5 2xl:gap-7.5'>
                              {devicesdata.map(({ id, title, img, description }) => {
                                    return <div key={id} className="p-6 lg:p-10 2xl:p-12.5 rounded-xl bg-[linear-gradient(0deg,#0F0F0F,#0F0F0F),linear-gradient(221.52deg,rgba(229,0,0,0.5)-208.03%,rgba(229,0,0,0)41.32%)]" >
                                          <div className='flex items-center gap-4 mb-7 lg:mb-7.5'>
                                                <div className='p-2 lg:p-4 rounded-xl bg-[#141414] border-1 border-[#1F1F1F]'><img src={img} alt="" className='w-5 lg:w-7.5 2xl:w-10 aspect-square' /></div>
                                                <h2 className='text-lg lg:text-xl 2xl:text-2xl font-semibold text-white'>{title}</h2>
                                          </div>

                                          <p className='text-sm lg:text-md 2xl:text-lg text-[#999]'>{description}</p>
                                    </div>
                              })}
                        </div>
                  </div>
            </section >
      )
}

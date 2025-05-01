import React from 'react'

const imageModules = import.meta.glob('../../assets/slider images/entrySlider\\ \\(*\\).png', { eager: true })

const images = Object.entries(imageModules).map(([path, module], index) => ({
      id: index,
      img: module.default,
      name: path.split('/').pop().split('.')[0],
}))


export default function HeaderBackground() {
      // Ikkilantirish orqali loop effekt hosil qilamiz
      const firstRow = [...images.slice(0, 8), ...images.slice(0, 8), ...images.slice(0, 8), ...images.slice(0, 8)]
      const secondRow = [...images.slice(8, 16), ...images.slice(8, 16), ...images.slice(8, 16), ...images.slice(8, 16)]
      const threeRow = [...images.slice(16, 24), ...images.slice(16, 24), ...images.slice(16, 24), ...images.slice(16, 24)]
      const fourRow = [...images.slice(24, 32), ...images.slice(24, 32), ...images.slice(24, 32), ...images.slice(24, 32)]



      return (
            <div className="h-[80vh] lg:h-screen w-screen overflow-hidden space-y-6 absolute top-0 left-0 z-[-1]  flex flex-col items-stretch bg-[#141414]">
                  <div className='w-full h-full bg-[rgba(0,0,0,0.5)] absolute top-0 left-0 z-[1]'></div>
                  <div className="flex animate-scroll-left h-2/9 gap-4 w-max" style={{ animationDuration: "62s" }}>
                        {firstRow.map((item, index) => (
                              <img key={index} src={item.img} alt='' />
                        ))}
                  </div>
                  <div className="flex animate-scroll-right h-2/9 gap-4 w-max" style={{ animationDuration: "69s" }}>
                        {secondRow.map((item, index) => (
                              <img key={index} src={item.img} alt='' />
                        ))}
                  </div>
                  <div className="flex animate-scroll-left h-2/9 gap-4 w-max" style={{ animationDuration: "66s" }}>
                        {threeRow.map((item, index) => (
                              <img key={index} src={item.img} alt='' />
                        ))}
                  </div>
                  <div className="flex animate-scroll-right h-2/9 gap-4 w-max" style={{ animationDuration: "67s" }}>
                        {fourRow.map((item, index) => (
                              <img key={index} src={item.img} alt='' />
                        ))}
                  </div>
            </div>
      )
} 
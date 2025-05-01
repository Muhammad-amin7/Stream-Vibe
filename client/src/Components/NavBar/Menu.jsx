import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function Menu() {
      const [active, setActive] = useState(0)

      const data = [
            { id: 0, linkName: "Home", path: "/" },
            { id: 1, linkName: "Movies & Shows", path: "/Movies" },
            { id: 2, linkName: "Support", path: "/Support " },
            { id: 3, linkName: "Subscriptions", path: "/Subscriptions" },
      ]


      return (
            <div className=''>
                  <ul className='p-[10px] max-lg:p-[3px] rounded-xl border-4 max-lg:border-2 border-[#1f1f1f] flex gap-2 items-center bg-[#0f0f0f]'>
                        {data.map(({ id, linkName, path }) => {
                              return <li key={id} className={id === active ? `${liStyle} bg-[#1a1a1a]` : `${liStyle} hover:bg-[#1a1a1a90]`} onClick={() => setActive(id)}>
                                    <NavLink to={path}>{linkName}</NavLink>
                              </li>
                        })}
                  </ul>
            </div >
      )
}


const liStyle = `py-3 max-xl:py-2 px-6 max-2xl:px-4 max-2xl:py-[10px] max-xl:px-2 text-white font-medium rounded-lg  cursor-pointer text-[16px] max-xl:text-[12px] max-lg:text-[8px]`
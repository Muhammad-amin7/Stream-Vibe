import React from 'react'
import { contacts, footerMenues } from '../../Constants/data'
import { Link } from "react-router-dom"
import useFindSection from '../../Hooks/useFindSection'

export default function Footer() {
      const find = useFindSection()

      return (
            <footer className='w-full pt-22.5 pb-5 px-4 lg:py-20 2xl:pt-25 2xl:pb-10 lg:pt-25 mt-20 bg-[#0F0F0F] '>
                  {/* top  || menues */}
                  <div className='w-9/10 lg:w-4/5 m-auto grid grid-cols-2 lg:grid-cols-5'>
                        {footerMenues.map(({ id, title, items }) => {
                              return <ul key={id}>
                                    <p className='text-md lg:text-lg 2xl:text-xl font-semibold mb-4 lg:mb-5 2xl:mb-6  text-white'>{title}</p>
                                    {items.map((item) => (
                                          <Link key={item.id} onClick={() => find(item.path)}><li className='text-sm lg:text-md 2xl:text-lg mb-2 lg:mb-2.5 2xl:mb-3.5 font-medium text-[#999] lg:hover:text-white'>{item.title}</li></Link>
                                    ))}
                              </ul>
                        })}

                        <ul>
                              <p className='text-md lg:text-lg 2xl:text-xl font-semibold mb-4 lg:mb-5 2xl:mb-6  text-white'>Connect With Us</p>
                              <div className='flex gap-1'>
                                    {contacts.map(({ id, title, Icon }) => {
                                          return <li className='w-14 aspect-square flex items-center justify-center text-2xl text-white bg-[#262626] rounded-xl relative contactIcon cursor-pointer' key={id}>
                                                {<Icon />}
                                                <span className={`absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm capitalize bg-[#262626] px-2 py-1.5 rounded-md hidden iconName`}>{title}</span>
                                          </li>
                                    })}
                              </div>
                        </ul>
                  </div>

                  {/* bottom || decription */}

            </footer>
      )
}

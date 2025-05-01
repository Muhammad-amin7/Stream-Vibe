import React from 'react'
import Header from '../Components/Header (home)/Header'
import Slider from '../Layouts/Slider'
import { categoriesdata } from '../Constants/data'
import HeaderBackground from '../Components/HeaderBackground/HeaderBackground'

export default function Home() {
      return (
            <>
                  <Header />
                  <Slider
                        className='mt-50 lg:mt-80 2xl:mt-110'
                        title='Explore our wide variety of categories'
                        subtitle="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
                        data={categoriesdata}>
                  </Slider>
                  <HeaderBackground />
            </>
      )
}

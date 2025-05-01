import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'
import Home from '../Pages/Home'

export default function AppRouter() {
      return (
            <>
                  <NavBar />
                  <Routes>
                        <Route path="/" element={<Home />} />
                  </Routes>
            </>
      )
}

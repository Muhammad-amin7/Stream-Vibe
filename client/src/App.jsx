import React from 'react'
import { Router, Routes } from 'react-router-dom'
import { CONTEXT } from './Context/Context'

export default function App() {
  return (
    <CONTEXT.Provider element={{}}>
      <Routes>
        <Router path="/"></Router>
      </Routes>
    </CONTEXT.Provider>
  )
}

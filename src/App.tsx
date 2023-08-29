import { useEffect, useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home'

function App() {

 //const appID = 'b92246d0'
 //const apiKey = '2a81a6a3d27500a8a52fd52b5b3c81fd'




  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

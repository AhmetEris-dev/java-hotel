import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './page/Homepage'

function Routerpage() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path ='/' element ={<Homepage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routerpage
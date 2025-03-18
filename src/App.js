import React from 'react'
import About from './pages/About'
import Blog from './pages/Blog'
import Woobshop from './pages/Home'
import './App.css'

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SHOPPING from './pages/SHOPPING'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/' element={ <SHOPPING />} />
     
    </Routes>
    </BrowserRouter>
  )
}

export default App
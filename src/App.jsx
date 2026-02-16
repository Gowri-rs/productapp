import React from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Cart from './components/Cart'
import { Route, Routes } from 'react-router-dom'



const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </>
    
  )
}

export default App
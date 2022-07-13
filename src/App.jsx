import React , {useState , useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// components
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Products from './components/Products/Products'
import Contact from './components/contact/contact'
import Cart from './components/cart/cart'
import Item from './components/item/item'
import NFound from './components/notfound/nfound'

import './App.css'

const App = () => {
  const navigation = useNavigate();
  
  return (
      <>
        <div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Products' element={<Products/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/item' element={<Item/>} />
            <Route path='*' element={<NFound/>} />
          </Routes>
        </div>
      </>
  )
}

export default App
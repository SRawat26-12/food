import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Placeorder from './Pages/Placeorder/Placeorder'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import Verify from './Pages/verify/verify'
import MyOrder from './Pages/myorders/myOrder'

const App = () => {
  const [showLogin,setShowLogin]=useState(false);
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
       <Route path="cart" element={<Cart/>}/>
       <Route path="placeorder" element={<Placeorder/>}/>
       <Route path="/order" element={<Placeorder/>}/>
       <Route path="/verify" element={<Verify/>}/>
       <Route path="/myorder" element={<MyOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App




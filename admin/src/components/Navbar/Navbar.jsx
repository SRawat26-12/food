import React from 'react'
import "C:/Users/DELL/Desktop/Food/admin/src/components/Navbar/Navbar.css"
import { assests } from '../../assets/assests'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assests.fooddel} alt="" />
      <img className="profile" src={assests.admin} alt="" />
    </div>
  )
}

export default Navbar

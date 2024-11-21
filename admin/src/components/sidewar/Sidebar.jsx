import React from 'react'
import "C:/Users/DELL/Desktop/Food/admin/src/components/sidewar/Sidebar.css"
import { assests } from '../../assets/assests'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
     <div className="sidebar-options">
        <NavLink to="add" className="sidebar-option">
            <img src={assests.add_icon}/>
        <p>Add Items</p>
        </NavLink>
        <NavLink to="list" className="sidebar-option">
            <img src={assests.order_icon}/>
        <p>List Items</p>
        </NavLink>
        <NavLink to="orders" className="sidebar-option">
            <img src={assests.order_icon}/>
        <p>Orders</p>
        </NavLink>
     </div>

    </div>
  )
}

export default Sidebar

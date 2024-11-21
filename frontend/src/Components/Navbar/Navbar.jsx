import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom";
import "C:/Users/DELL/Desktop/Food/frontend/src/Components/Navbar/Navbar.css"
import { RiShoppingBasketFill } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { assests } from '../../assests/assests'
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState("home");
    const {getTotalCartAmount,token,setToken}=useContext(StoreContext)
   const navigate=useNavigate();
    const logout=()=>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/");
   } 
   return (
    <div className='navbar'>
    <Link to="/"><img src={assests.fooddel}  className="logo"/> </Link>
   
    <ul className="navbar-menu">
      <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
      <a href="#explore-menu" onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
      <a href="#app-download" onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
      <a  href="#footer" onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>  
    </ul>
    <div className="navbar-right">
    <IoSearchSharp style={{width:"40px",height:"30px",color:"#49557e"}} />
      <div className="navbar-search-icon">
      <Link to="/cart"><RiShoppingBasketFill style={{width:"50px",height:"30px", color:"#49557e"}}/></Link>
        <div className={getTotalCartAmount()===0?"":"dot"}>
            
        </div>
        {!token? <button  onClick={()=>setShowLogin(true)}>sign in</button>
         :<div className="navbar-profile">
          <img src={assests.profile}/>
          <ul className="navbar-profile-dropdown">
            <li><img src={assests.bag}/><p>Orders</p></li>
            <hr/>
            <li onClick={logout}> <img  style={{width:"20px"}} src={assests.logout} /><p>Logout</p> </li>
          </ul>
        </div>}
        </div> 
       
    </div>
   </div>
  )
}

export default Navbar

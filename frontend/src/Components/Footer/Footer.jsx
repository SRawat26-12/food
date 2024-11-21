import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import "C:/Users/DELL/Desktop/Food/frontend/src/Components/Footer/Footer.css"
import { assests } from '../../assests/assests';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <img src={assests.fooddel} style={{width:"50px"}}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti saepe reiciendis in vel voluptas quibusdam ex nihil aliquid consequatur impedit.     </p>

       
            <div className="footer-social-icon">
            <FaFacebook className='img'/>
            <AiFillTwitterCircle className='img'/>
            <FaLinkedin className='img' />
            </div>
            </div>
            <div className="footer-content-center">
               <h2>COMPANY</h2>
               <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
                </ul>  
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-22-333-444</li>
                    <li>contact@gmail.com</li>
                    </ul>    
             </div>
             <hr/>
           <p className="footer-copyright">Copyright 2024.All rights reserverd</p>
           <hr/>
        </div>
      
    </div>
  )
}

export default Footer

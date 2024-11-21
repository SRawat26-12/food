import React, {  useState,useContext } from 'react'
import "C:/Users/DELL/Desktop/Food/frontend/src/Components/LoginPopup/LoginPopup.css"
import { assests } from '../../assests/assests';
import axios from "axios";
import { StoreContext } from '../../context/StoreContext';
const LoginPopup = ({setShowLogin}) => {
  const {token,setToken}=useContext(StoreContext)  
  const {url}=useContext(StoreContext);
  const [currState,setCurrState]=useState("Login");
  const [data,setData]=useState({
    name:"",
    email:"",
    password:""
  })
  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData(values=>({...values,[name]:value}))
  }
  const onLogin=async(e)=>{
     e.preventDefault();
     let newUrl=url;
     if(currState=="Login"){
        newUrl+="/api/user/login"
     }
     else{
      newUrl+="/api/user/register"
     }
     const response=await axios.post(newUrl,data);
      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
      setShowLogin(false)
      }
      else{
        alert(response.data.message);
      }
    }
  
  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className="login-popup-title">
            <h2>{currState}</h2>
           <img style={{width:"50px"}} onClick={()=>setShowLogin(false)} src={assests.cross}/>
        </div>
        <div className="login-popup-input">
            {currState==="Login"?<></>:<input  name="name" onChange={handleChange} value={data.name} type="text" placeholder='Your name' required /> }
           
           <input name="email" onChange={handleChange} value={data.email} type="email"  placeholder='Your email' required />
           <input name="password" onChange={handleChange} value={data.password} type="password"  placeholder='Your password' required />
       
        </div>
        
        <button type="submit">{currState==="sign up"?"Create account":"Login"}</button>
      <div className="login-popup-condition">
        <input type="checkbox" requires/>
        <p>By containing,i agree to the terms of use &privacy policy</p>
      </div>
      {currState==="Login"? <p>Create a new account?<span onClick={()=>setCurrState("sign up")}>Click here</span></p>:     
      <p>Already have an account<span  onClick={()=>setCurrState("Login")}>Login here</span></p>}

      </form>
    </div>
  )
}

export default LoginPopup

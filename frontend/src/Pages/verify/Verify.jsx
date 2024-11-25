import React, { useContext } from 'react'
import "C:/Users/DELL/Desktop/Food/frontend/src/Pages/verify/verify.css"
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
const Verify = () => {
  const [searchParams,setSearchParams]=useSearchParams();
  const success=searchParams.get("success")
  const orderId=searchParams.get("orderId")
  const navigate=useNavigate();
  const {url}=useContext(StoreContext);
const verifyPayment=async()=>{
    const response=await axios.post(url+"/api/color/verify",{success,orderId});
if(response.data.success){
    navigate("/myorders");
}
else{
    navigate("/")
}
}
useEffect(()=>{
    verifyPayment();
},[])
    return (
    <div className='verify'>
      <div className="spinner">
        
        </div>  
      
    </div>
  )
}

export default Verify
import React from 'react'
import "C:/Users/DELL/Desktop/Food/admin/src/pages/orders/Orders.css"
import { useEffect } from 'react';
import axios from "axios";
const Orders = ({url}) => {
  const [orders,setOrders]=useState([]);
  const fetchAllOrders=async()=>{
const response=await axios.get(url+"/api/order/list")
if(response.data.success){
  setOrders(res.data.data);

}  
else{
alert("error")
}
}
const statusHandler=async()=>{
  const response=await axios.post(url+"/api/order/status",{
    orderId,
    status:e.target.value
  })
  if(response.data.success){
    await fetchAllOrders();
  }
}
useEffect(()=>{
fetchAllOrders();
},[])
  return (
    <div className='order add'>
      <h3>Order  Page</h3>
      <div className="order-list">
        {orders.map((order,index)=>{
          <div key={index} className="order-item">
           <img src="" alt="" />
           <div>
            <p className="order-item-food">
              {order.items.map((item,index)=>{
                if(index===order.items.length-1){
                  return item.name+" x"+item.quantity;
                }
                else{
                  return item.name+" x"+item.quantity+" ,"
                }
              })}
            </p>
            <p className='order-item-name'>
           {order.address.firstName+" "+order.address.lastName}
            </p>
          <div className="order-item-address">
            <p>
              {order.address.street+","}
            </p>
            <p>{order.address.city+","+order.address.state+" ,"+order.address.country+" ,"+order.address.zipcode}</p>
          </div>
          <p className="order-item-phone">{order.address.phone}</p>
           </div>
           <p>Items:{order.items.length}</p>
          <p>${order.amount}</p>
          <select onChange={(e)=>statusHandler(e,order_id)} value={order.status} >
            <option value="Food processing">Food processing</option>
            <option value="Out for delivery">Out for delivery</option>
            <option value="Delivered">Delivered</option>
          </select>
          </div>
        })}

      </div>
    </div>
  )
}

export default Orders

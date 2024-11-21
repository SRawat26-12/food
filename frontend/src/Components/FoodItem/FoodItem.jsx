import React, { useContext } from 'react'
import "C:/Users/DELL/Desktop/Food/frontend/src/Components/FoodItem/FoodItem.css"
import { assests } from '../../assests/assests'
import { IoIosRemove } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { StoreContext } from '../../context/StoreContext';
const FoodItem = ({id,name,price,description,image}) => {

  const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext)
    return (
    <div className='food-item'>
     <div className="food-item-img-container">
        <img className='food-item-image' src={url+"/images/"+image} />
        {!cartItems[id]?<IoIosAdd className='add' onClick={()=>addToCart(id)} />:<div className='food-item-counter'>
          <IoIosRemove className='remove' onClick={()=>removeFromCart(id)}/>
            <p>{cartItems[id]}</p>
            <IoIosAdd  onClick={()=>addToCart(id)} />
          </div>
        }
        </div>
       
        <div className="food-item-info">
         <div className="food-item-name-rating">
            <p>{name}</p>
            <img  src={assests.ratings}/>
            </div> 
            <p className="food-item-desc">
             {description}   </p>  
             <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem

import { createContext,useState,useEffect } from "react";
import axios from "axios";
export const StoreContext=createContext(null)
const StoreContextProvider=(props)=>{
   const [token,setToken]=useState("")
   const url="http://localhost:4000"
   const [food_list,setFoodList]=useState([]);
   const [cartItems,setCartItems]=useState({});
   const addToCart=async(itemId)=>{
      if(!cartItems[itemId]){
         setCartItems((prev)=>({...prev,[itemId]:1}))
      }
      else{
         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
      }
      if(token){
         await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
      }
   }
   const removeFromCart=async(itemId)=>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
   if(token){
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
   }
   }
   const getTotalCartAmount = () => {
      let totalAmount = 0;
    
      for (const item in cartItems) {
        if (cartItems[item] > 0) {
          // Ensure matching types between `item` and `product.id`
          const itemInfo = food_list.find((product) => product.id === parseInt(item));
    
          if (itemInfo) {
            totalAmount += itemInfo.price * cartItems[item];
          } else {
            console.warn(`Product with ID ${item} not found in food_list.`);
          }
        }
      }
    
      return totalAmount;
    };
    
  const fetchFoodList=async()=>{
   const response=await axios.get(url+"/api/food/list")
   setFoodList(response.data.data)
  }
  const loadCartData=async(token)=>{
   const response=await axios.post(url+"/api/cart/get",{},{headers:{token}})
    setCartItems(response.data.cartData);
}
useEffect(() => {
   const loadCartData = async (token) => {
     try {
       await fetchFoodList(); // Load food list
       if (token) {
         setToken(token);
         await loadCartData(token); // Load cart data
       }
     } catch (error) {
       console.error("Error loading data:", error);
     }
   };
 
   const token = localStorage.getItem("token");
   loadCartData(token);
 }, []);
   const contextValue={
      food_list,
      cartItems,
      setCartItems,
      addToCart,
      removeFromCart,
      getTotalCartAmount,url,
      token,
      setToken
   }
   return(
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
   ) 
}
export default StoreContextProvider;
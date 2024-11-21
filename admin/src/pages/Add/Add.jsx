import React, {  useState } from 'react'
import "C:/Users/DELL/Desktop/Food/admin/src/pages/Add/Add.css"
import { assests } from '../../assets/assests'
import axios from "axios";
import { toast } from 'react-toastify';

const Add = ({url}) => {
   
    const [data,setData]=useState({
        name:"",
        description:"",
        price:"",
        category:"salad"
    })
    const [image,setImage]=useState(false);
    
    const onChange=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      setData(data=>({...data,[name]:value}))
    }
   
    const onSubmit=async(e)=>{
      e.preventDefault();
      const formData=new FormData();
      formData.append("name",data.name);
      formData.append("description",data.description);
      formData.append("price",Number(data.price));
      formData.append("category",data.category);
      formData.append("image",image)
      const response=await axios.post(`${url}/api/food/add`,formData)
        if(response.data.success){
             setData({
                name:"",
                description:"",
                price:"",
                category:"salad"
             })
             setImage(false);
             toast.success(response.data.message);
        }
        else{
            toast.error(response.data.message)
        }
    }

  return (
    <div className='add'>
      <form onSubmit={onSubmit} className='flex-col'>
        <div className="add-img-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
                <image src={image?URL.createObjectURL(image):assests.upload}/>
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image"  required />
        </div>
        <div className="add-product-name flex-col">
            <p>product name</p>
            <input onChange={onChange}  value={data.name} type="text" name='name' placeholder="Type here" />

        </div>
        <div className="add-product-description flex-col">
            <p>Product description</p>
            <textarea onChange={onChange}  value={data.description} name="description"  rows="6" placeholder='write content here' required></textarea>
        </div>
       <div className="add-category-price">
        <div className="add-category flex-col">
          <p>Product category</p>
          <select onChange={onChange}   name="category" >
            <option value="Salad">Salad</option>
            <option value="Rolls">Rolls</option>
            <option value="Desert">Desert</option>
            <option value="Sandwich">Sandwich</option>
            <option value="Cake">Cake</option>
            <option value="Pure veg">Pure veg</option>
            <option value="Pasta">Pasta</option>
            <option value="Noodels">Noodles</option>
          </select>
        </div>
        <div className="add-price flex-col">
            <p>Product price</p>
            <input onChange={onChange}  value={data.price} type="Number" name="price" placeholder='$20'/>
        </div>
       </div>
      <button type="submit" className='add-button'>ADD</button>
      </form>
    </div>
  )
}

export default Add

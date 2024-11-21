import mongoose from "mongoose";
const foodSchema=new mongoose.Schema({
    name:{type:String,require:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,require:true},
    category:{type:String,require:true}

})
const foodModel=mongoose.model.food||mongoose.model("food",foodSchema);
export default foodModel;
import mongoose from "mongoose";
export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://shivamrawat1053:aWiuQ6xrpTMrH6bc@cluster0.dqgp8.mongodb.net/food-del').then(()=>{
        console.log("Database connected!!!");
    })
}
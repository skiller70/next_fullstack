import mongoose from "mongoose";



export const connectMongo = async()=>{
const db = await mongoose.connect("mongodb+srv://skiller007:qjGaGJXD64NlPZOm@cluster0.mbaya.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
   
}
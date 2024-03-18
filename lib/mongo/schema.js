import mongoose from "mongoose";


const Schema = mongoose.Schema;


const user = new Schema({
    name: String,
    age:Number,
    userId:String
});


export const USER = mongoose.model("USER", user);


import mongoose, { Mongoose } from "mongoose";

const userSchema = mongoose.Schema({
    firstName : {type : String, required : true},
    lastName : {type : String, required : true},
    email : {type : String, required : true},
    number : {type : Number, required : true},
    password : {type : String, required : true},
    dob : {type : Array, required : true},
    gender : {type : String, required : true}, 
    token : {type : String, required : true},
})

const userModel =  mongoose.model('UserData', userSchema);

export default userModel;

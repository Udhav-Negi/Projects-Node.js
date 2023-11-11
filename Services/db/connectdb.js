import mongoose from "mongoose";

const connectdb = async()=>{
    try{
        const str = process.env.STR;
        await mongoose.connect(str);
        console.log('connected')
    }
    catch(error)
    {
        console.log('error in connection')
    }
}

export default connectdb;
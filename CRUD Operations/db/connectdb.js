import mongoose from "mongoose";
const connectDb = async ()=>{
    try{
        const url = process.env.URL;
        await mongoose.connect(url);
        console.log('connected')
    }
    catch(error)
    {

    }
}
export default connectDb;


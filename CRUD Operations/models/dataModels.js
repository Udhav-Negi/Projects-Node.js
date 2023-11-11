import mongoose from "mongoose";

const dataSchema = mongoose.Schema({
    name : {type : String, required : true},
    age : {type : Number, required : true},
    fees : {type : Number, required : true},
})

// const dataModel = mongoose.model('information', dataSchema);
const dataModel = mongoose.model('users', dataSchema);

export default dataModel;
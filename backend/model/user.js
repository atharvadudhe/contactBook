import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String, 
        required: true,
        unique: true
    },
    address:{
        type: String
    },
    note: {
        type: String
    }
}, {timestamps: true}
);

const ContactBook = mongoose.model('ContactBook', schema);
export default ContactBook;
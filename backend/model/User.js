import mongoose from "mongoose";
const Schema = mongoose.Schema;

//These fields will be stored in the collections
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    blogs: [{type: mongoose.Types.ObjectId,
             ref:"Blog",
            required:true}],
    
});

export default mongoose.model("User", userSchema);//collection name User and adding this schema to it
//In mongo it will be store as 'users' mongoose.Types.ObjectId.isValid('your id here');
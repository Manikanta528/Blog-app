const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },password:{
        type:String,
        required:true,
    },profilePic:{
        type:String,
        default:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1653049284~exp=1653049884~hmac=1fbe63ca66f2bc4c3b12ce3245c90a1d41dfdb1a1e6dcf666236024913c9fbc3&w=1380",
    },
   },
   {timestamps: true}
);

module.exports = mongoose.model("User",UserSchema);
import mongoose from "mongoose";
 
const chatSchema = new mongoose.Schema({  //Schema is nothing but a blueprint
    from : {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        maxLength: 50 //contraint
    },
    created_at: {
        type: Date,
        required: true
    },
});


const Chat = mongoose.model("Chat", chatSchema);

export default Chat;
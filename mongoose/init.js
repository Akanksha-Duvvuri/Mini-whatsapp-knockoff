import mongoose from "mongoose";
import Chat from "./models/chat.js";

main().then(() => {
    console.log("connection successful")
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allChats = [
    {
    from: "Neha",
    to: "Akanksha",
    msg: "Hey Ak! Send me your answer sheet",
    created_at: new Date()   //default function - creates a random date and time (UTC) and saves it in the var
    },
    {
    from: "rohit",
    to: "mohit",
    msg: "Teach me JavaScript",
    created_at: new Date()   //default function - creates a random date and time (UTC) and saves it in the var
    },
    {
    from: "amit",
    to: "sumith",
    msg: "I hate webdev",
    created_at: new Date()   //default function - creates a random date and time (UTC) and saves it in the var
    },
    {
    from: "sudheer",
    to: "nihitha",
    msg: "Target 50",
    created_at: new Date()   //default function - creates a random date and time (UTC) and saves it in the var
    },
];


Chat.insertMany(allChats);
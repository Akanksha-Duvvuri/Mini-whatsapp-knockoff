import express from "express";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import path from "path";
import Chat from "./models/chat.js"

const app = express();
const port = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));


main().then(() => {
    console.log("connection successful")
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.get("/chats", async (req,res) => {
    let chats = await Chat.find();
    console.log(chats);
    // res.send("working");
    res.render("index.ejs", { chats });
})

app.listen(port, "127.0.0.1", () => {
    console.log(`listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("get request working");
})


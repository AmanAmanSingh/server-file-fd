const express = require("express");
const app = express();
const PORT = 3003
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//ALL ROUTES 
const instaPostRoute = require("../routes/insta-post")
const loginRoute = require("../routes/login");

app.use(express.json());

dotenv.config();
mongoose.set('strictQuery', false);


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected sucessfully");
}, (e) => {
    console.log(e.message)
})


app.get('/', (req, res) => {
    res.status(200).json({
        message: "working fine!!"
    });
})


app.use("/", instaPostRoute);
app.use("/", loginRoute);
app.listen(PORT, () => { console.log(`server started at ${PORT}`) })
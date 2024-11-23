const express = require("express");
const mongoose = require("mongoose");
const cookiePaser = require("cookie-parser");
const app = express();


const PORT = 8080;

app.use(cookiePaser());
app.use("/", require("./routes/authRoute"));

app.listen(PORT, ()=>{
    console.log(`App is Running at Port: ${PORT}`);
})
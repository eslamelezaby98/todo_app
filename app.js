const express = require("express")
const mongoose = require("mongoose")
const tasksRoute = require("./routes/task_routes")
require('dotenv').config()

const app = express()
const port = 3000;

app.use(express.json())

const uri = process.env.MONGO_URI;
console.log(uri)
mongoose.connect(uri).then(() => {
    console.log("connect with db")

}).catch((err) => {
    console.log("faild to connect with db : " + err)
});


app.use(tasksRoute)


app.listen(port, () => {
    console.log("Server start listen")
})
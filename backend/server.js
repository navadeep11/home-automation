const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const cors = require('cors')
const devicesRouter=require('./Api')
let url ="mongodb+srv://gujjulasainavadeepreddy:12345@cluster0.lnk81ru.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


//========== cors Integration ===============

app.use(cors({origin:"*"}))

//====== Body-Parser Integration =============

app.use(bodyParser.urlencoded({ extended: true, limit: '10mb'  }))
app.use(bodyParser.json({ limit: "10mb" }));

// ========== Data base connection =========

mongoose.connect(url).then(()=>{
    console.log("db is connected")
}).catch((err) => {
    console.error('DB connection error:', err);
})


app.use('/',devicesRouter)


app.listen("5000")

const express=require('express');
const app = express()
require("dotenv").config();
const mongoose = require('mongoose');
const cors = require('cors');
// mongoose.connect('mongodb://localhost:27017/test');

app.use(express.json())

mongoose.connect(process.env.DB_URL, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(cors())

const routes=require('./routes/crudRoute')
const userroute=require('./routes/userRoute')
app.use('/api',routes)
app.use('/user',userroute)

app.listen(process.env.PORT || 4000,()=>{
    console.log('server is running hurreh')
})







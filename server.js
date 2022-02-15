const express=require('express');
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
// mongoose.connect('mongodb://localhost:27017/test');

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(cors())

const routes=require('./routes/crudRoute')
app.use('/api',routes)

app.listen(4000,()=>{
    console.log('server is running hurreh')
})







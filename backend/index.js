require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes/routes')

app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path , req.method);
    next()
})
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MANGO_DB)
.then(()=>{
    app.listen(process.env.PORT)
})
.catch((error)=>{
    console.log(error);
})


app.use('/api/username' , routes)

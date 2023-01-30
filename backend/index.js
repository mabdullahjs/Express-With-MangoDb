require('dotenv').config()

const express = require('express');
const app = express();
const routes = require('./routes/routes')

app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path , req.method);
    next()
})


app.use('/api/username' , routes)

app.listen(process.env.PORT)
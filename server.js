const express = require('express')
const serverStatic = require('serve-static');
const path = require('path')
const cors = require('cors')
const mysql = require('mysql')
const {createPool} = require('mysql')
const bodyParser = require('body-parser');
const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());

const test = require('./routes/api/test')
app.use('/api/test', test);

const users = require('./routes/api/users')
app.use('/api/users', users);

const login = require('./routes/api/login')
app.use('/api/login', login);

const reservation = require('./routes/api/reservation')
app.use('/api/reservation', reservation);

if(process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static(__dirname + '/dist'));
    app.get(/^((?!(api)).)*$/, 
    (req,res)=>res.sendFile(__dirname + '/dist/index.html'))
}

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Currently running on port ${port}`)
})  
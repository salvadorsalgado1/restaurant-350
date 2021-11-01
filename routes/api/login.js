const express = require('express');
const mysql = require('mysql');
const router = express.Router();

const db = mysql.createPool({
    connectionLimit:10,
    host:'us-cdbr-east-04.cleardb.com',
    user:'b0aaff2b55accc',
    database:'heroku_a50bb988a66073c',
    password:'8f1ab2bb'
  })
 

  router.get('/:email', (req, res)=>{
    const sqlLogin = "SELECT userPassword, guestID FROM heroku_a50bb988a66073c.guest where email = ?";
    //const testsql  = "SELECT * FROM heroku_a50bb988a66073c.guest;"
    let inputEmail = req.params.email;
    console.log(inputEmail);
     db.query(sqlLogin, inputEmail, (err, result)=>{
         res.send(result);

    })

})

router.get('/accept/:id', (req, res)=>{
    const sqlAccept = "CALL heroku_a50bb988a66073c.getUser(?);";
    let id = req.params.id;
    db.query(sqlAccept, id, (err, result)=>{
        res.send(result);
    })

})
  
  module.exports = router;
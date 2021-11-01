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

  router.get('/users', (req, res)=>{
      const sqlGetAll = "SELECT * FROM heroku_a50bb988a66073c.reservation;";
      db.query(sqlGetAll, (err, result)=>{
          res.send(result);
        
      })

  })

  router.get('/', (req, res)=>{
    const sqlGetAll = "CALL heroku_a50bb988a66073c.getUser(2);";
    db.query(sqlGetAll, (err, result)=>{
        res.send(result);
    })
})
  

  module.exports = router;
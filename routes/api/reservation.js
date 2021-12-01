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

  router.get('/', (req, res)=>{
    const sqlGetAllRes = "SELECT guest.guestID, guest.fullName, guest.phoneNumber, reservation.resID, reservation.partySize, reservation.resDate, reservation.resEntered FROM heroku_a50bb988a66073c.guest INNER JOIN heroku_a50bb988a66073c.reservation ON guest.guestID = reservation.guestID ORDER BY resDate ASC;";
    db.query(sqlGetAllRes, (err, result)=>{
        res.send(result);
    })
})

router.delete('/delete/:id', (req, res)=>{
  const sqlDeleteReservation = "DELETE FROM heroku_a50bb988a66073c.reservation WHERE reservation.resID = ?";
  let id = req.params.id;
  db.query(sqlDeleteReservation, id, (err, result)=>{
      res.send(result);
  })
})

  module.exports = router;

  
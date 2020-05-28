var express = require('express');
var router = express.Router();
const Ages = require('../public/data/data.js'); //.js 

router.route('/')
   .get((req, res) => {
     return res.json(Ages);
  });

router.route('/age')
   .get((req, res) => {
    let age = Ages.filter(person => person.car === "Mazda")
    return res.json(age);
   });

module.exports = router;
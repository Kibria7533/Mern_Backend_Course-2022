const express = require("express");
const router = express.Router();
const {registration,login}= require('../Controller/UserController');
router.post('/',registration)
router.post('/login',login)
router.post('/get',(req,res)=>{
    
})

module.exports = router;

const userModel = require("../models/user");
const jwt = require('jsonwebtoken');
const registration= async (req, res) => {
    const cr = new userModel({
        name: req.body.name,
        email: req.body.email,
        pass: req.body.pass
      });
    
      try {
        const a1 = await cr.save();
        res.json({success:true, message: 'Succesfully registred' });
      } catch (err) {
        res.send("Error");
      }
  }


  const login= async (req, res) => {
    let existence= await userModel.findOne({email:req.body.email});
    if(!existence){
        return res.status(404).json({success:false, message:"Your credentials is wrong"})
    }
    let user=await userModel.findOne({email:req.body.email});

   let jwtToken= jwt.sign({
        id:user._id,
        data : req.body.email
      }, 'mysecret', { expiresIn: '1h' });

      res.send({token:jwtToken});

  }
  module.exports={
    login,
    registration
  }
const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const userSchema = new Schema({
    name:  String, 
    email: String,
    pass:   String,
    crud:[
        {
          type: mongoose.Types.ObjectId,
          ref: "crud"
        }
      ]
  });

  
  module.exports = mongoose.model('user',userSchema)
const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const crudSchema = new Schema({
    title:  String, 
    author: String,
    body:   String,
    user:[
      {
        type: mongoose.Types.ObjectId,
        ref: "user"
      }
    ]
  });

  
  module.exports = mongoose.model('crud',crudSchema)
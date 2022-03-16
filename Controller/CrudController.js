const crudModel = require("../models/crud");
const UserModel = require("../models/user");
const Add=async (req, res) => {  
    const cr = new crudModel({
      title: req.body.title,
      author: req.body.author,
      body: req.body.body,
    });
  
    try {
      const a1 = await cr.save();
      console.log(req.id,'dfsd')
      await UserModel.updateOne({
        _id: req.id
      }, {
        $push: {
          crud: a1._id
        }
      });



      res.json({success:true, message: 'Succesfully added crud' });
    } catch (err) {
      res.send("Error");
    }
  }

  const deleteController=async (req, res) => {
    console.log(req.params.id);
    let data = await crudModel.deleteOne({ _id: req.params.id });
    res.send({ msg: "deleted", data: data });
  }

  const updateController=async (req, res) => {
    console.log(req.params.id, req.body);
  
    try {
      let up = await crudModel.findByIdAndUpdate({_id:req.params.id},{
        title: req.body.title,
        author: req.body.author,
        body: req.body.body,
      });
  
  
      res.send({ info: "updated" ,up: up});
    } catch (err) {
      res.send({ info: "error ocuured" });
    }
  }

const getSingle=async (req, res) => {
    let data = await crudModel.findOne({ _id: req.params.id});
    res.send(data);
  }
const getAll= async (req, res) => {
  console.log(req.data,req.id)
    let data = await crudModel.find();
    res.send({j:data,l:req.data});
  }
  module.exports={
      Add,
      deleteController,
      updateController,
      getSingle,
      getAll
  }
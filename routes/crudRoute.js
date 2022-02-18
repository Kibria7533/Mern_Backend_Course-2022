const express = require("express");
const router = express.Router();
const crudModel = require("../models/crud");

router.get("/show", async (req, res) => {
  let data = await crudModel.find();
  res.send(data);
});


router.get("/showSIngle/:id", async (req, res) => {
  let data = await crudModel.findOne({ _id: req.params.id});
  res.send(data);
});
router.post("/save", async (req, res) => {
  console.log(req.body);

  const cr = new crudModel({
    title: req.body.title,
    author: req.body.author,
    body: req.body.body,
  });

  try {
    const a1 = await cr.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.delete("/delete/:id", async (req, res) => {
  console.log(req.params.id);
  let data = await crudModel.deleteOne({ _id: req.params.id });
  res.send({ msg: "deleted", data: data });
});

router.post("/update/:id", async (req, res) => {
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
});

module.exports = router;

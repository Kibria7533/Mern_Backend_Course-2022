const express = require("express");
const router = express.Router();
const crudModel = require("../models/crud");

router.get("/show", async (req, res) => {
  let data= await crudModel.find();
  res.send(data)
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

router.get("/delete", (req, res) => {
  res.send({ ff: "dddd" });
});

router.get("/update/:id", (req, res) => {
  res.send({ ff: "dddd" });
});

module.exports = router;

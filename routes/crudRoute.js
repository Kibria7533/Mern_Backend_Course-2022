const express = require("express");
const router = express.Router();
const {Add,deleteController,updateController,getSingle,getAll}= require('../Controller/CrudController');
const { fromCeck } = require("../Middleware/crudMiddle");
const { body } = require('express-validator')

router.get("/show",getAll);

router.get("/showSIngle/:id", getSingle);

router.post("/save",
body('title').not().isEmpty().withMessage("Title  is required."),
body('author').isLength({ min: 3 }).withMessage("Author name cant be less than three characters"),
fromCeck,Add);

router.delete("/delete/:id", deleteController);

router.post("/update/:id", updateController);

module.exports = router;

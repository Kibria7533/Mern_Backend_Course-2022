const express = require("express");
const router = express.Router();
const {Add,deleteController,updateController,getSingle,getAll}= require('../Controller/CrudController');
const { fromCeck } = require("../Middleware/crudMiddle");
const { body } = require('express-validator')
const checkLogin=require("../Middleware/Auth")
router.get("/show",checkLogin,getAll);

router.get("/showSIngle/:id",checkLogin, getSingle);

router.post("/save",checkLogin,
body('title').not().isEmpty().withMessage("Title  is required."),
body('author').isLength({ min: 3 }).withMessage("Author name cant be less than three characters"),
fromCeck,Add);

router.delete("/delete/:id",checkLogin, deleteController);

router.post("/update/:id", checkLogin,updateController);

module.exports = router;

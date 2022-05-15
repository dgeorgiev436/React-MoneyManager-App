const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Expense = require("../../models/Expense");
const auth = require("../../middleware/auth");
const {check, validationResult} = require("express-validator");

// @route 	POST api/expense
// @desc 	Add an expense
// @access 	Private


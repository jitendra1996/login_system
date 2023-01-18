const express = require("express");

const { getLoginPage } = require('../controllers/login');
const { getHomePage } = require('../controllers/homepage');
const { getRegistrationPage } = require("../controllers/registration");
const { getProfilePage } = require('../controllers/profilePage');

const router = express.Router();

router.get("/", getLoginPage);

router.post("/homepage", getHomePage);

router.post("/profilepage", getProfilePage);

router.get('/registration', getRegistrationPage);
module.exports = router;
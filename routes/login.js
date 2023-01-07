const express = require("express")

const { getLoginPage } = require('../controllers/login');
const { getHomePage } = require('../controllers/homepage');
const { getRegistrationPage } = require("../controllers/registration");

const router = express.Router();

router.get("/", getLoginPage);

router.post("/homepage", getHomePage);

router.get('/registration', getRegistrationPage);
module.exports = router;
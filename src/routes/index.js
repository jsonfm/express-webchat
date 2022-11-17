const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const router = express.Router();
const path = require("path");


router.get("/", isLoggedIn, (req, res) => {
    res.render("index.eta")
})

router.get("/register", (req, res) => {
    res.render("register.eta")
})

module.exports = router;
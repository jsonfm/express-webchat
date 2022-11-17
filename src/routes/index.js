const express = require("express");

const router = express.Router();
const path = require("path");

const views = path.join(__dirname, "/../views");


router.get("/", (req, res) => {
    res.render("index.eta")
})

router.get("/register", (req, res) => {
    res.render("register.eta")
})

module.exports = router;
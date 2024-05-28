const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/login", (req, res) => {
  req.session.user = req.body;
  res.render("index");
});

router.get("/check", (req, res) => {
  res.json({ message: req.session.user });
});

module.exports = router;

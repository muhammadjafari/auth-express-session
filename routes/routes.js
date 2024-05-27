const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: req.session.user });
});

router.post("/api", (req, res) => {
  req.session.user = req.query;
  res.json({ message: req.session.user });
});

module.exports = router;

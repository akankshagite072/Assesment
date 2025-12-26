const express = require("express");
const router = express.Router();
const { User } = require("../models");

/* ---------- LOGIN PAGE ---------- */
router.get("/login", (req, res) => {
  res.render("login");
});

/* ---------- REGISTER PAGE ---------- */
router.get("/register", (req, res) => {
  res.render("register");
});

/* ---------- REGISTER ---------- */
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    await User.create({ username, password });
    res.redirect("/login");
  } catch (err) {
    res.send("Username already exists");
  }
});

/* ---------- LOGIN ---------- */
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  console.log("LOGIN INPUT:", username, password);

  const user = await User.findOne({
    where: { username }
  });

  console.log("USER FROM DB:", user);

  if (!user || user.password !== password) {
    return res.send("Invalid credentials");
  }

  req.session.user = user.username;
  res.redirect("/");
});

/* ---------- LOGOUT ---------- */
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

module.exports = router;

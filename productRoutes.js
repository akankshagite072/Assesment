const express = require("express");
const router = express.Router();
const { Product, Inventory } = require("../models");
const auth = require("../middleware/auth");

// Inventory list
router.get("/", auth, async (req, res) => {
  const inventory = await Inventory.findAll({
    include: Product
  });
  res.render("inventory", { inventory });
});

// Add product page
router.get("/add-product", auth, (req, res) => {
  res.render("addProduct");
});

// Save product
router.post("/add-product", auth, async (req, res) => {
  const { name, casNumber, unit } = req.body;

  if (!name || !casNumber || !unit) {
    return res.send("All fields are required");
  }

  const existing = await Product.findOne({ where: { casNumber } });
  if (existing) {
    return res.send("CAS Number must be unique");
  }

  const product = await Product.create({
    name,
    casNumber,
    unit
  });

  // ✅ CORRECT foreign key
  await Inventory.create({
    ProductId: product.id,
    quantity: 0
  });

  res.redirect("/");
});

module.exports = router;

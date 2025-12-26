const express = require("express");
const router = express.Router();
const { Inventory, Product } = require("../models");
const auth = require("../middleware/auth");

// Inventory list
router.get("/", auth, async (req, res) => {
  const inventory = await Inventory.findAll({
    include: {
      model: Product,
      required: true
    }
  });

  res.render("inventory", { inventory });
});

// Update stock (IN / OUT)
router.post("/update-stock/:id", auth, async (req, res) => {
  const { amount, action } = req.body;
  const inventory = await Inventory.findByPk(req.params.id);

  if (!inventory) return res.redirect("/");

  const qty = parseFloat(amount);
  if (isNaN(qty) || qty <= 0) {
    return res.send("Quantity must be a positive number");
  }

  if (action === "IN") {
    inventory.quantity += qty;
  } else if (action === "OUT") {
    if (inventory.quantity - qty < 0) {
      return res.send("Stock cannot go below zero");
    }
    inventory.quantity -= qty;
  }

  await inventory.save();
  res.redirect("/");
});

module.exports = router;

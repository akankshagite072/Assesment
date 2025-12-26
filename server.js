console.log("SERVER FILE LOADED");

const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

const { sequelize } = require("./models");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");

const app = express();
const PORT = 4000;

/* ---------- VIEW ENGINE ---------- */
app.set("view engine", "ejs");

/* ---------- MIDDLEWARE ---------- */
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "inventory-secret",
    resave: false,
    saveUninitialized: false
  })
);

/* ---------- ROUTES ---------- */
app.use(authRoutes);
app.use(productRoutes);
app.use(inventoryRoutes);

/* ---------- SERVER ---------- */
sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log("\n🚀 Server running at:");
      console.log(`http://localhost:${PORT}\n`);
    });
  })
  .catch(err => {
    console.error("❌ Sequelize error:", err);
  });

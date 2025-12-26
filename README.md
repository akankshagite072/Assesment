Inventory Management System (Node.js)

A simple Inventory Management System built using Node.js, Express, Sequelize, SQLite, and EJS.
This project supports user authentication, product management, and stock tracking.

Features

User Login and Logout (session-based authentication)

Add chemical products

View inventory list

Increase and decrease stock (IN / OUT)

SQLite database (auto-created)

Simple UI using EJS

MVC-style project structure

Tech Stack

Backend: Node.js, Express

Database: SQLite with Sequelize ORM

Frontend: EJS, HTML, CSS

Authentication: express-session

Project Structure
inventory-management-node/
│
├── models/
│   ├── index.js
│   ├── User.js
│   ├── Product.js
│   └── Inventory.js
│
├── routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
│   └── inventoryRoutes.js
│
├── middleware/
│   └── auth.js
│
├── views/
│   ├── login.ejs
│   ├── inventory.ejs
│   └── addProduct.ejs
│
├── server.js
├── package.json
└── README.md

Installation and Setup
1. Clone or Download the Repository
git clone <repository-url>
cd inventory-management-node

2. Install Dependencies
npm install

3. Start the Server
node server.js


You should see:

Server running at:
http://localhost:4000

Open in Browser
http://localhost:4000

Login

User credentials are stored in the database.
Login is required to access the inventory pages.

Add Product

Each product contains:

Product Name

CAS Number (unique)

Unit of Measurement (KG / Litre / MT)

Once added, the product is automatically added to inventory with zero stock.

Update Stock

IN increases stock quantity

OUT decreases stock quantity

Stock cannot go below zero

Inventory updates are reflected immediately.

Logout

Logout button is available at the bottom of the inventory page.

Database Information

Database Type: SQLite

Database file is auto-created on first run

Tables used:

Users

Products

Inventories

No manual database setup is required.

Common Issues and Fixes
Localhost refused to connect

Ensure the server is running using node server.js

Verify the correct port number

Cannot read properties of null (reading 'name')

Occurs when inventory records do not have a linked product

Fixed using Sequelize required: true and EJS null checks

Port already in use

Change the port number in server.js:

const PORT = 5000;

Future Enhancements

User signup functionality

Stock movement history

Product deletion

Dashboard and reports

Improved UI styling

Author

Akanksha Gite
Inventory Management System – Node.js Project

License

This project is intended for learning and educational purposes.

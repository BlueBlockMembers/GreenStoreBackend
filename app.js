const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

// Enable CORS
app.use(cors());

require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });
  

app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connection Success");
});

app.use(express.json());
const fertilizerRoutes = require("./routes/fertilizer/Fertilizer.routes");
const CustomerRoutes = require("./routes/customer/Customer.routes");
const CartRoutes = require("./routes/cart/Cart.routes");
const LoginRoutes = require("./routes/customer/Login.routes");

app.use('/fertilizers', fertilizerRoutes);
app.use('/customers', CustomerRoutes);
app.use('/cart', CartRoutes);
app.use('/login', LoginRoutes);



app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
  });
  
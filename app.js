const express = require("express");
const createError = require("http-errors");
const morgan = require("morgan");
require("dotenv").config();
const dbConnection = require("./config/DB");

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: false }));
app.use(morgan("dev"));

dbConnection();

app.get("/", async (req, res, next) => {
  res.send({ message: "Awesome it works 🐻" });
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_URL);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type",
    "Authorization"
  );
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/api/product", require("./routes/product.route"));
app.use("/api/marketPlace", require("./routes/supermarketPrice.route"));
app.use("/api/seeds", require("./routes/seed.route"));
app.use("/api/tools", require("./routes/tool.route"));

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));

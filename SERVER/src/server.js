require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const userRoute = require("./Feature/user/user.route");
// const productRoute = require("./features/product/product.router");
// const cartRoute = require("./features/cart/cart.router");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRoute);
// app.use("/products", productRoute);
// app.use("/carts", cartRoute);

app.listen(PORT, async () => {
  //  let res= await connect().then(()=> console.log("connection"))
  await connect();
  console.log(`Listening at http://localhost:${PORT}`);
});

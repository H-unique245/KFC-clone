const express = require("express");
const Product= require("./product.model");
const app = express.Router();

app.get("", async (req, res) => {
  const { type } = req.params;
  try {
    let Products = await Product.find({type:type});
    res.send(Products);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// app.post("", async (req, res) => {
//   // const { image_url,price,title,user,quantity } = req.body;

//   try {
//     let cart = await Cart.create(req.body);

//     res.send({ token: `${cart.price}` });
//     // }
//   } catch (e) {
//     res.status(404).send(e.message);
//   }
// });

module.exports = app;

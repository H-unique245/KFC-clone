const express = require("express");
const Cart = require("./cart.model");
const app = express.Router();
const User = require("../user/user.model");

app.get("", async (req, res) => {
  try {
    let Items = await Cart.find();
    res.send(Items);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.post("", async (req, res) => {
  // const { image_url,price,title,user,quantity } = req.body;
  // const { user } = req.body;
  // let userOne = await User.findOne({ id:user });
  // res.send(userOne);

  try {
    let cart = await Cart.create(req.body);

    res.send({ token: `${cart.price}` });
    // }
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = app;

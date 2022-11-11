const express = require("express");
const Cart = require("./cart.model");
const app = express.Router();

// app.post("/add", async (req, res) => {
//   const { mobile } = req.body;
//   try {
//     let user = await User.findOne({ mobile });

//     if (user) {
//       res.send({
//         token: `${user.name}`,
//       });
//     }
//   } catch (e) {
//     res.status(404).send(e.message);
//   }
// });

app.post("/add", async (req, res) => {
  const { image,price,title } = req.body;

  try {
    let existingUser = await User.findOne({ mobile });
    // if (existingUser) {
    //   res.status(404).send("Cannot create an user with existing email");
    // } else {
    let cart = await Cart.create({
      image,
      price,
      title,
    });

    res.send({ token: `${cart.price}` });
    // }
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = app;

const express = require("express");
const User = require("./user.model");
const app = express.Router();

app.post("/login", async (req, res) => {
  const { mobile } = req.body;
  try {
    let user = await User.findOne({ mobile });

      if (user) {
       
      res.send({
        token: `${user.id}`,
      });
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
});

app.post("/singleuser", async (req, res) => {
  const { id } = req.body;
  try {
    let user = await User.findOne({ id });

    if (user) {
      res.send(user.name);
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
});


app.post("/signup", async (req, res) => {
  const { name, email, mobile } = req.body;

  try {
    let existingUser = await User.findOne({ mobile });
    // if (existingUser) {
    //   res.status(404).send("Cannot create an user with existing email");
    // } else {
      let user = await User.create({
        name,
        email,
        mobile,
      });

      res.send({ token: `${user.id}` });
    // }
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = app;

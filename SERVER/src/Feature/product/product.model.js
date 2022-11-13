const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: { type: String },
  title: { type: String },
  desc: { type: String },
  price: { type: Number },
  type: { type: String },
});

const Products = mongoose.model("product", productSchema);

module.exports = Products;

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({});

const Products = mongoose.model("product", productSchema);

module.exports = Products;

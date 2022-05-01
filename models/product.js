const mongoose = require("mongoose");
const Review = require("./review");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  price: {
    type: Number,
    min: 0,
    required: true,
  },
  desc: {
    type: String,
  },
  reviews: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Review",
    },
  ],
  stock: {
    type: Number,
    default: 0,
  },
  sold: {
    type: Number,
    default: 0,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

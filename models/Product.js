const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  stock: Number,
  product_image: String,
  title: String,
  tag: [String],
  short_description: String,
  long_description: String,
});

module.exports = mongoose.model('Product', productSchema);

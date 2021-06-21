const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const sortProducts = async (req, res) => {
  try {
    const sortType = req.params.sortType
    const products = await Product.find({}).sort({"price": sortType})
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const removeProductById = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const addProduct = async (req, res) => {
  try {
    const {name, description, price, countInStock, imageUrl} = req.body;
    const product = new Product({name, description, price, countInStock, imageUrl});

    await product.save();

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteProducts = async (req, res) => {
  try {
    await Product.deleteMany({});

    res.status(200).json({message: "Оплата прошла успешно!"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  deleteProducts,
  removeProductById,
  sortProducts
};

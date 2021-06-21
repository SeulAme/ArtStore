const express = require("express"); //подключение
const router = express.Router();
const {
  getProducts,
  getProductById,
  addProduct,
  deleteProducts,
  removeProductById,
  sortProducts
} = require("../controller/productControllers");

// /api/products....
router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/add", addProduct);
router.post("/delete", deleteProducts);
router.get("/sort/:sortType", sortProducts);
router.post("/remove/:id", removeProductById);

module.exports = router;

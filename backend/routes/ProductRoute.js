const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  delteProduct,
  getSingleProduct,
} = require("../controller/ProductController");
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
router
  .route("/product/:id")
  .put(updateProduct)
  .delete(delteProduct)
  .get(getSingleProduct);

module.exports = router;

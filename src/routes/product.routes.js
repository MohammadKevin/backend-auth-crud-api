const express = require("express");
const router = express.Router();

const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../controller/product.controller");

const { auth, isAdmin } = require("../middlewares/auth.middleware");

router.get("/", getAllProducts);
router.get("/:id", getProductById);

router.post("/", auth, isAdmin, createProduct);
router.put("/:id", auth, isAdmin, updateProduct);
router.delete("/:id", auth, isAdmin, deleteProduct);

module.exports = router;
import ProductModal from "../models/productModal.js";
import CategoryModal from "../models/categoryModal.js";
import multer from "multer";
import fs from "fs";
class productController {
  static listProducts = async (req, res) => {
    try {
      const products = await ProductModal.find();

      res.render("pages/products/index", { data: products });
    } catch (error) {
      console.log(error);
    }
  };

  static createProduct = async (req, res) => {
    try {
      const categories = await CategoryModal.find();
      res.render("pages/products/create", { categories: categories });
    } catch (error) {
      console.log(error);
    }
  };
  static saveProduct = (req, res) => {
    try {
      const { originalname, path } = req.file;
      const newImage = new ProductModal({
        productName: req.body.product_name,
        productPrice: req.body.product_price,
        productCode: req.body.category_id,
        productImage: originalname,
        productImagePath: path,
        productDescription: req.body.product_price,
        categoryId: category_id,
      });
      console.log(originalname, path);
    } catch (error) {
      console.log(error);
    }
  };
}

export default productController;

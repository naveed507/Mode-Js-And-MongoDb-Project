import mongoose from "mongoose";
let Schema = mongoose.Schema;

const productSchema = new Schema({
  productName: String,
  productPrice: String,
  productCode: String,
  productImage: String,
  productImagePath: String,
  productDescription: String,
  categoryId: Object,
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date },
});

const productModel = mongoose.model("products", productSchema, "products");
export default productModel;

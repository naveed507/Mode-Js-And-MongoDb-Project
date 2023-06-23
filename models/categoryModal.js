import mongoose from "mongoose";
let Schema = mongoose.Schema;

const categorySchema = new Schema({
  categoryName: String,
  createdBy: String,
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date },
});

var categoryModal = mongoose.model("categories", categorySchema, "categories");
export default categoryModal;

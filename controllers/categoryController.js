import CategoryModal from "../models/categoryModal.js";
import toaster from "../toaster.js";
class categoryController {
  static index = async (req, res) => {
    try {
      const allCategories = await CategoryModal.find();

      res.render("pages/categories/index", {
        data: allCategories,
      });
    } catch (error) {
      console.log(error);
    }
  };
  static createCategory = (req, res) => {
    try {
      res.render("pages/categories/create", { userobj: req.user[0] });
    } catch (error) {
      console.log(error);
    }
  };

  static saveCategory = async (req, res) => {
    try {
      if (req.body.category_name == "") {
        toaster.errorMsg("Category Name Is Required");
        return res.redirect("/create-category");
      }
      const category = await new CategoryModal({
        categoryName: req.body.category_name,
        createdBy: req.user[0].email,
      });
      category.save();
      toaster.successMsg("Category Created Successfully");
      return res.redirect("/categories");
    } catch (error) {
      toaster.errorMsg("Something Went Wrong");
      return res.redirect("/create-category");
    }
  };
}

export default categoryController;

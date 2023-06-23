import express from "express";
const router = express.Router();
import AuthController from "../controllers/authController.js";
import HomeController from "../controllers/homeController.js";
import ModeratorController from "../controllers/moderatorController.js";
import ProductController from "../controllers/productController.js";
import CategoryController from "../controllers/categoryController.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/productimages/"); // Directory where the uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Generate a unique filename
  },
});
const upload = multer({ storage: storage });

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    return res.redirect("/login");
  }
};
router.get("/dashboard", isLoggedIn, HomeController.index);
router.get("/records", HomeController.recordsPage);
router.get("/icons", HomeController.iconsPage);
router.get("/secret", isLoggedIn, HomeController.secretPage);
router.get("/tables", HomeController.tablePage);

router.get("/login", AuthController.loginform);
router.get("/sign-out", isLoggedIn, AuthController.logout);
router.get("/register", AuthController.registerform);
// router.post("/submitlogin", AuthController.login);
router.post("/submitregister", AuthController.submitRegister);

//Auth Routes Of Admin
router.get("/moderatour", isLoggedIn, ModeratorController.showModeratours);

router.get(
  "/create-moderatour",
  isLoggedIn,
  ModeratorController.moderatourPage
);

router.post(
  "/create-new-moderator",
  isLoggedIn,
  ModeratorController.saveModerator
);

//Products Routes
router.get("/products", isLoggedIn, ProductController.listProducts);
router.get("/create-product", isLoggedIn, ProductController.createProduct);

//Categories Routes
router.get("/categories", isLoggedIn, CategoryController.index);
router.get("/create-category", isLoggedIn, CategoryController.createCategory);
router.post("/save-category", isLoggedIn, CategoryController.saveCategory);
router.post(
  "/save-product",
  upload.single("cover_image"),
  ProductController.saveProduct
);
export default router;

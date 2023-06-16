import express from "express";
const router = express.Router();
import AuthController from "../controllers/authController.js";
import HomeController from "../controllers/homeController.js";
import ModeratorController from "../controllers/moderatorController.js";
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

export default router;


import express from 'express';
const router = express.Router();
import AuthController from '../controllers/authController.js';
import HomeController from '../controllers/homeController.js';
router.get('/', HomeController.index);
router.get('/records', HomeController.recordsPage);
router.get('/icons', HomeController.iconsPage);
router.get('/secret', HomeController.secretPage);
router.get('/tables', HomeController.tablePage);

router.get('/login', AuthController.loginform);
router.get('/register', AuthController.registerform);
router.post('/submitlogin', AuthController.login);
router.post('/submitregister', AuthController.submitRegister);


export default router;
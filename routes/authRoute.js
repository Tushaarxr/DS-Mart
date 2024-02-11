import express from "express";
import { registerController, loginController, testController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router()

//routing
//Register POST
router.post('/register', registerController)

//Login POST
router.post('/login', loginController)

//middleware
router.get('/test',requireSignIn ,isAdmin, testController)

export default router
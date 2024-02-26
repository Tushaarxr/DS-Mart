import express from "express";
import { registerController, loginController, testController,forgotPasswordController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router()

//routing
//Register POST
router.post('/register', registerController)

//Login POST
router.post('/login', loginController)

//Forget Password POST
router.post('/forgot-password',forgotPasswordController)

//middleware
router.get('/test',requireSignIn ,isAdmin, testController)

//protected user route
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
});

//protected admin route
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
});

export default router;
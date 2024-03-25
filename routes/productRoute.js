import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { createProductController, deleteProductController, getProductController, getSingleProductController, productCountController, productListController, productPhotoController, searchProductsController, updateProductController } from '../controllers/productController.js';
import formidable from 'express-formidable';

const router = express.Router()

//routes
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController)

//update routes
router.put('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController)

//get all product
router.get('/get-product', getProductController)

//get single product
router.get('/single-product/:slug', getSingleProductController)

//get photo
router.get('/product-photo/:pid',productPhotoController)

//delete product
router.delete ('/delete-product/:pid' , deleteProductController ) 


//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page" ,productListController) 

//search product
router.get( "/search/:keyword" , searchProductsController );

export default router;
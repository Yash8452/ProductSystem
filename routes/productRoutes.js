import express from "express"
import formidable from "express-formidable" //to post data from fields
import { createProductController, getProductController, productBarcodeController, productPhotoController } from "../controllers/productController.js"

const router = express.Router()


//routes

//create a product
router.post("/create-product",formidable(),createProductController)

//get all products->
router.get("/get-products", getProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//get barcode
router.get("/product-barcode/:pid",productBarcodeController)
//
//router.get("/get-product/:slug", getSingleProductController);

export default router
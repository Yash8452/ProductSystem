// products.js
import express from 'express'
import productModel from '../models/productModel.js';
import fs from 'fs'
import bwipjs from 'bwip-js'; //barcode generator


const router = express.Router();


//create a product

export const createProductController = async (req, res) => {
    try {
        const { name, description,price, quantity,} = req.fields;
        const { photo } = req.files
        //validation
        switch (true) {
            case !name:
                return res.status(505).send({ error: "Name is required" })
            case !description:
                return res.status(505).send({ error: "description is required" })
            case !price:
                return res.status(505).send({ error: "price is required" })
            case !quantity:
                return res.status(505).send({ error: "quantity is required" })
            case !photo:
                return res.status(505).send({ error: "Photo is required" })

        }
        //making a copy 
        const product = new productModel({ ...req.fields })

        if (photo) {
            product.photo.data = fs.readFileSync(photo.path)
            product.photo.contentType = photo.type
        }
        await product.save()

 

       // Generate barcode for the product
    const barcodeText = `${product._id}-${product.name}`; // Example text for barcode content
    bwipjs.toBuffer(
      {
        // ...barcode generation options
        bcid: 'code128', // Barcode type
        text: barcodeText,
        scale: 3, // Scaling factor
        height: 10, // Barcode height
        includetext: true, // Include human-readable text
      },
      async function (error, png) {
        if (error) {
          console.error('Barcode generation error:', error);
          return res.status(500).send({
            success: false,
            message: 'Error generating barcode',
          });
        }

        // Update product with barcode data
        product.barcode = {
          fileName: `barcode_${product._id}.png`, // Example file name
          barcodeData: png, // Save barcode image as Buffer
          // ...other barcode-related information
        };
        await product.save();

        // Respond with success message and the product
        res.status(201).send({
          success: true,
          message: 'Product added successfully with barcode',
          product,
        });
      }
    );

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            error,
            message: "Error while adding product"
        })
    }
}


export const getProductController = async(req,res) =>{
  try {
        const products = await productModel.find();
        res.send(products);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

// get photo
export const productPhotoController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.pid).select("photo");
    if (product.photo.data) {
      res.set("Content-type", product.photo.contentType);
      return res.status(200).send(product.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr while getting photo",
      error,
    });
  }
};

export const productBarcodeController = async(req,res) =>{
    try {
      const product = await productModel.findById(req.params.pid).select("barcode");
  
      if (!product || !product.barcode || !product.barcode.barcodeData) {
        return res.status(404).send({
          success: false,
          message: "Barcode data not found for this product",
        });
      }
  
      res.set("Content-type", "image/png"); // Set the content type as per your barcode image type
      res.status(200).send(product.barcode.barcodeData);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error while getting barcode",
        error,
      });
    }
}
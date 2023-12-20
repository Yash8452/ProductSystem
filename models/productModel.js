import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        enum: ["New Stock", "Confirmed", "Cancelled"],
        default: "New Stock"
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    barcode: {
        fileName: String, // Store file name or identifier
        barcodeData: Buffer, // Store barcode image as Buffer data
        // ...other barcode-related fields as needed
      },
    // Other relevant fields for your products
});

// Create a model based on the schema
export default mongoose.model("products", productSchema)

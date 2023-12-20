import express from 'express';
import dbConnection from './db_connection.js'
import authRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRoutes.js'

import cors from 'cors'

const app = express()
const PORT = 5050;

//middlewares
app.use(cors());
app.use(express.json())


//routes
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/product',productRoutes)


app.get('/',(req,res)=>{
    res.send("<h1>Product Management System</h1>")
})
app.listen(PORT,()=>{
    console.log(`Server running on the port ${PORT}`)
})
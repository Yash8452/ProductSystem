import mongoose from 'mongoose';


mongoose.set("strictQuery", false);

mongoose.connect('mongodb://0.0.0.0:27017/product_management_db', {
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('MongoDB database connection established successfully');
});

connection.on('error',()=>{
    console.log("Error connecting to the database")
})

export default connection
import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import Menu from '../components/layout/Menu'
import toast from 'react-hot-toast'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

const CreateProduct = () => {
  const [photo, setPhoto] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [barcode, setBarcode] = useState('')

  const handleAdd = (e) => {
    e.preventDefault();
    try {
        const productData = new FormData();
        productData.append("name", name);
        productData.append("photo", photo);
        productData.append("description",description);
        productData.append("price", price);
        productData.append("quantity", quantity);
        productData.append("barcode", barcode);

        const { data } = axios.post(
            "http://localhost:5050/api/v1/product/create-product",
            productData
        );
        if (data?.success) {
            toast.error(data?.message);
        } else {
            toast.success("Product Added Successfully");
            console.log('Producvt added')
            Navigate("/dashboard/view-product");
        }
    } catch (error) {
        console.log(error);
        toast.error("something went wrong");
    }
}


  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
          <Menu />
        </div>
        <div className="col-md-9">
          <h4>Add a Product</h4>
          <div className="m-15 w-75">
            
          </div>
          <div className="mb-3 w-75 ">
            <label className="btn btn-outline-secondary col-md-12">
              {photo ? photo.name : "Upload Photo"}
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])}
                hidden
              />
            </label>
          </div>
          <div className="mb-3 ">
            {photo && (
              <div className="text-center">
                <img
                  src={URL.createObjectURL(photo)}
                  alt="product_photo"
                  height={"200px"}
                  className="img img-responsive"
                />
              </div>
            )}
          </div>
          <div className="mb-3 w-75">
            <input
              type="text"
              value={name}
              placeholder="Enter name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3 w-75">
            <input
              type="text"
              value={description}
              placeholder="Enter a description"
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-3 w-75">
            <input
              type="number"
              value={price}
              placeholder="Enter the price"
              className="form-control"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3 w-75">
            <input
              type="number"
              value={quantity}
              placeholder="Quantity"
              className="form-control"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="mb-3 w-75 d-flex justify-content-center">
            <button className="btn btn-primary" onClick={handleAdd}>
              Add Car
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreateProduct
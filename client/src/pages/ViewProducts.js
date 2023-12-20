import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import Menu from '../components/layout/Menu';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';


const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5050/api/v1/product/get-products');
      if (response.data && Array.isArray(response.data)) { // Ensure response.data is an array
        setProducts(response.data);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error('Something went wrong');
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
          <Menu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Products List</h1>
          {loading ? (
            <p>Loading...</p>
          ) : products.length === 0 ? (
            <p>No products available.</p>
          ) : (
            <div className="d-flex flex-wrap">
              {products.map((p) => {
                // Calculate total price for each product
                const total = p.price * p.quantity;

                return (
                  <Link
                    key={p._id}
                    to={`/dashboard/product/${p.name}`}
                    className="product-link"
                  >
                    <div className="card m-2" style={{ width: '38rem' }}>
                      <img style={{width :'300px'}}
                        src={`http://localhost:5050/api/v1/product/product-photo/${p._id}`}
                        className="card-img-top"
                        alt={p.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Name : {p.name}</h5>
                        <p className="card-text">Price : Rs.{p.price}</p>
                        <p className="card-text">Quantity : {p.quantity}</p>
                        <p className="card-text">Total: Rs.{total}</p>
                        <img 
                        src={`http://localhost:5050/api/v1/product/product-barcode/${p._id}`}
                        className="card-img-top"
                        alt={p.name}
                      />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

          )}
        </div>
      </div>
    </Layout>
  );
};

export default ViewProducts;
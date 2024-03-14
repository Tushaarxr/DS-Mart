import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout'
import AdminMenu from '../../components/AdminMenu';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const Products = () => {
  const [products, setProducts] = useState([]);
  axios.defaults.baseURL = 'http://localhost:8080';
  //get all products


  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product")
      setProducts(data.products);


    } catch (error) {
      console.log(error);
      toast.error("Something went wrong")

    }
  }

  useEffect(() => {
    getAllProducts();
  }, [])





  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className='text-center my-3'>All Proudct List</h1>
          <div className="d-flex">
            {products.map(p => (
              <Link key={p._id} to={`/dashboard/admin/product/${p.slug}`} className='productCardStyle'>
                <div className="card my-3 mx-3" style={{ width: '18rem' }} >
                  <img src={`/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} />
                  <div className="card-body">
                    <h3 className="card-title">{p.name}</h3>
                    <p className="card-text">{p.description}</p>
                    <h4 className="card-title">₹{p.price}</h4>

                  </div>
                </div>

              </Link>




            ))}


          </div>

        </div>
      </div >

    </Layout >
  )
}

export default Products


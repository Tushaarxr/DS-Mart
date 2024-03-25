import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Jumbotron from '../components/Jumbotron'
import { useAuth } from '../context/Auth';
import axios from 'axios';
import { Link } from 'react-router-dom';


const HomePage = () => {
  const [auth, setAuth] = useAuth();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  axios.defaults.baseURL = 'http://localhost:8080';

  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);

    }
  };

  useEffect(() => {
    getAllCategory()
  }, [])

  const getAllProduct = async () => {
    try {

      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);

      setProducts(data.products)

    } catch (error) {
      console.log('Error:', error);
      


    }

  }

  useEffect(() => {
    getAllProduct()
  }, [])


  return (
    <Layout title={"Home-DS Mart"}>
      <Jumbotron />
      <div  >
        <h2 className='text-center mx-3 my-3'> C A T E G O R I E S</h2>
        <div className='d-flex'>
          {categories.slice(0, 4).map(c => (
            <div className="card mx-5 ms-5 my-3 text-center" style={{ width: '15rem' }}>
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <p className="card-text">{c.name}</p>
              </div>
            </div>
          ))}

        </div>
        <div className='d-flex'>
          {categories.slice(4, 8).map(c => (
            <div className="card mx-5 ms-5 my-3 text-center" style={{ width: '15rem' }}>
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <p className="card-text">{c.name}</p>
              </div>
            </div>
          ))}

        </div>
        <div className='d-flex'>
          {categories.slice(8, 12).map(c => (
            <div className="card mx-5 ms-5 my-3 text-center" style={{ width: '15rem' }}>
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <p className="card-text">{c.name}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
      <div>
        <h2 className='text-center mx-3 my-3'>P R O D U C T S</h2>
        <div>
          <div className="d-flex">
            {products.map(p => (

              <div className="card my-5 mx-5" style={{ width: '18rem' }} >
                <img src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} />
                <div className="card-body">
                  <h3 className="card-title">{p.name}</h3>
                  <p className="card-text">{p.description}</p>
                  <h4 className="card-title">₹{p.price}</h4>
                  <button href="#" class="btn btn-primary w-50 mx-3 my-2">Add to Cart</button>
                  {/* <button href="#" class="btn btn-secondary">Details</button> */}


                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='mx-3 my-3'>
        {products && products.length < total && (
          <button className='btn btn-warning' onClick={(e) => {
            e.preventDefault();
            setPage(page + 1);
          }}>
            {loading ? "Loading..." : "Loadmore"}
          </button>
        )}

      </div>


    </Layout>
  )
}

export default HomePage

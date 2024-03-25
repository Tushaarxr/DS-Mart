import React from 'react'
import Layout from '../components/Layout'
import { useSearch } from '../context/Search'



const SearchPage = () => {
    const[values,setValues]=useSearch();
  return (
    <Layout title={"Search results"}>
        <div className="conatiner">
            <div className="text-center">
                <h1 className='my-3 mx-3'>Search  Results</h1>
                <h5 className='my-3 mx-3'>
                    {values?.results.length<1 ? 'No product found':`Found ${values?.results.length} products.`}
                </h5>
                <div>
                <div className="d-flex">
            {values.results.map(p => (

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
        </div>

      
    </Layout>
  )
}

export default SearchPage

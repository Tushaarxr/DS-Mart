import React from 'react';
import Layout from '../../components/Layout';
import AdminMenu from '../../components/AdminMenu';

const CreateProduct = () => {
  return (
    <Layout title={"Dashboard-Create Product"}>
        
    <div className="row">
        <div className="col-md-3">
            <AdminMenu/>

        </div>
        <div className="col-md-9 text-center my-3">
        <h1>Create Product</h1>

        </div>
    </div>
  
</Layout>
  )
}

export default CreateProduct

import React from 'react';
import Layout from '../../components/Layout';
import AdminMenu from '../../components/AdminMenu';

const CreateCategory = () => {
  return (
    <Layout title={"Dashboard-Create Category"}>
        
        <div className="row">
            <div className="col-md-3">
                <AdminMenu/>

            </div>
            <div className="col-md-9 text-center my-3">
            <h1>Create Category</h1>

            </div>
        </div>
      
    </Layout>
  )
}

export default CreateCategory

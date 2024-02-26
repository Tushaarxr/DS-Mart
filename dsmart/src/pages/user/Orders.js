import React from 'react';
import Layout from '../../components/Layout';
import UserMenu from '../../components/UserMenu';

const Orders = () => {
  return (
    <Layout title={"Dashboard-Your Orders"}>
        
        <div className="row">
            <div className="col-md-3">
                <UserMenu/>

            </div>
            <div className="col-md-9 text-center my-3">
            <h1>All Orders</h1>

            </div>
        </div>
      
    </Layout>
  )
}

export default Orders

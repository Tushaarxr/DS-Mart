import React from 'react'
import Layout from '../../components/Layout';
import { useAuth } from '../../context/Auth';
import UserMenu from '../../components/UserMenu';

const Dashboard = () => {

  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />

          </div>
          <div className="col-md-9 text-center my-3">
            <h2>Profile</h2>

{/* displaying the content of the user */}
            <div className="card w-75 text-center m-auto"> 
              <h3 className='my-1'>Name : {auth?.user.name}</h3>
              <h3 className='my-1'>Email : {auth?.user.email}</h3>
              <h3 className='my-1'>Phone No. : {auth?.user.phone}</h3>
              <h3 className='my-1'>Address : {auth?.user.address}</h3>
              <h3 className='my-1'>Postal Code : {auth?.user.postalcode}</h3>
            </div>

          </div>

        </div>
      </div>

    </Layout>
  )
}

export default Dashboard


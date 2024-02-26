import React from 'react'
import Layout from '../../components/Layout'
import AdminMenu from '../../components/AdminMenu'
import { useAuth } from '../../context/Auth'

const AdminDashboard = () => {

  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />

          </div>
          <div className="col-md-9 text-center my-3">
            <h2>Content</h2>

{/* displaying the content of the admin */}
            <div className="card w-75 text-center m-auto"> 
              <h3 className='my-1'>Admin Name : {auth?.user.name}</h3>
              <h3 className='my-1'>Admin Email : {auth?.user.email}</h3>
              <h3 className='my-1'>Admin Phone No. : {auth?.user.phone}</h3>
            </div>

          </div>

        </div>
      </div>

    </Layout>
  )
}

export default AdminDashboard

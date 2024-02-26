import React from 'react'
import Layout from '../../components/Layout'
import AdminMenu from '../../components/AdminMenu'


const Users = () => {
  return (
    <Layout title={"Dashboard-All Users"}>
        
        <div className="row">
            <div className="col-md-3">
                <AdminMenu/>

            </div>
            <div className="col-md-9 text-center my-3">
            <h1>All Users Profile</h1>

            </div>
        </div>
      
    </Layout>
  )
}

export default Users

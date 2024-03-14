import React from 'react'
import { NavLink } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <div className="list-group text-center my-3 mx-3" >
            <h2>Admin Panel</h2>
            <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action my-3">Create Category</NavLink>
            <NavLink to="/dashboard/admin/products" className="list-group-item list-group-item-action my-3">Products</NavLink>
            <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action my-3">Create Product</NavLink>

            <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action my-3">Users</NavLink>




        </div >
    )
}

export default AdminMenu

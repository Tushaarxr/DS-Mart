import React from 'react';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
    return (
        <div className="list-group text-center my-3 mx-3">
            <h2>User Menu</h2>

            <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action">Profile</NavLink>
            
            <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action">Orders</NavLink>
        </div>
    );
}

export default UserMenu;

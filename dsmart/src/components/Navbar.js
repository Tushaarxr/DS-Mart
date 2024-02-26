import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiHome2Line } from "react-icons/ri";
import { useAuth } from '../context/Auth';



const Navbar = () => {
    const [auth, setAuth] = useAuth();

    const handleLogout = () => {
        setAuth({
            auth, user: null, token: ''

        })
        localStorage.removeItem("auth");


    }

    return (
        <div className='conatiner-fluid'>
            <nav className="navbar navbarshadow navbar-expand-lg ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <NavLink className="navbar-brand mx-3 navbar-dsmart" to="/">Ds Mart</NavLink>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item navbar-text">
                                <NavLink to='/' className="nav-link active mx-2" ><RiHome2Line /> Home</NavLink>
                            </li>
                            <li className="nav-item dropdown mx-2 navbar-text ">
                                <NavLink to='/' className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Account
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/">Account Settings</NavLink></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><NavLink className="dropdown-item" to="/">My Orders</NavLink></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><NavLink className="dropdown-item" to="/">Something else here</NavLink></li>
                                </ul>
                            </li>

                            <li className="nav-item mx-2 navbar-text">
                                <NavLink className="nav-link " to='/Categories'>Categories</NavLink>
                            </li>
                            <li className="nav-item mx-2 navbar-text">
                                <NavLink className="nav-link " to='/cart'>My Cart(0)</NavLink>
                            </li>
                            <li className="nav-item dropdown mx-2 navbar-text">
                                <NavLink to='/support' className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Support
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/">Contact Us</NavLink></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><NavLink className="dropdown-item" to="/">FAQ's</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="searchbar d-flex position" role="search">
                            <input className="form-control me-3" type="search" placeholder="Search for Products.." aria-label="Search" />
                        </form>

                        {
                            auth?.user ? (
                                <>
                                    <li className="nav-item dropdown mx-auto navbar-text ">
                                        <NavLink to='/' className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {auth?.user?.name}{/* Display user's name */}
                                        </NavLink>
                                        <ul className="dropdown-menu">
                                            <li><NavLink className="dropdown-item" to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`}>Dashboard</NavLink></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><NavLink onClick={handleLogout} to='/login' className="dropdown-item" >Logout</NavLink></li>
                                        </ul>
                                    </li>

                                </>
                            ) : (
                                <>
                                    <div className="nav-item mx-auto navbar-text">
                                        <NavLink to='/register' className="nav-link" >Sign Up</NavLink>
                                    </div>
                                    <div className="nav-item mx-3 navbar-text">
                                        <NavLink to='/login' className="nav-link" >Login</NavLink>
                                    </div>

                                </>
                            )
                        }

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;

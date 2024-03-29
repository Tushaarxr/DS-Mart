import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import './Auth.css';
import { useAuth } from '../../context/Auth';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:8080/api/v1/auth/login', { email, password });
            
            if (res.data.success) {
                toast.success(res.data.message);
                toast.success('Login Successful');
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                });
                localStorage.setItem('auth', JSON.stringify(res.data));
                navigate(location.state?.from || '/'); // Corrected navigate function
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something Went Wrong');
        }
    };

    return (
        <Layout>
            <div className="container">
                <div className="register-form">
                    <h2 className='text-center p-3'>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mx-2 p-1 my-1">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                        </div>
                        <div className="form-group mx-2 p-1 my-1">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} required type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-outline-dark px-2 my-3">LOGIN</button>
                        <button type="button" className="btn btn-outline-dark px-2 my-3" onClick={() => { navigate('/forgot-password'); }}>FORGOT PASSWORD</button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Login;

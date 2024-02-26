import React, { useState } from 'react';
import Layout from '../components/Layout';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:8080/api/v1/auth/forgot-password', { email ,newPassword,answer});

            if (res.data.success) {
                toast.success(res.data.message);
                navigate('/login');
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
                <div className="forgot-password-form">
                    <h2 className='text-center p-3'>Forgot Password</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mx-2 p-1 my-1">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                        </div>
                        <div className="form-group mx-2 p-1 my-1">
                            <label htmlFor="exampleInput">New Password</label>
                            <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required type="password" className="form-control" id="exampleInputPassword1" placeholder="New Password" />
                        </div>
                        <div className="form-group mx-2 p-1 my-1">
                            <label htmlFor="exampleInput">Answer to the question</label>
                            <input value={answer} onChange={(e) => setAnswer(e.target.value)} required type="text" className="form-control" id="exampleInputAnswer" placeholder="Answer" />
                        </div>
                        <button type="submit" className="btn btn-outline-dark px-2 my-3">RESET PASSWORD</button>
                        <button type="button" className="btn btn-outline-dark px-2 my-3" onClick={() => { navigate('/login'); }}>LOGIN</button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default ForgotPassword;

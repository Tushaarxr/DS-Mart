import React, { useState } from 'react';
import Layout from '../../components/Layout';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';//connecting backend to frontend
import {useNavigate} from 'react-router-dom';
import './Auth.css';




const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const [postalcode, setPostalcode] = useState("");

    const Navigate=useNavigate();

    const handlesubmit = async (e) => {
        e.preventDefault();


        try {
            const res = await axios.post('http://localhost:8080/api/v1/auth/register', { name, email, password, phone, address,postalcode,answer })
            console.log({ name, email, password, phone, address,postalcode,answer });
            
            if(res.data.success){
                toast.success(res.data.message);
                toast.success('Registered Successfully');
                Navigate('/login'); //to navigate to login page
            }else{
                toast.error(res.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error('Something Went Wrong')

        }


    }




    return (
        <Layout>
            <div className="container">
                <div className="register-form">
                    <h2 className='text-center p-3 '> Sign Up</h2>
                    <form onSubmit={handlesubmit}>
                        <div className="form-group mx-2 p-1 my-1">
                            <label htmlFor="exampleInputName1">Name</label>

                            <input value={name} onChange={(e) => setName(e.target.value)} required type="name" className="form-control" id="exampleInputName1" placeholder="Name" />

                        </div>
                        <div className="form-group mx-2 p-1 my-1">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />

                        </div>
                        <div className="form-group mx-2 p-1 my-1">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} required type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group mx-2 p-1 my-1">
                            <label htmlFor="exampleInput">Phone</label>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} required type="text" className="form-control" id="exampleInput" placeholder="Phone" />

                        </div>
                        <div className="form-group mx-2 p-1 my-1">
                            <label for="exampleFormControlTextarea1" class="form-label">Address</label>
                            <textarea value={address} onChange={(e) => setAddress(e.target.value)} required class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Address"></textarea>

                        </div>
                        <div className="form-group mx-2 p-1 my-1">
                            <label htmlFor="exampleInput">Postal Code</label>
                            <input  value={postalcode} onChange={(e)=>setPostalcode(e.target.value)}  type="text" className="form-control" id="exampleInput" required placeholder="Postal Code" />

                        </div>
                        <div className="form-group mx-2 p-1 my-1">
                            <label htmlFor="exampleInput">Answer</label>
                            <input  value={answer} onChange={(e)=>setAnswer(e.target.value)}  type="text" className="form-control" id="exampleInput" required placeholder="Question ofr forgot password" />

                        </div>
                        <div className="form-group form-check my-3">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-outline-dark px-2 my-3">Submit</button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Register;

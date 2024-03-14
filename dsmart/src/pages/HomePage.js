import React,{useState,useEffect} from 'react'
import Layout from '../components/Layout'
import Jumbotron from '../components/Jumbotron'
import { useAuth } from '../context/Auth';
import axios from 'axios';


const HomePage = () => {
  const[auth,setAuth]=useAuth();
  const [products,setProducts]=useState([]);
  const[categories,setCategories]=useState([]);

  axios.defaults.baseURL = 'http://localhost:8080';

  const getAllProduct =async()=>{
    try {
      const {data}=await  axios.get('/api/v1/product/get-product');
      setProducts(data.products)
      
    } catch (error) {
      console.log('Error:', error);
      
    }

  }

  useEffect (()=>{
    getAllProduct()
  },[])

  
  return (
   <Layout title={"Home-DS Mart"}>
    <Jumbotron/>
    <div >
      <h2 className='text-center'> C A T E G O R I E S</h2>
    </div>
    <div>
      <h2 className='text-center'>P R O D U C T S</h2>
    </div>
    

   </Layout>
  )
}

export default HomePage

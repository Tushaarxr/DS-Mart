import React from 'react'
import Layout from '../components/Layout'
import Jumbotron from '../components/Jumbotron'
import { useAuth } from '../context/Auth';


const HomePage = () => {
  const[auth,setAuth]=useAuth();
  return (
   <Layout title={"Home-DS Mart"}>
    <Jumbotron/>
    <pre>{JSON.stringify(auth,null,4)}</pre>

   </Layout>
  )
}

export default HomePage

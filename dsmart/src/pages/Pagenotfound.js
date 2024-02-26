import React from 'react';
import Layout from '../components/Layout';

const Pagenotfound = () => {
  return (
    <Layout>
      <style>
        {`
       

          p {
              font-size:3rem; 
              font-style: italic;
              color: #120705; 
          }

          h3 { 
              font-size: 1.5rem; 
              color: #333; 
              margin-bottom: 20px; 
          } 

          a { 
              text-decoration: none; 
              background-color: #120705; 
              color: #fff; 
              padding: 10px 20px; 
              border-radius: 20px; 
              font-weight: bold; 
              transition: background-color 0.3s ease; 
          } 

          a:hover { 
              background-color: #120705; 
          }

          
        `}
      </style>

      <p>
        <center>
          <h1>404</h1>
        </center>
      </p>
      <br/>
      <center>
        <p> There's NOTHING here.... <br/> </p>
        <h3> ....maybe the page you're looking for is not found or never existed.</h3>
        <br/>
        <a href="/">
          Back to Home&#x2192;
        </a>
      </center>
    </Layout>
  );
}

export default Pagenotfound;

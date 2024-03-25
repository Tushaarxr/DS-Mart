import React from 'react';
import Layout from '../components/Layout';

const Pagenotfound = () => {
  return (
    <Layout>


      <p>
        <center>
          <h1>404</h1>
        </center>
      </p>
      <br />
      <center>
        <p> There's NOTHING here.... <br /> </p>
        <h3> ....maybe the page you're looking for is not found or never existed.</h3>
        <br />
        <a href="/">
          Back to Home&#x2192;
        </a>
      </center>
    </Layout>
  );
}

export default Pagenotfound;

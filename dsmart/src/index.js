import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/Auth';
import "antd/dist/reset.css";
import { SearchProvider } from './context/Search.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <SearchProvider>
      <BrowserRouter>

        <App />

      </BrowserRouter>


    </SearchProvider>



  </AuthProvider>


);
reportWebVitals();

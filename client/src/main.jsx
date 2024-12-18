import React from 'react'
import ReactDOM from 'react-dom/client'
import customFetch from './utils/customFetch.js'
import App from './App.jsx'
import './index.css'

const data = await customFetch.get('/test');
console.log(data);


import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer position='top-center' />
  </React.StrictMode>
);


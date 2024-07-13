import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./views/Home/Home"
import Product from './views/Product/Product';
import './index.css';
import ProductView from './components/ProductView/ProductView';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router =createBrowserRouter([
  {
    path: '/',
    element : <Home/>
  },
 
  {
    path: '/product',
    element: <Product/>
  },
  {
    path: '/productview',
    element: <ProductView/>
  },
  {
    path: '/footer',
    element: <Footer/>
  }
]);

root.render(<RouterProvider router={router}/>)



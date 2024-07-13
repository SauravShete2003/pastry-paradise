import React from 'react'
import "./Home.css"
import Product from '../Product/Product'
import ProductView from '../../components/ProductView/ProductView'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <>
<Product/>
<ProductView/>
<Footer/>
    </>
  )
}

export default Home

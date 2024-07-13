import React from 'react'
import './Product.css'
function Product() {
  return (
    <div className='product-container'>
      <div className='product-image-container'>
        <img className='product-image' src='https://static.vecteezy.com/system/resources/previews/033/797/917/non_2x/many-different-types-of-cakes-are-on-display-in-a-bakery-ai-generated-photo.jpg' alt='cake-background-image'/>
      </div>
      <h1 className='product-heading'>Sweet Delights Cake Shop</h1>
      <span className='cake-short-desc'>Indulge in our delectable cakes and pastries, baked fresh daily with love and the finest ingredients. Perfect for every occasion!</span>
    </div>
  )
}

export default Product

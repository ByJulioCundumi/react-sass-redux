import React from 'react'
import "./products.scss"
import Product from '../product/product'

function Products() {
  return (
    <section className='products'>
        <h2 className='products__title'>Products</h2>
        <div className='products__container'>
            <Product/>
        </div>
    </section>
  )
}

export default Products;
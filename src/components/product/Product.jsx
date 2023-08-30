import React from 'react'
import "./product.scss"
import {MdAddShoppingCart} from "react-icons/md"

function Product() {
  return (
    <div className='product'>
        <img className='product__img' src="https://assets.thehansindia.com/h-upload/2022/07/18/1303611-pro.webp" alt="" />
        <div className="product__details">
            <h3 className="product__title">Producto x</h3>
            <p className="product__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
            <div className='product__cta'>
                <p className="product__price">
                    <del>200</del> 150
                </p>
                <MdAddShoppingCart/>
            </div>
        </div>
    </div>
  )
}

export default Product;
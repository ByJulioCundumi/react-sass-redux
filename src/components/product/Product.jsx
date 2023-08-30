import React from 'react'
import "./product.scss"
import {MdAddShoppingCart} from "react-icons/md"

function Product({title, img, description, price}) {
  return (
    <div className='product'>
        <img className='product__img' src={img} alt="" />
        <div className="product__details">
            <h3 className="product__title">{title}</h3>
            <p className="product__description">
               {description}
            </p>
            <div className='product__cta'>
                <p className="product__price">
                    {price}
                </p>
                <MdAddShoppingCart/>
            </div>
        </div>
    </div>
  )
}

export default Product;
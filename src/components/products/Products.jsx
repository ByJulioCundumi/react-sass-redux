import React from 'react'
import { useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { getProductsRequest } from '../../api/products'
import { setProducts, setFilteredProducts } from '../../reducers/product/productSlice'
import "./products.scss"
import Product from '../product/product'

function Products() {
  const {filteredProducts} = useSelector((state)=> state.products)
  const dispatch = useDispatch()

  useEffect(()=>{
    const getProducts = async ()=>{
      const data = await getProductsRequest()
      dispatch(setProducts(data))
      dispatch(setFilteredProducts(data))
    }
    getProducts()
  },[])

  return (
    <section className='products'>
        <div className='products__container'>
            {filteredProducts.length > 0 ? filteredProducts.map((p)=>{
              return <Product key={p.id}
                img={p.category.image}
                title={p.title}
                description={p.description}
                price={p.price}
              />
            })
            : <span>No products to show</span>}
        </div>
    </section>
  )
}

export default Products;
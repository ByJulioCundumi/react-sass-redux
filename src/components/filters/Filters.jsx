import React from 'react'
import "./filters.scss"
import { setFilteredProducts } from '../../reducers/product/productSlice'
import { useDispatch, useSelector } from 'react-redux'

function Filters() {
    const dispatch = useDispatch()
    const {products, filteredProducts} = useSelector(state => state.products)
    const copyProducts = [...filteredProducts]

    const onChange = (e)=>{
        if(e.target.value){
            const filtered = products.filter((p)=>{
                return p.title.toLowerCase().includes(e.target.value.toLowerCase())
            })
            dispatch(setFilteredProducts(filtered))
        } else{
            dispatch(setFilteredProducts(products))
        }
    }

    const orderBy = (e)=>{
        switch(e.target.value){
            case "all":
                dispatch(setFilteredProducts(filteredProducts))
            break;
            case "lower":
                const lower = copyProducts.sort((a, b)=>{
                    return a.price - b.price
                })
                dispatch(setFilteredProducts(lower))
            break;
            case "higher":
                const higher = copyProducts.sort((a, b)=>{
                    return b.price - a.price
                })
                dispatch(setFilteredProducts(higher))
            break;
        }
    }

  return (
    <section className='filters'>
        <div className='filters__group'>
        <div className="filters__orderBy">
            <label htmlFor="orderBy">Order By:</label>
            <select className='filters__select'id='orderBy' onChange={orderBy}> 
                <option value="all">All</option>
                <option value="lower">Lower</option>
                <option value="higher">Higher</option>
            </select>
        </div>
        </div>
        <div className="filters__search">
            <input type="search" className='filters__searchInput' onChange={onChange} placeholder='Search'/>
            <button className='filters__searchBtn'>Search</button>
        </div>
    </section>
  )
}

export default Filters
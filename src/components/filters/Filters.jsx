import React from 'react'
import "./filters.scss"

function Filters() {
  return (
    <section className='filters'>
        <div className='filters__group'>
        <div className="filters__orderBy">
            <label htmlFor="orderBy">Order By:</label>
            <select className='filters__select'id='orderBy'> 
                <option value="all">All</option>
                <option value="lower">Lower</option>
                <option value="higher">Higher</option>
            </select>
        </div>
        <div className="filters__range">
            <p>Price:</p><input type="range" min="0" max="1000" step="1"/>
        </div>
        </div>
        <div className="filters__search">
            <input type="search" className='filters__searchInput' placeholder='Search'/>
            <button className='filters__searchBtn'>Search</button>
        </div>
    </section>
  )
}

export default Filters
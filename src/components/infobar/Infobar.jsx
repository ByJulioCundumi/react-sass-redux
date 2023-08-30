import React from 'react'
import "./Infobar.scss"
import {BsFillTelephoneForwardFill} from "react-icons/bs"

function Infobar() {
  return (
    <section className='infobar'>
        <div className="infobar__container">
            <p className="infobar__phoneIcon">
                <BsFillTelephoneForwardFill/> +57 320 201 022
            </p>
            <p className="infobar__cta">
                Get 50% off on selected items
            </p>
            <div className="infobar__item">
                <select className='infobar__select'>
                    <option className='infobar__option' value="eng">Eng</option>
                    <option className='infobar__option' value="spa">Spa</option>
                </select>
            </div>
        </div>
    </section>
  )
}

export default Infobar;
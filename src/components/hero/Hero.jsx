import React from 'react'
import "./hero.scss"

function Hero() {
  return (
    <section className='hero'>
        <div className="hero__text">
            <h1 className='hero__h1'>
                Lorem ipsum dolor, sit amet.
            </h1>
            <p className="hero__p">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet eius dolor voluptatum iure ipsum harum ea nostrum voluptatibus architecto asperiores!
            </p>
            <div>
                <button className="hero__btn">Buy Now!</button>
            </div>
        </div>
        <div className="hero__">
            <img src="https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-shopping-bag-icon-for-your-design-websites-and-projects-png-image_1830188.jpg" alt="" className="hero__img" />
        </div>
    </section>
  )
}

export default Hero
import './App.scss'
import Infobar from './components/infobar/Infobar'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Filters from './components/filters/Filters'
import Products from './components/products/Products'

function App() {

  return (
    <>
      <Infobar/>
      <div className='app'>
        <Navbar/>
        <Hero/>
        <Filters/>
        <Products/>
      </div>
    </>
  )
}

export default App

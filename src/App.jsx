import './App.css'
import Header from './components/header'
import Banner from './components/banner'
import Browse from './components/Browse'
import Product from './components/Product'
import Inspiration from './components/inspiration'
import Information from './components/Information'
import Footer from './components/Footer'

const App = () => {

  return <div>
    <Header />
    <section>
      <Banner />
    </section>
    <section>
      <Browse />
    </section>
    <section>
      <Product />
    </section>
    <section>
      <Inspiration />
    </section>
    <section>
      <Information />
    </section>
    <section>
      <Footer />
    </section>



  </div>

}

export default App

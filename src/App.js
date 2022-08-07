import './App.css';
import * as React from 'react'
import Intro from './components/intro/intro';
import About from './components/about/about';
import ProductList from './components/productList/productList';
import Contact from './components/contact/contact';
import Navbar from './components/Navbar';
import "./components/intro/intro.css";
import Resume from './components/Resume/Resume';

const App=()=>{
  return (
    <main id="about">
    
        <Navbar/>
        <div className='app-nav'>
          <section className='app-about' id="Home">
            <Intro/>
          </section>
          <section className='app-projects' id="About">
            <About/>
          </section>
          <section className='app-resume' id="Resume">
            <Resume/>
          </section>
          <section className='app-contact' id="Project">
            <ProductList/>
          </section>
          <section className='app-rest' id="Contact">
            <Contact/>
          </section>
        </div>
    </main>
  );
}

export default App;

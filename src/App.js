import React from 'react'; 
import "./App.css"; 
import Header from './components/header/Header'; 
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Certifications from './components/certifications/Certifications';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => { 
  return ( 
    <>
    <Header /> 

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </main>
    </> 
  ) 
} 

export default App
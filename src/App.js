import React from 'react'; 
import "./App.css"; 
import Header from './components/header/Header'; 
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';

const App = () => { 
  return ( 
    <>
    <Header /> 

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Experience />
    </main>
    </> 
  ) 
} 

export default App
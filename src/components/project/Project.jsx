import React from 'react';
import "./project.css";
import Projects from './Projects';

const Project = () => {
  return (
    <section className="projects section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">My completed projects</span>

    <Projects />
    </section>
  )
}

export default Project
import React from 'react'
import "./skills.css";
import DevOps from "./DevOps";
import Cloud from "./Cloud";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My most familiar technologies</span>

        <div className="skills__container container grid">
          <DevOps />
          <Cloud />
        </div>
    </section>
  )
}

export default Skills
import React, { useState } from 'react'
import "./experience.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section" id="experience">
        <h2 className="section__title">Experience</h2>
        <span className="section__subtitle">My journey so far</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>

                
            <div className="qualification__sections">
                {/* Educational Experience Section */}
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Google</h3>
                            <span className="qualification__subtitle">Certified Cloud Architect</span>
                            <div className="qualification__calendar"><i className="uil uil-calendar-alt"></i>Jan. 2023</div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>                       
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>                       
                        </div>
                        <div>
                            <h3 className="qualification__title">Microsoft</h3>
                            <span className="qualification__subtitle">Azure Solutions Architect Expert</span>
                            <div className="qualification__calendar"><i className="uil uil-calendar-alt"></i>Dec. 2022</div>
                            <div><span className="qualification__line"></span></div>
                        </div>
                    </div>

                    <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Grand Valley State University</h3>
                                <span className="qualification__subtitle">Information Systems, B.S.</span>
                                <div className="qualification__calendar"><i className="uil uil-calendar-alt"></i>Aug. 2016 - Apr. 2020</div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                    </div>
                </div>

                {/* Professional Experience Section */}
                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                            <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">DevOps Engineer</h3>
                                <span className="qualification__subtitle">Hitachi</span>
                                <div className="qualification__calendar"><i className="uil uil-calendar-alt"></i>Dec. 2021 - Present</div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">DevOps Engineer</h3>
                                <span className="qualification__subtitle">Service Express</span>
                                <div className="qualification__calendar"><i className="uil uil-calendar-alt"></i>Oct. 2021 - Dec. 2021</div>
                                <div><span className="qualification__line"></span></div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Associate Software Developer</h3>
                                <span className="qualification__subtitle">Service Express</span>
                                <div className="qualification__calendar"><i className="uil uil-calendar-alt"></i>Nov. 2020 - Oct. 2021</div>
                                <div><span className="qualification__line"></span></div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Software Specialist</h3>
                                <span className="qualification__subtitle">Service Express</span>
                                <div className="qualification__calendar"><i className="uil uil-calendar-alt"></i>Feb. 2019 - Nov. 2020</div>
                                <div><span className="qualification__line"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
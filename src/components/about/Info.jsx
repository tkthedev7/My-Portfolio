import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
      <i class='bx bxs-graduation'></i>
        <h3 className="about__title">Education</h3>
        <h3 className="about__subtitle">Grand Valley State University</h3>
      </div>

      <div className="about__box">
      <i class='bx bx-map-pin' ></i>
        <h3 className="about__title">Location</h3>
        <h3 className="about__subtitle">Grand Rapids, MI</h3>
      </div>

      <div className="about__box">
      <i class='bx bx-happy-beaming'></i>
        <h3 className="about__title">Hobbies</h3>
        <h3 className="about__subtitle">Golfing, Traveling, Reading</h3>
      </div>
    </div>
  )
}

export default Info
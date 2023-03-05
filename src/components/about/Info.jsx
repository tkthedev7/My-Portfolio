import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">I have four years of software development experience and have been working as DevOps Engineer since 2022.</span>
      </div>

      <div className="about__box">
        <h3 className="about__title">Specialties</h3>
        <span className="about__subtitle">Experienced in Ansible, Python, Kubernetes, and cloud technologies such as Microsoft Azure and Google Cloud Platform.</span>
      </div>

      <div className="about__box">
        <h3 className="about__title">Misc. Skills</h3>
        <span className="about__subtitle">Terraform, Grafana Monitoring, Docker, Jenkins, Microsoft SQL Server, Terraform, Git and GitLab, Azure DevOps.</span>
      </div>
    </div>
  )
}

export default Info
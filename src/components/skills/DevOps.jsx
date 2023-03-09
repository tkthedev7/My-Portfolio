import React from 'react'

const Backend = () => {
  return (
        <div className="skills__content">
            <h3 className="skills__title">DevOps</h3>
            <div className="skills__box">
                <div className="skills__group">
                        <div className="skills__data">
                            <i class='bx bx-badge-check'></i>
                            <div>
                                <h3 className="skills__name">Ansible</h3>
                                <span className="skills__level">Expert</span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <i class='bx bx-badge-check'></i>
                            <div>
                                <h3 className="skills__name">Git</h3>
                                <span className="skills__level">Expert</span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <i class='bx bx-badge-check'></i>
                            <div>
                                <h3 className="skills__name">Jenkins</h3>
                                <span className="skills__level">Novice</span>
                            </div>
                        </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Kubernetes</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Docker</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Grafana</h3>
                            <span className="skills__level">Novice</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
  )
}

export default Backend
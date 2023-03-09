import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Cloud</h3>
    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Azure</h3>
                    <span className="skills__level">Intermediate</span>
                </div>

            </div>

            <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Terraform</h3>
                    <span className="skills__level">Novice</span>
                </div>

            </div>


        </div>

        <div className="skills__group">
                    <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className="skills__name">GCP</h3>
                    <span className="skills__level">Intermediate</span>
                </div>

            </div>
    
            <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">AWS</h3>
                    <span className="skills__level">Novice</span>
                </div>

            </div>
        </div>
    </div>
</div>
  )
}

export default Backend
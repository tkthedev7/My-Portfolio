import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Klinski</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/klinski21/" className="home__social-icon" target="_blank">
                <i class="uil uil-instagram"></i>
                </a>

                <a href="https://www.linkedin.com/in/tristanklinski/" className="home__social-icon" target="_blank">
                <i class="uil uil-linkedin"></i>
                </a>

                <a href="https://github.com/tkthedev7" className="home__social-icon" target="_blank">
                <i class="uil uil-github-alt"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Tristan J. Klinski. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer
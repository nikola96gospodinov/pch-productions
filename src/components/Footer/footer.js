import React from 'react'
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Logo from '../../images/logo-dark.png'

import './footer.scss'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-grid">
                    <div className="useful-links">
                        <h3>Useful Links</h3>
                        <div className="double-grid">
                            <Link to="/about">About</Link>
                            <Link to="/photos">Photography</Link>
                            <Link to="/videos">Videos</Link>
                            <Link to="/music">Music</Link>
                        </div>
                    </div>
                    <div className="get-in-touch">
                        <h3>Get in touch</h3>
                        <div className="double-grid">
                            <a><FontAwesomeIcon icon={['fas', 'map-marker-alt']}/> <span>Stuttgart/Varna</span></a>
                            <a><FontAwesomeIcon icon={['fas', 'phone-alt']}/> <span>0123456789</span></a>
                        </div>
                        <a href="mailto:peter.chorbadhziev@gmail.com"><FontAwesomeIcon icon={['fas', 'envelope']}/> <span>peter.chorbadhziev@gmail.com</span></a>
                    </div>
                </div>
                <div className="logo-section">
                    <Link to="/"><img src={Logo} alt="Logo"/></Link>
                    <p className="website-by">© Copyright P.Ch. Productions {new Date().getFullYear()}. Website by <a href="https://portfolio-nik.netlify.app/" target="_blank">Nik Gospodinov</a></p>
                </div>
            </div>
        </footer>
    )
}
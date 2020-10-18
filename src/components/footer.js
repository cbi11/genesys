import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className="footer-shell">
                <div className="footer-links">
                    <Link to="#">BUILD SOFTWARE</Link>
                    <Link to="#">DESIGN DIFFERENT</Link>
                    <Link to="#">APPLY YOUR KNOWLEDGE</Link>
                    <Link to="#">FAQ</Link>
                </div>
                <div className="address-and-link">
                    <p>Our Local Campus center: Kilometer 7, Enugu/Port Harcourt, Expressway, Centenary City, Enugu. Nigeria</p>
                    <Link to="#">GET IN TOUCH</Link>
                </div>
                <div className="image-and-writeup">
                    <div className="footer-image"></div>
                    <div className="writeup-and-link">
                        <p>Learnable is proud to be a collaborative effort of all the arms of our product team</p>
                        <Link to="#">HEAD TO DEV STUDIO</Link>
                    </div>
                </div>
            </div>
            <div className="group96">
                <div className="icons">
                <i class="fab fa-twitter"></i>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-vimeo-v"></i>
                </div>
                <div className="copyright">
                    <div className="p-text">
                        <p className="copy">© GENESYS 2020</p>
                        <p className="privacy"> PRIVACY STATEMENT</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

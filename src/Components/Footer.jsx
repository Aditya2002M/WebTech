import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h4>COMPANY</h4>
                    <ul>
                        <li>About</li>
                        <li>Features</li>
                        <li>Works</li>
                        <li>Career</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>HELP</h4>
                    <ul>
                        <li>Customer Support</li>
                        <li>Delivery Details</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>RESOURCES</h4>
                    <ul>
                        <li>Free eBooks</li>
                        <li>Development Tutorial</li>
                        <li>How to - Blog</li>
                        <li>Youtube Playlist</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>SUBSCRIBE TO NEWSLETTER</h4>
                    <div className="newsletter">
                        <input type="email" placeholder="Enter email address" />
                        <button>Join</button>
                    </div>
                    <p>CALL US</p>
                    <p>(239) 555-0108</p>
                    <p>EMAIL US</p>
                    <p>info@rareblocks.xyz</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© Copyright 2021, All Rights Reserved</p>
                <div className="social-icons">
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-github"></i>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

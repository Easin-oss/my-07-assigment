import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="footer-content">
                    <div className="footer-column company-info">
                        <h3>CS — Ticket System</h3>
                        <p className="company-description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>

                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul className="footer-links">
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#mission">Our Mission</a></li>
                            <li><a href="#sales">Contact Sales</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><a href="#products">Products & Services</a></li>
                            <li><a href="#stories">Customer Stories</a></li>
                            <li><a href="#download">Download Apps</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Information</h4>
                        <ul className="footer-links">
                            <li><a href="#privacy">Privacy Policy</a></li>
                            <li><a href="#terms">Terms & Conditions</a></li>
                            <li><a href="#join">Join Us</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Social Links</h4>


                        <ul className="footer-links social-links">
                            <li>
                                <a href="#twitter">

                                    <i className="fab fa-twitter"></i>

                                    @CS — Ticket System
                                </a>
                            </li>
                            <li>
                                <a href="#facebook">
                                    <i className="fab fa-facebook"></i>
                                    @CS — Ticket System
                                </a>
                            </li>
                            <li>
                                <a href="#linkedin">
                                    <i className="fab fa-linkedin"></i>
                                    @CS — Ticket System
                                </a>
                            </li>
                            <li>
                                <a href="mailto:support@cst.com">
                                    <i className="fas fa-envelope"></i>
                                    support@cst.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>&copy; 2025 CS — Ticket System. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
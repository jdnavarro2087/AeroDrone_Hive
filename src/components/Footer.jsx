import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div>
             <img src="/images/logo.jpeg" alt="AeroDrone Logo" style={{ width: '110px', height: 'auto' }} />
            </div>

            <div className="contact">
             <h6>Contact Us</h6>
            <p>Email: <a href="mailto:info@AeroDrone_Hive.com">info@AeroDrone_Hive.com</a></p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Live Chat: <a href="#">Chat with our experts</a></p>
            </div>

            <ul className="privacy">
                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                <li><a href="terms-of-service.html">Terms of Service</a></li>
                <li><a href="shipping-returns.html">Shipping and Returns</a></li>
                <li><a href="faqs.html">FAQs</a></li>
            </ul>
            </div>
        
    );
}

export default Footer;
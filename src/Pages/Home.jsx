import React from 'react';
import './Home.css'; 

import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home page">
            <div className="left-half">
                <h1>Welcome to AeroDrone Hive</h1>
                <img src="/images/logo.jpeg" alt="AeroDrone Logo" style={{ width: '640px', height: 'auto' }} />
                
                <div className="hero">
                    <h3>Explore the Sky with Our High-Quality Drones!</h3>
                    <p>Discover the Ultimate Freedom of Aerial Photography and Videography.</p>
                </div>
                
                <Link className="btn btn-primary" to="/catalog">
                    Check out inventory {'>'}
                </Link>
            </div>
            
            <div className="right-half">
                <section className="why">
                    <h3>Why Choose Us?</h3>
                    <ul className="why-list">
                        <h5>*Quality Assurance: We offer only the best brands and models.</h5>
                        <h5>*Expert Advice: Our team of drone enthusiasts is here to guide you.</h5>
                        <h5>*Fast Shipping: Get your drone delivered quickly.</h5>
                        <h5>*Customer Support: 24/7 assistance for all your drone needs.</h5>
                    </ul>
                </section>
                
                <section id="testimonials">
                    <div className="testimonial">
                        <img src="/images/customer.png" alt="Customer img" style={{ width: '220px', height: 'auto' }} />
                        <p>"I love my new drone! Excellent service and quality."</p>
                        <span className="customer-name">Eric Johnson</span>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
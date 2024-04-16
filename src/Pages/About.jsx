import React, { useState } from 'react';
import './About.css'; 

function About() {
    const [contactVisible, setContactVisible] = useState(false);

    function showData() {
        setContactVisible(true);
    }

    return (
        <div className="about page">
            

            <div className="top-half">
                <h3>Contact The Support Team!</h3>
                {contactVisible ? (
                    <div className="box">
                        <p>
                            For questions or concerns please email <b>info@AeroDrone_Hive.com</b> 
                        </p>
                        <p>
                            Phone: +1 (555) 123-4567
                        </p>
                        <p>Live Chat: <a href="#" onClick={e => e.preventDefault()}>Chat with our experts</a></p>
                    </div>
                ) : null}
                <button onClick={showData} className="btn btn-primary">View Contact Info</button>

                <img src="/images/bgimg.jpeg" alt="AeroDrone Logo" className="company-logo" />

                <h1>Our Mission</h1>
                <p>Our mission is simple: to provide high-quality drones and accessories to enthusiasts, professionals, and businesses worldwide. We believe that drones have the power to transform industries, capture breathtaking moments, and unlock new possibilities.</p>
            </div>

            <div className="bottom-half">
                <h2>What Sets Us Apart</h2>
                <div className="apart">
                    <li><strong>Expertise:</strong> Our team consists of seasoned drone enthusiasts, pilots, and tech geeks.</li>
                    <li><strong>Curated Selection:</strong> We handpick the best drones from top brands.</li>
                    <li><strong>Customer-Centric Approach:</strong> You're not just a customer; you're part of the AeroDrone community.</li>
                </div>

                <h2>Meet the Team</h2>
                <div className="team-container">
                    <div className="team-member">
                        <img src="/images/john.png" alt="John Doe" className="team-image"/>
                        <div>
                            <strong>John Doe</strong><br/>
                            Founder & Chief Drone Enthusiast
                        </div>
                    </div>
                    <div className="team-member">
                        <img src="/images/jane.png" alt="Jane Smith" className="team-image"/>
                        <div>
                            <strong>Jane Smith</strong><br/>
                            Customer Support Extraordinaire
                        </div>
                    </div>
                </div>

                <div className="fly">Let's take a flight together! 🚁✨</div>
            </div>
        </div>
    );
}

export default About;

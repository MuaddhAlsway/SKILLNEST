import React from 'react'
import Video from '../assets/Video.mp4'
import './AboutHead.css'
function AboutHeader() {
  return (
    <div className="aboutHeader">
      <video autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
        <div className="containerText">
            <span className="titleSpan">About Us</span>
            <h1>High Delivery Platform</h1>
            <p className="paragraphAbout">
                We are a high delivery platform that connects customers with local restaurants and food delivery services. Our mission is to provide a seamless and convenient food ordering experience for our users, while also supporting local businesses. With our user-friendly app and efficient delivery network, we strive to bring delicious meals to your doorstep in no time. Whether you're craving your favorite dish or looking to discover new culinary delights, we've got you covered. Join us on our journey to revolutionize the way you enjoy food!
            </p>
            <button>Get Started</button>
            <button>Learn More</button>
        </div>

    
    </div>
    
  )
}

export default AboutHeader
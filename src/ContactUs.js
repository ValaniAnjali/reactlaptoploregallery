import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quisquam sint quasi, possimus dolorum temporibus inventore numquam ducimus quod atque nihil amet animi, sapiente, fugit enim repellendus consequuntur sunt expedita suscipit rem eius! Quasi, voluptatem?
        </p>
        <div className="contact-details">
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>
              Address<br />
              marwadi uni<br />
              morbi road<br />
              rajkot
            </p>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <p>
              Phone<br />
              987-123-456
            </p>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>
              Email<br />
              laptoploregallery@laptops.com
            </p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h3>Send Message</h3>
        <form onSubmit={(e) => {
          e.preventDefault();
          alert('Message sent!');
          e.target.reset();
        }}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Type Your Message..." required></textarea>
          <button type="submit">send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;

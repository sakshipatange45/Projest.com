// src/components/ContactPage.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaPhone, FaMapMarker, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Contact.css'; // Import the CSS file

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission (e.g., send data to an API)
    alert('Thank you for contacting us!');
  };

  return (
    <section id="contact" className="contact-page">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Have a question or want to work together? Feel free to reach out!</p>

        <div className="contact-content">
          {/* Contact Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <span className="error">{errors.name.message}</span>}
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && <span className="error">{errors.email.message}</span>}
            </div>

            <div className="form-group">
              <textarea
                placeholder="Your Message"
                rows="5"
                {...register('message', { required: 'Message is required' })}
              />
              {errors.message && <span className="error">{errors.message.message}</span>}
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <p>sakshipatangr45@gmail.com</p>
            </div>
            <div className="info-item">
              <FaPhone className="info-icon" />
              <p>+91 9822660658</p>
            </div>
            <div className="info-item">
              <FaMapMarker className="info-icon" />
              <p>H.no 121 Ganga nagar Nanded raod, Hingoli, Maharashtra,India</p>
            </div>

            {/* Social Media Icons */}
            <div className="social-icons">
              <a href="https://linkedin.com/in/sakshi-patange-9ab815220" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="icon" />
              </a>
              <a href="https://github.com/sakshipatange45" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="icon" />
              </a>
              
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="icon" />
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
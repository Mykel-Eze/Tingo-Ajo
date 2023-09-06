import React, { useState } from 'react';
import M from 'materialize-css'

import ApplyNowWidget from "../components/ApplyNowWidget";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
          ...formData,
          [id]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can handle form submission, e.g., sending data to a server or displaying a confirmation message.
        M.toast({html: 'Message sent successfully'})
      };

    return (
        <div className="page-content-wrapper">
            <div className="page-header pry-bg">
                <div className="container flex-div justify-content-btw">
                    <div className="page-title">Contact Us</div>
                    <div className="contact-link-side">
                        <ul>
                            <li>
                                <a href="mailto:customercare@tingomobile.com.ng">customercare@tingomobile.com.ng</a>
                            </li>
                            <li>
                                <a href="tel:+2348094234567">+234 809 423 4567</a>
                            </li>
                            <li>
                                <span>95 Broad Street, Lagos Island, Lagos</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="contact-form-wrapper">
                    <div className="form-header pry-color">
                        <div className="section-title">Get in touch</div>
                        <div className="form-description">
                            Do you have any questions? We'd love to hear from you.
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="input-field">
                            <input id="name" type="text" value={formData.name} onChange={handleChange} required className="inp-field" />
                            <label for="name">Name</label>
                        </div>
                        <div className="input-field">
                            <input id="email" type="email" value={formData.email} onChange={handleChange} required className="inp-field" />
                            <label for="email">Email</label>
                        </div>
                        <div className="input-field">
                            <input id="subject" type="text" value={formData.subject} onChange={handleChange} required className="inp-field" />
                            <label for="subject">Subject</label>
                        </div>
                        <div class="input-field">
                            <textarea id="message" class="materialize-textarea inp-field" value={formData.message} onChange={handleChange} required></textarea>
                            <label for="message">Message</label>
                        </div>

                        <div className="submit-btn-wrapper">
                            <button className="submit-btn hover-scale">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>

            <section className="container">
                <ApplyNowWidget />
            </section>
        </div>
    )
}

export default Contact;
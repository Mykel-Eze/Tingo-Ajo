import React, { useState } from 'react';
import M from 'materialize-css'

import "../assets/css/apply-now.css";

const ApplyNowModal = () => {
    const initialFormData = {
        name: '',
        phone: '',
        email: '',
        address: '',
    };
    
    const [formData, setFormData] = useState(initialFormData);
    
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
          ...formData,
          [id]: value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        M.toast({html: 'Application sent successfully'});
        setFormData(initialFormData);
    };

    return (
        <div id="apply-now-modal" class="modal">
            <div class="modal-content">
                <div className="right-align container">
                    <img src={require("../assets/images/close.svg").default} alt="close" className="modal-close" />
                </div>
                <div className="container">
                    <div className="contact-form-wrapper">
                        <div className="form-header pry-color center">
                            <div className="section-title">Apply now</div>
                            <div className="form-description">
                                Join our community of financially empowered individuals and start your journey
                                towards a brighter financial future
                            </div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="input-field">
                                <input id="name" type="text" value={formData.name} onChange={handleChange} required className="inp-field" />
                                <label for="name">Name</label>
                            </div>
                            <div className="input-field">
                                <input id="phone" type="tel" value={formData.phone} onChange={handleChange} required className="inp-field" />
                                <label for="phone">Phone Number</label>
                            </div>
                            <div className="input-field">
                                <input id="email" type="email" value={formData.email} onChange={handleChange} required className="inp-field" />
                                <label for="email">Email Address</label>
                            </div>
                            <div className="input-field">
                                <input id="address" type="text" value={formData.address} onChange={handleChange} required className="inp-field" />
                                <label for="address">Residential Address</label>
                            </div>

                            <div className="submit-btn-wrapper">
                                <button className="submit-btn hover-scale">Apply Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplyNowModal;
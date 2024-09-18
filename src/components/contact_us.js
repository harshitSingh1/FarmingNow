import React, { useState } from 'react';
import '../styles/ContactUs.css'; // Import the corresponding CSS for styling
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons for phone, email, address

const ContactUs = () => {
    // State to manage form fields and submission status
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [error, setError] = useState('');

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from refreshing the page
        const { name, email, subject, message } = formData;

        // Basic validation
        if (!name || !email || !subject || !message) {
            setError('All fields are required.');
            return;
        }

        // If all fields are filled, display the success message
        setFormSubmitted(true);
        setError('');
        // Clear the form fields
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <div className="contact-us-container">
            <h1 className="heading">Contact <span>Us</span></h1>
            <div className="contact-us-content">
                {/* First Column */}
                <div className="contact-details">
                    <h2 className="contact-heading">Contact Detail</h2>
                    <p className="contact-subheading">
                        Feel free to reach out with any queries related to farming, crops, or agricultural practices—our team is ready to assist.
                    </p>

                    {/* Contact Info */}
                    <div className="contact-info">
                        <div className="info-item">
                            <FaPhoneAlt className="icon phone-icon" />
                            <div>
                                <strong>PHONE:</strong>
                                <p>+91457836913, +91457836913</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaEnvelope className="icon email-icon" />
                            <div>
                                <strong>EMAIL:</strong>
                                <p>FarmingNow@info.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaMapMarkerAlt className="icon address-icon" />
                            <div>
                                <strong>ADDRESS:</strong>
                                <p>6743 Last Street, Abcd, Xyz</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Column - Contact Form */}
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="input-field"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input-field"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="input-field"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            className="message-box"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        {error && <p className="error">{error}</p>}
                        {formSubmitted && <p className="success">Form submitted successfully!</p>}
                        <button type="submit" className="submit-btn">Send Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

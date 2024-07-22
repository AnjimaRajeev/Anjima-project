import React from 'react';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';
import LocationMap from './LocationMap'; // Optional

const Contact = () => {
  return (
    <div className="contact-container">
      <ContactForm />
      <SocialLinks />
      {/* Uncomment below if you have a location-based work */}
      {/* <LocationMap /> */}
    </div>
  );
};

export default Contact;

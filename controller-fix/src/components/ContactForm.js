import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, such as sending an email or saving the data
    console.log(formData);
  };

  return (
    <MDBContainer className="my-5">
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={handleSubmit}>
            <p className="h4 text-center mb-4">Let's get in touch!</p>
            <MDBInput
              label="Your name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <MDBInput
              label="Your email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <MDBInput
              type="textarea"
              label="Your message"
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <div className="text-center mt-4">
              <MDBBtn color="warning" type="submit">Send</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactForm;

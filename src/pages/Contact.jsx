import styled from 'styled-components'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FaMapMarkerAlt } from 'react-icons/fa';

const ContactContainer = styled.div`
  padding: 6rem var(--container-padding) 4rem;
  background: url('/src/assets/images/back.png') center/cover no-repeat, white;
`

const ContactContent = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  background: url('/src/assets/images/back.png') center/cover no-repeat, white;
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const ContactInfo = styled.div`
  h1 {
    font-size: 3.5rem;
    color: #0F76BC;
    margin-bottom: 2rem;
    line-height: 1.2;
  }
  
  p {
    color: var(--text);
    margin-bottom: 2rem;
    font-size: 1.1rem;
    font-style: italic;
  }
`

const ContactForm = styled.form`
  width: 100%;
  max-width: 400px;
  margin: 2rem auto 0 auto;
  padding: 1.5rem 1rem;
  background: linear-gradient(135deg, #f8fafd 60%, #e3f0fa 100%);
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(15, 118, 188, 0.13);
  border: 2px solid #0F76BC;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  top: 0;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 0.3rem;

  label {
    color: #0F76BC;
    font-weight: 600;
    margin-bottom: 0.1rem;
    font-size: 0.98rem;
    letter-spacing: 0.5px;
  }

  input, textarea, select {
    width: 100%;
    padding: 0.7rem 0.9rem;
    border: 1.2px solid #F16522;
    border-radius: 6px;
    background: #fff;
    color: #222;
    font-size: 0.98rem;
    transition: border-color 0.2s, box-shadow 0.2s;

    &:focus {
      border-color: #0F76BC;
      box-shadow: 0 0 0 2px #e3f0fa;
      outline: none;
    }
  }

  textarea {
    min-height: 80px;
    resize: vertical;
  }
`;

const ServiceCheckboxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #0F76BC;
    font-weight: 500;
    background: url('/src/assets/images/back.png') center/cover no-repeat, white;
    padding: 0.4rem 1rem 0.4rem 0.7rem;
    border-radius: 5px;
    border: 1px solid #e3f0fa;
    cursor: pointer;
    transition: background 0.2s, border 0.2s;

    input[type="checkbox"] {
      accent-color: #F16522;
      margin-right: 0.4rem;
    }

    &:hover {
      background: #e3f0fa;
      border: 1.5px solid #0F76BC;
    }
  }
`

const SubmitButton = styled.button`
  background: linear-gradient(90deg, #0F76BC 70%, #F16522 100%);
  color: #fff;
  padding: 0.7rem 0;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  margin-top: 0.3rem;
  box-shadow: 0 2px 8px rgba(15, 118, 188, 0.10);
  transition: background 0.2s, transform 0.2s;

  &:hover, &:focus {
    background: linear-gradient(90deg, #F16522 60%, #0F76BC 100%);
    transform: translateY(-2px) scale(1.02);
    color: #fff;
  }

  &:disabled {
    background: #cccccc;
    color: #fff;
    cursor: not-allowed;
  }
`

const AddressBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #fff;
  border-left: 6px solid #0F76BC;
  box-shadow: 0 4px 16px rgba(15, 118, 188, 0.10);
  padding: 1.2rem 2rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  color: #0F76BC;
  font-weight: 500;
`;

const MapTitle = styled.h2`
  color: #0F76BC;
  font-size: 1.4rem;
  margin-bottom: 0.7rem;
  margin-top: 3rem;
  text-align: left;
`;

const MapContainer = styled.div`
  margin-top: 0;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(15, 118, 188, 0.18);
  border: 3px solid #0F76BC;
  height: 400px;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`

const Contact = () => {
  const location = useLocation()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    setShowConfirmation(true)
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    setTimeout(() => setShowConfirmation(false), 5000) // Hide confirmation after 5 seconds
  }

  return (
    <ContactContainer>
      <Helmet>
        <title>Contact Us - RGT</title>
      </Helmet>
      
      <ContactContent>
        <ContactInfo>
          <h1>Ready to unlock your digital potential?</h1>
          <p>Contact us if you want an appointment or feedback. Fill in the form and we'll get back to you shortly.</p>
        </ContactInfo>
        
        <ContactForm
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          encType="multipart/form-data"
        >
          {showConfirmation && (
            <ConfirmationMessage>
              Thank you, we'll get back to you within 24h.
            </ConfirmationMessage>
          )}
          
          <FormGroup>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
            />
          </FormGroup>

          <FormGroup>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </FormGroup>

          <FormGroup>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            />
          </FormGroup>

          <FormGroup>
            <input
              type="text"
              name="company"
              placeholder="Company/Organization Name (Optional)"
            />
          </FormGroup>

          <FormGroup>
            <label>Select Service(s)</label>
            <ServiceCheckboxes>
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="Training"
                />
                Training
              </label>
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="Consultancy"
                />
                Consultancy
              </label>
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="Hosting"
                />
                Hosting
              </label>
            </ServiceCheckboxes>
          </FormGroup>

          <FormGroup>
            <textarea
              name="description"
              placeholder="Briefly describe what you need"
              required
            />
          </FormGroup>

          <FormGroup>
            <input
              type="file"
              name="file"
            />
          </FormGroup>

          <SubmitButton type="submit">
            Submit Quotation Request
          </SubmitButton>
        </ContactForm>
      </ContactContent>
      
      <MapTitle>Our Location</MapTitle>
      <AddressBox>
        <FaMapMarkerAlt size={28} color="#F16522" />
        24Q8+Q62, KN 3 Rd, Kigali, Rwanda
      </AddressBox>
      <MapContainer>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5115650493167!2d30.0614624!3d-1.9553783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6eb4106e37d%3A0xf1a529fc8df33c04!2s24Q8%2BQ62%2C%20KN%203%20Rd%2C%20Kigali!5e0!3m2!1sen!2srw!4v1625147433772!5m2!1sen!2srw"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </MapContainer>
    </ContactContainer>
  )
}

export default Contact
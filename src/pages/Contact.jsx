import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useState } from 'react';

const ContactContainer = styled.div`
  padding: 6rem var(--container-padding) 4rem;
  background: url('/images/back.png') center/cover no-repeat, white;
`

const ContactContent = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
  background: url('/images/back.png') center/cover no-repeat, white;
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
    font-weight: 900;
    letter-spacing: 1.5px;
    text-shadow: 0 4px 24px rgba(15, 118, 188, 0.13);
    text-align: center;
  }
  
  p {
    color: #F16522;
    margin-bottom: 2rem;
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;
    letter-spacing: 0.5px;
    text-shadow: 0 2px 8px rgba(241, 101, 34, 0.10);
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
  font-size: 2rem;
  margin-bottom: 0.7rem;
  margin-top: 3rem;
  text-align: center;
  font-weight: 800;
  letter-spacing: 1px;
  text-shadow: 0 2px 8px rgba(15, 118, 188, 0.10);
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

// --- Contact Form Styles ---
const ContactForm = styled.form`
  width: 100%;
  max-width: 500px;
  margin: 2rem auto 0 auto;
  padding: 2.5rem 2rem;
  background: linear-gradient(135deg, #f8fafd 60%, #e3f0fa 100%);
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(15, 118, 188, 0.13);
  border: 2.5px solid #0F76BC;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  label {
    color: #0F76BC;
    font-weight: 600;
    margin-bottom: 0.2rem;
    font-size: 1rem;
    letter-spacing: 0.5px;
  }

  input, textarea {
    width: 100%;
    padding: 0.9rem 1rem;
    border: 1.5px solid #F16522;
    border-radius: 7px;
    background: #fff;
    color: #222;
    font-size: 1rem;
    transition: border-color 0.2s, box-shadow 0.2s;

    &:focus {
      border-color: #0F76BC;
      box-shadow: 0 0 0 2px #e3f0fa;
      outline: none;
    }
  }

  textarea {
    min-height: 110px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, #0F76BC 70%, #F16522 100%);
  color: #fff;
  padding: 1rem 0;
  border-radius: 7px;
  font-size: 1.15rem;
  font-weight: 700;
  border: none;
  margin-top: 0.5rem;
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
`;

const ErrorMessage = styled.span`
  color: #F16522;
  font-size: 0.95rem;
  margin-top: 0.2rem;
  font-weight: 500;
`;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_m5ybf7g',
        'template_awgrff8',
        {
          from_name: data.fullnames,
          from_email: data.email,
          phone: data.phone,
          message: data.message,
        },
        'OsAb3dmtEpXTK9gjp'
      );
      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactContainer>
      <Helmet>
        <title>Contact Us - RGT</title>
      </Helmet>
      
      <ContactContent>
        <ContactInfo>
          <h1>Ready to unlock your digital potential?</h1>
          <p>Contact us if you want an appointment or feedback.</p>
        </ContactInfo>
        <ContactForm onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Names"
              {...register('fullnames', { required: 'Full names are required' })}
            />
            {errors.fullnames && <ErrorMessage>{errors.fullnames.message}</ErrorMessage>}
          </FormGroup>
          <FormGroup>
            <input
              type="email"
              placeholder="Email Address"
              {...register('email', {
                required: 'Email Address is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </FormGroup>
          <FormGroup>
            <input
              type="tel"
              placeholder="Phone Number"
              {...register('phone', {
                required: 'Phone number is required',
              })}
            />
            {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
          </FormGroup>
          <FormGroup>
            <textarea
              placeholder="Message"
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
          </FormGroup>
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
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
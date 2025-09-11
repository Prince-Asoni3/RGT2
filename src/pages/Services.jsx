import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'
import { FaQuoteRight } from 'react-icons/fa';

// Updated services data with images
const services = [
  {
    title: 'Digital Solutions and Software Development',
    description: 'We design and develop custom digital solutions and software tailored to the unique needs of individuals, businesses, and communities. Our innovative solutions improve efficiency, streamline communication, and boost productivity.',
    image: '/images/service1.jpeg',
  },
  {
    title: 'Network and System Administration',
    description: 'We design and deploy secure network infrastructure, providing monitoring and management solutions that keep businesses and communities connected and running smoothly.',
    image: '/images/service8.jpeg',
  },
  {
    title: 'Capacity Building, Training  and Community Empowerment',
    description: 'We provide modern curriculum design and deliver training programs for both foundational digital skills and advanced technical expertise, strengthening professional development and community empowerment.',
    image: '/images/service2.jpeg',
  },
  {
    title: 'Consulting and Advisory Services',
    description: 'We deliver expert consulting and strategic advice to help organizations improve efficiency, implement digital solutions, and achieve sustainable growth. Our services provide actionable insights and streamline processes to support long-term success in a rapidly evolving digital landscape.',
    image: '/images/service3.jpeg',
  },
  
  {
    title: 'Event Management',
    description: 'We help organizations plan and execute engaging events, workshops, conferences, and awareness campaigns that inspire learning, foster collaboration, and create meaningful impact.',
    image: '/images/service5.jpeg',
  },
  
  
];

// Clients data
const clients = [
  {
    name: 'ISOC Rwanda',
    description: 'The Internet Society Rwanda Chapter promotes the open development, evolution, and use of the Internet for the benefit of all people in Rwanda.',
    image: '/images/client1.png',
    website: 'https://www.internetsociety.rw/',
  },
  {
    name: 'GIZ Rwanda',
    description: 'The Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH supports sustainable development in Rwanda through projects in economic transformation, governance, climate action, and digitalization.',
    image: '/images/client2.png',
    website: 'https://www.giz.de/en/worldwide/332.html',
  },
  {
    name: 'Save the Children Rwanda',
    description: 'Save the Children has been working in Rwanda since 1994 to ensure every child has a healthy start in life, the opportunity to learn, and protection from harm.',
    image: '/images/client3.png',
    website: 'https://rwanda.savethechildren.net/',
  },
];

const Services = () => {
  return (
    <ServicesContainer>
      <Helmet>
        <title>Services- RGT</title>
      </Helmet>
      <PageHeader>
        <h1>Our Services</h1>
        <p>We combine innovative technology, training, and community initiatives to drive growth, efficiency, and lasting impact.</p>
      </PageHeader>
      <ServicesList>
        {services.map((service, idx) => (
          <ServiceCard key={idx}>
            <ServiceImage src={service.image} alt={service.title} />
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesList>
      <ContactSection>
        
        <QuotationSection>
                <QuotationHeader>
                  <FaQuoteRight size={40} color="#0F76BC" />
                  <h1>Request For Quotation</h1>
                  <p>Please fill out the form below to request for a quotation</p>
                </QuotationHeader>
                <ContactNowButton>
                  <Link to="#">Click Here </Link>
                </ContactNowButton>
              </QuotationSection>
      </ContactSection>
    </ServicesContainer>
  );
};

export default Services;

// Styled Components
const ServicesContainer = styled.div`
  padding: 7rem var(--container-padding) 4rem;
  background: url('/images/back.png') center/cover no-repeat, white;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;

  h1 {
    font-family: 'Poppins', 'Montserrat', Arial, sans-serif;
    font-size: 3rem;
    color: #0F76BC;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-shadow: 0 4px 24px rgba(15, 118, 188, 0.10);
    margin-bottom: 1.2rem;
    line-height: 1.1;
  }

  p {
    color: #222;
    font-size: 1.25rem;
    font-family: 'Poppins', 'Montserrat', Arial, sans-serif;
    font-weight: 500;
    max-width: 700px;
    margin: 0 auto;
    opacity: 0.92;
    letter-spacing: 0.2px;
  }
`;

const ServicesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 4rem;
`;

const ServiceCard = styled.div`
  background: url('/images/back.png') center/cover no-repeat, white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(15, 118, 188, 0.08);
  padding: 1.5rem;
  width: 100%;
  max-width: 400px;
  min-width: 260px;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 2.5px solid #0F76BC;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  overflow: visible;

  &:hover {
    transform: translateY(-12px) scale(1.05);
    box-shadow: 0 12px 40px rgba(15, 118, 188, 0.2);
    background: linear-gradient(90deg, rgba(15, 118, 188, 0.3), rgba(241, 101, 34, 0.3)),
      url('/images/back.png') center/cover no-repeat, white;
  }

  @media (max-width: 600px) {
    width: 98vw;
    min-width: 180px;
    max-width: 350px;
    min-height: 220px;
    padding: 1rem;
    border-radius: 8px;
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  max-width: 220px; /* Adjusted to fit larger card */
  height: auto;
  max-height: 140px; /* Increased slightly for balance */
  border-radius: 8px;
  margin-bottom: 0.8rem;
  box-shadow: 0 2px 12px rgba(15, 118, 188, 0.10);
  border: 2px solid #F16522;
  object-fit: cover; /* Ensure image fits nicely */
`;

const ServiceTitle = styled.h3`
  color: #0F76BC;
  font-size: 1.4rem; /* Slightly larger for better visibility */
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
  letter-spacing: 0.8px;
  text-shadow: 0 2px 8px rgba(15, 118, 188, 0.07);
  line-height: 1.2;
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #444;
  text-align: center;
  line-height: 1.5;
  background: url('/images/back.png') center/cover no-repeat, white;
  border-radius: 8px;
  padding: 0.8rem;
  box-shadow: 0 2px 8px rgba(15, 118, 188, 0.07);
  flex-grow: 1;
  display: flex;
  align-items: center;
  word-break: break-word;
  @media (max-width: 900px) {
    font-size: 0.95rem;
  }
  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding: 0.5rem;
  }
`;

const ClientsSection = styled.section`
  margin-top: 5rem;
  padding: 4rem var(--container-padding);
  background: url('/images/back.png') center/cover no-repeat, white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 2rem var(--container-padding);
  }
`;

const ClientsHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-family: 'Poppins', 'Montserrat', Arial, sans-serif;
    font-size: 2.2rem;
    color: #0F76BC;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
    text-shadow: 0 2px 8px rgba(15, 118, 188, 0.10);
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.8rem;
    }
  }
`;

const ClientsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 4rem;
`;

const ClientCard = styled.div`
  background: url('/images/back.png') center/cover no-repeat, white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(15, 118, 188, 0.08);
  padding: 1.5rem;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 2.5px solid #0F76BC;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-12px) scale(1.05);
    box-shadow: 0 12px 40px rgba(15, 118, 188, 0.2);
    background: linear-gradient(90deg, rgba(15, 118, 188, 0.3), rgba(241, 101, 34, 0.3)),
      url('/images/back.png') center/cover no-repeat, white;
  }

  @media (max-width: 600px) {
    width: 90vw;
    height: 90vw;
    max-width: 350px;
    max-height: 350px;
    padding: 1rem;
    border-radius: 8px;
  }
`;

const ClientImage = styled.img`
  width: 100%;
  max-width: 220px;
  height: auto;
  max-height: 140px;
  border-radius: 8px;
  margin-bottom: 0.8rem;
  box-shadow: 0 2px 12px rgba(15, 118, 188, 0.10);
  border: 2px solid #F16522;
  object-fit: cover;
`;

const ClientTitle = styled.h3`
  color: #0F76BC;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
  letter-spacing: 0.8px;
  text-shadow: 0 2px 8px rgba(15, 118, 188, 0.07);
  line-height: 1.2;
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const ClientDescription = styled.p`
  font-size: 1rem;
  color: #444;
  text-align: center;
  line-height: 1.5;
  background: url('/images/back.png') center/cover no-repeat, white;
  border-radius: 8px;
  padding: 0.8rem;
  box-shadow: 0 2px 8px rgba(15, 118, 188, 0.07);
  flex-grow: 1;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding: 0.5rem;
  }
`;

const ClientLink = styled.a`
  display: inline-block;
  padding: 0.7rem 2rem;
  background: linear-gradient(90deg, #0F76BC 70%, #F16522 100%);
  color: #fff;
  border: none;
  border-radius: 7px;
  font-size: 1.08rem;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(15, 118, 188, 0.10);
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;

  &:hover, &:focus {
    background: linear-gradient(90deg, #F16522 60%, #0F76BC 100%);
    transform: translateY(-2px) scale(1.02);
    color: #fff;
  }
`;

const ContactSection = styled.section`
  margin-top: 5rem;
  padding: 4rem 0;
  background: url('/images/back.png') center/cover no-repeat, white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-family: 'Poppins', 'Montserrat', Arial, sans-serif;
  font-size: 2.2rem;
  color: #0F76BC;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  text-shadow: 0 2px 8px rgba(15, 118, 188, 0.10);
`;

const ContactDescription = styled.p`
  color: #222;
  font-size: 1.25rem;
  font-family: 'Poppins', 'Montserrat', Arial, sans-serif;
  font-weight: 500;
  max-width: 700px;
  margin: 0 auto 1.5rem;
  opacity: 0.92;
  letter-spacing: 0.2px;
`;

const QuotationSection = styled.div`
  padding: 3rem var(--container-padding) 4rem; 
`;

const QuotationHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  h1 {
    font-size: 2.8rem;
    color: #0F76BC;
    font-weight: 800;
  }
`;

const ContactNowButton = styled.button`
  display: block;
  margin: 1.5rem auto;
  padding: 0.7rem 2rem;
  background: linear-gradient(90deg, #0F76BC 70%, #F16522 100%);
  color: #fff;
  border: none;
  border-radius: 7px;
  font-size: 1.08rem;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(15, 118, 188, 0.10);
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  a {
    color: #fff;
    text-decoration: none;
  }

  &:hover,
  &:focus {
    background: linear-gradient(90deg, #F16522 60%, #0F76BC 100%);
    transform: translateY(-2px) scale(1.02);
  }
`;
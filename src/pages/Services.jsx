import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'

// Updated services data with images
const services = [
  {
    title: 'Digital Solutions & Software Development',
    description: 'Custom software development tailored to your needs. Development and deployment of innovative, reliable digital platforms and applications. Solutions that enhance efficiency, communication, and productivity.',
    image: '/images/service1.jpeg',
  },
  {
    title: 'Capacity Building & Training',
    description: 'Digital literacy programs for communities, businesses, and individuals. Workshops and courses on digital skills, cybersecurity, and online safety.',
    image: '/images/service2.jpeg',
  },
  {
    title: 'Consulting & Advisory Services',
    description: 'Guidance on digital transformation strategies for businesses and organizations. Support for integrating technology solutions to achieve sustainable growth.',
    image: '/images/service3.jpeg',
  },
  {
    title: 'Awareness Programs',
    description: 'Campaigns to educate communities on digital literacy, online safety, and cybersecurity. Promoting informed, responsible, and safe use of digital technologies.',
    image: '/images/service4.png',
  },
  {
    title: 'Event Management',
    description: 'Planning and executing conferences, workshops, seminars, and digital expos. Supporting community engagement and knowledge-sharing events that foster learning and innovation.',
    image: '/images/service5.jpeg',
  },
  {
    title: 'Community Empowerment Programs',
    description: 'Providing access to digital resources for underserved communities. Projects that promote inclusion, learning, and innovation.',
    image: '/images/service6.jpeg',
  },
  {
    title: 'Innovation & Research',
    description: 'Research on emerging digital trends and technologies. Developing innovative solutions that address real-world challenges.',
    image: '/images/service7.png',
  },
  {
    title: 'System Administration and Networking',
    description: 'Providing expert system administration and network management services to ensure secure, efficient, and reliable IT infrastructure for businesses and organizations.',
    image: '/images/service8.jpeg',
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
        <p>Unlocking Digital Potential</p>
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

      <ClientsSection>
        <ClientsHeader>
          <h2>Our Clients</h2>
        </ClientsHeader>
        <ClientsList>
          {clients.map((client, idx) => (
            <ClientCard key={idx}>
              <ClientImage src={client.image} alt={client.name} />
              <ClientTitle>{client.name}</ClientTitle>
              <ClientDescription>{client.description}</ClientDescription>
              <ClientLink href={client.website} target="_blank" rel="noopener noreferrer">
                More Information
              </ClientLink>
            </ClientCard>
          ))}
        </ClientsList>
      </ClientsSection>
      <ContactSection>
        
        <ContactButton to="/contact">Contact Us</ContactButton>
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
  width: 400px; /* Increased for square shape and more space */
  height: 400px; /* Increased for square shape and more space */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; /* Distribute content evenly */
  border: 2.5px solid #0F76BC;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  overflow: hidden; /* Prevent content overflow */

  &:hover {
    transform: translateY(-12px) scale(1.05);
    box-shadow: 0 12px 40px rgba(15, 118, 188, 0.2);
    background: linear-gradient(90deg, rgba(15, 118, 188, 0.3), rgba(241, 101, 34, 0.3)),
      url('/images/back.png') center/cover no-repeat, white;
  }

  @media (max-width: 600px) {
    width: 90vw; /* Responsive width */
    height: 90vw; /* Maintain square shape */
    max-width: 350px;
    max-height: 350px;
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
  font-size: 1rem; /* Increased for readability */
  color: #444;
  text-align: center;
  line-height: 1.5;
  background: url('/images/back.png') center/cover no-repeat, white;
  border-radius: 8px;
  padding: 0.8rem;
  box-shadow: 0 2px 8px rgba(15, 118, 188, 0.07);
  flex-grow: 1; /* Allow description to take available space */
  display: flex;
  align-items: center; /* Center text vertically */
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

const ContactButton = styled(Link)`
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
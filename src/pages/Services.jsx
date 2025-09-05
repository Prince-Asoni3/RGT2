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
];

// Example testimonials data
const testimonials = [
  {
    name: 'Rukundo Shema Patrick',
    role: 'Mahama Refugee Camp',
    message: 'RGT delivered our project on time and exceeded our expectations. Highly recommended!',
    avatar: '/images/test1.jpeg',
  },
  {
    name: 'Harerimana Obed',
    role: 'Owner, TechSolutions',
    message: 'Professional, reliable, and innovative. We will work with RGT again!',
    avatar: '/images/test2.jpeg',
  },
  {
    name: 'Munezero Theoneste',
    role: 'Director, FutureDynamics',
    message: 'Their team is knowledgeable and responsive. Our digital transformation was a success!',
    avatar: '/images/test3.jpeg',
  },
  {
    name: 'Shema Mustafa',
    role: 'Founder, KLAB',
    message: 'Great experience from start to finish. Highly recommended for any tech project.',
    avatar: '/images/test4.jpeg',
  },
];

const TESTIMONIALS_PER_SLIDE = 2;

const Services = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const totalSlides = Math.ceil(testimonials.length / TESTIMONIALS_PER_SLIDE);

  const handlePrev = () => {
    setTestimonialIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setTestimonialIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const currentTestimonials = testimonials.slice(
    testimonialIndex * TESTIMONIALS_PER_SLIDE,
    testimonialIndex * TESTIMONIALS_PER_SLIDE + TESTIMONIALS_PER_SLIDE
  );

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

      <TestimonialsSection>
        <TestimonialsHeader>
          <h2>What Our Clients Say</h2>
        </TestimonialsHeader>
        <SliderControls>
          <SlideNavButton onClick={handlePrev} $left>&lt;</SlideNavButton>
          <TestimonialsGrid>
            {currentTestimonials.map((t, idx) => (
              <TestimonialCard key={idx}>
                <Avatar src={t.avatar} alt={t.name} />
                <TestimonialMessage>"{t.message}"</TestimonialMessage>
                <TestimonialName>{t.name}</TestimonialName>
                <TestimonialRole>{t.role}</TestimonialRole>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
          <SlideNavButton onClick={handleNext} $right>&gt;</SlideNavButton>
        </SliderControls>
        <SlideIndicators>
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <Dot
              key={idx}
              $active={testimonialIndex === idx}
              onClick={() => setTestimonialIndex(idx)}
            />
          ))}
        </SlideIndicators>
      </TestimonialsSection>
      <ContactSection>
        <ContactTitle>Ready to Get Started?</ContactTitle>
        <ContactDescription>
          Contact us today to discuss how we can help you achieve your digital goals.
        </ContactDescription>
        <ContactButton to="/contact">Get in Touch</ContactButton>
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

const TestimonialsSection = styled.section`
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

const TestimonialsHeader = styled.div`
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

const slideAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const SliderControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const TestimonialsGrid = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: stretch;
  animation: ${slideAnimation} 0.5s ease-out forwards;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    gap: 1.5rem;
    flex-direction: column;
    align-items: center;
  }
`;

const TestimonialCard = styled.div`
  background: url('/images/back.png') center/cover no-repeat, white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(15, 118, 188, 0.12);
  padding: 2rem 1.5rem;
  max-width: 340px;
  min-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;
  background-clip: padding-box;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(15, 118, 188, 0.18);
    border-color: #F16522;
  }

  @media (max-width: 600px) {
    max-width: 100%;
    min-width: 0;
    padding: 1.5rem 1rem;
  }
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.2rem;
  border: 3px solid #F16522;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const TestimonialMessage = styled.p`
  color: #222;
  font-size: 1.1rem;
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-family: 'Poppins', 'Montserrat', Arial, sans-serif;
  opacity: 0.9;
`;

const TestimonialName = styled.div`
  color: #0F76BC;
  font-weight: 700;
  font-size: 1.15rem;
  margin-bottom: 0.3rem;
`;

const TestimonialRole = styled.div`
  color: #F16522;
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.85;
`;

const SlideNavButton = styled.button`
  background: linear-gradient(90deg, #0F76BC 70%, #F16522 100%);
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(15, 118, 188, 0.15);
  z-index: 2;

  &:hover {
    background: linear-gradient(90deg, #F16522 60%, #0F76BC 100%);
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(15, 118, 188, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(15, 118, 188, 0.3);
  }

  ${(props) => props.$left && 'margin-right: 1rem;'}
  ${(props) => props.$right && 'margin-left: 1rem;'}

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const SlideIndicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 2rem;
  width: 100%;
  z-index: 2;

  @media (max-width: 600px) {
    gap: 8px;
    margin-top: 1.5rem;
  }
`;

const Dot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${(props) =>
    props.$active ? 'linear-gradient(90deg, #0F76BC 60%, #F16522 100%)' : '#e3f0fa'};
  box-shadow: ${(props) => (props.$active ? '0 2px 8px rgba(15, 118, 188, 0.15)' : 'none')};
  transition: all 0.3s cubic-bezier(0.4, 2, 0.3, 1);
  cursor: pointer;
  border: 2px solid #F16522;
  opacity: ${(props) => (props.$active ? 1 : 0.7)};

  &:hover {
    background: linear-gradient(90deg, #F16522 60%, #0F76BC 100%);
    opacity: 1;
    box-shadow: 0 2px 8px rgba(15, 118, 188, 0.18);
  }

  @media (max-width: 600px) {
    width: 12px;
    height: 12px;
    border-width: 1.5px;
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
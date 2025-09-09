import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import QuotationForm from '../components/QuotationForm';

// Updated portfolio data with description
const projects = [
  {
    image: '/images/project1.jpg',
    title: 'Community Network Training and WIFI Entrepreneurship',
    description: 'Empowering refugees with skills to establish and manage community networks.'
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

const Portfolio = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedProject = queryParams.get('project');
  const selectedProjectIndex = selectedProject ? parseInt(selectedProject, 10) : null;

  // Close modal on Escape key
  useEffect(() => {
    if (modalIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setModalIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalIndex]);

  // Close modal on click outside
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) setModalIndex(null);
  };

  useEffect(() => {
    if (selectedProjectIndex !== null && projects[selectedProjectIndex]) {
      const element = document.getElementById(`project-${selectedProjectIndex}`);
      if (element) {
        const navbarHeight = 80; // Adjust this value based on your navbar's actual height
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: 'smooth',
        });
      }
    }
  }, [selectedProjectIndex]);

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
    <PortfolioContainer>
      <Helmet>
        <title>Portfolio - RGT</title>
      </Helmet>
      <PortfolioHeader>
        <h1>Our Portfolio</h1>
        <p>
          Explore our completed projects and see how we deliver value and innovation to our clients.
        </p>
      </PortfolioHeader>
      <PortfolioContent>
        {projects.map((project, idx) => (
          <PortfolioItem
            key={idx}
            id={`project-${idx}`}
            $isSelected={selectedProjectIndex === idx}
          >
            <img src={project.image} alt={project.title} />
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <PortfolioButton onClick={() => setModalIndex(idx)}>
                View more
              </PortfolioButton>
            </div>
          </PortfolioItem>
        ))}
        {modalIndex !== null && (
          <ModalOverlay onClick={handleOverlayClick}>
            <ModalContent>
              <ModalHeader>
                <CancelButton onClick={() => setModalIndex(null)}>×</CancelButton>
              </ModalHeader>
              <ModalImage src={projects[modalIndex].image} alt={projects[modalIndex].title} />
              <ModalTitle>{projects[modalIndex].title}</ModalTitle>
              <ModalDescription>
                <SectionTitle>Introduction</SectionTitle>
                This report details the Community Network and Wi-Fi Entrepreneurship Training conducted for refugees at Mahama Refugee Camp from May 13, 2024, to June 21, 2024. The 30-day training program included a comprehensive community networks readiness assessment, an introduction to network operations, and an in-depth course on designing and deploying computer networks. The purpose was to equip refugees with the skills needed to establish and maintain their own internet connections, strengthen community life, and foster local economic development.<br /><br />
                
                <SectionTitle>Objectives</SectionTitle>
                The training aimed to achieve the following objectives:
                <StyledList>
                  <li>Enable local control over network operations and content, ensuring the network reflects the community's needs through inclusive design.</li>
                  <li>Create local job opportunities and foster entrepreneurship, both in direct support of the network and through enhanced internet connectivity for local enterprises.</li>
                  <li>Retain more funds within the community through low usage costs and income generated by residents supporting the network.</li>
                </StyledList><br />
                
                <SectionTitle>Activities</SectionTitle>
                The training was conducted in two phases over 30 days:
                <StyledList as="ol">
                  <li><strong>Training Delivery</strong>: Trainees were equipped with practical skills in community network readiness assessment, network operations, and designing and deploying computer networks. The course was delivered in a hybrid format, allowing refugees to access training materials from home. To reinforce practical skills, each trainee received a remote machine to perform networking tasks, such as running basic commands to manage network resources effectively.</li>
                  <li><strong>Community Readiness Assessment</strong>: This course covered critical aspects of deploying and sustaining community networks. It provided learners with methods to analyze and assess whether a community has favorable conditions for operating a successful network, including practical elements related to delivering quality and affordable telecommunications services.</li>
                </StyledList><br />
                
                <SectionTitle>Conclusion</SectionTitle>
                The Community Network and Wi-Fi Entrepreneurship Training was a significant step toward empowering the Mahama Refugee Camp community with essential digital skills, fostering self-reliance, and promoting economic growth through sustainable network solutions.
              </ModalDescription>
            </ModalContent>
          </ModalOverlay>
        )}
      </PortfolioContent>
      <TestimonialsSection>
        <TestimonialsHeader>
          <h2>What Our Clients Say</h2>
        </TestimonialsHeader>
        <SliderControls>
          <SlideNavButton onClick={handlePrev} $left>
            &lt;
          </SlideNavButton>
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
          <SlideNavButton onClick={handleNext} $right>
            &gt;
          </SlideNavButton>
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
    </PortfolioContainer>
  );
};

export default Portfolio;

// Styled Components
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const PortfolioContainer = styled.div`
  padding: 6rem var(--container-padding) 4rem;
  background: url('/images/back.png') center/cover no-repeat, white;
`;

const PortfolioHeader = styled.div`
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

const PortfolioContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PortfolioItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  background: url('/images/back.png') center/cover no-repeat, white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(15, 118, 188, 0.08);
  margin-bottom: 2rem;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  border: 2px solid ${(props) => (props.$isSelected ? '#F16522' : 'transparent')};
  transform: ${(props) => (props.$isSelected ? 'translateY(-8px) scale(1.02)' : 'none')};
  box-shadow: ${(props) =>
    props.$isSelected ? '0 12px 32px rgba(15, 118, 188, 0.22)' : '0 4px 16px rgba(15, 118, 188, 0.08)'};

  img {
    width: 180px;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 1.5rem;
    transition: transform 0.3s ease;
    border: ${(props) => (props.$isSelected ? '2px solid #0F76BC' : 'none')};
  }

  h3 {
    color: #0F76BC;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
    font-weight: 700;
    transition: color 0.3s ease;
  }

  p {
    color: #222;
    font-size: 1.05rem;
    margin: 0;
    transition: color 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(15, 118, 188, 0.22);
    img {
      transform: scale(1.05);
      border: 2px solid #0F76BC;
    }
    h3 {
      color: #0F76BC;
    }
    p {
      color: #333;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: stretch;
    img {
      width: 100%;
      height: 160px;
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(15, 118, 188, 0.4); /* Increased opacity for better contrast */
  backdrop-filter: blur(4px); /* Slightly stronger blur for focus */
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
`;

const ModalContent = styled.div`
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(240, 248, 255, 0.9)); /* Subtle gradient for depth */
  border-radius: 18px;
  box-shadow: 0 12px 40px rgba(15, 118, 188, 0.2); /* Enhanced shadow for prominence */
  padding: 2.5rem;
  max-width: 700px; /* Slightly wider for better readability */
  width: 95vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.3s ease-out;
  max-height: 85vh; /* Increased height for content */
  overflow-y: auto;
  border: 3px solid #0F76BC; /* Thicker border for emphasis */
  @media (max-width: 600px) {
    max-width: 98vw;
    padding: 1.5rem;
    border-radius: 12px;
  }
`;

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const CancelButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: #F16522;
  cursor: pointer;
  font-weight: bold;
  transition: color 0.2s, transform 0.2s;
  &:hover {
    color: #0F76BC;
    transform: scale(1.1);
  }
`;

const ModalImage = styled.img`
  width: 100%;
  max-width: 500px; /* Larger image for better visibility */
  height: auto;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 16px rgba(15, 118, 188, 0.15);
  border: 2px solid #F16522;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

const ModalTitle = styled.h2`
  color: #0F76BC;
  font-size: 1.8rem; /* Larger font for emphasis */
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 8px rgba(15, 118, 188, 0.1);
  @media (max-width: 600px) {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
  }
`;

const ModalDescription = styled.p`
  font-size: 1.15rem;
  color: #2A2A2A; /* Darker color for better contrast */
  line-height: 1.8; /* Increased line height for readability */
  background: rgba(255, 255, 255, 0.85); /* Semi-transparent white for contrast */
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 12px rgba(15, 118, 188, 0.1);
  width: 100%;
  text-align: left;
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;

const SectionTitle = styled.strong`
  display: block;
  font-size: 1.3rem;
  color: #0F76BC;
  margin-bottom: 0.5rem;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const StyledList = styled.ul`
  padding-left: 1.5rem;
  margin: 0.5rem 0;
  li {
    margin-bottom: 0.5rem;
    color: #2A2A2A;
    font-size: 1.1rem;
    line-height: 1.6;
  }
  @media (max-width: 600px) {
    padding-left: 1rem;
    li {
      font-size: 1rem;
    }
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
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
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


const PortfolioButton = styled.h5`
  display: block;
  margin: 1rem 0 0 0;
  padding: 0.7rem 2rem;
  position: absolute;
  left: 45%;
  background: linear-gradient(90deg, #F16522 60%, #0F76BC 100%);
  color: #fff;
  border: none;
  border-radius: 7px;
  font-size: 1.08rem;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 2px 8px rgba(15, 118, 188, 0.15);
  transition: background 0.2s, transform 0.2s;
  text-decoration: none;

  &:hover,
  &:focus {
    background: linear-gradient(90deg, #0F76BC 70%, #F16522 100%);
    transform: translateY(-2px) scale(1.02);
    color: #fff;
    box-shadow: 0 4px 12px rgba(15, 118, 188, 0.3);
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

  &:hover,
  &:focus {
    background: linear-gradient(90deg, #F16522 60%, #0F76BC 100%);
    transform: translateY(-2px) scale(1.02);
    color: #fff;
  }
`;
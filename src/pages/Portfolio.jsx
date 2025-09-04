import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom';
import QuotationForm from '../components/QuotationForm';

// Example portfolio data (replace with your real data)
const projects = [
  {
    image: '/images/project3.webp',
    title: 'Community Network Training and WIFI Entrepreneurship',
    description: 'RGT developed and implemented the Community Network and Wifi Entrepreneurship project to bridge the digital divide in Refugee camps. RGT provided Trainers who delivered 30 days training and MC who mastered the graduation ceremony.'
  },
  {
    image: '/images/project1.jpeg',
    title: 'Business Pitch competition',
    description: 'RGT provided expert panelists and judges to participate in Entrepreneurs’ pitch competitions and information sessions with 193 business owners in Mahama Refugee Camp.'
  },
];

// Example testimonials data
const testimonials = [
  {
    name: 'Jane Doe',
    role: 'CEO, ExampleCorp',
    message: 'RGT delivered our project on time and exceeded our expectations. Highly recommended!',
    avatar: '/images/test1.jpeg',
  },
  {
    name: 'John Smith',
    role: 'IT Manager, TechSolutions',
    message: 'Professional, reliable, and innovative. We will work with RGT again!',
    avatar: '/images/test2.jpeg',
  },
  {
    name: 'Alice Johnson',
    role: 'Director, FutureWorks',
    message: 'Their team is knowledgeable and responsive. Our digital transformation was a success!',
    avatar: '/images/test3.jpeg',
  },
  {
    name: 'Michael Brown',
    role: 'Founder, StartupHub',
    message: 'Great experience from start to finish. Highly recommended for any tech project.',
    avatar: '/images/test4.jpeg',
  },
];

const TESTIMONIALS_PER_SLIDE = 2;

const Portfolio = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState(null);

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
          <PortfolioItem key={idx}>
            <img src={project.image} alt={project.title} />
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ViewMoreButton onClick={() => setModalIndex(idx)}>
                View More
              </ViewMoreButton>
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
              <ModalDescription>{projects[modalIndex].description}</ModalDescription>
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

  img {
    width: 180px;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 1.5rem;
  }

  h3 {
    color: #0F76BC;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
    font-weight: 700;
  }

  p {
    color: #222;
    font-size: 1.05rem;
    margin: 0;
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
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
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
const ViewMoreButton = styled.button`
  display: block;
  margin: 1.5rem 0 1.5rem 0;
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

  &:hover, &:focus {
    background: linear-gradient(90deg, #F16522 60%, #0F76BC 100%);
    transform: translateY(-2px) scale(1.02);
    color: #fff;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(15, 118, 188, 0.18);
  backdrop-filter: blur(2px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const ModalContent = styled.div`
  background: url('/images/back.png') center/cover no-repeat, white;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(15, 118, 188, 0.13);
  padding: 2.5rem 2rem 2rem 2rem;
  max-width: 620px;
  width: 95vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.3s;
  max-height: 80vh;
  overflow-y: auto;
  border: 2.5px solid #0F76BC;
  @media (max-width: 600px) {
    max-width: 98vw;
    padding: 16px 6px;
    border-radius: 8px;
  }
`;

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
`;

const CancelButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: #F16522;
  cursor: pointer;
  font-weight: bold;
  transition: color 0.2s;
  &:hover {
    color: #0F76BC;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  max-width: 420px;
  height: auto;
  border-radius: 12px;
  margin-bottom: 1.2rem;
  box-shadow: 0 2px 12px rgba(15, 118, 188, 0.10);
  border: 2px solid #F16522;
`;

const ModalTitle = styled.h2`
  color: #0F76BC;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 1px;
  text-shadow: 0 2px 8px rgba(15, 118, 188, 0.07);
  @media (max-width: 600px) {
    font-size: 1.2rem;
    padding: 8px 2px;
    border-radius: 8px;
  }
`;

const ModalDescription = styled.p`
  font-size: 1.13rem;
  color: #444;
  margin: 18px 0 0 0;
  text-align: center;
  line-height: 1.7;
  background: url('/images/back.png') center/cover no-repeat, white;
  border-radius: 10px;
  padding: 1.2rem 1.5rem;
  box-shadow: 0 2px 8px rgba(15, 118, 188, 0.07);
  @media (max-width: 600px) {
    font-size: 1rem;
    margin: 12px 0 0 0;
    padding: 0.7rem 0.5rem;
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
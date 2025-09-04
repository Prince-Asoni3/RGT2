import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import QuotationForm from '../components/QuotationForm';
import { useSpring, animated } from '@react-spring/web';
import { Helmet } from 'react-helmet-async';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

// Modal animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

// Define slide CAD data
const slides = [
  {
    title: 'Resilient Global Technologies',
    description:
      'is an IT company commited to providing IT solutions and digital empowerment',
    image: '/images/tittle.png',
  },

  {
    title: 'Community Network Training and WIFI Entrepreneurship',
    description:
      'RGT Developed and implemented the Community Network and Wifi Entrepreneurship project to bridge the digital divide in Refugee camps. RGT provided Trainers who delivered 30 days training and MC who mastered the graduation ceremony.',
    image: '/images/project2.jpeg',
  },
  {
    title: 'Fostering Digital Inclusion and Empowerment',
    description:
      'Our expertise spans across various sectors, including education, Corporate and Professional trainings, Bridging the digital divide initiatives, Events management and community outreach. We are dedicated to fostering digital inclusion unlocking all digital potentials, and ensuring that everyone has the skills and tools needed to participate fully in the digital economy.',
    image: '/images/project3.webp',
  },
];

// Define portfolio data (reduced to 3 projects)
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

const Home = () => {
  // State for tracking the current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalIndex, setModalIndex] = useState(null); // State for which project modal is open
  const [showQuotationForm, setShowQuotationForm] = useState(false); // State for quotation section form

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

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  // Animation for slide content
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    reset: true,
    config: { duration: 2000 },
  });

  return (
    <>
      <Helmet>
        <title>Resilient Global Tech</title>
      </Helmet>

      {/* Hero Section with Slider */}
      <HeroSection>
        <SlideNavButton $left onClick={prevSlide}>
          <FaChevronLeft />
        </SlideNavButton>
        <SlideNavButton $right onClick={nextSlide}>
          <FaChevronRight />
        </SlideNavButton>

        <SlideContainer>
          <ImageSection>
            <SlideImage
              src={slides[currentSlide].image}
              alt={`Slide ${currentSlide + 1}`}
              $description={slides[currentSlide].description}
              style={{
                height: `${120 + slides[currentSlide].description.split(' ').length * 3}px`,
                minHeight: '220px',
                maxHeight: '600px',
                transition: 'height 0.3s',
                objectFit: 'cover',
              }}
            />
          </ImageSection>
          <ContentSection>
            <animated.div style={fadeIn}>
              <h1>{slides[currentSlide].title}</h1>
              <p>{slides[currentSlide].description}</p>
            </animated.div>
          </ContentSection>
        </SlideContainer>

        {/* Slide Indicators */}
        <SlideIndicators>
          {slides.map((_, index) => (
            <Dot
              key={index}
              $active={currentSlide === index}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </SlideIndicators>
      </HeroSection>

      {/* Portfolio Section */}
      <PortfolioContainer>
        <PortfolioHeader>
          <h1>Most Popular Projects</h1>
          <p>We are pleased to highlight our most notable and successful projects recently completed by our team.</p>
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
        <ViewMoreButton>
          <Link to="/portfolio">Explore More Projects</Link>
        </ViewMoreButton>
      </PortfolioContainer>

      {/* Request A Quotation Section */}
      <QuotationSection>
        <QuotationHeader>
          <FaQuoteRight size={40} color="#0F76BC" />
          <h1>Request A Quotation</h1>
          <p>Ready to start your next project? Click below to submit a quotation and let us help you achieve your goals.</p>
        </QuotationHeader>
        <ContactNowButton
          onClick={() => setShowQuotationForm(!showQuotationForm)}
        >
          {showQuotationForm ? 'Hide Form' : 'Click Here to Submit Quotation'}
        </ContactNowButton>
        {showQuotationForm && (
          <QuotationForm onSuccess={() => setShowQuotationForm(false)} />
        )}
      </QuotationSection>
    </>
  );
};

// Styled Components for Hero Section
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: url('/images/back.png') center/cover no-repeat, white;
`;

const SlideContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem; /* Increased gap for more space between arrows and content */
  max-width: 1400px;
  width: 100%;
  padding: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ImageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const SlideImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* Make image height equal to description height */
  min-height: 220px;
  height: ${({ $description }) => `${120 + $description.split(' ').length * 3}px`};
  max-height: 600px;
  transition: height 0.3s;
  object-fit: cover;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--text);
  padding-left: 2rem;
  padding-right: 2rem;
  z-index: 1;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: var(--primary);
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    word-break: break-word;
  }
`;

const SlideNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.$left ? 'left: 2rem;' : props.$right ? 'right: 2rem;' : '')}
  background-color: var(--accent);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: 0 2px 8px rgba(15, 118, 188, 0.10);
  cursor: pointer;
  z-index: 3;
  font-size: 1.5rem;
  transition: background 0.2s, transform 0.2s;
  /* Add extra margin for space between arrows and content */
  margin-left: ${(props) => (props.$left ? '0' : '')};
  margin-right: ${(props) => (props.$right ? '0' : '')};
  @media (max-width: 768px) {
    ${(props) => (props.$left ? 'left: 1rem;' : props.$right ? 'right: 1rem;' : '')}
    width: 35px;
    height: 35px;
  }
`;

const SlideIndicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 1rem;
  position: absolute;
  bottom: 2rem;
  width: 100%;
  z-index: 2;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.$active ? 'var(--accent)' : 'var(--gray)')};
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: var(--primary);
  }
`;

// Styled Components for Portfolio Section
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

const ModalContent = styled.div`
  background: url('/images/back.png') center/cover no-repeat, white;
  padding: 32px 24px;
  border-radius: 16px;
  max-width: 620px;
  width: 90vw;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 8px 32px #0F76BC2E;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.3s;
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
`;

const ModalTitle = styled.h2`
  color: #0F76BC;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  text-align: center;
`;

const ModalDescription = styled.p`
  color: #222;
  font-size: 1.08rem;
  text-align: center;
  margin-bottom: 0.5rem;
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

  &:hover, &:focus {
    background: linear-gradient(90deg, #F16522 60%, #0F76BC 100%);
    transform: translateY(-2px) scale(1.02);
    color: #fff;
  }
`;

const ViewMoreButton = styled.button`
  display: block;
  margin: 2rem auto;
  padding: 0.8rem 2.5rem;
  background: linear-gradient(90deg, #F16522 60%, #0F76BC 100%);
  color: #fff;
  border: none;
  border-radius: 7px;
  font-size: 1.2rem;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(15, 118, 188, 0.15);
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;

  a {
    color: #fff;
    text-decoration: none;
  }

  &:hover, &:focus {
    background: linear-gradient(90deg, #0F76BC 70%, #F16522 100%);
    transform: translateY(-2px) scale(1.03);
  }
`;

// Styled Components for Quotation Section
const QuotationSection = styled.div`
  padding: 4rem var(--container-padding);
  background: url('/images/back.png') center/cover no-repeat, white;
  text-align: center;
`;

const QuotationHeader = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-family: 'Poppins', 'Montserrat', Arial, sans-serif;
    font-size: 2.5rem;
    color: #0F76BC;
    font-weight: 800;
    margin: 1rem 0;
  }

  p {
    color: #222;
    font-size: 1.15rem;
    font-family: 'Poppins', 'Montserrat', Arial, sans-serif;
    font-weight: 500;
    max-width: 600px;
    margin: 0 auto;
  }
`;

export default Home;
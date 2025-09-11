import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';

// Updated portfolio data with full details
const projects = [
  {
    image: '/images/project1.jpg',
    title: 'Community Network Training and WIFI Entrepreneurship',
    description: 'The purpose of this project was to equip refugees with the skills to establish and maintain their own internet connections, thereby strengthening community life and fostering local economic development. Implemented at Mahama Refugee Camp, the project included the supply of Starlink equipment, the design and delivery of a tailored training curriculum, and consultation services on network installation and management.',
    client: 'Save the Children International Under Kumwe Hub',
  },
  {
    image: '/images/project2.jpeg',
    title: 'Digital Inclusion for Rural Communities',
    description: 'The purpose of this project is to empower unemployed young graduates with the technical skills to design, deploy, and maintain community networks, thereby improving connectivity and contributing to the socioeconomic growth of Nyagatare and Karongi Districts. The project includes hands-on technical training, mentorship, provision of essential network equipment, and community consultation services to ensure sustainable network management.',
    client: 'ISOC Rwanda',
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
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedProject = queryParams.get('project');
  const selectedProjectIndex = selectedProject ? parseInt(selectedProject, 10) : null;

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
        <h1>Delivered Projects</h1>
        <p>
          
        </p>
      </PortfolioHeader>
      <PortfolioContent>
        {projects.map((project, idx) => (
          <PortfolioItem
            key={idx}
            id={`project-${idx}`}
            $isSelected={selectedProjectIndex === idx}
          >
            <PortfolioImage src={project.image} alt={project.title} />
            <ProjectDetails>
              <PortfolioTitle>{project.title}</PortfolioTitle>
              <PortfolioDescription>{project.description}</PortfolioDescription>
              <ClientInfo>Client: {project.client}</ClientInfo>
            </ProjectDetails>
          </PortfolioItem>
        ))}
      </PortfolioContent>
      
      
      <ContactSection>
       
        <ContactButton to="/contact">Contact Us</ContactButton>
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
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const PortfolioItem = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(15, 118, 188, 0.1);
  padding: 1.5rem; /* Reduced padding */
  width: 100%;
  max-width: 900px; /* Reduced max-width */
  min-height: 250px; /* Reduced min-height */
  display: flex;
  flex-direction: row;
  align-items: stretch;
  border: 3px solid #0F76BC;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-12px) scale(1.05);
    box-shadow: 0 12px 40px rgba(15, 118, 188, 0.2);
    background: linear-gradient(90deg, rgba(15, 118, 188, 0.3), rgba(241, 101, 34, 0.3)),
      url('/images/back.png') center/cover no-repeat, white;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    min-height: 400px; /* Adjusted min-height for mobile */
    padding: 1rem; /* Reduced padding for mobile */
    border-radius: 12px;
  }
`;

const PortfolioImage = styled.img`
  width: 40%;
  max-width: 300px; /* Reduced max-width */
  height: auto;
  border-radius: 12px;
  margin-right: 1.5rem; /* Reduced margin */
  box-shadow: 0 4px 16px rgba(15, 118, 188, 0.15);
  border: 2px solid #F16522;
  object-fit: cover;
  align-self: center;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 250px; /* Reduced max-width for mobile */
    margin-right: 0;
    margin-bottom: 1rem; /* Reduced margin for mobile */
  }
`;

const ProjectDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem; /* Reduced padding */
`;

const PortfolioTitle = styled.h3`
  color: #0F76BC;
  font-size: 1.6rem; /* Reduced font-size */
  font-weight: 700;
  margin-bottom: 0.8rem; /* Reduced margin */
  letter-spacing: 0.5px;
  text-shadow: 0 2px 8px rgba(15, 118, 188, 0.07);
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.4rem; /* Reduced font-size for mobile */
    text-align: center;
  }
`;

const PortfolioDescription = styled.p`
  font-size: 1rem; /* Reduced font-size */
  color: #333;
  line-height: 1.5; /* Reduced line-height */
  margin-bottom: 0.8rem; /* Reduced margin */
  flex-grow: 1;
  overflow-y: auto;
  padding-right: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.95rem; /* Reduced font-size for mobile */
    text-align: center;
  }
`;

const ClientInfo = styled.p`
  font-size: 0.95rem; /* Reduced font-size */
  color: #222;
  font-weight: 600;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
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
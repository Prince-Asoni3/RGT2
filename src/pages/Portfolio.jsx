import styled from 'styled-components';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTimes, FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PortfolioContainer = styled.div`
  padding: 6rem var(--container-padding) 4rem;
  background-color: var(--gray-light);
`;

const PortfolioContent = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 2.5rem;
    color: #0F76BC;
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--text);
    max-width: 600px;
    margin: 0 auto;
    font-style: italic;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.15);
    
    .project-overlay {
      opacity: 1;
    }
  }
`;

const ProjectImage = styled.div`
  position: relative;
  height: 250px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .project-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
  
  h2 {
    color: #0F76BC;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }
  
  p {
    color: var(--text);
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 118, 188, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: pointer;
  
  button {
    background: #F16522;
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    font-weight: 500;
    transition: transform 0.2s ease;
    
    &:hover {
      transform: scale(1.05);
      background: white;
      color: #F16522;
    }
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: ${(props) => (props.$show ? 'block' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  width: 90%;
  max-width: 800px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 95%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #0F76BC;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #F16522;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`;

const ModalDescription = styled.div`
  h3 {
    color: #0F76BC;
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  p {
    margin-bottom: 2rem;
    line-height: 1.6;
  }
`;

const ContactButton = styled(Link)`
  display: inline-block;
  background: #F16522;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #0F76BC;
    transform: translateY(-2px);
  }
`;

const TestimonialsSection = styled.div`
  margin-top: 6rem;
  padding: 4rem 0;
  background: url('/src/assets/images/back.png') center/cover no-repeat, white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const TestimonialsHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h2 {
    font-size: 2.5rem;
    color: #0F76BC;
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--text);
    max-width: 600px;
    margin: 0 auto;
  }
`;

const TestimonialsSlider = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TestimonialCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  
  .quote-icon {
    color: #F16522;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-style: italic;
    color: var(--text);
    margin-bottom: 2rem;
    line-height: 1.6;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .author-info {
    text-align: left;
    
    h4 {
      color: #0F76BC;
      margin-bottom: 0.25rem;
    }
    
    span {
      color: #F16522;
      font-size: 0.9rem;
    }
  }
`;

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  color: #0F76BC;
  transition: all 0.3s ease;
  
  &:hover {
    background: #F16522;
    color: white;
  }
  
  &.prev {
    left: -20px;
  }
  
  &.next {
    right: -20px;
  }
`;

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const projects = [
    {
      title: 'Project 1',
      description: 'Virtual Reality Training Platform for Industrial Safety',
      detailedDescription: 'Our Virtual Reality Training Platform revolutionizes industrial safety training by providing immersive, hands-on experiences in a risk-free environment. This innovative solution helps companies reduce workplace accidents while improving training engagement and retention.',
      image: '/src/assets/images/project1.jpeg',
      modalImage: '/src/assets/images/service1.png',
      icon: '/src/assets/images/icon1.png',
      category: 'VR/AR'
    },
    {
      title: 'Project 2',
      description: 'AI-Powered Data Analytics Dashboard',
      detailedDescription: 'An advanced analytics platform that leverages AI to provide real-time insights and data visualization for business decision-making.',
      image: '/src/assets/images/project2.jpeg',
      modalImage: '/src/assets/images/service2.png',
      icon: '/src/assets/images/icon2.png',
      category: 'Data Analytics'
    },
    {
      title: 'Project 3',
      description: 'Smart Manufacturing Process Optimization',
      detailedDescription: 'An IoT-based solution that optimizes manufacturing processes through real-time monitoring and predictive maintenance.',
      image: '/src/assets/images/project3.jpeg',
      modalImage: '/src/assets/images/service3.png',
      icon: '/src/assets/images/icon3.png',
      category: 'IoT'
    },
    {
      title: 'Project 4',
      description: 'Augmented Reality Maintenance Assistant',
      detailedDescription: 'An AR-powered tool that guides technicians through complex maintenance procedures with step-by-step visual instructions.',
      image: '/src/assets/images/project4.jpeg',
      modalImage: '/src/assets/images/service4.png',
      icon: '/src/assets/images/icon4.png',
      category: 'VR/AR'
    }
  ];

  const testimonials = [
    {
      name: "John Smith",
      position: "CEO, Tech Solutions",
      image: "/src/assets/images/testimonial1.jpeg",
      text: "Working with RGT has been transformative for our business. Their expertise in digital solutions helped us achieve our goals faster than we imagined."
    },
    {
      name: "Sarah Johnson",
      position: "Director, Education First",
      image: "/src/assets/images/testimonial1.jpeg",
      text: "The digital literacy training provided by RGT has significantly improved our team's capabilities. Their professional approach and dedication to quality are outstanding."
    },
    {
      name: "Michael Brown",
      position: "Community Leader",
      image: "/src/assets/images/testimonial1.jpeg",
      text: "RGT's community ICT development program has made a real difference in our area. Their commitment to digital inclusion is truly commendable."
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <PortfolioContainer>
      <Helmet>
        <title>RGT - Portfolio</title>
      </Helmet>
      <PortfolioContent>
        <Header>
          <h1>Projects & Insights</h1>
          <p>“Real stories, real results, and lessons worth sharing." </p>
        </Header>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage>
                <img src={project.image} alt={project.title} />
                <div className="project-icon">
                  <img src={project.icon} alt={project.category} />
                </div>
              </ProjectImage>
              <ProjectInfo>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </ProjectInfo>
              <ProjectOverlay className="project-overlay" onClick={() => openModal(project)}>
                <button>View Details</button>
              </ProjectOverlay>
            </ProjectCard>
          ))}
        </ProjectsGrid>

        <Modal $show={selectedProject !== null}>
          {selectedProject && (
            <ModalContent>
              <CloseButton onClick={closeModal}>
                <FaTimes />
              </CloseButton>
              <ModalImage src={selectedProject.modalImage} alt={selectedProject.title} />
              <ModalDescription>
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.detailedDescription}</p>
                <ContactButton to="/contact">Contact Us Now</ContactButton>
              </ModalDescription>
            </ModalContent>
          )}
        </Modal>

        <TestimonialsSection>
          <TestimonialsHeader>
            <h2>What Our Clients Say</h2>
            <p>Hear from organizations and individuals we've worked with</p>
          </TestimonialsHeader>
          
          <TestimonialsSlider>
            <TestimonialCard>
              <FaQuoteRight className="quote-icon" />
              <p>{testimonials[currentTestimonial].text}</p>
              <TestimonialAuthor>
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name} 
                />
                <div className="author-info">
                  <h4>{testimonials[currentTestimonial].name}</h4>
                  <span>{testimonials[currentTestimonial].position}</span>
                </div>
              </TestimonialAuthor>
            </TestimonialCard>
            
            <SliderButton className="prev" onClick={prevTestimonial}>
              <FaChevronLeft />
            </SliderButton>
            <SliderButton className="next" onClick={nextTestimonial}>
              <FaChevronRight />
            </SliderButton>
          </TestimonialsSlider>
        </TestimonialsSection>
      </PortfolioContent>
    </PortfolioContainer>
  );
};

export default Portfolio;
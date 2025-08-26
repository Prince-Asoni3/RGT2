import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { IoClose } from 'react-icons/io5';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Example services data
const services = [
  {
    title: 'Web Development',
    shortDescription: 'Modern, responsive websites for your business.',
    detailedDescription: 'We build scalable, secure, and beautiful web applications tailored to your needs.',
    image: '/src/assets/images/project1.jpeg',
  },
  {
    title: 'IT Consulting',
    shortDescription: 'Expert advice for your IT strategy.',
    detailedDescription: 'Our consultants help you plan, implement, and optimize your IT infrastructure.',
    image: '/src/assets/images/project2.jpeg',
  },
  {
    title: 'IT Consulting',
    shortDescription: 'Expert advice for your IT strategy.',
    detailedDescription: 'Our consultants help you plan, implement, and optimize your IT infrastructure.',
    image: '/src/assets/images/project2.jpeg',
  },
];

// Example testimonials data
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

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleContactClick = () => {
    navigate('/contact');
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
    <ServicesContainer>
      <Helmet>
        <title>RGT - Our Services</title>
      </Helmet>
      <ServicesContent>
        <ServicesHeader>
          <h1>Our Services</h1>
          <p>"From training to consultancy to hosting — we’ve got you covered"</p>
        </ServicesHeader>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <img src={service.image} alt={service.title} />
              <ServiceContent>
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
                <ViewDetailsButton
                  onClick={e => {
                    e.stopPropagation();
                    handleServiceClick(service);
                  }}
                >
                  View Details
                </ViewDetailsButton>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesGrid>

        {selectedService && (
          <ModalOverlay onClick={handleCloseModal}>
            <ModalBox onClick={e => e.stopPropagation()}>
              <ModalImage src={selectedService.image} alt={selectedService.title} />
              <ModalInfo>
                <h3>{selectedService.title}</h3>
                <p>{selectedService.detailedDescription}</p>
                <ContactNowButton onClick={handleContactClick}>
                  Contact Now
                </ContactNowButton>
              </ModalInfo>
              <CloseButton onClick={handleCloseModal}>
                <IoClose />
              </CloseButton>
            </ModalBox>
          </ModalOverlay>
        )}

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
      </ServicesContent>
    </ServicesContainer>
  );
};

export default Services;

// Styled Components
const ServicesContainer = styled.div`
  padding: 6rem 2rem 4rem;
  background: url('/src/assets/images/back.png') center/cover no-repeat, white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const ServicesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ServicesHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #0F76BC;
    font-weight: bold;
  }

  p {
    color: #000000ff;
    max-width: 600px;
    margin: 0 auto;
    font-size: 1.1rem;
    font-style: italic;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(15, 118, 188, 0.10);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 24px rgba(241, 101, 34, 0.13);
    border-color: #F16522;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const ServiceContent = styled.div`
  padding: 1.5rem;

  h3 {
    margin-bottom: 1rem;
    color: #0F76BC;
  }

  p {
    color: #555;
    line-height: 1.6;
  }
`;

const ViewDetailsButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #F16522;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0F76BC;
  }
`;

// Modal Styles
const ModalOverlay = styled.div`
  position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.7);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: url('/src/assets/images/back.png') center/cover no-repeat, white;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(15, 118, 188, 0.18);
  display: flex;
  max-width: 700px;
  width: 95%;
  position: relative;
  padding: 2rem;
  gap: 2rem;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const ModalImage = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  border: 3px solid #F16522;
  background: #f8fafd;
  @media (max-width: 700px) {
    width: 100%;
    height: 180px;
  }
`;

const ModalInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    color: #0F76BC;
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  p {
    color: #333;
    margin-bottom: 2rem;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const ContactNowButton = styled.button`
  background: #F16522;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.9rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0F76BC;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem; right: 1rem;
  background: #fff;
  border: 2px solid #F16522;
  border-radius: 50%;
  font-size: 1.5rem;
  color: #F16522;
  cursor: pointer;
  padding: 0.4rem 0.7rem;
  transition: border-color 0.2s, color 0.2s;
  &:hover {
    border-color: #0F76BC;
    color: #0F76BC;
    background: #f8fafd;
  }
`;

// Testimonials Styles
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
    color: #000000ff;
    max-width: 600px;
    margin: 0 auto;
    font-size: 1.1rem;
    font-style: italic;
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
    color: #555;
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
import { useState } from 'react';
import styled from 'styled-components';
import QuotationForm from '../components/QuotationForm';


// Updated services data
const services = [
  {
    title: 'Digital Solutions & Software Development',
    description: 'Custom software development tailored to your needs. Development and deployment of innovative, reliable digital platforms and applications. Solutions that enhance efficiency, communication, and productivity.',
  },
  {
    title: 'Capacity Building & Training',
    description: 'Digital literacy programs for communities, businesses, and individuals. Workshops and courses on digital skills, cybersecurity, and online safety.',
  },
  {
    title: 'Consulting & Advisory Services',
    description: 'Guidance on digital transformation strategies for businesses and organizations. Support for integrating technology solutions to achieve sustainable growth.',
  },
  {
    title: 'Awareness Programs',
    description: 'Campaigns to educate communities on digital literacy, online safety, and cybersecurity. Promoting informed, responsible, and safe use of digital technologies.',
  },
  {
    title: 'Event Management',
    description: 'Planning and executing conferences, workshops, seminars, and digital expos. Supporting community engagement and knowledge-sharing events that foster learning and innovation.',
  },
  {
    title: 'Community Empowerment Programs',
    description: 'Providing access to digital resources for underserved communities. Projects that promote inclusion, learning, and innovation.',
  },
  {
    title: 'Innovation & Research',
    description: 'Research on emerging digital trends and technologies. Developing innovative solutions that address real-world challenges.',
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

const Services = () => {
  const [showFormIndex, setShowFormIndex] = useState(null);
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
      <PageHeader>
        <h1>Our Services</h1>
        <p>
          Unlocking Digital Potential
        </p>
      </PageHeader>
      <ServicesList>
        {services.map((service, idx) => (
          <ServiceCard key={idx}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ContactNowButton
              onClick={() => setShowFormIndex(showFormIndex === idx ? null : idx)}
            >
              {showFormIndex === idx ? 'Hide Quotation Form' : 'Contact Now'}
            </ContactNowButton>
            {showFormIndex === idx && (
              <QuotationForm onSuccess={() => setShowFormIndex(null)} />
            )}
          </ServiceCard>
        ))}
      </ServicesList>

      {/* Testimonials Section styled like Portfolio */}
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
  padding: 2rem;
  min-width: 260px;
  max-width: 340px;
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    color: #0F76BC;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
    font-weight: 700;
  }

  p {
    color: #222;
    font-size: 1.05rem;
    margin-bottom: 1.2rem;
  }
`;

const ContactNowButton = styled.button`
  display: block;
  margin: 1rem 0 1.5rem 0;
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

const TestimonialsSection = styled.section`
  margin-top: 5rem;
  padding: 4rem 0;
  background: url('/images/back.png') center/cover no-repeat, white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
`;

const TestimonialsHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;

  h2 {
    font-family: 'Poppins', 'Montserrat', Arial, sans-serif;
    font-size: 2.2rem;
    color: #0F76BC;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 0;
  }
`;

const SliderControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const SlideNavButton = styled.button`
  background-color: var(--accent, #0F76BC);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  font-size: 1.3rem;
  margin: 0 0.5rem;
  transition: all 0.3s ease;
  z-index: 2;
  ${(props) => props.$left && 'left: 0;'}
  ${(props) => props.$right && 'right: 0;'}

  &:hover {
  background: url('/images/back.png') center/cover no-repeat, white;
    color: #0F76BC;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 1.1rem;
  }
`;

const TestimonialsGrid = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }
`;

const TestimonialCard = styled.div`
  background: url('/images/back.png') center/cover no-repeat, white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(15, 118, 188, 0.10);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  max-width: 340px;
  min-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 98vw;
    min-width: 0;
    padding: 1.2rem 0.7rem 1rem 0.7rem;
  }
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 2px solid #F16522;
`;

const TestimonialMessage = styled.p`
  color: #222;
  font-size: 1.08rem;
  font-style: italic;
  margin-bottom: 1.2rem;
  text-align: center;
`;

const TestimonialName = styled.div`
  color: #0F76BC;
  font-weight: 700;
  font-size: 1.08rem;
`;

const TestimonialRole = styled.div`
  color: #F16522;
  font-size: 0.98rem;
  font-weight: 500;
`;

const SlideIndicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-top: 1.5rem;
  width: 100%;
  z-index: 2;
  @media (max-width: 600px) {
    gap: 8px;
    margin-top: 1rem;
  }
`;

const Dot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${(props) => (props.$active ? 'linear-gradient(90deg, #0F76BC 60%, #F16522 100%)' : 'var(--gray, #e3f0fa)')};
  box-shadow: ${(props) => (props.$active ? '0 2px 8px rgba(15, 118, 188, 0.15)' : 'none')};
  transition: all 0.3s cubic-bezier(.4,2,.3,1);
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
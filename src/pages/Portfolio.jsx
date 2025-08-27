import { useState } from 'react';
import styled from 'styled-components';
import QuotationForm from '../components/QuotationForm';

// Example portfolio data (replace with your real data)
const projects = [
  {
    image: '/images/project1.jpeg',
    title: 'Business Pitch competition',
    description: 'RGT Provided expert panel lists and judges to participate in Entrepreneurs’ pitch competitions and information sessions with 193 business owners in Mahama Refugee Camp.',
  },
  {
    image: '/images/project2.jpeg',
    title: 'Kibungo Internet Access Centre',
    description: 'RGT coordinated the Implementation of Kibungo Internet Access Center and trainings in the center to bridge the digital divide and provide educational and communication opportunities to more than 2700 rural Kibungo community members.',
  },
  {
    image: '/images/project3.jpeg',
    title: 'Community Network Training and WIFI Entrepreneurship',
    description: 'RGT Developed and implemented the Community Network and Wifi Entrepreneurship project to bridge the digital divide in Refugee camps. RGT provided Trainers who delivered 30 days training and MC who mastered the graduation ceremony.',
  },
   {
    image: '/images/project3.jpeg',
    title: 'Internet for Education',
    description: 'Our Expert Trainers delivered numerous cohorts of workshops with over 513 teachers in Rwanda to equip them with digitals skills they need to use Internet and Computers in teaching and learning activities.',
  },
   {
    image: '/images/project3.jpeg',
    title: 'Safer Internet Initiative',
    description: 'RGT manages Rwanda Safer Internet events, conference, awareness campaign where 6300 policy makers, researchers, law enforcement bodies, youth, parents and carers, teachers, NGOs, industry representatives and other relevant actors come together to discuss issues related to child online safety.',
  }
  // Add more projects as needed
];

// Example testimonials data
const testimonials = [
  {
    name: 'Jane Doe',
    role: 'CEO, ExampleCorp',
    message: 'RGT delivered our project on time and exceeded our expectations. Highly recommended!',
    avatar: '/images/avatar1.png',
  },
  {
    name: 'John Smith',
    role: 'IT Manager, TechSolutions',
    message: 'Professional, reliable, and innovative. We will work with RGT again!',
    avatar: '/images/avatar2.png',
  },
  {
    name: 'Alice Johnson',
    role: 'Director, FutureWorks',
    message: 'Their team is knowledgeable and responsive. Our digital transformation was a success!',
    avatar: '/images/avatar3.png',
  },
  {
    name: 'Michael Brown',
    role: 'Founder, StartupHub',
    message: 'Great experience from start to finish. Highly recommended for any tech project.',
    avatar: '/images/avatar4.png',
  },
  // Add more testimonials as needed
];

const TESTIMONIALS_PER_SLIDE = 2;

const Portfolio = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [showFormIndex, setShowFormIndex] = useState(null);

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
              <ContactNowButton
                onClick={() => setShowFormIndex(showFormIndex === idx ? null : idx)}
              >
                {showFormIndex === idx ? 'Hide Quotation Form' : 'Contact Us Now'}
              </ContactNowButton>
              {showFormIndex === idx && (
                <QuotationForm onSuccess={() => setShowFormIndex(null)} />
              )}
            </div>
          </PortfolioItem>
        ))}
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
    </PortfolioContainer>
  );
};

// Styled Components (copied and adapted from Home.jsx)
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

// Testimonial Section Styles
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

const ContactNowButton = styled.button`
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

export default Portfolio;
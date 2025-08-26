import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import { Helmet } from 'react-helmet-async';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

// Define slide data
const slides = [
  {
    title: 'Resilient Global Technologies (RGT)',
    description:
      'is a leading IT consulting firm committed to empowering businesses, communities, and individuals to thrive in the digital era. With a strong focus on digital literacy, we provide tailored solutions that bridge the digital divide, enhance digital skills, and enable our clients to navigate the complexities of today’s digital landscape confidently and effectively.',
    image: '/src/assets/images/project1.jpeg',
  },
  {
    title: 'Internet for Education',
    description:
      'Our Expert Trainers delivered numerous cohorts of workshops with over 513 teachers in Rwanda to equip them with digitals skills they need to use Internet and Computers in teaching and learning activities.',
    image: '/src/assets/images/project2.jpeg',
  },
  {
    title: 'Community Network Training and WIFI Entrepreneurship',
    description:
      'RGT Developed and implemented the Community Network and Wifi Entrepreneurship project to bridge the digital divide in Refugee camps. RGT provided Trainers who delivered 30 days training and MC who mastered the graduation ceremony.',
    image: '/src/assets/images/project3.jpeg',
  },
  {
    title: 'Safer Internet Initiative',
    description:
      'RGT manages Rwanda Safer Internet events, conference, awareness campaign where 6300 policy makers, researchers, law enforcement bodies, youth, parents and carers, teachers, NGOs, industry representatives and other relevant actors come together to discuss issues related to child online safety.',
    image: '/src/assets/images/project4.jpeg',
  },
];

const Home = () => {
  // State for tracking the current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Form submission function
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: data.fullName,
          from_email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
        },
        'YOUR_PUBLIC_KEY'
      );
      toast.success('Quotation request sent successfully!');
      reset();
    } catch (error) {
      toast.error('Failed to send quotation request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(nextSlide, 9000);
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
        <SlideNavButton onClick={prevSlide} left>
          <FaChevronLeft />
        </SlideNavButton>
        <SlideNavButton onClick={nextSlide} right>
          <FaChevronRight />
        </SlideNavButton>

        <SlideContainer>
          <ImageSection>
            <SlideImage src={slides[currentSlide].image} alt={`Slide ${currentSlide + 1}`} />
          </ImageSection>
          <ContentSection>
            <animated.div style={fadeIn}>
              <h1>{slides[currentSlide].title}</h1>
              <p className="slide-description">{slides[currentSlide].description}</p>
            </animated.div>
          </ContentSection>
        </SlideContainer>

        {/* Slide Indicators */}
        <SlideIndicators>
          {slides.map((_, index) => (
            <Dot
              key={index}
              active={currentSlide === index}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </SlideIndicators>
      </HeroSection>

      {/* Objectives Section */}
      <ObjectivesSection>
        <h2>OUR OBJECTIVES</h2>
        <ObjectivesGrid>
          <ObjectiveCard>
            <h3>Promote Digital Literacy & Inclusion</h3>
            <p>Ensure inclusive access to technology for marginalized groups (teachers, youth, refugees, rural communities).</p>
          </ObjectiveCard>
          <ObjectiveCard>
            <h3>Empower Education & Professional Growth</h3>
            <p>Deliver tailored digital literacy and ICT training programs for teachers, professionals, and entrepreneurs.</p>
          </ObjectiveCard>
          <ObjectiveCard>
            <h3>Advance Safe and Responsible Internet Use</h3>
            <p>Organize conferences, workshops, and campaigns on safer Internet practices for youth, parents, policymakers, and law enforcement.</p>
          </ObjectiveCard>
          <ObjectiveCard>
            <h3>Develop Community-based ICT Solutions</h3>
            <p>Train and support Wi-Fi entrepreneurs in refugee camps and underserved communities.</p>
          </ObjectiveCard>
          <ObjectiveCard>
            <h3>Support Entrepreneurship & Innovation</h3>
            <p>Provide mentorship and technical expertise to start-ups leveraging digital technologies.</p>
          </ObjectiveCard>
          <ObjectiveCard>
            <h3>Strengthen Regional & International Expertise</h3>
            <p>Train ICT professionals in advanced Internet operations (NetOps, network deployment, community networks).</p>
          </ObjectiveCard>
        </ObjectivesGrid>
      </ObjectivesSection>

      {/* Contact Section */}
      <ContactSection>
        <FormIntro>
          <FormIcon>💬</FormIcon>
          <h2>Request a Free Quotation</h2>
          <p>
            Fill out the form below and our team will get back to you with a tailored solution for your needs.
          </p>
        </FormIntro>
        <ContactContent>
          <QuotationForm onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <input
                type="text"
                placeholder="Full Name"
                {...register('fullName', { required: 'Full Name is required' })}
              />
              {errors.fullName && <ErrorMessage>{errors.fullName.message}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <input
                type="email"
                placeholder="Email Address"
                {...register('email', {
                  required: 'Email Address is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <input
                type="tel"
                placeholder="Phone Number (Optional)"
                {...register('phone')}
              />
            </FormGroup>

            <FormGroup>
              <input
                type="text"
                placeholder="Subject (e.g., Training inquiry, Hosting support)"
                {...register('subject', { required: 'Subject is required' })}
              />
              {errors.subject && <ErrorMessage>{errors.subject.message}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <textarea
                placeholder="Your Message"
                {...register('message', { required: 'Message is required' })}
              />
              {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
            </FormGroup>

            <ServiceCheckboxes>
              <label>
                <input type="checkbox" {...register('services.training')} />
                Training Inquiry
              </label>
              <label>
                <input type="checkbox" {...register('services.hosting')} />
                Hosting Support
              </label>
              <label>
                <input type="checkbox" {...register('services.mentorship')} />
                Mentorship Request
              </label>
              <label>
                <input type="checkbox" {...register('services.partnership')} />
                Partnership Proposal
              </label>
            </ServiceCheckboxes>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </SubmitButton>
          </QuotationForm>
        </ContactContent>
      </ContactSection>
    </>
  );
};

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const SlideContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  max-width: 1400px;
  width: 100%;
  padding: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const ImageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlideImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--text);
  padding: 2.5rem 2.5rem 2.5rem 0;
  max-width: 650px;
  z-index: 1;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: var(--primary);
    text-shadow: 0 2px 8px rgba(15, 118, 188, 0.08);
  }

  .slide-description {
    font-size: 1.25rem;
    font-weight: 500;
    background: url('/src/assets/images/back.png') center/cover no-repeat, white;
    color: #0F76BC;
    padding: 1.2rem 1.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 16px rgba(15, 118, 188, 0.10);
    margin-bottom: 2rem;
    line-height: 1.7;
    max-width: 100%;
    word-break: break-word;
  }

  @media (max-width: 968px) {
    padding: 2rem 1rem;
    max-width: 100%;
  }
`;

const SlideNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.left ? 'left: 2rem;' : 'right: 2rem;')}
  background-color: var(--accent);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    background: url('/src/assets/images/back.png') center/cover no-repeat, white;
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 768px) {
    ${(props) => (props.left ? 'left: 1rem;' : 'right: 1rem;')}
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
  background-color: ${(props) => (props.active ? 'var(--accent)' : 'var(--gray)')};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--primary);
  }
`;

const ObjectivesSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: url('/src/assets/images/back.png') center/cover no-repeat, white;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: var(--primary);
  }
`;

const ObjectivesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const ObjectiveCard = styled.div`
  padding: 2rem;
  background: url('/src/assets/images/back.png') center/cover no-repeat, white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--primary);
  }

  p {
    font-size: 1rem;
    color: var(--text);
  }
`;

const ContactSection = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('/src/assets/images/back.png') center/cover no-repeat, white;
  padding: 4rem 2rem;
`;

const FormIntro = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  color: #0F76BC;

  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  p {
    color: #222;
    font-size: 1.1rem;
    margin-bottom: 0;
  }
`;

const FormIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const ContactContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
`;

const QuotationForm = styled.form`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  background: linear-gradient(135deg, #f8fafd 60%, #e3f0fa 100%);
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(15, 118, 188, 0.13);
  border: 2.5px solid #0F76BC;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  label {
    color: #0F76BC;
    font-weight: 600;
    margin-bottom: 0.2rem;
    font-size: 1rem;
    letter-spacing: 0.5px;
  }

  input, textarea, select {
    width: 100%;
    padding: 0.9rem 1rem;
    border: 1.5px solid #F16522;
    border-radius: 7px;
    background: #fff;
    color: #222;
    font-size: 1rem;
    transition: border-color 0.2s, box-shadow 0.2s;

    &:focus {
      border-color: #0F76BC;
      box-shadow: 0 0 0 2px #e3f0fa;
      outline: none;
    }
  }

  textarea {
    min-height: 110px;
    resize: vertical;
  }
`;

const ServiceCheckboxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #0F76BC;
    font-weight: 500;
    background: url('/src/assets/images/back.png') center/cover no-repeat, white;
    padding: 0.4rem 1rem 0.4rem 0.7rem;
    border-radius: 5px;
    border: 1px solid #e3f0fa;
    cursor: pointer;
    transition: background 0.2s, border 0.2s;

    input[type="checkbox"] {
      accent-color: #F16522;
      margin-right: 0.4rem;
    }

    &:hover {
      background: #e3f0fa;
      border: 1.5px solid #0F76BC;
    }
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, #0F76BC 70%, #F16522 100%);
  color: #fff;
  padding: 1rem 0;
  border-radius: 7px;
  font-size: 1.15rem;
  font-weight: 700;
  border: none;
  margin-top: 0.5rem;
  box-shadow: 0 2px 8px rgba(15, 118, 188, 0.10);
  transition: background 0.2s, transform 0.2s;

  &:hover, &:focus {
    background: linear-gradient(90deg, #F16522 60%, #0F76BC 100%);
    transform: translateY(-2px) scale(1.02);
    color: #fff;
  }

  &:disabled {
    background: #cccccc;
    color: #fff;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.span`
  color: #F16522;
  font-size: 0.95rem;
  margin-top: 0.2rem;
  font-weight: 500;
`;

export default Home;
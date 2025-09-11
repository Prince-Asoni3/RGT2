import { useState, useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";
import { Helmet } from "react-helmet-async";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// --- Slide data ---
const slides = [
  {
    title: "Resilient Global Technologies",
    description:
      "We are a leading IT consulting firm committed to empowering businesses, communities, and individuals to succeed in the digital era. With a strong focus on digital empowerment and digital inclusion, we design tailored solutions that bridge the digital divide, enhance skills, and create opportunities for sustainable growth. By combining expertise with a deep understanding of local and global digital trends, we enable our clients to confidently navigate today’s complex digital landscape and unlock new possibilities for innovation and impact.",
    image: "/images/tittle.png",
  },
  {
    title: "Community Network Training and WIFI Entrepreneurship",
    description:
      "RGT Developed and implemented the Community Network and Wifi Entrepreneurship project to bridge the digital divide in Refugee camps. RGT provided Trainers who delivered 30 days training and MC who mastered the graduation ceremony.",
    image: "/images/slide2.jpg",
  },
  {
    title: "Fostering Digital Inclusion and Empowerment",
    description:
      "Our expertise spans across various sectors, including education, Corporate and Professional trainings, Bridging the digital divide initiatives, Events management and community outreach. We are dedicated to fostering digital inclusion unlocking all digital potentials, and ensuring that everyone has the skills and tools needed to participate fully in the digital economy.",
    image: "/images/slide3.jpg",
  },
];

// --- Portfolio data ---
const projects = [
  {
    image: "/images/project1.jpg",
    title: "Community Network Training and WIFI Entrepreneurship",
    description:
      "The purpose of this project was to equip refugees with the skills to establish and maintain their own internet connections, thereby strengthening community life and fostering local economic development. Implemented at Mahama Refugee Camp, the project included the supply of Starlink equipment, the design and delivery of a tailored training curriculum, and consultation services on network installation and management.",
    client: "Save the Children International Under Kumwe Hub",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, []);

  // Animation
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    reset: true,
    config: { duration: 1500 },
  });

  return (
    <>
      <Helmet>
        <title>Resilient Global Tech</title>
      </Helmet>

      {/* Hero Slider */}
      <HeroSection>
        <SlideNavButton $left onClick={prevSlide}>
          <FaChevronLeft />
        </SlideNavButton>
        <SlideNavButton $right onClick={nextSlide}>
          <FaChevronRight />
        </SlideNavButton>

        <SlideCardContainer>
          <animated.div style={fadeIn}>
            <SlideTitle>{slides[currentSlide].title}</SlideTitle>
            <SlideContent>
              <SlideImage
                src={slides[currentSlide].image}
                alt={`Slide ${currentSlide + 1}`}
                $large={currentSlide === 0 || currentSlide === slides.length - 1}
              />
              <DescriptionCard>
                {slides[currentSlide].description}
              </DescriptionCard>
            </SlideContent>
          </animated.div>
        </SlideCardContainer>

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

      {/* Portfolio */}
      <PortfolioContainer>
        <PortfolioHeader>
          <h1>Our Portfolio</h1>
          <p>Unlocking Digital Potential</p>
        </PortfolioHeader>
        <PortfolioContent>
          {projects.map((project, index) => (
            <PortfolioItem key={index}>
              <PortfolioImage src={project.image} alt={project.title} />
              <ProjectDetails>
                <PortfolioTitle>{project.title}</PortfolioTitle>
                <PortfolioDescription>{project.description}</PortfolioDescription>
                <ClientInfo>Client: {project.client}</ClientInfo>
              </ProjectDetails>
            </PortfolioItem>
          ))}
        </PortfolioContent>
        <ViewMoreButton>
          <Link to="/portfolio">View More Projects</Link>
        </ViewMoreButton>
      </PortfolioContainer>

      {/* Quotation */}
      <QuotationSection>
        <QuotationHeader>
          <FaQuoteRight size={40} color="#0F76BC" />
          <h1>Request A Quotation</h1>
          <p>Please fill out the form below to request for a quotation</p>
        </QuotationHeader>
        <ContactNowButton>
          <Link to="/contact">Click Here to Submit Quotation</Link>
        </ContactNowButton>
      </QuotationSection>
    </>
  );
};

// --- Styled Components ---
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
`;

const SlideCardContainer = styled.div`
  max-width: 1200px;
  width: 90%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const SlideTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #0F76BC;
  font-weight: 800;
`;

const SlideContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 968px) {
    flex-direction: column;
  }
`;

const SlideImage = styled.img`
  width: ${(props) => (props.$large ? "55%" : "40%")};
  max-height: ${(props) => (props.$large ? "400px" : "300px")};
  object-fit: cover;
  border-radius: 10px;
  transition: all 0.3s ease;
  @media (max-width: 968px) {
    width: 100%;
    max-height: unset;
  }
`;

const DescriptionCard = styled.div`
  background: url("/images/back.png") center/cover no-repeat, white;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(15, 118, 188, 0.1);
  padding: 1.5rem 2rem;
  color: #222;
  font-size: 1.15rem;
  line-height: 1.7;
  border: 1.5px solid #F16522;
`;

const SlideNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.$left ? "left: 2rem;" : props.$right ? "right: 2rem;" : "")}
  background: linear-gradient(90deg, #0F76BC 70%, #F16522 100%);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: 0 2px 8px rgba(15, 118, 188, 0.1);
  cursor: pointer;
  font-size: 1.5rem;
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: linear-gradient(90deg, #F16522 60%, #0F76BC 100%);
    transform: scale(1.1);
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
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.$active ? "#F16522" : "#e3f0fa")};
  cursor: pointer;
  border: 1px solid #0F76BC;
  &:hover {
    background: linear-gradient(90deg, #F16522 60%, #0F76BC 100%);
  }
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
  padding: 1.5rem;
  width: 100%;
  max-width: 900px;
  min-height: 250px;
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
    min-height: 400px;
    padding: 1rem;
    border-radius: 12px;
  }
`;

const PortfolioImage = styled.img`
  width: 40%;
  max-width: 300px;
  height: auto;
  border-radius: 12px;
  margin-right: 1.5rem;
  box-shadow: 0 4px 16px rgba(15, 118, 188, 0.15);
  border: 2px solid #F16522;
  object-fit: cover;
  align-self: center;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 250px;
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const ProjectDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
`;

const PortfolioTitle = styled.h3`
  color: #0F76BC;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 8px rgba(15, 118, 188, 0.07);
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    text-align: center;
  }
`;

const PortfolioDescription = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
  margin-bottom: 0.8rem;
  flex-grow: 1;
  overflow-y: auto;
  padding-right: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    text-align: center;
  }
`;

const ClientInfo = styled.p`
  font-size: 0.95rem;
  color: #222;
  font-weight: 600;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
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

  &:hover,
  &:focus {
    background: linear-gradient(90deg, #0F76BC 70%, #F16522 100%);
    transform: translateY(-2px) scale(1.03);
  }
`;

const QuotationSection = styled.div`
  padding: 4rem var(--container-padding);
`;

const QuotationHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  h1 {
    font-size: 2.8rem;
    color: #0F76BC;
    font-weight: 800;
  }
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
  a {
    color: #fff;
    text-decoration: none;
  }

  &:hover,
  &:focus {
    background: linear-gradient(90deg, #F16522 60%, #0F76BC 100%);
    transform: translateY(-2px) scale(1.02);
  }
`;

export default Home;
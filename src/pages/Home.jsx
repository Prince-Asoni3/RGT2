import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import QuotationForm from "../components/QuotationForm";
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
      "RGT developed and implemented the Community Network and Wifi Entrepreneurship project to bridge the digital divide in Refugee camps. RGT provided Trainers who delivered 30 days training and MC who mastered the graduation ceremony.",
  },
  {
    image: "/images/project2.jpeg",
    title: "Business Pitch competition",
    description:
      "RGT provided expert panelists and judges to participate in Entrepreneurs’ pitch competitions and information sessions with 193 business owners in Mahama Refugee Camp.",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showQuotationForm, setShowQuotationForm] = useState(false);

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
          <h1>Most Popular Projects</h1>
          <p>
            We are pleased to highlight our most notable and successful projects
            recently completed by our team.
          </p>
        </PortfolioHeader>

        <PortfolioContent>
          {projects.map((project, idx) => (
            <PortfolioItem key={idx}>
              <img src={project.image} alt={project.title} />
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <PortfolioButton as={Link} to={`/portfolio?project=${idx}`}>
                  View more
                </PortfolioButton>
              </div>
            </PortfolioItem>
          ))}
        </PortfolioContent>

        <ViewMoreButton>
          <Link to="/portfolio">Explore More Projects</Link>
        </ViewMoreButton>
      </PortfolioContainer>

      {/* Quotation */}
      <QuotationSection>
        <QuotationHeader>
          <FaQuoteRight size={40} color="#0F76BC" />
          <h1>Request A Quotation</h1>
          <p>
            Ready to start your next project? Click below to submit a quotation
            and let us help you achieve your goals.
          </p>
        </QuotationHeader>
        <ContactNowButton
          onClick={() => setShowQuotationForm(!showQuotationForm)}
        >
          {showQuotationForm ? "Hide Form" : "Click Here to Submit Quotation"}
        </ContactNowButton>
        {showQuotationForm && (
          <QuotationForm onSuccess={() => setShowQuotationForm(false)} />
        )}
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
  background: url("/images/back.png") center/cover no-repeat, white;
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
  color: var(--primary);
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
  background: white;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(15, 118, 188, 0.1);
  padding: 1.5rem 2rem;
  color: #222;
  font-size: 1.15rem;
  line-height: 1.7;
  border: 1.5px solid #f16522;
`;

const SlideNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) =>
    props.$left ? "left: 2rem;" : props.$right ? "right: 2rem;" : ""}
  background-color: var(--accent);
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
  background-color: ${(props) =>
    props.$active ? "var(--accent)" : "var(--gray)"};
  cursor: pointer;
`;

const PortfolioContainer = styled.div`
  padding: 6rem var(--container-padding) 4rem;
  background: url('/images/back.png') center/cover no-repeat, white;
`;

const PortfolioHeader = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
  h1 {
    font-size: 3rem;
    color: #0f76bc;
    font-weight: 800;
  }
  p {
    color: #222;
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
  }
`;

const PortfolioContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PortfolioItem = styled.div`
  display: flex;
  gap: 2rem;
  background: url('/images/back.png') center/cover no-repeat, white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(15, 118, 188, 0.08);
  margin-bottom: 2rem;
  padding: 6rem;
  img {
    width: 180px;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
  }
  h3 {
    color: #0f76bc;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
    font-weight: 700;
  }
  p {
    color: #222;
    font-size: 1.05rem;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    img {
      width: 100%;
      height: 160px;
    }
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

  &:hover,
  &:focus {
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
    color: #0f76bc;
    font-weight: 800;
  }
`;

export default Home;
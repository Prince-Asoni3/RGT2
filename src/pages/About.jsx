import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const AboutContainer = styled.div`
  padding: 7rem var(--container-padding) 4rem;
`;

const AboutContent = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
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
    font-style: italic;
    font-weight: 500;
    max-width: 700px;
    margin: 0 auto;
    opacity: 0.92;
    letter-spacing: 0.2px;
  }
`;

const TeamSection = styled.div`
  margin-top: 4rem;
  
  h2 {
    text-align: center;
    margin-bottom: 3rem;
    color: #0F76BC;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const TeamMember = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(241, 101, 34, 0.1);
  transition: transform 0.3s ease;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto 1.5rem;
    border: 3px solid #0F76BC;
  }
  
  h3 {
    color: #0F76BC;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }
  
  p {
    color: var(--text);
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 1rem;

  a {
    color: #0F76BC;
    font-size: 1.3rem;
    transition: all 0.3s ease;

    &:hover {
      color: #F16522;
      transform: translateY(-3px);
    }
  }
`;

const TestimonialsSection = styled.div`
  margin-top: 6rem;
  padding: 4rem 0;
  background: url('/src/assets/images/back.png') center/cover no-repeat, white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const ServicesContainer = styled.div`
  padding: 6rem 2rem 4rem;
  background: url('/src/assets/images/back.png') center/cover no-repeat, #f8fafd;
`;

const About = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: '/src/assets/images/person1.jpeg',
      social: {
        whatsapp: 'https://wa.me/1234567890',
        instagram: 'https://instagram.com/johnsmith',
        facebook: 'https://facebook.com/johnsmith',
        linkedin: 'https://linkedin.com/in/johnsmith',
        twitter: 'https://twitter.com/johnsmith'
      }
    },
    {
      name: 'Davis Scott',
      role: 'Creative Director',
      image: '/src/assets/images/person2.jpeg',
      social: {
        whatsapp: 'https://wa.me/1234567891',
        instagram: 'https://instagram.com/sarahjohnson',
        facebook: 'https://facebook.com/sarahjohnson',
        linkedin: 'https://linkedin.com/in/sarahjohnson',
        twitter: 'https://twitter.com/sarahjohnson'
      }
    },
    {
      name: 'Michael Brown',
      role: 'Technical Lead',
      image: '/src/assets/images/person3.jpeg',
      social: {
        whatsapp: 'https://wa.me/1234567892',
        instagram: 'https://instagram.com/michaelbrown',
        facebook: 'https://facebook.com/michaelbrown',
        linkedin: 'https://linkedin.com/in/michaelbrown',
        twitter: 'https://twitter.com/michaelbrown'
      }
    },
    {
      name: 'Emily Davis',
      role: 'Project Manager',
      image: '/src/assets/images/person4.jpeg',
      social: {
        whatsapp: 'https://wa.me/1234567893',
        instagram: 'https://instagram.com/emilydavis',
        facebook: 'https://facebook.com/emilydavis',
        linkedin: 'https://linkedin.com/in/emilydavis',
        twitter: 'https://twitter.com/emilydavis'
      }
    }
  ];

  return (
    <AboutContainer>
      <Helmet>
        <title>RGT - About Us</title>
      </Helmet>
      <AboutContent>
        <AboutHeader>
          <h1>Who Are We</h1>
          <p>A team committed to making technology accessible and impactful.</p>
        </AboutHeader>
        <TeamSection>
          <h2>Our Team</h2>
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamMember key={index}>
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <SocialLinks>
                  <a href={member.social.whatsapp} target="_blank" rel="noopener noreferrer" title="WhatsApp">
                    <FaWhatsapp />
                  </a>
                  <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" title="Instagram">
                    <FaInstagram />
                  </a>
                  <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" title="Facebook">
                    <FaFacebook />
                  </a>
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" title="X (Twitter)">
                    <FaTwitter />
                  </a>
                </SocialLinks>
              </TeamMember>
            ))}
          </TeamGrid>
        </TeamSection>
        <TestimonialsSection>
          {/* Testimonials content will go here */}
        </TestimonialsSection>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
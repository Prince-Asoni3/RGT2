import { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import QuotationForm from '../components/QuotationForm';

// Custom X icon component
const XIcon = () => (
  <svg
    width="1.2rem"
    height="1.2rem"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933zM16.25 20.696h2.048L7.74 3.308H5.58l10.67 17.388z" />
  </svg>
);

// Example team data (replace with your real data)
const team = [
  {
    name: 'Mfitumukiza Emmanuel',
    role: 'CEO',
    photo: '/src/assets/images/avatar1.png',
    social: {
      whatsapp: 'https://wa.me/1234567890',
      instagram: 'https://instagram.com/alice_example',
      x: 'https://x.com/alice_example',
      linkedin: 'https://linkedin.com/in/alice-example'
    }
  },
  {
    name: 'Nizeyimana Jules',
    role: 'CTO',
    photo: '/images/avatar2.png',
    social: {
      whatsapp: 'https://wa.me/0987654321',
      instagram: 'https://instagram.com/bob_example',
      x: 'https://x.com/bob_example',
      linkedin: 'https://linkedin.com/in/bob-example'
    }
  },
  {
    name: 'Munyaneza Alain Prince',
    role: 'Lead Developer',
    photo: '/images/prince.jpg',
    social: {
      whatsapp: 'https://wa.me/1122334455',
      instagram: 'https://instagram.com/carol_example',
      x: 'https://x.com/carol_example',
      linkedin: 'https://linkedin.com/in/carol-example'
    }
  },
];

const objectives = [
  'Empower businesses, communities, and individuals to thrive in the digital era.',
  'Bridge the digital divide and enhance digital skills.',
  'Deliver tailored IT solutions and consulting services.',
  'Promote digital literacy and safe internet practices.',
  'Developing secure coding and efficient websites',
];

const About = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <AboutContainer>
      <Helmet>
        <title>RGT - About Us</title>
      </Helmet>
      <Section>
        <SectionHeader>
          <h1>About</h1>
        </SectionHeader>
        <SectionContent>
          <AboutText>
            At Resilient Global technologies, we are dedicated to empowering communities, businesses, and individuals to unlock their digital potential. In today’s fast-evolving digital era, access to innovative and reliable digital solutions is essential for growth, learning, and success. We exist to make that access inclusive, meaningful and transformative.
          </AboutText>
        </SectionContent>
      </Section>
      <Section>
        <SectionHeader>
          <h1>Mission</h1>
        </SectionHeader>
        <SectionContent>
          <AboutText>
            To deliver innovative, reliable, and inclusive digital solutions and capacity-building programs that enable communities, businesses, and individuals to thrive in the digital era.
          </AboutText>
        </SectionContent>
      </Section>
      <Section>
        <SectionHeader>
          <h1>Vision</h1>
        </SectionHeader>
        <SectionContent>
          <AboutText>
            Empowering communities, businesses, and individuals to unlock their digital potential.
          </AboutText>
        </SectionContent>
      </Section>
      <Section>
        <SectionHeader>
          <h1>Core Values</h1>
        </SectionHeader>
        <SectionContent>
          <CoreValuesList>
            <li>Innovation – Embracing creativity and forward-thinking solutions.</li>
            <li>Inclusivity – Ensuring digital opportunities are accessible to all.</li>
            <li>Reliability – Delivering consistent, high-quality services.</li>
            <li>Empowerment – Providing tools and knowledge to unlock potential.</li>
            <li>Collaboration – Working together to achieve meaningful impact.</li>
            <li>Integrity – Acting ethically and transparently in all we do.</li>
          </CoreValuesList>
        </SectionContent>
      </Section>
      <Section>
        <SectionHeader>
          <h1>Objectives</h1>
        </SectionHeader>
        <SectionContent>
          <ObjectivesList>
            {objectives.map((obj, idx) => (
              <li key={idx}>{obj}</li>
            ))}
          </ObjectivesList>
        </SectionContent>
      </Section>
      <Section>
        <SectionHeader>
          <h1>Our Team</h1>
        </SectionHeader>
        <TeamGrid>
          {team.map((member, idx) => (
            <TeamCard key={idx}>
              <TeamPhoto src={member.photo} alt={member.name} />
              <TeamName>{member.name}</TeamName>
              <TeamRole>{member.role}</TeamRole>
              <SocialLinks>
                <SocialLink href={member.social.whatsapp} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                </SocialLink>
                <SocialLink href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </SocialLink>
                <SocialLink href={member.social.x} target="_blank" rel="noopener noreferrer">
                  <XIcon />
                </SocialLink>
                <SocialLink href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </SocialLink>
              </SocialLinks>
            </TeamCard>
          ))}
        </TeamGrid>
      </Section>

      {/* Section 4: Contact Button & Quotation Form */}
      <Section>
        <SectionHeader>
          <h1>Contact Us</h1>
        </SectionHeader>
        <ContactNowButton onClick={() => setShowForm((v) => !v)}>
          {showForm ? 'Hide Form' : 'Contact Us Now'}
        </ContactNowButton>
        {showForm && (
          <QuotationForm onSuccess={() => setShowForm(false)} />
        )}
      </Section>
    </AboutContainer>
  );
};

// Styled Components
const AboutContainer = styled.div`
  padding: 7rem var(--container-padding) 4rem;
  background: url('/images/back.png') center/cover no-repeat, white;
`;

const Section = styled.section`
  margin-bottom: 4rem;
  background: url('/images/back.png') center/cover no-repeat, white;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(15, 118, 188, 0.13);
  
  padding: 2.5rem 2rem;
  @media (max-width: 600px) {
    padding: 1.2rem 0.5rem;
    border-radius: 10px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-family: 'Poppins', 'Montserrat', Arial, sans-serif;
    font-size: 2.2rem;
    color: #0F76BC;
    font-weight: 800;
    letter-spacing: 1.2px;
    margin-bottom: 0.5rem;
    text-shadow: 0 2px 8px rgba(15, 118, 188, 0.07);
  }
`;

const SectionContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const VisionMission = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  flex-wrap: wrap;
  

  div {
    flex: 1 1 300px;
    background: url('/images/back.png') center/cover no-repeat, white;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(15, 118, 188, 0.08);
    padding: 2rem;
    min-width: 260px;
  }

  h2 {
    color: #F16522;
    font-size: 1.3rem;
    margin-bottom: 0.7rem;
    font-weight: 700;
  }

  p {
    color: #222;
    font-size: 1.08rem;
    margin: 0;
  }
`;

const AboutText = styled.p`
  font-size: 1.15rem;
  color: #222;
  background: #f8fafd;
  border-radius: 10px;
  padding: 1.5rem 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(15, 118, 188, 0.07);
  line-height: 1.7;
  border: 1.5px solid #F16522;
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 1rem 0.7rem;
  }
`;

const CoreValuesList = styled.ul`
  list-style: disc inside;
  padding-left: 1.5rem;
  font-size: 1.13rem;
  color: #0F76BC;
  font-weight: 500;
  margin-bottom: 1.5rem;
  li {
    margin-bottom: 0.8rem;
    background: #e3f0fa;
    border-radius: 8px;
    padding: 1rem 1.5rem;
    box-shadow: 0 2px 8px rgba(15, 118, 188, 0.07);
    color: #222;
    border: 1.5px solid #F16522;
  }
`;

const ObjectivesList = styled.ul`
  list-style: disc inside;
  padding-left: 1.5rem;
  font-size: 1.13rem;
  color: #0F76BC;
  font-weight: 500;

  li {
    margin-bottom: 0.8rem;
    background: url('/images/back.png') center/cover no-repeat, white;
    border-radius: 8px;
    padding: 1rem 1.5rem;
    box-shadow: 0 2px 8px rgba(15, 118, 188, 0.07);
    color: #222;
    border: 1.5px solid #F16522;
  }
`;

const TeamGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const TeamCard = styled.div`
 background: url('/images/back.png') center/cover no-repeat, white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(15, 118, 188, 0.10);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  max-width: 240px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamPhoto = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 2px solid #F16522;
`;

const TeamName = styled.div`
  color: #0F76BC;
  font-weight: 700;
  font-size: 1.08rem;
`;

const TeamRole = styled.div`
  color: #F16522;
  font-size: 0.98rem;
  font-weight: 500;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: #0F76BC;
  font-size: 1.2rem;
  transition: color 0.2s, transform 0.2s;
  display: flex;
  align-items: center;

  &:hover {
    color: #F16522;
    transform: translateY(-2px);
  }
`;

const ContactNowButton = styled.button`
  display: block;
  margin: 2rem auto 2rem auto;
  padding: 1rem 2.5rem;
  background: linear-gradient(90deg, #0F76BC 70%, #F16522 100%);
  color: #fff;
  border: none;
  border-radius: 7px;
  font-size: 1.15rem;
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

const QuotationFormStyled = styled(QuotationForm)`
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
    background: #f8fafd;
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

export default About;
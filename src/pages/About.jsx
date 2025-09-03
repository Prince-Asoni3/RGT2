import { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import QuotationForm from '../components/QuotationForm';

const objectives = [
  'Provide Inclusive Digital Solutions: Develop and deliver digital tools and services that are accessible to communities, businesses, and individuals.',
  'Enhance Digital Skills: Offer training and capacity-building programs to empower clients to effectively use digital technologies.',
  'Promote Digital Empowerment: Enable individuals and organizations to leverage digital tools to grow, innovate, and solve problems.',
  'Foster Innovation: Encourage creative and forward-thinking approaches in the adoption and use of digital solutions.',
  'Build Trust and Reliability: Ensure all solutions and services are consistent, high-quality, and dependable.',
  'Encourage Collaboration: Partner with stakeholders, communities, and organizations to create meaningful digital impact.',
  'Uphold Ethical Standards: Operate with integrity, transparency, and accountability in all initiatives.',
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

export default About;
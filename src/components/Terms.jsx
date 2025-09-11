import styled from 'styled-components';
import Footer from './Footer';
import Navbar from './Navbar';
import { FaBan, FaChild, FaBalanceScale, FaShieldAlt, FaBriefcase, FaBullhorn } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const TermsContainer = styled.div`
  min-height: 100vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 1rem 2rem 1rem; /* 120px ensures title is under navbar */
  box-sizing: border-box;
  @media (max-width: 900px) {
    padding: 100px 0.7rem 1.5rem 0.7rem;
  }
  @media (max-width: 600px) {
    padding: 80px 0.3rem 1rem 0.3rem;
  }
`;

const TermsCard = styled.div`
  background: url("/images/back.png") center/cover no-repeat, white;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(15, 118, 188, 0.13);
  max-width: 700px;
  width: 100%;
  padding: 2.5rem 2rem;
  margin: 0 auto;
  color: #0F76BC;
  font-family: 'Poppins', 'Montserrat', Arial, sans-serif;
  box-sizing: border-box;
  @media (max-width: 900px) {
    max-width: 98vw;
    padding: 1.5rem 0.7rem;
  }
  @media (max-width: 600px) {
    padding: 1rem 0.3rem;
    font-size: 0.98rem;
  }
`;

const Title = styled.h1`
  color: #F16522;
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  margin-top: 0;
  @media (max-width: 900px) {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
    margin-bottom: 0.7rem;
  }
`;

const SectionTitle = styled.h2`
  color: #0F76BC;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 2rem 0 1rem 0;
  @media (max-width: 900px) {
    font-size: 1.08rem;
    margin: 1.2rem 0 0.7rem 0;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin: 0.7rem 0 0.5rem 0;
  }
`;

const List = styled.ul`
  margin: 1.2rem 0 2rem 1.2rem;
  padding: 0;
  color: #222;
  font-size: 1.08rem;
  line-height: 1.7;
  @media (max-width: 900px) {
    font-size: 0.98rem;
    margin: 1rem 0 1.5rem 0.7rem;
  }
  @media (max-width: 600px) {
    font-size: 0.92rem;
    margin: 0.7rem 0 1rem 0.3rem;
  }
`;

const EffectiveDate = styled.p`
  color: #F16522;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 2rem;
  text-align: right;
  @media (max-width: 900px) {
    font-size: 0.92rem;
    margin-top: 1.2rem;
  }
  @media (max-width: 600px) {
    font-size: 0.85rem;
    margin-top: 0.7rem;
  }
`;

const Terms = () => (
  <>
    <Helmet>
      <title>Terms & Conditions | Resilient Global Technologies</title>
    </Helmet>
    <Navbar />
    <TermsContainer>
      <TermsCard>
        <Title>Terms & Conditions</Title>
        <SectionTitle>RGT Child Protection Commitment</SectionTitle>
        <p>
          At Resilient Global Technologies (RGT) Ltd, we believe every child has the right to grow up safe, respected, and protected from harm.
        </p>
        <List>
          <li><FaBan color="#F16522" style={{marginRight:8}} size={22}/> <b>Zero Tolerance for Abuse</b> – No form of violence, neglect, or exploitation against children will ever be accepted.</li>
          <li><FaChild color="#0F76BC" style={{marginRight:8}} size={22}/> <b>Listening to Children</b> – We respect children’s voices and ensure they are heard in matters that affect them.</li>
          <li><FaBalanceScale color="#F16522" style={{marginRight:8}} size={22}/> <b>Fair Protection for All</b> – Every child is treated equally, regardless of gender, ability, or background.</li>
          <li><FaShieldAlt color="#0F76BC" style={{marginRight:8}} size={22}/> <b>Strong Safeguards</b> – All RGT staff, volunteers, and partners follow strict codes of conduct and undergo background checks and training.</li>
          <li><FaBriefcase color="#F16522" style={{marginRight:8}} size={22}/> <b>No Child Labour</b> – We strictly prohibit child labour in any of our operations, projects, or supply chains. Children under 18 will never be involved in harmful or exploitative work.</li>
          <li><FaBullhorn color="#0F76BC" style={{marginRight:8}} size={22}/> <b>Safe Reporting</b> – Concerns about child safety can be reported confidentially, and we protect whistleblowers.</li>
        </List>
        <p style={{marginTop:'1.5rem', color:'#222', fontSize:'1.12rem', textAlign:'center'}}>
          Together, we work with families, communities, and partners to create safe spaces where children can learn, grow, and reach their full potential.
        </p>
        <EffectiveDate>
          Approved by RGT Management<br />
          Effective from: 15th February 2024
        </EffectiveDate>
      </TermsCard>
    </TermsContainer>
  </>
);

export default Terms;

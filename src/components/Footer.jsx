import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const FooterContainer = styled.footer`
  background: #0F76BC;
  color: white;
  padding: 4rem var(--container-padding) 2rem;
`;

const FooterContent = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  align-items: stretch;
`;

const FooterSection = styled.div`
  flex: 1 1 300px;
  min-width: 260px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 220px;
  box-sizing: border-box;
  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    color: #F16522;
  }
  @media (max-width: 900px) {
    min-width: 180px;
    max-width: 100vw;
    min-height: 180px;
  }
`;

const FooterSectionQuickLinks = styled(FooterSection)`
  align-items: center;
  justify-content: center;
`;

const FooterSectionConnect = styled(FooterSection)`
  align-items: flex-end;
  justify-content: stretch;
`;

const FooterLink = styled(Link)`
  color: white;
  display: block;
  margin-bottom: 0.5rem;
  opacity: 0.8;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 1;
    color: #F16522;
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  a {
    color: white;
    font-size: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      color: #F16522;
      transform: translateY(-3px);
    }
  }
`;

const FooterCopyright = styled.div`
  background: #fff;
  color: #0F76BC;
  text-align: center;
  padding: 1rem 0;
  font-family: 'Poppins', 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  font-size: 1.08rem;
  letter-spacing: 0.5px;
  border-top: 1px solid #e3f0fa;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Contact Info</h3>
          <p>Email: admin@rgtechnologies.rw</p>
          <p>Phone: +250788710660</p>
          <p>Address: 24Q8+Q62, KN 3 Rd, Kigali, Rwanda</p>
        </FooterSection>
        <FooterSectionQuickLinks>
          <h3>Quick Links</h3>
          <ol style={{paddingLeft: '1.2rem', margin: 0}}>
            <li><FooterLink to="/">Home</FooterLink></li>
            <li><FooterLink to="/about">About</FooterLink></li>
            <li><FooterLink to="/services">Services</FooterLink></li>
            <li><FooterLink to="/contact">Contact</FooterLink></li>
            <li><FooterLink to="/terms">Terms & Conditions</FooterLink></li>
          </ol>
        </FooterSectionQuickLinks>
        <FooterSectionConnect>
          <h3>Connect With Us</h3>
          <SocialLinks>
            <a href="#" target="" rel="">
              <FaWhatsapp />
            </a>
            <a href="#" target="" rel="">
              <FaInstagram />
            </a>
            <a href="#" target="" rel="">
              <FaFacebook />
            </a>
            <a href="#" target="" rel="">
              <FaLinkedin />
            </a>
            <a href="#" target="" rel="">
              <FaXTwitter />
            </a>
          </SocialLinks>
        </FooterSectionConnect>
      </FooterContent>
      
      <FooterCopyright>
        &copy; {new Date().getFullYear()} Resilient Global Technologies. All rights reserved.
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
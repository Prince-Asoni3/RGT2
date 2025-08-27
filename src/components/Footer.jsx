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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    color: #F16522;
  }
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
          <h3>Quick Links</h3>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/services">Services</FooterLink>
          <FooterLink to="/portfolio">Portfolio</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <h3>Contact Info</h3>
          <p>Email: admin@rgtechnologies.rw</p>
          <p>Phone: +250788710660</p>
          <p>Address: 24Q8+Q62, KN 3 Rd, Kigali, Rwanda</p>
          <p>City, Country</p>
        </FooterSection>
        
        <FooterSection>
          <h3>Connect With Us</h3>
          <SocialLinks>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com/rgt" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com/rgt" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://linkedin.com/company/rgt" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/rgt" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
          </SocialLinks>
        </FooterSection>
      </FooterContent>
      
      <FooterCopyright>
        &copy; {new Date().getFullYear()} Resilient Global Technologies. All rights reserved.
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
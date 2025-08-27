
import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';


const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(900px);
  padding: 1rem var(--container-padding);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(Link)`
  img {
    height: 60px;
    width: auto;
  }
`


const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Bar = styled.span`
  width: 28px;
  height: 3px;
  background: var(--primary);
  margin: 4px 0;
  border-radius: 2px;
  transition: 0.3s;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    right: 0;
    background: rgba(255,255,255,0.98);
    flex-direction: column;
    gap: 1.5rem;
    width: 70vw;
    max-width: 320px;
    height: calc(100vh - 80px);
    box-shadow: -2px 0 12px rgba(0,0,0,0.08);
    transform: translateX(${props => props.$open ? '0' : '100%'});
    transition: transform 0.3s ease;
    align-items: flex-start;
    padding: 2rem 1.5rem;
    z-index: 1099;
  }
`;

const NavLink = styled(Link)`
  color: var(--primary);
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--accent);
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;


import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Close menu on route change
  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          <img src="/images/nav.png" alt="RGT Logo" />
        </Logo>
        <Hamburger aria-label="Toggle navigation" onClick={() => setOpen(o => !o)}>
          <Bar style={{ transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <Bar style={{ opacity: open ? 0 : 1 }} />
          <Bar style={{ transform: open ? 'rotate(-45deg) translate(7px, -7px)' : 'none' }} />
        </Hamburger>
        <NavLinks $open={open}>
          <NavLink to="/" $isActive={location.pathname === '/'}>
            Home
          </NavLink>
          <NavLink to="/about" $isActive={location.pathname === '/about'}>
            About
          </NavLink>
          <NavLink to="/services" $isActive={location.pathname === '/services'}>
            Services
          </NavLink>
          <NavLink to="/portfolio" $isActive={location.pathname === '/portfolio'}>
            Portifolio
          </NavLink>
          <NavLink to="/contact" $isActive={location.pathname === '/contact'}>
            Contact
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default Navbar
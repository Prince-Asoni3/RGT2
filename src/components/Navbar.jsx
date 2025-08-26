import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'


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

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`

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

const Navbar = () => {
  const location = useLocation()
  
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          <img src="/src/assets/images/nav.png" alt="RGT Logo" />
        </Logo>
        <NavLinks>
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
  )
}

export default Navbar
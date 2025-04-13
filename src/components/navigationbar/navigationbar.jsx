import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import David from '../../assets/img/Davidin.png';

export const NavigationBar = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <Navbar
      bg='dark'
      variant='dark'
      expand='lg'
      sticky='top'
      className='w-100'>
      <Container fluid>
        <Navbar.Brand>
          <img
            src={David}
            alt='David'
            className='page-header__item'
            style={{ height: '40px', width: 'auto' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            {isHomePage ? (
              <>
                <Nav.Link
                  as={ScrollLink}
                  to='home'
                  smooth={true}
                  duration={300}
                  spy={true}
                  offset={-70}>
                  Home
                </Nav.Link>
                <Nav.Link
                  as={ScrollLink}
                  to='about'
                  smooth={true}
                  duration={300}
                  spy={true}
                  offset={-70}>
                  About Me
                </Nav.Link>
                <Nav.Link
                  as={ScrollLink}
                  to='work'
                  smooth={true}
                  duration={300}
                  spy={true}
                  offset={-70}>
                  Work
                </Nav.Link>
                <Nav.Link
                  as={ScrollLink}
                  to='contact'
                  smooth={true}
                  duration={300}
                  spy={true}
                  offset={-70}>
                  Contact
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  as={RouterLink}
                  to='/'>
                  Home
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

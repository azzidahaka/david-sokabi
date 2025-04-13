import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import David from '../../assets/img/Davidin.png';

export const NavigationBar = () => {
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
            <Nav.Link
              as={Link}
              to='home'
              smooth={true}
              duration={300}
              spy={true}
              offset={-70}>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='about'
              smooth={true}
              duration={300}
              spy={true}
              offset={-70}>
              About Me
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='work'
              smooth={true}
              duration={300}
              spy={true}
              offset={-70}>
              Work
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='contact'
              smooth={true}
              duration={300}
              spy={true}
              offset={-70}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

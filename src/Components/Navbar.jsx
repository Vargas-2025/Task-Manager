import { Link, useLocation } from 'react-router-dom'
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap'

function Navbar() {
  const location = useLocation()
  return (
    <BSNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BSNavbar.Brand as={Link} to="/">Task Manager</BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="main-nav" />
        <BSNavbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" active={location.pathname === '/'}>Home</Nav.Link>
            <Nav.Link as={Link} to="/tasks" active={location.pathname === '/tasks'}>Tasks</Nav.Link>
            <Nav.Link as={Link} to="/about" active={location.pathname === '/about'}>About</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  )
}
export default Navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function ThisNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Knowledge for Everyone</Navbar.Brand>
          <Nav className="me">
          {/* <Nav className="me-auto"> */}
            <Nav.Link href="/register">Home</Nav.Link>
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/courses">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}


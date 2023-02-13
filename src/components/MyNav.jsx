import { Navbar, Container, Nav } from "react-bootstrap";

const MyNav = () => (
  <Navbar bg="dark" expand="lg" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Doge Books</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;

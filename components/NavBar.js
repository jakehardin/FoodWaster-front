/* eslint-disable react/destructuring-assignment */
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form } from 'react-bootstrap';
// import { signOut } from '../utils/auth';

function NavBar() {
  return (
    <>

      <Navbar expand="lg" className="bg-body-tertiary shadow-sm" id="navbar">
        <Container fluid>
          <Navbar.Brand href="/">FoodSaver</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/recipes">Recipes</Nav.Link>
              <Nav.Link href="/ingredients">Ingredients</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" style={{ marginRight: '15px' }}>Search</Button>
            </Form>
            {/* <NavDropdown style={{ marginRight: '15px' }} title="Account" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/appointments">Appointments</NavDropdown.Item>

              <NavDropdown.Item href="/therapists/favorites">
                Favorite Therapists
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <Button
                style={{ marginLeft: '15px' }}
                variant="danger"
                onClick={signOut}
              >
                Sign Out
              </Button>
            </NavDropdown> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default NavBar;

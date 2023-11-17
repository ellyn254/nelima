import "./App.css";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Items } from "./components/Items";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Signup } from "./components/Signup";
//import LoginSignup from './components/LoginSignup';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <NavDropdown
                  title="Products"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item as={Link}
                  to="/items">Items</NavDropdown.Item>
                  <NavDropdown.Item href="/table">
                    Add
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/table">
                    View
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/table">
                    Edit
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/table">
                    Remove
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Button as={Link} to="/signup" variant="dark">
                  Sign Up
                </Button>
              </Form>
            </Container>
          </Navbar>
        </>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Items />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

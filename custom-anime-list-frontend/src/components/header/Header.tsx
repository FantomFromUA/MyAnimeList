import * as React from 'react';
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaSearch } from 'react-icons/fa'

const Header = () => {

  const [animeSearch, setAnimeSearch] = React.useState("");

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">My Custom ANIME-LIST</Navbar.Brand>
        <Nav className='me-auto'>
          <NavDropdown title="Anime">
            <NavDropdown.Item href='#topanime'>
              Anime top
            </NavDropdown.Item>
            <NavDropdown.Item href='#search'>
              Search
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
        <Form className="d-flex my-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={animeSearch}
              onChange={e => setAnimeSearch(e.target.value)}
            />
            <Button className='btn btn-dark' disabled={animeSearch.length === 0}>
              <FaSearch />
            </Button>
          </Form>
          <Nav.Link href="#pricing" className='mt-1'>Sign up</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
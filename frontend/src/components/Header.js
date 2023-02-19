import React from 'react'
import { Nav,Navbar,Container } from "react-bootstrap";


const Header = () => {
  return (
    <header> <Navbar bg="light" expand="lg" collapseOnSelect>
    <Container>
      <Navbar.Brand href="/">GoShop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <Nav.Link href="/search">
              <i className = 'fas fa-search'></i>
            Search
          </Nav.Link>
            <Nav.Link href="/login">Login
            <i className = 'fas fa-shopping-bag' ></i>
            {/* <i className="fa-sharp fa-regular fa-bag-shopping"></i> */}
            </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></header>
  )
}

export default Header
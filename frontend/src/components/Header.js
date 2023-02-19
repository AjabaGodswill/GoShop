/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Nav, Navbar, Container } from "react-bootstrap";
// import logo from '../../public/images/logo.png'; 


const Header = () => {
  return (
    <header> <Navbar bg="light" expand="lg" collapseOnSelect>
    <Container>
        <Navbar.Brand href="/">
          GoShop
        {/* <img src={logo}  alt= 'logo'/> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
          <Nav.Link href="/">
             Home
          </Nav.Link>
          <Nav.Link href="/shop">
            Shop
          </Nav.Link>
          <Nav.Link href="/collections">
             Collections
          </Nav.Link>
          <Nav.Link href="/order-tracking">
             Order Tracking
          </Nav.Link>
          <Nav.Link href="/blog">
             Blog
          </Nav.Link>
        </Nav>
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
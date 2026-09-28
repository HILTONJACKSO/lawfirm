"use client";

import Link from "next/link";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";

const Navigation = () => {
  return (
    <Navbar expand="xl" className="bg-navy py-3 sticky-top border-bottom border-white border-opacity-10 shadow-lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} href="/" className="fw-bold fs-5 letter-spacing-wide d-flex align-items-center gap-3">
          <div className="bg-white rounded-circle p-1 d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
            <img 
              src="/logo-century.jpg" 
              alt="The Century Law Offices" 
              className="img-fluid rounded-circle"
              style={{ objectFit: 'contain', maxHeight: '100%' }}
            />
          </div>
          <div className="d-flex flex-column text-uppercase" style={{ lineHeight: '1.1' }}>
            <span className="text-white smaller font-ui letter-spacing-wide">THE CENTURY</span>
            <span className="text-gold smaller font-ui letter-spacing-wide opacity-75">LAW OFFICES</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto mt-2 mt-xl-0 gap-xl-4 align-items-xl-center">
            <Nav.Link as={Link} href="/" className="text-white text-uppercase smaller fw-bold letter-spacing-wide opacity-75 hover-opacity-100 px-3">Home</Nav.Link>
            
            <NavDropdown title="THE FIRM" id="firm-dropdown" className="text-uppercase smaller fw-bold letter-spacing-wide custom-dropdown">
              <NavDropdown.Item as={Link} href="/about" className="smaller fw-bold text-navy py-2">OUR STORY</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/attorneys" className="smaller fw-bold text-navy py-2">COUNSELORS</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="INTELLIGENCE" id="intel-dropdown" className="text-uppercase smaller fw-bold letter-spacing-wide custom-dropdown">
              <NavDropdown.Item as={Link} href="/practice-areas" className="smaller fw-bold text-navy py-2">EXPERTISE</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/insights" className="smaller fw-bold text-navy py-2">JOURNAL</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/news" className="smaller fw-bold text-navy py-2">STRATEGIC MEDIA</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} href="/contact" className="text-white text-uppercase smaller fw-bold letter-spacing-wide opacity-75 hover-opacity-100 px-3">Contact</Nav.Link>
          </Nav>
          
          <div className="d-flex align-items-center gap-3 ms-xl-4 border-start-xl border-white border-opacity-10 ps-xl-4 py-3 py-xl-0">
            <div className="d-none d-xxl-flex gap-2 smaller fw-bold letter-spacing-wide opacity-50">
               <span className="pointer hover-text-gold">FR</span>
               <span className="text-white opacity-25">|</span>
               <span className="text-gold">EN</span>
            </div>
            <Link href="/book-consultation" className="btn btn-gold rounded-0 px-4 py-2 fw-bold smaller text-uppercase letter-spacing-wide text-decoration-none">
              Consultation
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>

      <style jsx global>{`
        .custom-dropdown .dropdown-toggle {
          color: rgba(255, 255, 255, 0.75) !important;
          background: transparent !important;
          border: none !important;
          padding: 0.5rem 1rem !important;
        }
        .custom-dropdown .dropdown-toggle:after {
          color: #B8974D;
          vertical-align: middle;
        }
        .custom-dropdown .dropdown-menu {
          background-color: #F8F5F0;
          border: 1px solid rgba(4, 11, 22, 0.1);
          border-radius: 0;
          margin-top: 1rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .custom-dropdown .dropdown-item:hover {
          background-color: #040B16;
          color: #B8974D !important;
        }
        .border-start-xl {
          border-left: 1px solid rgba(255, 255, 255, 0.1);
        }
        @media (max-width: 1199px) {
          .border-start-xl { border-left: none; }
          .custom-dropdown .dropdown-menu {
            background-color: transparent;
            border: none;
            box-shadow: none;
            padding-left: 1.5rem;
          }
          .custom-dropdown .dropdown-item {
            color: rgba(255, 255, 255, 0.6) !important;
          }
        }
      `}</style>
    </Navbar>
  );
};

export default Navigation;

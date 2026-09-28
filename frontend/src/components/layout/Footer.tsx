"use client";

import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { Globe, ShieldCheck, Briefcase, Linkedin, Facebook, Twitter } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="footer bg-navy text-white py-5 pt-lg-5">
      <Container className="pt-5">
        <Row className="gy-5">
          <Col lg={5}>
            <div className="mb-4">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="bg-white p-1" style={{ width: '60px' }}>
                  <img src="/logo-century.jpg" alt="Logo" className="img-fluid" />
                </div>
                <h3 className="fw-bold mb-0 fs-4 letter-spacing-wide text-uppercase">
                  <span className="text-gold">THE CENTURY</span> <br /> LAW OFFICES
                </h3>
              </div>
              <p className="opacity-75 pe-lg-5 fs-6 italic text-charcoal-light" style={{ lineHeight: '1.8', maxWidth: '400px' }}>
                One of Liberia’s premier law firms, providing top-tier legal, consultancy, and lobbying services from the heart of downtown Monrovia.
              </p>
            </div>
            <div className="d-flex gap-4 social-icons mt-5">
              <Link href="#" className="text-white opacity-50 hover-text-gold transition-all"><Globe size={20} /></Link>
              <Link href="#" className="text-white opacity-50 hover-text-gold transition-all"><ShieldCheck size={20} /></Link>
              <Link href="#" className="text-white opacity-50 hover-text-gold transition-all"><Briefcase size={20} /></Link>
            </div>
          </Col>
          
          <Col md={6} lg={3} className="ps-lg-5">
            <h5 className="smaller fw-bold letter-spacing-wide text-gold mb-4 uppercase">QUICK LINKS</h5>
            <ul className="list-unstyled">
              <li className="mb-3"><Link href="/privacy" className="text-white text-decoration-none small opacity-75 hover-opacity-100 transition-all">Privacy Policy</Link></li>
              <li className="mb-3"><Link href="/terms" className="text-white text-decoration-none small opacity-75 hover-opacity-100 transition-all">Terms of Service</Link></li>
              <li className="mb-3"><Link href="/disclosures" className="text-white text-decoration-none small opacity-75 hover-opacity-100 transition-all">Disclosures</Link></li>
              <li className="mb-3"><Link href="/careers" className="text-white text-decoration-none small opacity-75 hover-opacity-100 transition-all">Careers</Link></li>
            </ul>
          </Col>
          
          <Col md={6} lg={4}>
            <h5 className="smaller fw-bold letter-spacing-wide text-gold mb-4 uppercase">CHAMBERS</h5>
            <div className="opacity-75 small italic mb-4" style={{ lineHeight: '1.8' }}>
               Ashmun Street<br />
               Downtown Commercial District<br />
               Monrovia, Liberia
            </div>
          </Col>
        </Row>
        
        <hr className="my-5 opacity-10 border-white" />
        
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 pb-4">
          <p className="tiny mb-0 opacity-25 letter-spacing-wide uppercase">
            &copy; {new Date().getFullYear()} THE CENTURY LAW OFFICES. ALL RIGHTS RESERVED. MONROVIA, LIBERIA.
          </p>
          <div className="d-flex gap-4 tiny opacity-25 letter-spacing-wide uppercase">
            <span>LICENSED TO PRACTICE IN THE REPUBLIC OF LIBERIA</span>
          </div>
        </div>
      </Container>

      <style jsx>{`
        .bg-navy { background-color: #040B16 !important; }
        .text-gold { color: #B8974D !important; }
        .smaller { font-size: 0.65rem; }
        .tiny { font-size: 0.55rem; }
        .letter-spacing-wide { letter-spacing: 0.15em; }
        .uppercase { text-transform: uppercase; }
        .italic { font-style: italic; }
        .text-charcoal-light { color: #E5E5E5; }
        
        .footer h5 {
           font-size: 0.7rem;
           font-weight: 800;
        }
        
        .social-icons a:hover {
           transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;

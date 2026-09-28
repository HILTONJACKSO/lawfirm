"use client";

import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowRight, Book, Hammer, Envelope } from "react-bootstrap-icons";

export default function NotFound() {
  return (
    <div className="bg-cream min-vh-100 d-flex flex-column">
      {/* Main 404 Content */}
      <section className="flex-grow-1 d-flex align-items-center py-5 position-relative overflow-hidden">
        {/* Background Scales Watermark */}
        <div className="absolute-full d-flex align-items-center justify-content-center opacity-05 pointer-events-none">
           <svg width="600" height="600" viewBox="0 0 24 24" fill="none" stroke="#040B16" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 16c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/>
              <path d="M20 16c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/>
              <path d="M12 3v13"/>
              <path d="M4 16c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/>
              <path d="M8 16c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/>
              <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2"/>
              <path d="M12 3c0 2.2 4 4 4 6"/>
              <path d="M12 3c0 2.2-4 4-4 6"/>
           </svg>
        </div>

        <Container className="text-center position-relative z-index-2 py-5">
          <span className="text-gold fw-bold letter-spacing-wide smaller d-block mb-4 uppercase">ERROR CODE 404</span>
          <h1 className="display-1 fw-bold text-navy mb-4 serif" style={{ lineHeight: '1.2' }}>
            Beyond Our <br /><i className="italic fw-normal">Jurisdiction.</i>
          </h1>
          <p className="lead text-charcoal opacity-75 fs-5 mb-5 mx-auto" style={{ maxWidth: '600px', lineHeight: '1.6' }}>
             The Page You Seek Is Beyond Our Current Jurisdiction. It appears the path you followed is no longer legally binding.
          </p>
          
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 mt-5">
            <Link href="/" className="btn btn-gold px-5 py-3 rounded-0 fw-bold letter-spacing-wide border-0 shadow-sm text-decoration-none text-white">
               RETURN TO HOME
            </Link>
            <Link href="/attorneys" className="text-navy fw-bold smaller letter-spacing-wide text-decoration-none border-bottom border-gold border-2 pb-1 hover-text-gold transition-all">
               VIEW ATTORNEY REGISTRY
            </Link>
          </div>
        </Container>
      </section>

      {/* Secondary Navigation Grid */}
      <section className="bg-white border-top border-stone py-5">
        <Container>
          <Row className="gy-4">
            <Col lg={4}>
               <div className="p-4 p-xl-5 h-100 border border-stone-light">
                  <Hammer size={24} className="text-gold mb-4" />
                  <h3 className="h4 fw-bold text-navy mb-3 serif">Practice Areas</h3>
                  <p className="smaller text-charcoal opacity-75 mb-4" style={{ lineHeight: '1.6' }}>
                     Explore our specialized legal services in maritime, corporate, and civil law.
                  </p>
                  <Link href="/practice-areas" className="text-gold fw-bold tiny letter-spacing-wide text-decoration-none d-flex align-items-center gap-2 hover-text-navy">
                     VIEW LIST <ArrowRight />
                  </Link>
               </div>
            </Col>
            <Col lg={4}>
               <div className="p-4 p-xl-5 h-100 border border-stone-light">
                  <Book size={24} className="text-gold mb-4" />
                  <h3 className="h4 fw-bold text-navy mb-3 serif">Legal Insights</h3>
                  <p className="smaller text-charcoal opacity-75 mb-4" style={{ lineHeight: '1.6' }}>
                     Access high-level briefs and analysis on the evolving Liberian legal landscape.
                  </p>
                  <Link href="/insights" className="text-gold fw-bold tiny letter-spacing-wide text-decoration-none d-flex align-items-center gap-2 hover-text-navy">
                     READ MORE <ArrowRight />
                  </Link>
               </div>
            </Col>
            <Col lg={4}>
               <div className="p-4 p-xl-5 h-100 bg-stone bg-opacity-10 border border-stone-light shadow-sm">
                  <Envelope size={24} className="text-gold mb-4" />
                  <h3 className="h4 fw-bold text-navy mb-3 serif">Contact Us</h3>
                  <p className="smaller text-charcoal opacity-75 mb-4" style={{ lineHeight: '1.6' }}>
                     Visit our central offices or schedule a consultation with our senior partners.
                  </p>
                  <Link href="/contact" className="text-gold fw-bold tiny letter-spacing-wide text-decoration-none d-flex align-items-center gap-2 hover-text-navy">
                     GET IN TOUCH <ArrowRight />
                  </Link>
               </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Specialized Error Footer */}
      <footer className="py-5 bg-navy text-white text-center border-top border-gold border-opacity-10">
         <Container className="py-4">
            <h2 className="h4 fw-bold mb-4 serif letter-spacing-wide uppercase">CENTURY LAW FIRM</h2>
            <div className="d-flex justify-content-center gap-4 mb-5 smaller opacity-50 fw-bold letter-spacing-wide">
               <Link href="/privacy" className="text-white text-decoration-none hover-text-gold">Privacy Policy</Link>
               <span className="opacity-25">|</span>
               <Link href="/terms" className="text-white text-decoration-none hover-text-gold">Terms of Service</Link>
               <span className="opacity-25">|</span>
               <Link href="/legal" className="text-white text-decoration-none hover-text-gold">Legal Notice</Link>
            </div>
            <div className="text-gold smaller fw-bold letter-spacing-wide mb-4 uppercase">
               EXCELLENCE &bull; INTEGRITY &bull; JUSTICE
            </div>
            <p className="tiny opacity-25 letter-spacing-wide uppercase mb-0">
               &copy; {new Date().getFullYear()} Century Law Firm. All Rights Reserved.
            </p>
         </Container>
      </footer>

      <style jsx>{`
        .bg-cream { background-color: #F8F5F0 !important; }
        .bg-navy { background-color: #040B16 !important; }
        .text-navy { color: #040B16 !important; }
        .text-gold { color: #B8974D !important; }
        .bg-stone { background-color: #E5E0D8 !important; }
        .border-stone { border-color: #E5E0D8 !important; }
        .border-stone-light { border-color: rgba(229, 224, 216, 0.5) !important; }
        .text-charcoal { color: #2D2D2D !important; }
        
        .smaller { font-size: 0.65rem; }
        .tiny { font-size: 0.55rem; }
        .letter-spacing-wide { letter-spacing: 0.15em; }
        .serif { font-family: 'Playfair Display', serif; }
        .italic { font-style: italic; }
        .uppercase { text-transform: uppercase; }
        .absolute-full { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        .z-index-2 { z-index: 2; }
        .opacity-05 { opacity: 0.05 !important; }
        .pointer-events-none { pointer-events: none; }
        .transition-all { transition: all 0.3s ease; }
        
        .btn-gold {
           background-color: #B8974D !important;
           color: #FFFFFF !important;
        }
        .btn-gold:hover {
           background-color: #9A7B36 !important;
        }
        
        @media (max-width: 991px) {
           .display-1 { font-size: 3.5rem; }
        }
      `}</style>
    </div>
  );
}

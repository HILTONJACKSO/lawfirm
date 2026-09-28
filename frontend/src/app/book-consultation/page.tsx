"use client";

import { Container, Row, Col } from "react-bootstrap";
import ConsultationForm from "@/components/consultations/ConsultationForm";

export default function BookConsultationPage() {
  return (
    <div className="bg-cream min-vh-100 pb-5">
      {/* Editorial Header */}
      <div className="py-5 mb-5 mt-4">
        <Container>
          <Row>
            <Col lg={8}>
               <span className="text-gold fw-bold letter-spacing-wide small d-block mb-3 opacity-75">ENGAGEMENT GATEWAY</span>
               <h1 className="display-3 fw-bold text-navy mb-4" style={{ lineHeight: '1.1' }}>
                  Schedule a Strategic <br />Consultation
               </h1>
               <p className="lead opacity-75 text-charcoal fs-5" style={{ maxWidth: '700px' }}>
                  Select your legal expert, practice area, and preferred time to begin your engagement with Century Law. Our senior partners are available for both domestic and international counsel.
               </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <ConsultationForm />
      </Container>
      
      {/* Editorial Footer */}
      <footer className="bg-navy text-white py-5 mt-5 border-top border-gold border-opacity-25">
         <Container>
            <Row className="align-items-center">
               <Col lg={6}>
                  <h3 className="h4 fw-bold">Century Law</h3>
                  <p className="small opacity-50 mb-0 mt-2">Providing high-level legal insights and strategic counsel for the modern era.</p>
               </Col>
               <Col lg={6} className="text-lg-end mt-4 mt-lg-0">
                  <div className="d-flex gap-4 justify-content-lg-end small opacity-50 fw-bold letter-spacing-wide">
                     <span>LEGAL NOTICE</span>
                     <span>PRIVACY POLICY</span>
                     <span>CONTACT US</span>
                  </div>
                  <p className="smaller opacity-25 mt-3 mb-0">© 2024 CENTURY LAW. ALL RIGHTS RESERVED.</p>
               </Col>
            </Row>
         </Container>
      </footer>

      <style jsx global>{`
        .bg-cream { background-color: #F8F5F0 !important; }
        .text-navy { color: #040B16 !important; }
        .text-gold { color: #B8974D !important; }
        .smaller { font-size: 0.65rem; }
      `}</style>
    </div>
  );
}

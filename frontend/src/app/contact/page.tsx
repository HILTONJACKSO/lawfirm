"use client";

import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { 
  GeoAltFill, 
  TelephoneFill, 
  EnvelopeFill, 
  ClockFill, 
  Whatsapp, 
  ExclamationTriangleFill,
  ArrowRight
} from "react-bootstrap-icons";

export default function ContactPage() {
  const [urgency, setUrgency] = useState("Standard");

  return (
    <div className="bg-cream min-vh-100">
      {/* Cinematic Hero */}
      <div className="contact-hero d-flex align-items-center position-relative overflow-hidden">
        <div className="absolute-full" style={{ 
          background: 'linear-gradient(90deg, #040B16 45%, rgba(4, 11, 22, 0.4) 100%)',
          zIndex: 1,
          backdropFilter: 'blur(2px)'
        }}></div>
        <img 
          src="/contact-hero.jpg" 
          alt="Century Law Legal Team" 
          className="absolute-full object-fit-cover scale-up-slow" 
        />
        <Container className="position-relative py-5 mt-5" style={{ zIndex: 10 }}>
           <Row>
              <Col lg={7}>
                 <span className="text-gold fw-bold letter-spacing-wide small d-block mb-3 opacity-100" style={{ color: '#B8974D !important' }}>ESTABLISHING EXCELLENCE</span>
                 <h1 className="display-2 fw-bold mb-4" style={{ color: '#ffffff', lineHeight: '1.1', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                    Connect with <br />Century Law
                 </h1>
                 <p className="lead text-white fs-5 pb-5" style={{ maxWidth: '600px', opacity: 1 }}>
                    A distinguished legal partnership serving the Republic of Liberia and international clients. Our counsel is defined by precision, integrity, and an unyielding commitment to your success.
                 </p>
              </Col>
           </Row>
        </Container>
      </div>

      {/* Main Content Section */}
      <Container className="py-5 my-lg-5">
        <Row className="gy-5">
          {/* Left Column: Form */}
          <Col lg={7}>
            <div className="pe-lg-5">
               <h2 className="display-6 fw-bold text-navy mb-3">Request a Strategic Consultation</h2>
               <p className="text-charcoal opacity-75 mb-5 pb-2">
                 Provide your details below, and a member of our senior legal team will contact you within one business day.
               </p>

               <Form>
                  <Row className="gy-4">
                     <Col md={6}>
                        <Form.Group>
                           <Form.Label className="luxury-label">FULL NAME</Form.Label>
                           <Form.Control type="text" placeholder="John Doe" className="form-control-luxury" />
                        </Form.Group>
                     </Col>
                     <Col md={6}>
                        <Form.Group>
                           <Form.Label className="luxury-label">EMAIL ADDRESS</Form.Label>
                           <Form.Control type="email" placeholder="email@example.com" className="form-control-luxury" />
                        </Form.Group>
                     </Col>
                     <Col md={6}>
                        <Form.Group>
                           <Form.Label className="luxury-label">PHONE NUMBER</Form.Label>
                           <Form.Control type="text" placeholder="+231 ..." className="form-control-luxury" />
                        </Form.Group>
                     </Col>
                     <Col md={6}>
                        <Form.Group>
                           <Form.Label className="luxury-label">PRACTICE AREA</Form.Label>
                           <Form.Select className="form-control-luxury">
                              <option>Corporate & Commercial Law</option>
                              <option>Maritime & Shipping Law</option>
                              <option>Mining & Natural Resources</option>
                              <option>Litigation & Dispute Resolution</option>
                           </Form.Select>
                        </Form.Group>
                     </Col>
                     
                     <Col md={6}>
                        <Form.Group className="mt-2">
                          <Form.Label className="luxury-label mb-3">URGENCY LEVEL</Form.Label>
                          <div className="d-flex gap-4">
                             <Form.Check 
                                type="radio" 
                                id="urgency-std"
                                name="urgency"
                                label="Standard" 
                                className="smaller fw-bold letter-spacing-wide"
                                checked={urgency === "Standard"}
                                onChange={() => setUrgency("Standard")}
                             />
                             <Form.Check 
                                type="radio" 
                                id="urgency-em"
                                name="urgency"
                                label="Emergency" 
                                className="smaller fw-bold letter-spacing-wide text-danger"
                                checked={urgency === "Emergency"}
                                onChange={() => setUrgency("Emergency")}
                             />
                          </div>
                        </Form.Group>
                     </Col>
                     
                     <Col md={6}>
                        <Form.Group className="mt-2">
                           <Form.Label className="luxury-label mb-2">PREFERRED CONTACT</Form.Label>
                           <Form.Select className="form-control-luxury py-2">
                              <option>Email</option>
                              <option>Phone</option>
                              <option>WhatsApp</option>
                           </Form.Select>
                        </Form.Group>
                     </Col>

                     <Col md={12}>
                        <Form.Group className="mt-2">
                           <Form.Label className="luxury-label">CASE DESCRIPTION</Form.Label>
                           <Form.Control as="textarea" rows={3} placeholder="Please provide a brief summary of your legal matter..." className="form-control-luxury" />
                        </Form.Group>
                     </Col>
                     
                     <Col md={12} className="mt-5">
                        <Button className="btn-gold px-5 py-3 rounded-0 fw-bold letter-spacing-wide w-100 w-md-auto">
                           SCHEDULE A STRATEGIC CONSULTATION
                        </Button>
                     </Col>
                  </Row>
               </Form>
            </div>
          </Col>

          {/* Right Column: Info Cards */}
          <Col lg={5}>
            <div className="ps-lg-4">
               {/* Chambers Card */}
               <Card className="bg-navy border-0 rounded-0 p-4 p-lg-5 text-white mb-5 position-relative overflow-hidden shadow-lg">
                  <div className="position-relative z-index-2">
                     <h3 className="h3 fw-bold mb-5 border-bottom border-gold border-opacity-25 pb-3">Monrovia Chambers</h3>
                     
                     <div className="d-flex gap-4 mb-4 pb-2 align-items-start">
                        <GeoAltFill size={20} className="text-gold mt-1" />
                        <div>
                           <div className="smaller fw-bold opacity-50 letter-spacing-wide mb-1 uppercase">LOCATION</div>
                           <p className="mb-0 fs-6">Ashmun Street, Monrovia,<br />Republic of Liberia</p>
                        </div>
                     </div>

                     <div className="d-flex gap-4 mb-4 pb-2 align-items-start">
                        <TelephoneFill size={18} className="text-gold mt-1" />
                        <div>
                           <div className="smaller fw-bold opacity-50 letter-spacing-wide mb-1 uppercase">PRIMARY LINE</div>
                           <p className="mb-0 fs-5 fw-bold">+231 (0) 770 000 001</p>
                        </div>
                     </div>

                     <div className="d-flex gap-4 mb-4 pb-2 align-items-start">
                        <EnvelopeFill size={18} className="text-gold mt-1" />
                        <div>
                           <div className="smaller fw-bold opacity-50 letter-spacing-wide mb-1 uppercase">EMAIL</div>
                           <p className="mb-0 fs-6">contact@centurylaw.com</p>
                        </div>
                     </div>

                     <div className="d-flex gap-4 align-items-start pb-4">
                        <ClockFill size={18} className="text-gold mt-1" />
                        <div>
                           <div className="smaller fw-bold opacity-50 letter-spacing-wide mb-1 uppercase">OFFICE HOURS</div>
                           <p className="mb-0 fs-6">Mon-Fri: 8:00 AM — 6:00 PM</p>
                        </div>
                     </div>
                  </div>

                  {/* WhatsApp Floating Button Overlay (Visual only) */}
                  <div className="whatsapp-badge bg-success p-3 rounded-circle text-white shadow-lg pointer">
                     <Whatsapp size={30} />
                  </div>
               </Card>

               {/* Emergency Card */}
               <Card className="bg-stone border-start border-danger border-5 rounded-0 p-4 shadow-sm">
                  <div className="d-flex gap-4 align-items-center mb-3">
                     <ExclamationTriangleFill size={28} className="text-danger" />
                     <h4 className="h5 fw-bold mb-0 text-navy uppercase letter-spacing-wide">Emergency Legal Counsel</h4>
                  </div>
                  <p className="smaller opacity-75 mb-3">
                     For urgent matters requiring immediate intervention after hours, please use our 24/7 priority line.
                  </p>
                  <p className="h4 fw-bold text-navy mb-0 letter-spacing-wide underline-gold">+231 (0) 770 000 001</p>
               </Card>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Styled Grayscale Map */}
      <div className="map-section position-relative mt-5">
         <div className="grayscale-map" style={{ height: '450px', background: '#ccc' }}>
            {/* Using a placeholder gradient to simulate the grayscale map from design */}
            <div className="absolute-full d-flex align-items-center justify-content-center" style={{ 
               background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/firm-team.jpg") center/cover grayscale(100%)',
               filter: 'contrast(1.2) brightness(0.8)'
            }}>
               <div className="bg-navy px-4 py-3 text-white d-flex align-items-center gap-3 shadow-lg rounded-1 pointer highlight-hover">
                  <GeoAltFill className="text-gold" />
                  <span className="smaller fw-bold letter-spacing-wide text-uppercase">CENTURY LAW CHAMBERS</span>
               </div>
            </div>
         </div>
      </div>

      <style jsx>{`
        .bg-cream { background-color: #F8F5F0 !important; }
        .bg-navy { background-color: #040B16 !important; }
        .bg-stone { background-color: #F1EFE9 !important; }
        .text-navy { color: #040B16 !important; }
        .text-gold { color: #B8974D !important; }
        .smaller { font-size: 0.65rem; }
        .letter-spacing-wide { letter-spacing: 0.1em; }
        .uppercase { text-transform: uppercase; }
        
        .contact-hero { min-height: 70vh; }
        .absolute-full { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        .z-index-1 { z-index: 1; }
        .z-index-2 { z-index: 2; }
        
        .luxury-label {
           font-size: 0.65rem;
           font-weight: 800;
           letter-spacing: 0.15em;
           color: #040B16;
           opacity: 0.5;
           margin-bottom: 0.5rem;
           display: block;
        }

        .form-control-luxury {
          background-color: #F1EFE9 !important;
          border: none;
          border-radius: 0;
          padding: 1.25rem 1rem;
          color: #040B16;
          font-size: 0.9rem;
          &:focus {
            background-color: white !important;
            box-shadow: 0 4px 15px rgba(184, 151, 77, 0.1);
          }
        }
        
        .whatsapp-badge {
           position: absolute;
           bottom: 30px;
           right: 30px;
           z-index: 10;
        }
        
        .underline-gold {
           text-decoration: underline;
           text-decoration-color: #B8974D;
           text-underline-offset: 8px;
           text-decoration-thickness: 2px;
        }
        
        .highlight-hover:hover {
           background-color: #B8974D !important;
           transform: translateY(-5px);
           transition: all 0.3s ease;
        }
        
        .scale-up-slow {
           transition: transform 20s linear;
           animation: slowZoom 20s infinite alternate;
        }
        
        @keyframes slowZoom {
           from { transform: scale(1); }
           to { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}

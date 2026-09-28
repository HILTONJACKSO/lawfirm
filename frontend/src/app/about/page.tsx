"use client";

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { 
  TrophyFill, 
  StarFill, 
  AwardFill, 
  GlobeCentralSouthAsia,
  ArrowUpRight,
  Quote
} from "react-bootstrap-icons";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutPage() {
  useScrollReveal();
  return (
    <div className="bg-cream min-vh-100 pb-5">
      {/* Legacy Header */}
      <div className="py-5 mb-5 mt-4">
        <Container>
          <Row className="align-items-end">
            <Col lg={7} className="reveal">
               <span className="text-gold fw-bold letter-spacing-wide small d-block mb-3 opacity-75 uppercase">OUR LEGACY</span>
               <h1 className="display-2 fw-bold text-navy mb-0" style={{ lineHeight: '1.05' }}>
                  Defining the Legal <br />Landscape of Liberia <br />Since 2000.
               </h1>
            </Col>
            <Col lg={4} className="ms-auto mt-4 mt-lg-0 reveal" style={{ transitionDelay: '0.3s' }}>
               <div className="ps-lg-4 border-start border-gold border-opacity-50">
                  <p className="fs-5 text-charcoal opacity-75 italic mb-0" style={{ lineHeight: '1.5' }}>
                     "Professionalism and client satisfaction converge to give prompt answers and satisfactory solutions."
                  </p>
               </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* The Founding Story */}
      <section className="py-5 mb-5">
        <Container>
          <Row className="gy-5 align-items-center">
            <Col lg={6}>
              <div className="position-relative overflow-hidden">
                <img 
                  src="/hero-team.jpg" 
                  alt="Century Law Official Team" 
                  className="img-fluid w-100 object-fit-cover grayscale-hover transition-all" 
                  style={{ height: '550px' }}
                />
                <div className="badge-30 bg-gold text-white p-4 position-absolute bottom-0 left-0 shadow-lg d-flex flex-column align-items-start">
                   <span className="display-4 fw-bold mb-0">24</span>
                   <span className="smaller fw-bold letter-spacing-wide text-uppercase">YEARS OF EXCELLENCE</span>
                </div>
              </div>
            </Col>
            <Col lg={5} className="ms-auto reveal">
              <h2 className="display-5 fw-bold text-navy mb-4">Meet the Firm</h2>
              <div className="fs-5 text-charcoal opacity-75" style={{ lineHeight: '1.7' }}>
                <p className="mb-4">
                  The Century Law Offices is one of Liberia’s premier law firms with modern offices on Ashmun Street in the heart of the downtown commercial district of Monrovia, providing top-notch legal, consultancy, and lobbying services.
                </p>
                <p className="mb-5">
                  Headed by Cllr. Johnson, a former Minister of Justice and Attorney General of Liberia and a retired Law Professor, our firm is defined by a supporting cast of top-notched experienced lawyers with deep roots in both government and the private sector.
                </p>
                <div className="d-flex align-items-center gap-2 text-gold fw-bold pointer underline-hover small letter-spacing-wide">
                   OUR MISSION <ArrowUpRight />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-5 mb-5">
        <Container>
           <Row className="gx-4 gy-4">
              <Col md={4} className="reveal">
                 <Card className="bg-white border-0 rounded-0 p-5 h-100 shadow-sm border-start border-gold border-3">
                    <TrophyFill size={24} className="text-gold mb-4" />
                    <h3 className="h4 fw-bold text-navy mb-3">Mission</h3>
                    <p className="small text-charcoal opacity-75 mb-0">
                       To deliver exceptional legal solutions that protect our clients' interests and contribute to the advancement of justice and commercial prosperity in Liberia.
                    </p>
                 </Card>
              </Col>
              <Col md={4} className="reveal reveal-stagger-2">
                 <Card className="bg-navy border-0 rounded-0 p-5 h-100 shadow-lg text-white">
                    <AwardFill size={24} className="text-gold mb-4" />
                    <h3 className="h4 fw-bold mb-3">Vision</h3>
                    <p className="small opacity-75 mb-0">
                       To be the preeminent legal authority in West Africa, recognized for our intellectual rigor, ethical standards, and transformative impact on corporate law.
                    </p>
                 </Card>
              </Col>
              <Col md={4} className="reveal reveal-stagger-3">
                 <Card className="bg-white border-0 rounded-0 p-5 h-100 shadow-sm border-start border-gold border-3">
                    <StarFill size={24} className="text-gold mb-4" />
                    <h3 className="h4 fw-bold text-navy mb-3">Core Values</h3>
                    <ul className="list-unstyled smaller fw-bold letter-spacing-wide text-charcoal opacity-75 mb-0 d-flex flex-column gap-2 mt-2">
                       <li>• UNCOMPROMISING INTEGRITY</li>
                       <li>• TECHNICAL PRECISION</li>
                       <li>• STRATEGIC INNOVATION</li>
                    </ul>
                 </Card>
              </Col>
           </Row>
        </Container>
      </section>

      {/* Founding Partners */}
      <section className="py-5 mb-5 bg-white bg-opacity-50">
         <Container className="py-5">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5">
               <h2 className="display-4 fw-bold text-navy mb-0">Founding Partners</h2>
               <p className="smaller text-charcoal opacity-50 fw-bold letter-spacing-wide text-md-end mt-3 mt-md-0" style={{ maxWidth: '300px' }}>
                  Leading with decades of collective wisdom and a shared dedication to the strength of the Liberian law.
               </p>
            </div>
            <Row className="gy-5">
               <Col md={6}>
                  <div className="partner-card pointer group">
                     <div className="overflow-hidden mb-4">
                        <img src="/counsel-1.jpg" alt="Prof. Johnson" className="img-fluid w-100 grayscale transition-all scale-hover" style={{ height: '600px', objectFit: 'cover' }} />
                     </div>
                     <div className="d-flex justify-content-between align-items-center border-bottom border-navy border-opacity-10 pb-3">
                        <div>
                           <h3 className="h4 fw-bold text-navy mb-1">Prof. Lavela Koboi Johnson, Sr</h3>
                           <span className="smaller text-gold fw-bold letter-spacing-wide uppercase">FOUNDER & SENIOR PARTNER</span>
                        </div>
                        <ArrowUpRight className="text-gold opacity-50 group-hover-visible" size={20} />
                     </div>
                  </div>
               </Col>
               <Col md={6}>
                  <div className="partner-card pointer group">
                     <div className="overflow-hidden mb-4">
                        <img src="/counsel-2.jpg" alt="Atty. Dunah" className="img-fluid w-100 grayscale transition-all scale-hover" style={{ height: '600px', objectFit: 'cover' }} />
                     </div>
                     <div className="d-flex justify-content-between align-items-center border-bottom border-navy border-opacity-10 pb-3">
                        <div>
                           <h3 className="h4 fw-bold text-navy mb-1">Attorney Worlea – Saywah Dunah</h3>
                           <span className="smaller text-gold fw-bold letter-spacing-wide uppercase">PARTNER</span>
                        </div>
                        <ArrowUpRight className="text-gold opacity-50 group-hover-visible" size={20} />
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>

      {/* Awards & Affiliations */}
      <section className="py-4 bg-navy text-white text-center border-top border-gold border-opacity-25">
         <Container>
            <span className="smaller fw-bold letter-spacing-wide text-gold opacity-50 d-block mb-4 uppercase">AFFILIATIONS & RECOGNITIONS</span>
            <Row className="align-items-center gy-4 pb-3">
               <Col xs={6} md={3}>
                  <div className="award-item">
                     <TrophyFill className="text-gold mb-2 opacity-75" size={24} />
                     <div className="smaller fw-bold letter-spacing-wide d-block">LAW FIRM OF THE YEAR</div>
                     <small className="opacity-25 uppercase" style={{ fontSize: '0.5rem' }}>LIBERIAN BAR ASSOC. 2023</small>
                  </div>
               </Col>
               <Col xs={6} md={3}>
                  <div className="award-item">
                     <AwardFill className="text-gold mb-2 opacity-75" size={24} />
                     <div className="smaller fw-bold letter-spacing-wide d-block">ELITE TIER 1</div>
                     <small className="opacity-25 uppercase" style={{ fontSize: '0.5rem' }}>LEGAL 500 EMEA</small>
                  </div>
               </Col>
               <Col xs={6} md={3}>
                  <div className="award-item">
                     <AwardFill className="text-gold mb-2 opacity-75" size={24} />
                     <div className="smaller fw-bold letter-spacing-wide d-block">PRO BONO AWARD</div>
                     <small className="opacity-25 uppercase" style={{ fontSize: '0.5rem' }}>CHAMBERS & PARTNERS</small>
                  </div>
               </Col>
               <Col xs={6} md={3}>
                  <div className="award-item">
                     <GlobeCentralSouthAsia className="text-gold mb-2 opacity-75" size={24} />
                     <div className="smaller fw-bold letter-spacing-wide d-block">IBA MEMBER</div>
                     <small className="opacity-25 uppercase" style={{ fontSize: '0.5rem' }}>INT'L BAR ASSOCIATION</small>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>

      {/* Advocacy Section */}
      <section className="py-5 my-5">
         <Container>
            <Row className="gy-5 align-items-center">
               <Col lg={5}>
                  <span className="text-gold fw-bold letter-spacing-wide smaller d-block mb-3 uppercase">OUR COMMITMENT</span>
                  <h2 className="display-5 fw-bold text-navy mb-4">Advocacy Beyond the Courtroom</h2>
                  <p className="text-charcoal opacity-75 fs-5 mb-4" style={{ lineHeight: '1.7' }}>
                     We believe that a prestigious firm carries a prestigious responsibility. Through our Pro Bono Initiatives, we provide legal assistance to underserved communities and support local non-profits in their mission to build a more equitable Liberia.
                  </p>
                  <div className="d-flex flex-column gap-2 small fw-bold letter-spacing-wide text-navy mt-4">
                     <div className="d-flex align-items-center gap-3">
                        <div className="bg-gold" style={{ width: '20px', height: '1px' }}></div>
                        LEGAL AID CLINICS
                     </div>
                     <div className="d-flex align-items-center gap-3">
                        <div className="bg-gold" style={{ width: '20px', height: '1px' }}></div>
                        YOUTH MENTORSHIP PROGRAMS
                     </div>
                  </div>
               </Col>
               <Col lg={6} className="ms-auto">
                  <div className="d-flex gap-3 h-100 align-items-stretch">
                     <img src="/images/firm-team.jpg" alt="Team handshake" className="img-fluid w-50 grayscale object-fit-cover" style={{ height: '400px' }} />
                     <img src="/hero_law_office_dark.png" alt="Signing" className="img-fluid w-50 grayscale object-fit-cover" style={{ height: '400px', filter: 'brightness(0.5)' }} />
                  </div>
               </Col>
            </Row>
         </Container>
      </section>

      {/* Liberian Judiciary Overview */}
      <section className="py-5 bg-white">
         <Container className="py-lg-5">
            <Row className="gy-5 align-items-center">
               <Col lg={7}>
                  <span className="text-gold fw-bold letter-spacing-wide smaller d-block mb-3 uppercase">EDUCATIONAL CONTEXT</span>
                  <h2 className="display-4 fw-bold text-navy mb-4 serif">The Liberian Judiciary: <br />An Architectural Overview</h2>
                  <div className="fs-5 text-charcoal opacity-75" style={{ lineHeight: '1.7' }}>
                     <p className="mb-4">
                        The Liberian Judiciary is headed by the Supreme Court, comprised of five Justices appointed for life until retirement at age seventy. Below the Supreme Court, the architecture is divided across fifteen political subdivisions, each hosting a Circuit Court as the highest subordinate level.
                     </p>
                     <p className="mb-4">
                        Distinctly, Montserrado County—housing the capital city of Monrovia—operates a specialized system of concurrent criminal and civil law courts. In response to modern economic growth, the Legislature established the <strong>Commercial Court</strong>, featuring a three-judge panel specifically for business disputes.
                     </p>
                     <div className="p-4 bg-cream border border-stone mt-4">
                        <ul className="list-unstyled smaller fw-bold letter-spacing-wide text-navy d-flex flex-wrap gap-4 mb-0 uppercase">
                           <li>• SUPREME COURT</li>
                           <li>• CIRCUIT COURTS</li>
                           <li>• COMMERCIAL COURT</li>
                           <li>• MAGISTERIAL COURTS</li>
                        </ul>
                     </div>
                  </div>
               </Col>
               <Col lg={4} className="ms-auto">
                  <Card className="bg-navy text-white rounded-0 p-5 border-0 shadow-lg">
                     <h4 className="h3 fw-bold mb-4 text-gold serif">Jurisdiction</h4>
                     <p className="opacity-75 small italic" style={{ lineHeight: '1.8' }}>
                        "Matters from all circuit level courts transition directly to the Supreme Court, as the Constitution of Liberia does not utilize intermediate appellate tiers below the high court."
                     </p>
                  </Card>
               </Col>
            </Row>
         </Container>
      </section>

      {/* Our Local Presence Aesthetic Grid */}
      <section className="py-5 bg-cream">
         <Container className="text-center py-5">
            <h2 className="display-4 fw-bold text-navy mb-5 pb-3">Our Local Presence</h2>
            <Row className="gx-3 gy-3">
               <Col md={4}>
                  <div className="aesthetic-box overflow-hidden" style={{ height: '450px' }}>
                     <img src="/hero_law_office_dark.png" alt="Office View" className="absolute-full object-fit-cover grayscale transition-all scale-hover" />
                  </div>
               </Col>
               <Col md={4}>
                  <div className="aesthetic-box overflow-hidden" style={{ height: '450px' }}>
                     <img src="/images/firm-team.jpg" alt="Meeting" className="absolute-full object-fit-cover grayscale transition-all scale-hover" />
                  </div>
               </Col>
               <Col md={4}>
                  <div className="aesthetic-box overflow-hidden" style={{ height: '450px' }}>
                     <img src="/attorney-3.png" alt="Detail" className="absolute-full object-fit-cover grayscale transition-all scale-hover" style={{ filter: 'brightness(0.7) grayscale(100%)' }} />
                  </div>
               </Col>
            </Row>
         </Container>
      </section>

      <style jsx>{`
        .bg-cream { background-color: #F8F5F0 !important; }
        .bg-navy { background-color: #040B16 !important; }
        .text-navy { color: #040B16 !important; }
        .text-gold { color: #B8974D !important; }
        .smaller { font-size: 0.65rem; }
        .letter-spacing-wide { letter-spacing: 0.15em; }
        .uppercase { text-transform: uppercase; }
        .italic { font-style: italic; }
        
        .badge-30 { width: 140px; }
        
        .grayscale { filter: grayscale(100%); }
        .transition-all { transition: all 0.5s ease; }
        .grayscale-hover:hover { filter: grayscale(0%); }
        .scale-hover:hover { transform: scale(1.05); }
        
        .pointer { cursor: pointer; }
        .underline-hover:hover { text-decoration: underline; text-decoration-color: #B8974D; }
        
        .partner-card .group-hover-visible { opacity: 0; transform: translateX(-10px); transition: all 0.3s ease; }
        .partner-card:hover .group-hover-visible { opacity: 1; transform: translateX(0); }
        
        .aesthetic-box { position: relative; }
        .absolute-full { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        
        @media (max-width: 768px) {
           .display-2 { font-size: 3rem; }
           .display-4 { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
}

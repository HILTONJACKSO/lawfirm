"use client";

import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { ArrowRight, Download, Calendar3, Mic, Envelope } from "react-bootstrap-icons";

const NewsPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const newsItems = [
    {
      id: 1,
      category: "FIRM NEWS",
      date: "12 OCT 2024",
      title: "Century Law Expands Regional Presence with New Lagos Strategic Hub",
      excerpt: "Strengthening our commitment to West African integration, the firm announces its latest expansion to facilitate cross-border commercial, litigation and trade law.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      type: "featured",
      linkText: "READ FULL STORY"
    },
    {
      id: 2,
      category: "PRESS RELEASE",
      date: "08 OCT 2024",
      title: "A Landmark Victory in Marine Environmental Law",
      excerpt: "The Supreme Court rules in favor of our clients in the historic Atlantic Coast preservation case.",
      type: "standard",
      linkText: "READ FULL STORY"
    },
    {
      id: 3,
      category: "FIRM NEWS",
      date: "02 OCT 2024",
      title: "Annual Legal Review: West Africa 2024",
      excerpt: "Our senior partners provide a comprehensive outlook on the changing regulatory landscape in the ECOWAS region.",
      type: "standard",
      linkText: "DOWNLOAD REPORT",
      icon: <Download size={14} />
    },
    {
      id: 4,
      category: "PRESS RELEASE",
      date: "28 SEP 2024",
      title: "Century Law Appoints Three New Partners",
      excerpt: "Celebrating professional excellence and the elevation of our top legal talent in corporate and energy sectors.",
      type: "standard",
      linkText: "MEET THE PARTNERS"
    }
  ];

  const mediaRecognition = [
    { logo: "Bloomberg", quote: "Century Law leads the charge in regional trade arbitration." },
    { logo: "BBC AFRICA", quote: "A beacon of legal excellence in the West African corridor.", highlight: true },
    { logo: "FrontPage Africa", quote: "Consistently ranked as the top-tier firm for corporate law.", italic: true },
    { logo: "THE ECONOMIST", quote: "Strategic insights that redefine Liberian jurisprudence." }
  ];

  const events = [
    { date: "24", month: "OCTOBER", type: "WEBINAR", title: "Cross-Border Digital Asset Regulations", desc: "A deep dive into the emerging crypto laws within the ECOWAS region." },
    { date: "05", month: "NOVEMBER", type: "LEGAL CLINIC", title: "Monrovia Pro-Bono Small Business Day", desc: "Empowering local entrepreneurs with foundational legal guidance." },
    { date: "18", month: "NOVEMBER", type: "SEMINAR", title: "Maritime Law & Port Authorities Symposium", desc: "International standards and local implementations for port security." }
  ];

  return (
    <div className="bg-cream min-vh-100">
      {/* Cinematic Hero */}
      <section className="bg-navy py-5 position-relative overflow-hidden" style={{ minHeight: '450px' }}>
         {/* Background Scales Icon Overlay */}
         <div className="absolute-full d-flex align-items-center justify-content-center opacity-05 pointer-events-none">
            <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
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
         
         <Container className="position-relative z-index-2 pt-5 pb-4">
            <span className="text-gold fw-bold letter-spacing-wide smaller d-block mb-3 uppercase">CENTURY LAW UPDATES</span>
            <h1 className="display-2 fw-bold text-white mb-4 serif" style={{ maxWidth: '700px' }}>
               Latest from Century Law
            </h1>
            <p className="lead text-white opacity-75 fs-5 mb-0" style={{ maxWidth: '600px', lineHeight: '1.6' }}>
               Shaping the legal landscape across West Africa through precedent-setting cases and strategic advocacy for global excellence.
            </p>
         </Container>
      </section>

      {/* Main Content Area */}
      <section className="py-5 mt-4">
         <Container>
            <div className="d-flex justify-content-between align-items-end mb-5 border-bottom border-stone pb-3">
               <h2 className="h3 fw-bold text-navy mb-0 serif">Insight & Editorial</h2>
               <div className="d-flex gap-4">
                  {["ALL STORIES", "FIRM NEWS", "PRESS RELEASES"].map((tab) => (
                     <button 
                        key={tab}
                        onClick={() => setActiveTab(tab.toLowerCase())}
                        className={`btn-tab smaller fw-bold letter-spacing-wide ${activeTab === tab.toLowerCase() ? 'active' : ''}`}
                     >
                        {tab}
                     </button>
                  ))}
               </div>
            </div>

            <Row className="gy-5">
               {/* Featured Article */}
               <Col lg={8}>
                  <Card className="border border-stone rounded-0 overflow-hidden h-100 shadow-sm editorial-card">
                     <Row className="g-0 h-100">
                        <Col md={5}>
                           <div className="h-100 position-relative overflow-hidden">
                              <img 
                                 src={newsItems[0].image} 
                                 alt="Featured" 
                                 className="absolute-full object-fit-cover grayscale transition-all scale-hover" 
                              />
                           </div>
                        </Col>
                        <Col md={7}>
                           <Card.Body className="p-4 p-xl-5 d-flex flex-column h-100">
                              <div className="d-flex gap-3 mb-3">
                                 <span className="tiny fw-bold text-charcoal opacity-50">{newsItems[0].date}</span>
                                 <span className="tiny fw-bold text-gold letter-spacing-wide">{newsItems[0].category}</span>
                              </div>
                              <Card.Title className="h3 fw-bold text-navy mb-4 serif" style={{ lineHeight: '1.2' }}>
                                 {newsItems[0].title}
                              </Card.Title>
                              <Card.Text className="text-charcoal opacity-75 mb-5 fs-6" style={{ lineHeight: '1.7' }}>
                                 {newsItems[0].excerpt}
                              </Card.Text>
                              <Link href="#" className="mt-auto text-navy fw-bold smaller letter-spacing-wide d-flex align-items-center gap-2 text-decoration-none hover-text-gold transition-all">
                                 {newsItems[0].linkText} <ArrowRight />
                              </Link>
                           </Card.Body>
                        </Col>
                     </Row>
                  </Card>
               </Col>

               {/* Standard Article 1 */}
               <Col lg={4}>
                  <Card className="border border-stone rounded-0 h-100 shadow-sm editorial-card p-4 p-xl-5">
                     <div className="d-flex gap-3 mb-3">
                        <span className="tiny fw-bold text-charcoal opacity-50">{newsItems[1].date}</span>
                        <span className="tiny fw-bold text-gold letter-spacing-wide">{newsItems[1].category}</span>
                     </div>
                     <Card.Title className="h4 fw-bold text-navy mb-4 serif" style={{ lineHeight: '1.3' }}>
                        {newsItems[1].title}
                     </Card.Title>
                     <Card.Text className="text-charcoal opacity-75 mb-5 smaller" style={{ lineHeight: '1.7' }}>
                        {newsItems[1].excerpt}
                     </Card.Text>
                     <Link href="#" className="mt-auto text-navy fw-bold smaller letter-spacing-wide d-flex align-items-center gap-2 text-decoration-none hover-text-gold transition-all">
                        {newsItems[1].linkText} <ArrowRight />
                     </Link>
                  </Card>
               </Col>

               {/* Standard Article 2 */}
               <Col lg={4}>
                  <Card className="border border-stone rounded-0 h-100 shadow-sm editorial-card p-4 p-xl-5">
                     <div className="d-flex gap-3 mb-3">
                        <span className="tiny fw-bold text-charcoal opacity-50">{newsItems[2].date}</span>
                        <span className="tiny fw-bold text-gold letter-spacing-wide">{newsItems[2].category}</span>
                     </div>
                     <Card.Title className="h4 fw-bold text-navy mb-4 serif" style={{ lineHeight: '1.3' }}>
                        {newsItems[2].title}
                     </Card.Title>
                     <Card.Text className="text-charcoal opacity-75 mb-5 smaller" style={{ lineHeight: '1.7' }}>
                        {newsItems[2].excerpt}
                     </Card.Text>
                     <Link href="#" className="mt-auto text-navy fw-bold smaller letter-spacing-wide d-flex align-items-center gap-2 text-decoration-none hover-text-gold transition-all">
                        {newsItems[2].linkText} {newsItems[2].icon || <ArrowRight />}
                     </Link>
                  </Card>
               </Col>

               {/* Standard Article 3 */}
               <Col lg={4}>
                  <Card className="border border-stone rounded-0 h-100 shadow-sm editorial-card p-4 p-xl-5">
                     <div className="d-flex gap-3 mb-3">
                        <span className="tiny fw-bold text-charcoal opacity-50">{newsItems[3].date}</span>
                        <span className="tiny fw-bold text-gold letter-spacing-wide">{newsItems[3].category}</span>
                     </div>
                     <Card.Title className="h4 fw-bold text-navy mb-4 serif" style={{ lineHeight: '1.3' }}>
                        {newsItems[3].title}
                     </Card.Title>
                     <Card.Text className="text-charcoal opacity-75 mb-5 smaller" style={{ lineHeight: '1.7' }}>
                        {newsItems[3].excerpt}
                     </Card.Text>
                     <Link href="#" className="mt-auto text-navy fw-bold smaller letter-spacing-wide d-flex align-items-center gap-2 text-decoration-none hover-text-gold transition-all">
                        {newsItems[3].linkText} <ArrowRight />
                     </Link>
                  </Card>
               </Col>

               {/* Editorial Briefing CTA */}
               <Col lg={4}>
                  <div className="bg-navy p-4 p-xl-5 h-100 d-flex flex-column justify-content-center text-center text-white position-relative overflow-hidden border border-gold border-opacity-20 shadow-sm">
                     <div className="absolute-full opacity-05 pointer-events-none">
                        <Mic size={180} className="position-absolute" style={{ right: '-20px', bottom: '-20px' }} />
                     </div>
                     <h3 className="h4 fw-bold mb-4 serif letter-spacing-tight">Request an Editorial Briefing</h3>
                     <p className="smaller opacity-75 mb-5 mx-auto" style={{ maxWidth: '280px', lineHeight: '1.6' }}>
                        For media inquiries and expert legal commentary on West African current affairs.
                     </p>
                     <Button className="btn-gold rounded-0 p-3 fw-bold smaller letter-spacing-wide w-100 border-0">
                        CONTACT MEDIA RELATIONS
                     </Button>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>

      {/* Global Recognition: In The Media */}
      <section className="py-5 bg-white border-top border-bottom border-stone">
         <Container className="py-4">
            <div className="text-center mb-5">
               <span className="tiny fw-bold text-gold letter-spacing-wide uppercase d-block mb-2">GLOBAL RECOGNITION</span>
               <h2 className="h2 fw-bold text-navy serif">In The Media</h2>
            </div>
            <Row className="align-items-center gy-5 text-center">
               {mediaRecognition.map((item, idx) => (
                  <Col key={idx} md={6} lg={3}>
                     <div className="px-3">
                        <div className={`fw-bold text-navy h4 mb-4 letter-spacing-tight ${item.highlight ? 'bg-navy text-white d-inline-block px-3 py-1' : ''}`} style={{ borderBottom: !item.highlight ? '1px solid currentColor' : 'none' }}>
                           {item.logo}
                        </div>
                        <p className={`smaller text-charcoal opacity-75 ${item.italic ? 'italic' : ''}`} style={{ lineHeight: '1.6' }}>
                           "{item.quote}"
                        </p>
                     </div>
                  </Col>
               ))}
            </Row>
         </Container>
      </section>

      {/* Events Calendar */}
      <section className="py-5 mt-5 pb-5">
         <Container>
            <h2 className="display-5 fw-bold text-navy mb-5 serif">Events Calendar</h2>
            <div className="border-top border-stone">
               {events.map((event, idx) => (
                  <div key={idx} className="d-flex flex-column flex-md-row align-items-center py-5 border-bottom border-stone gap-4 gap-md-5 event-row transition-all">
                     <div className="text-center" style={{ minWidth: '100px' }}>
                        <div className="display-4 fw-bold text-navy lh-1">{event.date}</div>
                        <div className="tiny fw-bold text-gold letter-spacing-wide uppercase">{event.month}</div>
                     </div>
                     <div className="bg-stone bg-opacity-25 px-3 py-1 smaller fw-bold opacity-50 letter-spacing-wide" style={{ minWidth: '100px', textAlign: 'center' }}>
                        {event.type}
                     </div>
                     <div className="flex-grow-1">
                        <h3 className="h4 fw-bold text-navy mb-2 serif">{event.title}</h3>
                        <p className="smaller text-charcoal opacity-75 mb-0" style={{ lineHeight: '1.6' }}>
                           {event.desc}
                        </p>
                     </div>
                     <Button variant="link" className="text-navy p-0 fw-bold smaller letter-spacing-wide text-decoration-none border-bottom border-gold border-2 pb-1 hover-text-gold transition-all">
                        REGISTER NOW
                     </Button>
                  </div>
               ))}
            </div>
         </Container>
      </section>

      {/* Stay Informed: Sub-Footer Subscription */}
      <section className="py-5 bg-navy text-white overflow-hidden border-top border-gold border-opacity-10 mt-5">
         <Container className="position-relative py-5">
            <div className="absolute-full d-flex align-items-center justify-content-center opacity-05 pointer-events-none">
                <div className="serif" style={{ fontSize: '20rem', fontWeight: '900', transform: 'rotate(-10deg)' }}>CL</div>
            </div>
            <Row className="align-items-center position-relative z-index-2">
               <Col lg={6}>
                  <h2 className="display-4 fw-bold mb-4 serif">Stay Informed on Legal Evolution</h2>
                  <p className="fs-5 opacity-75 mb-5 mb-lg-0 pe-lg-5" style={{ lineHeight: '1.6' }}>
                     Join our curated mailing list to receive monthly insights, legal bulletins, and firm announcements directly from our editorial desk.
                  </p>
               </Col>
               <Col lg={6}>
                  <div className="d-flex flex-column gap-3">
                     <div className="d-flex flex-column flex-md-row gap-0 border-bottom border-gold border-opacity-30">
                        <Form.Control 
                           placeholder="Your Professional Email" 
                           className="bg-transparent border-0 rounded-0 text-white p-3 px-0 placeholder-white smaller fw-bold letter-spacing-wide" 
                        />
                        <Button className="btn-gold rounded-0 px-4 py-3 fw-bold smaller letter-spacing-wide border-0 mt-3 mt-md-0 whitespace-nowrap">
                           JOIN OUR MAILING LIST
                        </Button>
                     </div>
                     <p className="tiny opacity-25 mt-2 letter-spacing-wide uppercase mb-0">Privacy Guaranteed. Unsubscribe Anytime.</p>
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
        .bg-stone { background-color: #E5E0D8 !important; }
        .border-stone { border-color: #E5E0D8 !important; }
        .text-charcoal { color: #2D2D2D !important; }
        
        .smaller { font-size: 0.65rem; }
        .tiny { font-size: 0.55rem; }
        .letter-spacing-wide { letter-spacing: 0.15em; }
        .letter-spacing-tight { letter-spacing: -0.02em; }
        .uppercase { text-transform: uppercase; }
        .italic { font-style: italic; }
        .serif { font-family: 'Playfair Display', serif; }
        .absolute-full { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        .z-index-2 { z-index: 2; }
        .opacity-05 { opacity: 0.05 !important; }
        .pointer-events-none { pointer-events: none; }
        .grayscale { filter: grayscale(100%); }
        .scale-hover { transition: transform 0.8s ease; }
        .editorial-card:hover .scale-hover { transform: scale(1.08); }
        .transition-all { transition: all 0.3s ease; }
        
        .btn-tab {
           background: transparent;
           border: none;
           padding: 0.5rem 0;
           color: #040B16;
           opacity: 0.4;
           transition: all 0.3s ease;
           border-bottom: 2px solid transparent;
        }
        .btn-tab:hover { opacity: 1; color: #B8974D; }
        .btn-tab.active {
           opacity: 1;
           color: #B8974D;
           border-bottom: 2px solid #B8974D;
        }
        
        .btn-gold {
           background-color: #B8974D !important;
           color: #040B16 !important;
        }
        .btn-gold:hover {
           background-color: #9A7B36 !important;
        }
        
        .placeholder-white::placeholder { color: rgba(255, 255, 255, 0.4) !important; }
        
        .event-row:hover {
           background-color: rgba(229, 224, 216, 0.2);
           padding-left: 1rem !important;
           padding-right: 1rem !important;
        }
        
        .whitespace-nowrap { white-space: nowrap; }
        
        @media (max-width: 991px) {
           .display-2 { font-size: 3rem; }
           .display-4 { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
};

export default NewsPage;

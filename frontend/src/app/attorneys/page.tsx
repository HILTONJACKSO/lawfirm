"use client";

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";
import { getAttorneys, getAttorneyCategories, Attorney } from "@/services/attorneyService";
import { Share, ArrowRight } from "react-bootstrap-icons";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AttorneysPage() {
  useScrollReveal();
  const [attorneys, setAttorneys] = useState<Attorney[]>([
    { id: 1, full_name: "Prof. Lavela Koboi Johnson, Sr", title: "FOUNDER & SENIOR PARTNER", slug: "lavela-johnson", specializations: [{ practice_area_name: "Government Reform & Investment Law" }], profile_photo: "/counsel-1.jpg", bar_id: "BAR NO. LBR-SUPREME-01" },
    { id: 2, full_name: "Attorney Worlea – Saywah Dunah", title: "PARTNER", slug: "worlea-saywah-dunah", specializations: [{ practice_area_name: "Public Financial Management & Legislative Reform" }], profile_photo: "/counsel-2.jpg", bar_id: "BAR NO. LBR-JUDICIARY-12" },
    { id: 3, full_name: "Cllr. Barclay", title: "SUPREME COURT PARTNER", slug: "cllr-barclay", specializations: [{ practice_area_name: "Supreme Court Litigation & Civil Rights" }], profile_photo: "/counsel-3.jpg", bar_id: "BAR NO. LBR-SUPREME-05" },
    { id: 4, full_name: "Attorney Gbogoma D. Jones, Sr", title: "ASSOCIATE", slug: "gbogoma-jones", specializations: [{ practice_area_name: "Procurement Law & Public Administration" }], profile_photo: "/counsel-4.jpg", bar_id: "BAR NO. LBR-RESEARCH-08" },
    { id: 5, full_name: "Cllr. Sarah G. Wreh", title: "PARTNER", slug: "sarah-wreh", specializations: [{ practice_area_name: "Maritime Law & Project Finance" }], profile_photo: "/counsel-5.jpg", bar_id: "BAR NO. LBR-1725-30" },
  ] as any);

  const supportStaff = [
    { id: 1, name: "Ms. Delphine Capehart", role: "GENERAL ADMINISTRATOR" },
    { id: 2, name: "Mr. Ayoba", role: "PARALEGAL / RESEARCH OFFICER" },
    { id: 3, name: "Ms. Janice Flomo", role: "OFFICE MANAGER" },
  ];
  const [categories, setCategories] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [attorneyData, categoryData] = await Promise.all([
          getAttorneys(),
          getAttorneyCategories()
        ]);
        
        if (attorneyData && attorneyData.length > 0) {
          setAttorneys(attorneyData);
        }
        
        if (categoryData && categoryData.length > 0) {
          setCategories(categoryData);
        }
      } catch (error) {
        // Fallback data is already initialized in state
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredAttorneys = activeCategory === "all" 
    ? attorneys 
    : attorneys.filter(a => a.specializations?.some(s => s.practice_area_name.toLowerCase().includes(activeCategory.toLowerCase())));

  return (
    <div className="bg-cream min-vh-100 pb-0">
      {/* Editorial Header */}
      <div className="py-5 mb-5 mt-4">
        <Container>
          <Row className="align-items-start">
            <Col lg={7} className="reveal">
               <span className="text-gold fw-bold letter-spacing-wide smaller d-block mb-2 uppercase">THE COUNSELORS</span>
               <h1 className="display-2 fw-bold text-navy mb-0 serif" style={{ lineHeight: '1' }}> Our Attorneys </h1>
            </Col>
            <Col lg={4} className="ms-auto mt-4 mt-lg-0 reveal" style={{ transitionDelay: '0.3s' }}>
               <p className="fs-6 text-charcoal opacity-75 mb-0 pt-lg-2" style={{ lineHeight: '1.6' }}>
                  Distinguished advocates committed to the highest standards of legal excellence and integrity in West Africa.
               </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Filter Bar */}
      <div className="mb-5">
         <Container>
            <div className="d-flex flex-wrap gap-2 align-items-center border-bottom border-navy border-opacity-10 pb-4">
               <span className="smaller fw-bold letter-spacing-wide text-navy opacity-40 me-3 uppercase">FILTER BY EXPERTISE</span>
               <button 
                  onClick={() => setActiveCategory("all")}
                  className={`btn-filter ${activeCategory === "all" ? "active" : ""}`}
               >
                  ALL PARTNERS
               </button>
               <button onClick={() => setActiveCategory("corporate")} className={`btn-filter ${activeCategory === "corporate" ? "active" : ""}`}>CORPORATE LAW</button>
               <button onClick={() => setActiveCategory("maritime")} className={`btn-filter ${activeCategory === "maritime" ? "active" : ""}`}>MARITIME & ENERGY</button>
               <button onClick={() => setActiveCategory("intellectual")} className={`btn-filter ${activeCategory === "intellectual" ? "active" : ""}`}>INTELLECTUAL PROPERTY</button>
               <button onClick={() => setActiveCategory("litigation")} className={`btn-filter ${activeCategory === "litigation" ? "active" : ""}`}>LITIGATION</button>
               <button onClick={() => setActiveCategory("real estate")} className={`btn-filter ${activeCategory === "real estate" ? "active" : ""}`}>REAL ESTATE</button>
            </div>
         </Container>
      </div>

      {/* Loading State */}
      {loading && (
        <Container className="py-5 text-center">
          <div className="spinner-border text-gold" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </Container>
      )}

      {/* Attorney Grid */}
      {!loading && (
        <Container className="mb-5 pb-5">
           {filteredAttorneys.length > 0 ? (
             <Row className="gy-5 gx-4">
                {filteredAttorneys.map((attorney: any, index: number) => (
                   <Col key={attorney.id} md={6} lg={4} className={`reveal reveal-stagger-${(index % 6) + 1}`}>
                      <div className="attorney-card-premium group pointer h-100 d-flex flex-column bg-white shadow-sm border border-stone">
                         <div className="image-container overflow-hidden position-relative mb-0">
                            <img 
                               src={attorney.profile_photo || attorney.photo || "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"} 
                               alt={attorney.full_name} 
                               className="img-fluid w-100 grayscale transition-all scale-hover object-fit-cover" 
                               style={{ height: '450px' }}
                            />
                            <div className="absolute-full bg-navy opacity-0 group-hover-opacity-10 transition-all"></div>
                         </div>
                         <div className="content-container p-4 pt-4 flex-grow-1 border-start border-gold border-4 border-opacity-75">
                            <span className="smaller fw-bold text-gold letter-spacing-wide uppercase mb-2 d-block">{attorney.title}</span>
                            <h3 className="h4 fw-bold text-navy mb-2 serif">{attorney.full_name}</h3>
                            <p className="smaller text-charcoal opacity-75 mb-4">
                               {attorney.specializations?.[0]?.practice_area_name || "Legal Counsel"}
                            </p>
                            <div className="mt-auto pt-3 border-top border-stone d-flex justify-content-between align-items-center">
                               <span className="tiny text-muted fw-bold letter-spacing-wide uppercase">{attorney.bar_id || attorney.bar_number || "BAR NO. LBR-XXXX-XX"}</span>
                               <Share size={14} className="text-navy opacity-50 hover-text-gold transition-colors" />
                            </div>
                         </div>
                      </div>
                   </Col>
                ))}
             </Row>
           ) : (
             <div className="text-center py-5">
               <h4 className="text-navy opacity-50">No counselors found for this expertise.</h4>
               <Button variant="link" className="text-gold fw-bold uppercase smaller letter-spacing-wide" onClick={() => setActiveCategory("all")}>View All Partners</Button>
             </div>
           )}
        </Container>
      )}

      {/* Support Staff Section */}
      <section className="py-5 bg-navy text-white mt-5">
         <Container className="py-lg-5">
            <div className="text-center mb-5">
               <span className="text-gold fw-bold letter-spacing-wide smaller d-block mb-2 uppercase">OPERATIONAL EXCELLENCE</span>
               <h2 className="display-4 fw-bold serif mb-0">Administrative Support</h2>
            </div>
            <Row className="gy-4 justify-content-center">
               {supportStaff.map((staff) => (
                  <Col key={staff.id} md={4}>
                     <div className="p-4 border border-white border-opacity-10 text-center hover-border-transparent transition-all" style={{ borderBottom: '2px solid rgba(184, 151, 77, 0.3) !important' }}>
                        <h4 className="h5 fw-bold mb-1">{staff.name}</h4>
                        <span className="smaller text-gold fw-bold letter-spacing-wide uppercase">{staff.role}</span>
                     </div>
                  </Col>
               ))}
            </Row>
         </Container>
      </section>

      {/* Strategic CTA */}
      <section className="py-5 mt-5">
         <div className="cta-banner bg-navy py-5 position-relative overflow-hidden">
            <div className="absolute-full d-flex align-items-center justify-content-center opacity-10">
               <div style={{ width: '800px', height: '800px', border: '1px solid #B8974D', transform: 'rotate(45deg)' }}></div>
            </div>
            <Container className="position-relative z-index-2 py-5">
               <div className="text-center">
                  <span className="smaller fw-bold letter-spacing-wide text-gold mb-3 d-block uppercase">READY FOR CONSULTATION</span>
                  <h2 className="display-3 fw-bold text-white mb-5 mx-auto serif" style={{ maxWidth: '850px' }}>
                     Expertise that safeguards your interests.
                  </h2>
                  <Link href="/book-consultation" className="btn btn-gold px-5 py-3 rounded-0 fw-bold letter-spacing-wide smaller uppercase">
                     SCHEDULE A STRATEGIC MEETING
                  </Link>
               </div>
            </Container>
         </div>
      </section>

      <style jsx>{`
        .bg-cream { background-color: #F8F5F0 !important; }
        .bg-navy { background-color: #040B16 !important; }
        .text-navy { color: #040B16 !important; }
        .text-gold { color: #B8974D !important; }
        .smaller { font-size: 0.65rem; }
        .tiny { font-size: 0.55rem; }
        .letter-spacing-wide { letter-spacing: 0.15em; }
        .uppercase { text-transform: uppercase; }
        
        .btn-filter {
           background: transparent;
           border: none;
           padding: 0.5rem 1.25rem;
           font-size: 0.65rem;
           font-weight: 800;
           letter-spacing: 0.1em;
           color: #040B16;
           opacity: 0.5;
           transition: all 0.3s ease;
           white-space: nowrap;
        }
        .btn-filter:hover { opacity: 1; color: #B8974D; }
        .btn-filter.active {
           background: #040B16;
           color: white;
           opacity: 1;
        }
        
        .attorney-card-premium { transition: transform 0.4s ease; }
        .attorney-card-premium:hover { transform: translateY(-10px); }
        
        .grayscale { filter: grayscale(100%); }
        .scale-hover:hover { transform: scale(1.05); }
        .transition-all { transition: all 0.5s ease; }
        .absolute-full { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        
        .cta-banner { min-height: 400px; }
        .diagonal-line {
           width: 200%;
           height: 1px;
           background: rgba(184, 151, 77, 0.2);
           transform: rotate(-15deg);
        }
        
        @media (max-width: 991px) {
           .display-2 { font-size: 3.5rem; }
           .display-4 { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
}

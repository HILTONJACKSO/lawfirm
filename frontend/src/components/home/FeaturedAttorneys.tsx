"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";

const attorneys = [
  { id: 1, name: "Prof. Lavela Koboi Johnson, Sr", role: "FOUNDER & SENIOR PARTNER", img: "/counsel-1.jpg" },
  { id: 2, name: "Attorney Worlea – Saywah Dunah", role: "PARTNER - PUBLIC FINANCE", img: "/counsel-2.jpg" },
  { id: 3, name: "Cllr. Barclay", role: "SUPREME COURT PARTNER", img: "/counsel-3.jpg" },
  { id: 4, name: "Attorney Gbogoma D. Jones, Sr", role: "ASSOCIATE - PROCUREMENT", img: "/counsel-4.jpg" },
  { id: 5, name: "Cllr. Sarah G. Wreh", role: "PARTNER - MARITIME", img: "/counsel-5.jpg" },
];

const FeaturedAttorneys = () => {
  return (
    <section className="py-5 bg-cream">
      <Container className="py-lg-5">
        <div className="text-center mb-5 reveal visible">
          <span className="text-gold fw-bold mb-2 d-block small letter-spacing-wide">THE COUNSEL</span>
          <h2 className="display-5 fw-bold text-navy">Leading Minds in the Legal Field</h2>
        </div>

        <Row className="gy-5 justify-content-center">
          {attorneys.map((attorney) => (
            <Col key={attorney.id} md={4}>
              <div className="reveal visible text-center">
                 <div className="overflow-hidden mb-4 shadow-lg">
                    <img 
                       src={attorney.img} 
                       alt={attorney.name} 
                       className="img-fluid grayscale-hover transition-all" 
                       style={{ width: '100%', height: '450px', objectFit: 'cover' }}
                    />
                 </div>
                 <h3 className="h4 fw-bold text-navy mb-1">{attorney.name}</h3>
                 <div className="text-gold fw-bold smaller letter-spacing-wide">{attorney.role}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      
      <style jsx>{`
        .smaller { font-size: 0.7rem; }
        .grayscale-hover {
          filter: grayscale(100%);
          &:hover {
            filter: grayscale(0%);
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedAttorneys;

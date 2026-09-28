"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import { 
  House, ShieldCheck, Globe, Gear, BriefcaseFill, 
  Hammer, People, ShieldLock 
} from "react-bootstrap-icons";

const practiceAreas = [
  { id: 1, name: "Corporate Governance", icon: <House />, slug: "corporate", desc: "Strategic advocacy for multinational corporations navigating the Liberian regulatory landscape." },
  { id: 2, name: "Real Estate & Property", icon: <House />, slug: "real-estate", desc: "Securing land rights and managing complex real estate transactions with meticulous due diligence." },
  { id: 3, name: "Criminal Defense", icon: <ShieldCheck />, slug: "criminal", desc: "Vigilant protection of constitutional rights and elite representation in critical legal defense." },
  { id: 4, name: "Family & Estate Law", icon: <People />, slug: "family", desc: "Sensitive handling of inheritance, trust, and sophisticated wealth succession planning." },
  { id: 5, name: "Labor & Employment", icon: <Gear />, slug: "labor", desc: "Comprehensive management of workplace disputes and intricate labor relations advisory." },
  { id: 6, name: "Maritime Law", icon: <Globe />, slug: "maritime", desc: "Specialized legal services for the shipping industry in one of the world's leading ship registries." },
];

const PracticeAreasGrid = () => {
  return (
    <section className="py-5 bg-white">
      <Container className="py-lg-5">
        <div className="mb-5 reveal visible">
          <span className="text-gold fw-bold mb-2 d-block small letter-spacing-wide">OUR EXPERTISE</span>
          <h2 className="display-5 fw-bold mb-4 text-navy">Unparalleled Legal Precision <br />Across Domains</h2>
        </div>
        
        <Row className="gy-4">
          {practiceAreas.map((area) => (
            <Col key={area.id} md={6} lg={4}>
              <Card as={Link} href={`/practice-areas/${area.slug}`} className="card-premium p-5 h-100 text-decoration-none text-dark border-0 bg-cream">
                <div className="fs-3 text-gold mb-4">{area.icon}</div>
                <Card.Title className="fw-bold h4 mb-3 text-navy">{area.name}</Card.Title>
                <Card.Text className="opacity-75 small text-charcoal" style={{ lineHeight: '1.6' }}>{area.desc}</Card.Text>
                <div className="mt-4 pt-2 text-gold fw-bold smaller text-uppercase letter-spacing-wide">
                   EXPLORE DETAILS &rarr;
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      
      <style jsx>{`
        .card-premium {
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          &:hover {
            transform: translateY(-10px);
            background-color: #EAE4DA !important;
            box-shadow: 0 20px 40px rgba(0,0,0,0.05);
          }
        }
        .smaller { font-size: 0.75rem; }
      `}</style>
    </section>
  );
};

export default PracticeAreasGrid;

"use client";

import { Container, Row, Col } from "react-bootstrap";

const TrustBar = () => {
  const stats = [
    { value: "30+", label: "YEARS OF EXPERIENCE" },
    { value: "1,200+", label: "SATISFIED CLIENTS" },
    { value: "15+", label: "EXPERT ATTORNEYS" },
    { value: "24/7", label: "TRUSTED ASSISTANCE" },
  ];

  return (
    <div className="bg-navy py-5 border-top border-white border-opacity-10">
      <Container>
        <Row className="text-center align-items-center gx-0 gy-5">
          {stats.map((stat, idx) => (
            <Col key={idx} xs={6} md={3} className={idx !== stats.length - 1 ? 'border-end-md' : ''}>
              <div className="reveal visible" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="h1 fw-bold text-gold mb-1">{stat.value}</div>
                <div className="small text-white opacity-75 fw-bold letter-spacing-wide px-2" style={{ fontSize: '0.75rem' }}>
                   {stat.label}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      
      <style jsx>{`
        @media (min-width: 768px) {
          .border-end-md {
            border-right: 1px solid rgba(255, 255, 255, 0.1) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TrustBar;

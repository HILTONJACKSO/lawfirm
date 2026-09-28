"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

const CaseResultsSection = () => {
  const results = [
    { 
      category: "CORPORATE LITIGATION", 
      title: "$6.2M Settlement", 
      desc: "Successfully resolved a multi-year shareholder dispute for a major telecommunications firm." 
    },
    { 
      category: "MARITIME & PORT", 
      title: "Expedited legal action resulting in the immediate release of a detained vessel.", 
      desc: "Acted within 24 hours to secure the release of a multi-million dollar commercial tanker." 
    },
    { 
      category: "LAND LAW", 
      title: "Secured full ownership rights for a 300-acre estate against fraudulent registration claims.", 
      desc: "Comprehensive victory for a family estate with historical land rights in Montserrado." 
    },
  ];

  return (
    <section className="py-5 bg-navy text-white">
      <Container className="py-lg-5">
        <div className="d-flex justify-content-between align-items-end mb-5 reveal">
          <div>
            <h2 className="display-4 fw-bold mb-0">Proven Victories</h2>
          </div>
          <div className="d-flex gap-2">
             <button className="btn btn-outline-white rounded-0 p-2 opacity-50"><ChevronLeft /></button>
             <button className="btn btn-outline-white rounded-0 p-2"><ChevronRight /></button>
          </div>
        </div>

        <Row className="gy-4">
          {results.map((result, idx) => (
            <Col key={idx} lg={4}>
              <Card className="bg-transparent border-0 border-start border-gold border-opacity-25 p-4 reveal h-100" style={{ transitionDelay: `${idx * 0.15}s` }}>
                <span className="text-white fw-bold smaller letter-spacing-wide mb-3 mt-2 opacity-50">{result.category}</span>
                <h3 className="h4 fw-bold mb-3 text-white" style={{ lineHeight: '1.4' }}>{result.title}</h3>
                <p className="text-white small mb-0 lh-lg">{result.desc}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      
      <style jsx>{`
        .smaller { font-size: 0.7rem; }
        .border-gold { border-left-color: #B8974D !important; }
      `}</style>
    </section>
  );
};

export default CaseResultsSection;

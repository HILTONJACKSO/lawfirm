"use client";

import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import Link from "next/link";

import { AwardFill, CheckCircleFill } from "react-bootstrap-icons";

export default function CaseResultsPage({ searchParams }: { searchParams: { practice_area?: string } }) {
  // We'll mock the case results for now
  const results = [
    { id: 1, title: "US$45M Corporate Acquisition", practice_area: "Corporate", outcome: "Successful Closing", year: 2023, description: "Successfully represented a French multinational in the acquisition of a leading Liberian rubber manufacturing facility, navigating complex regulatory hurdles." },
    { id: 2, title: "Land Rights Dispute Settlement", practice_area: "Real Estate", outcome: "Settled in Favor of Client", year: 2023, description: "Secured ownership rights for a local community against illegal encroachment by a private entity, protecting over 500 family properties." },
    { id: 3, title: "Maritime Arbitration Victory", practice_area: "Maritime", outcome: "Arbitral Award of $12M", year: 2022, description: "Represented a major shipping line in an international arbitration regarding contractual disputes in the Port of Monrovia." },
    { id: 4, title: "Mining License Restoration", practice_area: "Mining", outcome: "License Restored", year: 2022, description: "Successfully petitioned the Ministry of Mines to restore an erroneously suspended exploration license for a Canadian mining firm." },
  ];

  return (
    <div className="bg-light pb-5">
      {/* Header */}
      <div className="bg-navy py-5 text-white mb-5 shadow-sm">
        <Container className="py-4">
          <Row>
            <Col lg={8}>
              <h1 className="display-3 fw-bold mb-3 border-0 text-white p-0">Proven <span className="text-gold">Case Results</span></h1>
              <p className="lead opacity-75 fs-4">
                A track record of success across Liberia's most complex and high-stakes legal challenges.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <div className="mb-5 text-center">
           <h2 className="display-6 fw-bold mb-3">Our Track Record of <span className="text-gold">Excellence</span></h2>
           <p className="mx-auto text-muted" style={{ maxWidth: '700px' }}>
             While every case is unique, our consistent success stems from a methodology rooted in technical precision and unwavering advocacy.
           </p>
        </div>

        <Row className="gy-4">
          {results.map((result) => (
            <Col key={result.id} md={6}>
              <Card className="border-0 shadow-sm rounded-0 p-4 h-100 card-luxury border-start border-5 border-gold">
                <Card.Body>
                   <div className="d-flex justify-content-between align-items-start mb-4">
                      <div>
                         <Badge bg="stone" text="muted" className="rounded-0 px-3 py-2 fw-normal mb-2 fs-6">
                            {result.practice_area}
                         </Badge>
                         <h3 className="h4 fw-bold text-navy mb-0">{result.title}</h3>
                      </div>
                      <span className="text-gold opacity-50"><AwardFill size={40} /></span>
                   </div>
                   <div className="mb-4">
                      <div className="small text-uppercase fw-bold text-gold mb-1 letter-spacing-wide">RESULT ACHIEVED</div>
                      <div className="fs-5 fw-bold d-flex align-items-center gap-2">
                         <CheckCircleFill className="text-success" size={18} /> {result.outcome}
                      </div>
                   </div>
                   <p className="text-muted opacity-75 mb-4 px-1 border-start border-2 border-stone" style={{ lineHeight: '1.7' }}>
                      {result.description}
                   </p>
                   <div className="small text-muted mt-auto">YEAR: {result.year}</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <section className="mt-5 py-5 bg-white text-center shadow-sm">
           <Container>
              <h4 className="fw-bold mb-4">Past performance is not a guarantee of future results.</h4>
              <p className="text-muted mx-auto mb-4" style={{ maxWidth: '600px' }}>
                Every case is different and should be evaluated on its own merits. Contact us for a detailed assessment of your specific legal situation.
              </p>
              <Link href="/book-consultation" className="btn btn-navy px-5 py-3 rounded-0 fs-5">
                 Request a Case Evaluation
              </Link>
           </Container>
        </section>
      </Container>
    </div>
  );
}

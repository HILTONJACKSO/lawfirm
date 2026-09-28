import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import Link from "next/link";
import { getPracticeAreaBySlug } from "@/services/practiceService";
import { CheckCircleFill, ArrowLeft } from "react-bootstrap-icons";

export default async function PracticeAreaDetailPage({ params }: { params: { slug: string } }) {
  let area: any = null;
  const { slug } = params;

  try {
    area = await getPracticeAreaBySlug(slug);
  } catch (error) {
  }

  if (!area) {
    return (
      <Container className="py-5 text-center">
        <h2 className="mb-4">Practice Area Not Found</h2>
        <Link href="/practice-areas" className="btn btn-navy">Back to Practice Areas</Link>
      </Container>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-navy py-5 text-white mb-0 shadow-sm">
        <Container className="py-4">
          <Link href="/practice-areas" className="text-gold text-decoration-none d-flex align-items-center gap-2 mb-4 small fw-bold text-uppercase">
            <ArrowLeft /> Back to Practice Areas
          </Link>
          <Row className="align-items-center">
            <Col lg={7}>
              <h1 className="display-4 fw-bold mb-3 border-0 text-white p-0">{area.name}</h1>
              <p className="lead opacity-75 fs-4 mb-0">{area.short_description}</p>
            </Col>
            <Col lg={5} className="text-lg-end mt-4 mt-lg-0">
               <Link href="/book-consultation" className="btn btn-gold px-5 py-3 rounded-0 fs-5 text-decoration-none">
                 Request Consultation
               </Link>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Content Section */}
      <section className="py-5 bg-stone bg-opacity-25">
        <Container className="py-lg-5">
          <Row className="gy-5">
            <Col lg={8}>
              <div className="pe-lg-5">
                <h2 className="display-6 fw-bold mb-4">Overview</h2>
                <div className="content fs-5 text-muted opacity-90 mb-5" style={{ lineHeight: '1.8' }}>
                  {area.full_description || "We provide comprehensive legal counsel in this area, serving a diverse range of clients with excellence and precision."}
                </div>

                <div className="bg-white p-5 shadow-sm border-start border-5 border-gold">
                  <h3 className="h4 fw-bold mb-4 text-navy">What We Handle</h3>
                  {area.handles && area.handles.length > 0 ? (
                    <Row className="gy-3">
                      {area.handles.map((handle: any, index: number) => (
                        <Col md={6} key={index}>
                          <div className="d-flex align-items-center gap-3">
                            <CheckCircleFill className="text-gold flex-shrink-0" size={18} />
                            <span className="fw-medium text-dark">{handle.item}</span>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  ) : (
                    <p className="text-muted">Contact us for more details on our specific services in this area.</p>
                  )}
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="sticky-top" style={{ top: '100px' }}>
                <Card className="border-0 shadow-sm rounded-0 bg-navy text-white p-4 mb-4">
                  <h4 className="text-gold mb-4 fw-bold">Contact an Expert</h4>
                  <p className="small opacity-75 mb-4">Have questions about {area.name}? Our specialists are ready to assist you.</p>
                  <Link href="/contact" className="btn btn-outline-light w-100 py-2 rounded-0 fs-6 border-2 text-decoration-none">
                    Inquire Now
                  </Link>
                </Card>

                <div className="p-4 border border-navy border-opacity-10 bg-white">
                  <h4 className="fw-bold mb-4 text-navy small text-uppercase letter-spacing-wide">Related Disciplines</h4>
                  <ListGroup variant="flush">
                    <ListGroup.Item as={Link} href="/practice-areas/corporate" className="border-0 px-0 py-2 bg-transparent text-muted hover-text-gold transition-colors">
                      Corporate & Commercial
                    </ListGroup.Item>
                    <ListGroup.Item as={Link} href="/practice-areas/maritime" className="border-0 px-0 py-2 bg-transparent text-muted hover-text-gold transition-colors">
                      Maritime Law
                    </ListGroup.Item>
                    <ListGroup.Item as={Link} href="/practice-areas/litigation" className="border-0 px-0 py-2 bg-transparent text-muted hover-text-gold transition-colors">
                       Litigation & Dispute
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Footer */}
      <section className="bg-navy py-5 text-white text-center">
        <Container className="py-4">
          <h2 className="display-6 fw-bold mb-4">Ready to Discuss Your Case?</h2>
          <Link href="/book-consultation" className="btn btn-gold px-5 py-3 rounded-0 fs-5">
            Book a Meeting with Our Team
          </Link>
        </Container>
      </section>
    </div>
  );
}

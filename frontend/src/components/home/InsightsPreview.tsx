"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";

const posts = [
  { id: 1, title: "New Tax Directives: What Liberian Corporations Need to Know", slug: "tax-directives-2024", date: "MARCH 25, 2024", cat: "CORPORATE", img: "/images/blog-1.jpg" },
  { id: 2, title: "Protecting Customary Land Rights in Rapidly Developing Urban Areas", slug: "customary-land-rights", date: "MARCH 18, 2024", cat: "PROPERTY", img: "/images/blog-2.jpg" },
  { id: 3, title: "The Liberian Maritime Registry: A Hub for Global Trade Excellence", slug: "maritime-registry-excellence", date: "MARCH 12, 2024", cat: "MARITIME", img: "/images/blog-3.jpg" },
];

const InsightsPreview = () => {
  return (
    <section className="py-5 bg-white">
      <Container className="py-lg-5">
        <div className="d-flex justify-content-between align-items-end mb-5 reveal visible">
          <h2 className="display-4 fw-bold text-navy">Legal Perspectives</h2>
          <Link href="/insights" className="text-muted small fw-bold text-decoration-none border-bottom pb-1 hover-text-gold transition-colors">VIEW ALL INSIGHTS</Link>
        </div>

        <Row className="gy-4">
          {posts.map((post) => (
            <Col key={post.id} md={4}>
              <Card className="border-0 reveal visible h-100">
                <div className="overflow-hidden mb-4" style={{ height: '240px' }}>
                   <img src={post.img} alt={post.title} className="img-fluid w-100 h-100 object-fit-cover hover-scale transition-all" />
                </div>
                <Card.Body className="p-0">
                  <div className="d-flex gap-3 mb-2">
                     <span className="text-gold fw-bold smaller">{post.cat}</span>
                     <span className="text-muted smaller">/ {post.date}</span>
                  </div>
                  <Card.Title className="fw-bold h5 text-navy mb-3 lh-base">
                    <Link href={`/insights/${post.slug}`} className="text-decoration-none text-navy hover-text-gold transition-colors">{post.title}</Link>
                  </Card.Title>
                  <p className="text-muted small opacity-75">Analyzing the recent changes in regulatory frameworks and their impact on local business...</p>
                  <Link href={`/insights/${post.slug}`} className="text-gold fw-bold smaller text-decoration-none mt-auto pt-2 d-block">READ MORE &rarr;</Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      
      <style jsx>{`
        .smaller { font-size: 0.65rem; letter-spacing: 0.05em; }
        .hover-scale {
          &:hover { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default InsightsPreview;

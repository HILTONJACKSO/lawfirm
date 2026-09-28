"use client";

import { Container, Row, Col, Accordion } from "react-bootstrap";
import { QuestionCircleFill } from "react-bootstrap-icons";

export default function FAQPage() {
  const faqs = [
    { q: "What should I bring to my initial consultation?", a: "Please bring any relevant legal documents, identification, and a summary of your situation. This helps our attorneys provide the most accurate initial assessment." },
    { q: "How are legal fees calculated at Century Law?", a: "Fees vary based on the complexity of the matter. We offer hourly rates, flat fees for specific services, and contingency fee arrangements in qualified cases." },
    { q: "Do you represent international clients?", a: "Yes, a significant portion of our practice involves representing multi-national corporations and foreign investors operating within the Republic of Liberia." },
    { q: "How long does a typical litigation case take in Liberia?", a: "Timeline depends on the court's docket and the complexity of the dispute. Our strategy always prioritizes the most efficient path to resolution." },
    { q: "Can I book a virtual consultation?", a: "Absolutely. We offer secure video conferencing for clients who cannot visit our Monrovia office in person." },
  ];

  return (
    <div className="bg-light pb-5">
      {/* Header */}
      <div className="bg-navy py-5 text-white mb-5 shadow-sm">
        <Container className="py-4 text-center">
          <h1 className="display-4 fw-bold mb-3 border-0 text-white p-0">Frequently Asked <span className="text-gold">Questions</span></h1>
          <p className="lead opacity-75 fs-4 mx-auto" style={{ maxWidth: '800px' }}>
             Navigating the legal system can be complex. We've compiled answers to some of the most common questions our clients ask.
          </p>
        </Container>
      </div>

      <Container className="py-lg-5">
         <Row className="justify-content-center">
            <Col lg={9}>
               <Accordion className="border-0 shadow-sm rounded-0 bg-white">
                  {faqs.map((faq, idx) => (
                    <Accordion.Item key={idx} eventKey={idx.toString()} className="border-0 border-bottom">
                      <Accordion.Header className="py-3 fw-bold fs-5 text-navy">{faq.q}</Accordion.Header>
                      <Accordion.Body className="fs-5 text-muted pe-md-5" style={{ lineHeight: '1.7' }}>
                        {faq.a}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
               </Accordion>

               <div className="mt-5 p-5 bg-navy text-white text-center rounded-0 border-top border-5 border-gold">
                  <QuestionCircleFill size={50} className="text-gold mb-3" />
                  <h3 className="fw-bold mb-3">Still have questions?</h3>
                  <p className="opacity-75 mb-4">Our team is ready to provide the specific answers you're looking for.</p>
                  <div className="d-flex flex-wrap justify-content-center gap-4">
                     <a href="/contact" className="btn btn-gold px-5 py-2 rounded-0">Contact Support</a>
                     <a href="/book-consultation" className="btn btn-outline-light px-5 py-2 rounded-0 border-2">Book Consultation</a>
                  </div>
               </div>
            </Col>
         </Row>
      </Container>
    </div>
  );
}

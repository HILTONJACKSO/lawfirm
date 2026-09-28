"use client";

import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

const HeroSection = () => {
  return (
    <section 
      className="position-relative d-flex align-items-center"
      style={{
        height: '90vh',
        backgroundImage: `linear-gradient(90deg, rgba(4, 11, 22, 0.95) 0%, rgba(4, 11, 22, 0.75) 40%, rgba(4, 11, 22, 0.1) 100%), url('/hero-team.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Container className="reveal visible">
        <Row>
          <Col lg={8} xl={7}>
            <div className="mb-4">
               <span className="text-gold fw-bold letter-spacing-wide fs-6 d-block mb-3 opacity-75">
                  ESTABLISHED 1991 | MONROVIA, LIBERIA
               </span>
               <h1 className="display-1 fw-bold text-white mb-2" style={{ lineHeight: '0.9' }}>
                  Justice.<br />
                  Precision.<br />
                  Excellence.
               </h1>
               <div className="mt-5">
                  <Button 
                    href="/book-consultation"
                    className="btn-gold px-5 py-3 rounded-0 fw-bold letter-spacing-wide d-inline-flex align-items-center gap-3 fs-5"
                  >
                     BOOK A CONSULTATION <ArrowRight />
                  </Button>
               </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* Decorative element from design */}
      <div className="position-absolute bottom-0 start-0 w-100 p-5 d-none d-lg-block">
         <div className="border-bottom border-white border-opacity-10 w-100"></div>
      </div>
    </section>
  );
};

export default HeroSection;

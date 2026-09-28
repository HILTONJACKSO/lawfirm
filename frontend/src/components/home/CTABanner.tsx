"use client";

import { Container, Button } from "react-bootstrap";

const CTABanner = () => {
  return (
    <section className="py-5 bg-navy text-white text-center border-top border-white border-opacity-10">
      <Container className="py-lg-5 reveal visible">
         <h2 className="display-4 fw-bold mb-3 italic">Need Legal Representation? We're Ready.</h2>
         <p className="lead opacity-50 mb-5 fs-4">Our experts are standing by to review your case with the precision it deserves.</p>
         <Button 
            href="/contact" 
            className="btn-gold px-5 py-3 rounded-0 fw-bold letter-spacing-wide fs-5 border-0"
            style={{ minWidth: '300px' }}
         >
            CONNECT WITH AN ADVISOR
         </Button>
      </Container>
    </section>
  );
};

export default CTABanner;

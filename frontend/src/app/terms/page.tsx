"use client";

import { Container } from "react-bootstrap";

export default function TermsPage() {
  return (
    <div className="bg-white py-5">
      <Container className="py-5" style={{ maxWidth: '800px' }}>
        <h1 className="display-4 fw-bold mb-5 border-0 text-navy p-0">Terms of <span className="text-gold">Use</span></h1>
        <div className="content fs-5 text-muted lh-lg">
          <p className="mb-4"><strong>Effective Date: April 6, 2024</strong></p>
          <p className="mb-4">
            Welcome to the Century Law website. By accessing or using this site, you agree to comply with and be bound by the following terms and conditions.
          </p>
          <h2 className="h3 fw-bold text-navy mt-5 mb-4">1. No Attorney-Client Relationship</h2>
          <p className="mb-4">
            The information on this website is for informational purposes only and does not constitute legal advice. Accessing this site or contacting us does not create an attorney-client relationship until a formal engagement agreement is signed.
          </p>
          <h2 className="h3 fw-bold text-navy mt-5 mb-4">2. Disclaimer of Liability</h2>
          <p className="mb-4">
            Century Law is not responsible for any actions taken based on information provided on this site. You should seek professional legal counsel for your specific legal needs.
          </p>
        </div>
      </Container>
    </div>
  );
}

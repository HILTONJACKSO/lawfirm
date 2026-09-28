"use client";

import { Container } from "react-bootstrap";

export default function PrivacyPage() {
  return (
    <div className="bg-white py-5">
      <Container className="py-5" style={{ maxWidth: '800px' }}>
        <h1 className="display-4 fw-bold mb-5 border-0 text-navy p-0">Privacy <span className="text-gold">Policy</span></h1>
        <div className="content fs-5 text-muted lh-lg">
          <p className="mb-4"><strong>Last Updated: April 6, 2024</strong></p>
          <p className="mb-4">
            Century Law ("we", "us", or "our") is committed to protecting the privacy of our clients and website visitors. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
          </p>
          <h2 className="h3 fw-bold text-navy mt-5 mb-4">1. Information Collection</h2>
          <p className="mb-4">
            We collect personal information that you provide voluntarily through our contact forms, consultation booking system, and client portal. This may include your name, email address, phone number, and details regarding your legal matter.
          </p>
          <h2 className="h3 fw-bold text-navy mt-5 mb-4">2. Use of Information</h2>
          <p className="mb-4">
            The information we collect is used solely for providing legal services, communicating with you, and managing our relationship with you. We do not sell or share your data with third parties for marketing purposes.
          </p>
          <h2 className="h3 fw-bold text-navy mt-5 mb-4">3. Data Security</h2>
          <p className="mb-4">
            We implement industry-standard security measures, including encryption and secure server environments, to protect your sensitive legal and personal information.
          </p>
        </div>
      </Container>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import { useAuth } from "@/context/AuthContext";
import { login as apiLogin } from "@/services/authService";
import Link from "next/link";
import { 
  ShieldLockFill, 
  Activity, 
  DatabaseFillLock, 
  ChatLeftDotsFill, 
  CreditCardFill, 
  PatchCheckFill,
  LockFill,
  Globe
} from "react-bootstrap-icons";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function LoginPage() {
  useScrollReveal();
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const data = await apiLogin(credentials);
      login(data.access, data.refresh);
    } catch (err: unknown) {
      const message =
        err instanceof Error && 'response' in err
          ? (err as { response?: { data?: { detail?: string } } }).response?.data?.detail
          : undefined;
      setError(message || 'Invalid credentials. Please verify your Case ID/Email and Password.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-white">
      <div className="flex-grow-1 d-flex flex-column flex-lg-row">
        {/* Left Side: Branding & Features */}
        <Col lg={7} className="bg-navy text-white p-4 p-xl-7 position-relative overflow-hidden d-flex flex-column justify-content-center min-vh-lg-85">
           {/* Decorative Elements */}
           <div className="scales-watermark">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,14.39 5.05,16.54 6.69,18L17.31,7.39C15.85,5.29 13.5,4 11,4H12M18,12C18,10.23 17.5,8.58 16.63,7.17L6.83,16.97C8.25,17.61 9.84,18 11.5,18C15.08,18 18,15.08 18,11.5V12M11,5H13V7H11V5M11,17H13V19H11V17M5,11H7V13H5V11M17,11H19V13H17V11Z" /></svg>
           </div>

           <div className="position-relative z-index-2 w-100" style={{ maxWidth: '700px', margin: '0 auto' }}>
              <div className="d-flex align-items-center gap-3 mb-4 reveal">
                 <div className="bg-gold" style={{ width: '40px', height: '1px' }}></div>
                 <span className="smaller fw-bold letter-spacing-widest text-gold uppercase mt-1">CENTURY LAW EDITORIAL</span>
              </div>

              <h1 className="display-4 fw-bold mb-4 serif reveal" style={{ lineHeight: '1.2' }}>
                Authoritative Counsel, <br />Modern Solutions.
              </h1>

              <p className="fs-6 opacity-75 mb-5 reveal" style={{ lineHeight: '1.7', maxWidth: '500px' }}>
                Our digital portal provides seamless integration with your legal journey, ensuring transparency and security at every milestone.
              </p>

              <Row className="gx-0 gy-0 mt-4 reveal">
                 <Col md={6}>
                    <div className="portal-side-feature">
                       <span className="smaller fw-bold text-gold d-block mb-3 uppercase">FEATURE 01</span>
                       <h3 className="h6 fw-bold mb-2 d-flex align-items-center gap-2">
                          Real-time Case Tracking
                       </h3>
                       <p className="tiny opacity-50 mb-0">Monitor every legal update as it happens in our live docket.</p>
                    </div>
                 </Col>
                 <Col md={6}>
                    <div className="portal-side-feature border-start-md-0">
                       <span className="smaller fw-bold text-gold d-block mb-3 uppercase">FEATURE 02</span>
                       <h3 className="h6 fw-bold mb-2">Secure Repository</h3>
                       <p className="tiny opacity-50 mb-0">End-to-end encrypted storage for sensitive legal documentation.</p>
                    </div>
                 </Col>
                 <Col md={6}>
                    <div className="portal-side-feature border-top-0">
                       <span className="smaller fw-bold text-gold d-block mb-3 uppercase">FEATURE 03</span>
                       <h3 className="h6 fw-bold mb-2 text-white">Counsel Messaging</h3>
                       <p className="tiny opacity-50 mb-0">Direct, secure communication channel with your legal team.</p>
                    </div>
                 </Col>
                 <Col md={6}>
                    <div className="portal-side-feature border-top-0 border-start-md-0">
                       <span className="smaller fw-bold text-gold d-block mb-3 uppercase">FEATURE 04</span>
                       <h3 className="h6 fw-bold mb-2">Interactive Billing</h3>
                       <p className="tiny opacity-50 mb-0">Detailed invoices and secure payment processing in one place.</p>
                    </div>
                 </Col>
              </Row>

              <div className="mt-4 d-flex gap-5 reveal opacity-75">
                 <div className="d-flex align-items-center gap-2 smaller fw-bold letter-spacing-wide">
                    <PatchCheckFill className="text-gold" /> 256-BIT SSL SECURE
                 </div>
                 <div className="d-flex align-items-center gap-2 smaller fw-bold letter-spacing-wide">
                    <LockFill className="text-gold" /> CONFIDENTIAL ACCESS
                 </div>
              </div>
           </div>
        </Col>

        {/* Right Side: Login Form */}
        <Col lg={5} className="bg-cream-portal p-4 p-xl-7 d-flex flex-column justify-content-center align-items-center min-vh-lg-85">
           <div className="w-100" style={{ maxWidth: '400px' }}>
              <div className="text-center mb-4 reveal">
                 <span className="smaller fw-bold text-gold letter-spacing-widest uppercase mb-2 d-block">SECURE ACCESS</span>
                 <h2 className="h2 fw-bold text-navy serif">Century Law Portal</h2>
              </div>

              {error && <Alert variant="danger" className="py-2 rounded-0 small border-0 shadow-sm mb-4">{error}</Alert>}

              <Form onSubmit={handleSubmit} className="reveal">
                 <Form.Group className="mb-3">
                    <Form.Label className="smaller fw-bold text-charcoal opacity-50 uppercase letter-spacing-wide mb-1">CASE ID OR EMAIL</Form.Label>
                    <Form.Control 
                       className="portal-form-control shadow-sm"
                       placeholder="e.g. CL-2024-001"
                       value={credentials.username}
                       onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                       required
                    />
                 </Form.Group>

                 <Form.Group className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                       <Form.Label className="smaller fw-bold text-charcoal opacity-50 uppercase letter-spacing-wide mb-0">PASSWORD</Form.Label>
                       <Link href="#" className="tiny fw-bold text-gold text-decoration-none letter-spacing-wide">FORGOT?</Link>
                    </div>
                    <Form.Control 
                       type="password"
                       className="portal-form-control shadow-sm"
                       placeholder="••••••••••••"
                       value={credentials.password}
                       onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                       required
                    />
                 </Form.Group>

                 <Button type="submit" className="btn-gold w-100 py-3 rounded-0 fw-bold letter-spacing-widest smaller uppercase shadow-lg border-0 mb-4" disabled={isSubmitting}>
                    {isSubmitting ? <Spinner animation="border" size="sm" /> : "LOGIN TO PORTAL"}
                 </Button>

                 <div className="text-center pt-4 border-top border-stone reveal">
                    <h3 className="h6 fw-bold text-navy mb-3 serif">First Time Here?</h3>
                    <p className="tiny text-charcoal opacity-75 mb-3 px-2" style={{ lineHeight: '1.5' }}>
                       Portal access is provided exclusively to existing clients. Contact your admin for credentials.
                    </p>
                    <Link href="/register" className="tiny fw-bold text-gold letter-spacing-widest text-decoration-none border-bottom border-gold border-2 pb-1 uppercase">
                       REGISTER FOR ACCESS
                    </Link>
                 </div>
              </Form>
           </div>
        </Col>
      </div>

      {/* Specialist Portal Footer */}
      <footer className="bg-navy border-top border-white border-opacity-10 py-5 text-white">
         <Container>
            <Row className="gy-4">
               <Col lg={4}>
                  <h2 className="h5 fw-bold mb-3 serif text-white">Century Law</h2>
                  <p className="tiny opacity-50 letter-spacing-wide uppercase lh-lg" style={{ maxWidth: '280px' }}>
                     Established prestige in legal excellence. Secure advisory services.
                  </p>
               </Col>
               <Col lg={4} className="ms-auto">
                  <span className="tiny fw-bold text-gold letter-spacing-widest uppercase mb-3 d-block">QUICK LINKS</span>
                  <div className="d-flex flex-column gap-2">
                     <Link href="#" className="tiny text-white opacity-50 text-decoration-none hover-opacity-100 uppercase letter-spacing-wide">TERMS OF SERVICE</Link>
                     <Link href="#" className="tiny text-white opacity-50 text-decoration-none hover-opacity-100 uppercase letter-spacing-wide">PRIVACY POLICY</Link>
                     <Link href="#" className="tiny text-white opacity-50 text-decoration-none hover-opacity-100 uppercase letter-spacing-wide">CONTACT SUPPORT</Link>
                  </div>
               </Col>
               <Col lg={4} className="text-lg-end d-flex flex-column justify-content-between">
                  <div className="mb-3">
                     <span className="tiny fw-bold text-white opacity-100 d-flex align-items-center justify-content-lg-end gap-2 uppercase letter-spacing-wide">
                        <Globe size={12} className="text-gold" /> EN / FR / DE
                     </span>
                  </div>
                  <p className="tiny opacity-25 letter-spacing-widest uppercase mb-0 mt-auto">
                     © 2024 CENTURY LAW. ALL RIGHTS RESERVED.
                  </p>
               </Col>
            </Row>
         </Container>
      </footer>

      <style jsx>{`
        .bg-navy { background-color: #040B16 !important; }
        .bg-gold { background-color: #B8974D !important; }
        .text-gold { color: #B8974D !important; }
        .serif { font-family: 'Playfair Display', serif; }
        .smaller { font-size: 0.65rem; }
        .tiny { font-size: 0.6rem; }
        .letter-spacing-wide { letter-spacing: 0.12em; }
        .uppercase { text-transform: uppercase; }
        .mb-10 { margin-bottom: 5rem; }
        .py-10 { padding-top: 5rem; padding-bottom: 5rem; }
        .p-xl-7 { padding: 4rem !important; }
        
        @media (min-width: 992px) {
           .min-vh-lg-85 { min-height: 85vh; }
           .border-start-md-0 { border-left: none !important; }
        }
        
        .z-index-2 { z-index: 2; position: relative; }
        .scales-watermark {
          position: absolute;
          bottom: -5%;
          left: -5%;
          width: 50%;
          opacity: 0.03;
          pointer-events: none;
          z-index: 0;
        }
      `}</style>
    </div>
  );
}

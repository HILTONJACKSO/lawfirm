"use client";

import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import PracticeAreasGrid from "@/components/home/PracticeAreasGrid";
import CaseResultsSection from "@/components/home/CaseResultsSection";
import FeaturedAttorneys from "@/components/home/FeaturedAttorneys";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import InsightsPreview from "@/components/home/InsightsPreview";
import CTABanner from "@/components/home/CTABanner";
import { Container, Row, Col } from "react-bootstrap";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();
  return (
    <>
      <HeroSection />
      <TrustBar />
      
      <section className="py-5 bg-cream">
        <div className="container py-lg-5">
          <div className="row align-items-center gy-5">
            <Col lg={6}>
               <div className="position-relative reveal">
                  <img src="/hero-partner.jpg" alt="Senior Partner" className="img-fluid border-bottom-dark shadow-lg" />
                  <div className="position-absolute bottom-0 end-0 bg-navy p-4 p-md-5 d-none d-md-block translate-middle-y me-n5 shadow-lg" style={{ maxWidth: '300px' }}>
                     <p className="text-white mb-0 small fw-bold letter-spacing-wide opacity-50">SHIELDING YOUR FUTURE</p>
                     <h4 className="text-white mt-2 mb-0 h5 fw-bold">Defending your legacy is our focus.</h4>
                  </div>
               </div>
            </Col>
            <div className="col-lg-6 ps-lg-5 reveal" style={{ transitionDelay: '0.2s' }}>
              <span className="text-gold fw-bold mb-3 d-block letter-spacing-wide small">SINCE 2000</span>
              <h2 className="display-4 fw-bold mb-4 text-navy">The Century Law Offices Standard of Legal Counsel</h2>
              <p className="lead mb-4 text-charcoal opacity-75">
                Headed by Cllr. Johnson, a former Minister of Justice and Attorney General of Liberia, The Century Law Offices is the leader in professionalism and client satisfaction. Our Ashmun Street chambers provide top-notch legal, consultancy, and lobbying services to a wide range of global clientele.
              </p>
              
              <div className="p-4 bg-white border-start border-3 border-gold my-5 shadow-sm">
                 <p className="mb-0 italic text-muted">
                    "Our expertise in the practice of law and government converges to give our clients prompt answers and satisfactory solutions."
                 </p>
              </div>

              <a href="/about" className="text-navy fw-bold text-decoration-none border-bottom border-2 border-gold pb-1 hover-text-gold transition-colors">
                READ MORE ABOUT OUR LEADERSHIP &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <PracticeAreasGrid />
      <CaseResultsSection />
      <FeaturedAttorneys />
      <TestimonialsCarousel />
      <InsightsPreview />
      <CTABanner />
    </>
  );
}

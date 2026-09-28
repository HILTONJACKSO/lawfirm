"use client";

import { Container, Carousel } from "react-bootstrap";
import { Quote, StarFill } from "react-bootstrap-icons";

const testimonials = [
  { id: 1, name: "S. Johnson", case: "Corporate Litigation", rating: 5, text: "Century Law provided exceptional strategic counsel during our multi-million dollar acquisition. Their attention to detail in Liberian commercial law is unmatched." },
  { id: 2, name: "A. Kamara", case: "Real Estate Dispute", rating: 5, text: "Working with the team at Century Law was the best decision for my family. They secured our land rights when all hope seemed lost. Truly professional." },
  { id: 3, name: "M. Traore", case: "Maritime Arbitration", rating: 4, text: "Efficient, knowledgeable, and reliable. As a foreign investor, I felt completely protected by their legal expertise in the Liberian shipping registry." },
];

const TestimonialsCarousel = () => {
  return (
    <section className="py-5 bg-navy text-white overflow-hidden">
      <Container className="py-lg-5 position-relative">
        <div className="text-center mb-5">
           <Quote className="text-gold mb-3" size={60} style={{ opacity: 0.3 }} />
           <h2 className="display-5 fw-bold mb-2">Trusted by Clients <span className="text-gold">Across West Africa</span></h2>
           <p className="opacity-100 fs-5">Hear from the individuals and corporations we've proudly represented.</p>
        </div>

        <Carousel 
          controls={true} 
          indicators={true} 
          className="testimonial-carousel"
          interval={5000}
        >
          {testimonials.map((t) => (
            <Carousel.Item key={t.id} className="text-center pb-5 px-md-5">
              <div className="mx-auto mb-4 d-flex justify-content-center gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <StarFill key={i} className="text-gold" size={18} />
                ))}
              </div>
              <blockquote className="fs-3 fw-light mb-4 px-lg-5" style={{ lineHeight: '1.6', fontStyle: 'italic' }}>
                "{t.text}"
              </blockquote>
              <div className="mt-4">
                <span className="fw-bold d-block h5 mb-0 text-gold">{t.name}</span>
                <span className="text-uppercase small opacity-50 letter-spacing-wide">{t.case}</span>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
      
      <style jsx global>{`
        .testimonial-carousel .carousel-control-prev-icon,
        .testimonial-carousel .carousel-control-next-icon {
          filter: sepia(100%) saturate(300%) brightness(100%) hue-rotate(0deg);
        }
        .testimonial-carousel .carousel-indicators [data-bs-target] {
          background-color: #C9A84C;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsCarousel;

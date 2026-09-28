"use client";

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import { getPracticeAreas, PracticeArea } from "@/services/practiceService";
import { 
  Buildings, ShieldCheck, Globe, Gear, BriefcaseFill, 
  People, ShieldLock, ArrowRight, House
} from "react-bootstrap-icons";

// Icon mapping for practice areas - using only verified stable icons
const iconMap: { [key: string]: any } = {
  'real-estate': <House />,
  'commercial': <Buildings />,
  'labor': <People />,
  'procurement': <Gear />,
  'family': <People />,
  'rights': <ShieldCheck />,
  'legislative': <Buildings />,
  'concessions': <Globe />,
  'ngo': <Globe />,
  'tech': <Gear />,
  'energy': <Gear />,
  'copyright': <ShieldLock />,
};

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function PracticeAreasPage() {
  useScrollReveal();
  const [areas, setAreas] = useState<PracticeArea[]>([
    { id: 1, name: "Real Estate & Property Law", slug: "real-estate", short_description: "Providing the knowledge and skills to solve disputes, negotiate, and facilitate the acquisition of real estate for major investment and individual use." } as any,
    { id: 2, name: "Contracts & Commercial Law", slug: "commercial", short_description: "Expert representation in all contracts negotiations, formulations, and commercial transactions at an accelerated pace." } as any,
    { id: 3, name: "Labor & Employment Relations", slug: "labor", short_description: "Strategic representation for firms, individuals, and concession companies in sensitive collective bargaining and industrial issues." } as any,
    { id: 4, name: "Procurement & Public Administrative", slug: "procurement", short_description: "Guiding clients in procurement processes, bid documentation, and consultancy with a focus on integrity and competitive growth." } as any,
    { id: 5, name: "Family & Immigration Law", slug: "family", short_description: "Providing specialized legal services for adoption cases and family reunification through international immigration channels." } as any,
    { id: 6, name: "Human & Civil Rights", slug: "rights", short_description: "Advocacy centered on rule of law and good governance, including Child Rights and the Women Inheritance Act." } as any,
    { id: 7, name: "Legislative Drafting & Lobbying", slug: "legislative", short_description: "Providing immense expertise to lawmakers and interest groups in the drafting of legislation and professional lobbying." } as any,
    { id: 8, name: "Concession Agreements & Contracts", slug: "concessions", short_description: "First-class research and drafting of crucial investment documents and consultancy for governmental negotiations." } as any,
    { id: 9, name: "NGO Advisory & Retainer", slug: "ngo", short_description: "Premier services to international NGOs, providing guidance on employment, labor issues, and relations with government agencies." } as any,
    { id: 10, name: "Telecommunication & Technology", slug: "tech", short_description: "Legal services and consultancy to investors and service providers in a sector defined by accelerated changes and growth." } as any,
    { id: 11, name: "Energy & Natural Resources", slug: "energy", short_description: "Essential services to Liberia's largest investment sector, encompassing iron ore, gold, diamond, and oil potential." } as any,
    { id: 12, name: "Copyright Protection", slug: "copyright", short_description: "Safeguarding intellectual property and creative assets in alignment with modern legal architecture." } as any,
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const data = await getPracticeAreas();
        if (data && data.length > 0) {
          setAreas(data);
        }
      } catch (error) {
        // Fallback data is already initialized in state, so we just continue
      } finally {
        setLoading(false);
      }
    };
    fetchAreas();
  }, []);

  return (
    <div className="bg-cream min-vh-100 pb-5">
      {/* Editorial Header */}
      <div className="py-5 mb-5 mt-4">
        <Container>
          <Row className="align-items-end">
            <Col lg={8} className="reveal">
               <span className="text-gold fw-bold letter-spacing-wide small d-block mb-3 opacity-75 uppercase">OUR EXPERTISE</span>
               <h1 className="display-3 fw-bold text-navy mb-4" style={{ lineHeight: '1.1' }}>
                  Technical Precision <br />Across Every Discipline
               </h1>
               <p className="lead opacity-75 text-charcoal fs-5" style={{ maxWidth: '750px' }}>
                  Providing sophisticated legal counsel tailored to the complex strategic needs of international corporations, 
                  governmental bodies, and private estates within the Republic of Liberia.
               </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row className="gy-4">
          {areas.map((area, index) => (
            <Col key={area.id} md={6} lg={4} className={`reveal reveal-stagger-${(index % 6) + 1}`}>
               <Card 
                  as={Link} 
                  href={`/practice-areas/${area.slug}`} 
                  className="practice-area-card p-5 h-100 text-decoration-none bg-white border-0 shadow-sm border-bottom border-gold border-3 transition-all group"
               >
                  <div className="text-gold mb-4 fs-1 group-hover-scale opacity-75 transition-all">
                    {iconMap[area.slug] || <ShieldCheck />}
                  </div>
                  <Card.Title className="fw-bold h4 text-navy mb-3 letter-spacing-tight">
                     {area.name}
                  </Card.Title>
                  <Card.Text className="text-charcoal opacity-75 mb-4 small" style={{ lineHeight: '1.7' }}>
                    {area.short_description}
                  </Card.Text>
                  <div className="mt-auto d-flex align-items-center gap-3 text-gold fw-bold smaller letter-spacing-wide uppercase">
                     Explore Expertise <ArrowRight className="group-hover-translate" />
                  </div>
               </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .bg-cream { background-color: #F8F5F0 !important; }
        .bg-navy { background-color: #040B16 !important; }
        .text-navy { color: #040B16 !important; }
        .text-gold { color: #B8974D !important; }
        .smaller { font-size: 0.65rem; }
        .letter-spacing-wide { letter-spacing: 0.15em; }
        .uppercase { text-transform: uppercase; }
        
        .practice-area-card:hover {
           transform: translateY(-10px);
           box-shadow: 0 20px 40px rgba(4, 11, 22, 0.05) !important;
        }
        
        .group-hover-scale { transition: transform 0.3s ease; }
        .practice-area-card:hover .group-hover-scale { transform: scale(1.1); color: #040B16 !important; }
        
        .group-hover-translate { transition: transform 0.3s ease; }
        .practice-area-card:hover .group-hover-translate { transform: translateX(5px); }
        
        @media (max-width: 768px) {
           .display-3 { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
}

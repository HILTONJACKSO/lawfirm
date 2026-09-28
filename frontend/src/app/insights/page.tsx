"use client";

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import Link from "next/link";
import { getBlogPosts, getBlogCategories, BlogPost, BlogCategory } from "@/services/blogService";
import { Search, ArrowRight } from "react-bootstrap-icons";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function InsightsPage() {
  useScrollReveal();
  const [posts, setPosts] = useState<BlogPost[]>([
    { 
      id: 102, 
      title: "New Tax Directives: What Liberian Corporations Need to Know", 
      slug: "tax-directives-2024", 
      excerpt: "Analyzing the recent changes in regulatory frameworks and their impact on local business operations in the current fiscal year.", 
      published_at: "MARCH 25, 2024", 
      category: { name: "CORPORATE", slug: "corporate" }, 
      author: { full_name: "Cllr. Abraham Morais", slug: "abraham" }, 
      read_time: 15,
      content: "<h3>Executive Summary</h3><p>The Ministry of Finance and Development Planning has issued new directives regarding corporate tax compliance and reporting standards for the 2024 fiscal cycle. These changes aim to enhance transparency and streamline revenue collection mechanisms across all primary industry sectors.</p><h4>Key Compliance Verticals</h4><ul><li>Revised Quarterly Reporting Timelines</li><li>Digital Tax Filing Integration</li><li>New Deductible Eligibility Standards</li></ul><p>Our firm is currently advising major corporate entities on transitioning to these new frameworks to avoid penalties and optimize tax positioning.</p>",
      cover_image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop",
    } as any,
    { 
      id: 101, 
      title: "Constitutional Evolution: The Shifting Landscape of West African Jurisprudence", 
      slug: "constitutional-evolution", 
      excerpt: "An in-depth analysis of recent legislative amendments and their long-term implications for multinational entities operating within the ECOWAS framework.", 
      published_at: "OCTOBER 14, 2024", 
      category: { name: "GOVERNMENT & POLICY", slug: "government-policy" }, 
      author: { full_name: "Cllr. Varney Sherman", slug: "varney" }, 
      read_time: 12,
      content: "",
      cover_image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop", 
      featured: true 
    } as any,
    { 
      id: 1, 
      title: "Asset Protection Strategies for High-Net-Worth Individuals", 
      slug: "asset-protection", 
      excerpt: "Navigating the complexities of international trust structures and domestic safeguards in the current economic climate.", 
      published_at: "SEP 12, 2024", 
      category: { name: "CORPORATE", slug: "corporate" }, 
      author: { full_name: "Cllr. Sarah Wreh", slug: "sarah" }, 
      read_time: 8,
      content: "",
      cover_image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    } as any,
    { 
      id: 3, 
      title: "The Liberian Maritime Registry: A Hub for Global Trade Excellence", 
      slug: "maritime-registry-excellence", 
      excerpt: "Analyzing the operational strengths and regulatory framework of one of the world's most prestigious open registries.", 
      published_at: "MARCH 12, 2024", 
      category: { name: "MARITIME", slug: "maritime" }, 
      author: { full_name: "Cllr. Sarah Wreh", slug: "sarah" }, 
      read_time: 10,
      content: "<h3>Global Maritime Leadership</h3><p>The Liberian Maritime Registry remains a cornerstone of international shipping, offering technical support and safety standards that lead the industry. As a neutral jurisdiction with a strong legal framework, it provides unique advantages for shipowners and operators globally.</p>",
      cover_image: "https://images.unsplash.com/photo-1524522173746-f628baad3644?q=80&w=2070&auto=format&fit=crop"
    } as any,
    { 
      id: 2, 
      title: "Protecting Customary Land Rights in Rapidly Developing Urban Areas", 
      slug: "customary-land-rights", 
      excerpt: "Addressing the historical challenges and modern digitalization efforts in the Liberian land administration system.", 
      published_at: "MARCH 18, 2024", 
      category: { name: "PROPERTY", slug: "property" }, 
      author: { full_name: "Cllr. Joseph Kollie", slug: "joseph" }, 
      read_time: 6,
      content: "<h3>Land Reform in Liberia</h3><p>The Land Rights Act of 2018 marked a turning point in the recognition of customary land ownership. However, the implementation in urban periphery areas faces significant bureaucratic and traditional hurdles.</p>",
      cover_image: "https://images.unsplash.com/photo-1582408921715-18e7806365c1?q=80&w=2070&auto=format&fit=crop"
    } as any,
    { 
      id: 6, 
      title: "Due Process: A Core Pillar of Sovereignty and Justice", 
      slug: "due-process-sovereignty", 
      excerpt: "Reflections on defense strategies in white-collar proceedings and the protection of fundamental human rights.", 
      published_at: "AUG 28, 2024", 
      category: { name: "CRIMINAL", slug: "criminal" }, 
      author: { full_name: "Atty. Abraham Morais", slug: "abraham" }, 
      read_time: 10,
      content: "",
      cover_image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop"
    } as any,
  ]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsData, categoriesData] = await Promise.all([
          getBlogPosts(),
          getBlogCategories()
        ]);
        if (postsData && postsData.length > 0) {
          setPosts(postsData);
        }
        if (categoriesData && categoriesData.length > 0) {
          setCategories(categoriesData);
        }
      } catch (error) {
        // Fallback data is already initialized in state
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const featuredPost = posts.find(p => (p as any).featured) || posts[0];
  const gridPosts = posts.filter(p => p.id !== featuredPost?.id);
  const filteredPosts = activeCategory === "all" 
    ? gridPosts 
    : gridPosts.filter(p => p.category.slug.includes(activeCategory.toLowerCase()));

  return (
    <div className="bg-cream min-vh-100 pb-0">
      {/* Editorial Header */}
      <div className="py-5 bg-white border-bottom border-navy border-opacity-10 mt-4">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} className="reveal">
               <span className="text-gold fw-bold letter-spacing-wide smaller d-block mb-3 uppercase">ESTABLISHED PERSPECTIVES</span>
               <h1 className="display-2 fw-bold text-navy mb-0 serif" style={{ lineHeight: '1' }}>
                  Legal Insights & <br />Perspectives
               </h1>
            </Col>
            <Col lg={4} className="ms-auto mt-4 mt-lg-0 reveal" style={{ transitionDelay: '0.3s' }}>
               <p className="fs-5 text-charcoal opacity-75 italic mb-0 text-lg-end" style={{ lineHeight: '1.4' }}>
                  A curated selection of legal scholarship and operational intelligence from our Monrovia chambers.
               </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Featured Post Hero */}
      {featuredPost && (
         <section className="py-5 mb-5 border-bottom border-stone reveal">
            <Container className="py-lg-4">
               <Row className="g-0 bg-white shadow-sm overflow-hidden border border-stone">
                  <Col lg={7} className="position-relative overflow-hidden" style={{ minHeight: '500px' }}>
                     <img 
                        src={featuredPost.cover_image || "/images/firm-team.jpg"} 
                        alt="Featured" 
                        className="absolute-full object-fit-cover grayscale transition-all scale-hover" 
                     />
                  </Col>
                  <Col lg={5} className="p-5 d-flex flex-column justify-content-center border-start border-stone">
                     <span className="smaller fw-bold text-gold letter-spacing-wide mb-4 uppercase">{featuredPost.category.name}</span>
                     <h2 className="display-6 fw-bold text-navy mb-4 serif" style={{ lineHeight: '1.2' }}>
                        {featuredPost.title}
                     </h2>
                     <p className="text-charcoal opacity-75 fs-5 mb-5" style={{ lineHeight: '1.7' }}>
                        {featuredPost.excerpt}
                     </p>
                     <div className="mt-auto d-flex justify-content-between align-items-center">
                        <span className="smaller fw-bold opacity-50 uppercase">{featuredPost.published_at}</span>
                        <Link href={`/insights/${featuredPost.slug}`} className="text-gold fw-bold smaller letter-spacing-wide d-flex align-items-center gap-2 text-decoration-none hover-underline">
                           READ PERSPECTIVE <ArrowRight />
                        </Link>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
      )}

      {/* Filter & Search Bar */}
      <div className="mb-5 bg-white py-3 border-bottom border-stone sticky-top z-index-10" style={{ top: '80px' }}>
         <Container>
            <Row className="align-items-center gy-3">
               <Col lg={8}>
                  <div className="d-flex flex-wrap gap-2 align-items-center">
                     <button onClick={() => setActiveCategory("all")} className={`btn-filter ${activeCategory === "all" ? "active" : ""}`}>ALL</button>
                     <button onClick={() => setActiveCategory("corporate")} className={`btn-filter ${activeCategory === "corporate" ? "active" : ""}`}>CORPORATE</button>
                     <button onClick={() => setActiveCategory("criminal")} className={`btn-filter ${activeCategory === "criminal" ? "active" : ""}`}>CRIMINAL</button>
                     <button onClick={() => setActiveCategory("real-estate")} className={`btn-filter ${activeCategory === "real-estate" ? "active" : ""}`}>REAL ESTATE</button>
                     <button onClick={() => setActiveCategory("family")} className={`btn-filter ${activeCategory === "family" ? "active" : ""}`}>FAMILY</button>
                     <button onClick={() => setActiveCategory("immigration")} className={`btn-filter ${activeCategory === "immigration" ? "active" : ""}`}>IMMIGRATION</button>
                  </div>
               </Col>
               <Col lg={4}>
                  <InputGroup className="border-bottom border-navy border-opacity-10">
                     <Form.Control placeholder="SEARCH PERSPECTIVES" className="border-0 bg-transparent ps-0 smaller fw-bold letter-spacing-wide" />
                     <Button variant="link" className="text-navy p-0"><Search size={16} /></Button>
                  </InputGroup>
               </Col>
            </Row>
         </Container>
      </div>

      {/* Insights Grid */}
      <Container className="mb-5 pb-5">
         <Row className="gy-5 gx-4">
            {filteredPosts.map((post, index) => (
               <Col key={post.id} md={6} lg={4} className={`reveal reveal-stagger-${(index % 3) + 1}`}>
                  <article className="editorial-card group pointer h-100 d-flex flex-column bg-white border border-stone shadow-sm hover-shadow transition-all">
                     <div className="image-container overflow-hidden position-relative mb-0" style={{ height: '300px' }}>
                        <img 
                           src={post.cover_image || "/images/firm-team.jpg"} 
                           alt={post.title} 
                           className="img-fluid w-100 grayscale transition-all scale-hover object-fit-cover absolute-full" 
                        />
                        <div className="absolute-full bg-navy opacity-0 group-hover-opacity-10 transition-all"></div>
                     </div>
                     <div className="p-4 p-xl-5 flex-grow-1 d-flex flex-column">
                        <span className="smaller fw-bold text-gold letter-spacing-wide mb-3 d-block uppercase">{post.category.name}</span>
                        <h3 className="h4 fw-bold text-navy mb-4 serif line-clamp-2" style={{ lineHeight: '1.3' }}>{post.title}</h3>
                        <p className="smaller text-charcoal opacity-75 mb-5 line-clamp-3" style={{ lineHeight: '1.7' }}>
                           {post.excerpt}
                        </p>
                        <div className="mt-auto d-flex justify-content-between align-items-center pt-4 border-top border-stone">
                           <span className="tiny fw-bold opacity-25 uppercase">{post.published_at}</span>
                           <Link href={`/insights/${post.slug}`} className="text-navy fw-bold smaller letter-spacing-wide d-flex align-items-center gap-2 text-decoration-none hover-text-gold">
                              READ MORE <ArrowRight />
                           </Link>
                        </div>
                     </div>
                  </article>
               </Col>
            ))}
         </Row>
      </Container>

      {/* Subscription Section */}
      <section className="py-5 bg-navy text-white text-center position-relative overflow-hidden">
         <div className="absolute-full d-flex align-items-center justify-content-center opacity-025 pointer-events-none select-none">
            <div className="serif text-white-opacity-10" style={{ fontSize: 'min(30vw, 15rem)', transform: 'rotate(-5deg)', fontWeight: '900', userSelect: 'none' }}>CL</div>
         </div>
         <Container className="position-relative z-index-2 py-5">
            <span className="smaller fw-bold letter-spacing-wide text-gold mb-3 d-block uppercase">EXCLUSIVE INTELLIGENCE</span>
            <h2 className="display-4 fw-bold mb-4 serif">Subscribe to Legal Insights</h2>
            <p className="opacity-75 mb-5 mx-auto fs-5" style={{ maxWidth: '650px' }}>
               Receive monthly distillations of the most significant legal developments affecting the Liberian and West African markets.
            </p>
            <div className="d-flex flex-column flex-md-row gap-0 justify-content-center align-items-stretch" style={{ maxWidth: '600px', margin: '0 auto' }}>
               <Form.Control 
                  placeholder="YOUR EMAIL ADDRESS" 
                  className="bg-white bg-opacity-10 border-0 rounded-0 text-white p-3 px-4 flex-grow-1"
                  style={{ borderBottom: '1px solid rgba(184, 151, 77, 0.5)' }}
               />
               <Button className="btn-gold px-5 py-3 rounded-0 fw-bold letter-spacing-wide smaller border-0 mt-3 mt-md-0">
                  SUBSCRIBE
               </Button>
            </div>
            <p className="tiny opacity-25 mt-4 letter-spacing-wide uppercase">BY SUBSCRIBING, YOU AGREE TO RECEIVE OUR PERIODIC BRIEFINGS AND PERSPECTIVES.</p>
         </Container>
      </section>

      <style jsx>{`
        .bg-cream { background-color: #F8F5F0 !important; }
        .bg-navy { background-color: #040B16 !important; }
        .text-navy { color: #040B16 !important; }
        .text-gold { color: #B8974D !important; }
        .smaller { font-size: 0.65rem; }
        .tiny { font-size: 0.55rem; }
        .opacity-025 { opacity: 0.025 !important; }
        .pointer-events-none { pointer-events: none; }
        .select-none { user-select: none; }
        .letter-spacing-wide { letter-spacing: 0.15em; }
        .uppercase { text-transform: uppercase; }
        .italic { font-style: italic; }
        .serif { font-family: 'Playfair Display', serif; }
        
        .btn-filter {
           background: transparent;
           border: none;
           padding: 0.5rem 1rem;
           font-size: 0.65rem;
           font-weight: 800;
           letter-spacing: 0.1em;
           color: #040B16;
           opacity: 0.5;
           transition: all 0.3s ease;
        }
        .btn-filter:hover { opacity: 1; color: #B8974D; }
        .btn-filter.active {
           color: #040B16;
           opacity: 1;
           border-bottom: 2px solid #B8974D;
        }
        
        .grayscale { filter: grayscale(100%); }
        .scale-hover:hover { transform: scale(1.05); }
        .transition-all { transition: all 0.5s ease; }
        .absolute-full { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        
        .hover-shadow:hover {
           box-shadow: 0 15px 45px rgba(4, 11, 22, 0.08) !important;
        }
        
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        
        .form-control::placeholder { color: rgba(255, 255, 255, 0.5) !important; }
        
        @media (max-width: 991px) {
           .display-2 { font-size: 3rem; }
           .display-4 { font-size: 2.2rem; }
        }
      `}</style>
    </div>
  );
}

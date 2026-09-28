import { Container, Row, Col, Badge, Button, Card } from "react-bootstrap";
import Link from "next/link";
import { getBlogPostBySlug } from "@/services/blogService";
import { Calendar3, Person, Clock, ArrowLeft, Facebook, Linkedin, Twitter } from "react-bootstrap-icons";

export default async function BlogPostDetailPage({ params }: { params: { slug: string } }) {
  let post: any = null;
  const { slug } = params;

  try {
    post = await getBlogPostBySlug(slug);
  } catch (error) {
    console.error("Failed to fetch blog post details", error);
  }

  if (!post) {
    return (
      <Container className="py-5 text-center">
        <h2 className="mb-4">Article Not Found</h2>
        <Link href="/insights" className="btn btn-navy">Back to Insights</Link>
      </Container>
    );
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-navy py-5 text-white mb-0 shadow-sm overflow-hidden position-relative">
        <Container className="py-4 position-relative z-index-1">
          <Link href="/insights" className="text-gold text-decoration-none d-flex align-items-center gap-2 mb-4 small fw-bold text-uppercase">
            <ArrowLeft /> Back to Insights
          </Link>
          <Row>
            <Col lg={10}>
              <div className="d-flex align-items-center gap-3 mb-3 small fw-bold text-uppercase letter-spacing-wide">
                <span className="text-gold">{post.category.name}</span>
                <span className="text-white opacity-50">|</span>
                <span className="text-white opacity-50">{new Date(post.published_at).toLocaleDateString()}</span>
              </div>
              <h1 className="display-4 fw-bold mb-4 border-0 text-white p-0">{post.title}</h1>
              <div className="d-flex align-items-center gap-4 py-3 border-top border-white border-opacity-10 mt-4">
                 <div className="d-flex align-items-center gap-2 text-gold fw-bold">
                    <Person size={20} />
                    <span>{post.author.full_name}</span>
                 </div>
                 <div className="d-flex align-items-center gap-2 text-white opacity-50">
                    <Clock size={18} />
                    <span>{post.read_time} min read</span>
                 </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Featured Image placeholder or real */}
      <div className="bg-stone py-5 text-center bg-opacity-25 border-bottom">
         <div className="container">
             <div className="display-1 opacity-10">📖</div>
             <p className="text-muted mt-3">Featured Imagery Analysis</p>
         </div>
      </div>

      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="article-content fs-5 text-muted opacity-90 mb-5" style={{ lineHeight: '1.8' }}>
               <p className="lead fw-bold text-dark mb-4">{post.excerpt}</p>
               {/* Content should be rendered as HTML if it's rich text */}
               <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <div className="d-flex justify-content-between align-items-center py-4 border-top border-bottom border-stone mt-5">
               <div className="d-flex align-items-center gap-3">
                  <span className="small fw-bold text-navy text-uppercase letter-spacing-wide">Share This:</span>
                  <Link href="#" className="text-muted hover-text-gold transition-colors"><Linkedin size={20} /></Link>
                  <Link href="#" className="text-muted hover-text-gold transition-colors"><Twitter size={20} /></Link>
                  <Link href="#" className="text-muted hover-text-gold transition-colors"><Facebook size={20} /></Link>
               </div>
               <div className="d-flex gap-2">
                  <Badge bg="stone" text="muted" className="rounded-0 px-3 py-2 fw-normal fs-6">Liberian Law</Badge>
                  <Badge bg="stone" text="muted" className="rounded-0 px-3 py-2 fw-normal fs-6">Strategy</Badge>
               </div>
            </div>

            {/* Author Sidebar/Bio can go here if needed */}
          </Col>
        </Row>
      </Container>

      {/* Related Posts Banner */}
      <section className="bg-light py-5">
         <Container>
            <h3 className="h4 fw-bold mb-4 text-navy border-bottom pb-3">Continue Reading</h3>
            <Row className="gy-4">
               {/* Manual Related Post for now */}
               <Col md={6}>
                  <Card className="border-0 shadow-sm rounded-0 p-4 h-100 card-luxury bg-white">
                     <span className="text-gold small fw-bold text-uppercase mb-2">Corporate</span>
                     <h4 className="h5 fw-bold mb-3">Understanding the Liberian Maritime Registry</h4>
                     <Link href="/insights/maritime-registry" className="text-navy fw-bold text-decoration-none small text-uppercase mt-auto">Read Article &rarr;</Link>
                  </Card>
               </Col>
            </Row>
         </Container>
      </section>
    </div>
  );
}

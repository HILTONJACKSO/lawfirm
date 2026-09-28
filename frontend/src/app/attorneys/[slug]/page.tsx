import { Container, Row, Col, ListGroup, Badge, Card } from "react-bootstrap";
import Link from "next/link";
import { getAttorneyBySlug } from "@/services/attorneyService";
import { 
  Linkedin, EnvelopeFill, ArrowLeft, 
  MortarboardFill, AwardFill, BriefcaseFill 
} from "react-bootstrap-icons";

export default async function AttorneyProfilePage({ params }: { params: { slug: string } }) {
  let attorney: any = null;
  const { slug } = params;

  try {
    attorney = await getAttorneyBySlug(slug);
  } catch (error) {
  }

  if (!attorney) {
    return (
      <Container className="py-5 text-center">
        <h2 className="mb-4">Attorney Profile Not Found</h2>
        <Link href="/attorneys" className="btn btn-navy">Back to Legal Team</Link>
      </Container>
    );
  }

  return (
    <div className="bg-light pb-5">
      {/* Dynamic Header */}
      <div className="bg-navy py-5 text-white mb-0 shadow-sm overflow-hidden position-relative">
        <div className="position-absolute bottom-0 end-0 opacity-10 p-5" style={{ fontSize: '15rem', transform: 'rotate(-15deg)', pointerEvents: 'none' }}>
           ⚖️
        </div>
        <Container className="py-4 position-relative z-index-1">
          <Link href="/attorneys" className="text-gold text-decoration-none d-flex align-items-center gap-2 mb-4 small fw-bold text-uppercase">
            <ArrowLeft /> Back to Legal Team
          </Link>
          <Row className="align-items-center">
            <Col lg={8}>
              <h1 className="display-4 fw-bold mb-2 border-0 text-white p-0">{attorney.full_name}</h1>
              <h2 className="h4 text-gold mb-4 fw-light opacity-90">{attorney.title}</h2>
              <div className="d-flex gap-3 mb-4 flex-wrap">
                 {attorney.specializations?.map((spec: any, idx: number) => (
                    <Badge key={idx} bg="light" text="dark" className="rounded-0 px-3 py-2 fw-normal fs-6">
                      {spec.practice_area_name}
                    </Badge>
                 ))}
              </div>
              <div className="d-flex gap-4">
                 <Link href="#" className="text-white opacity-75 hover-text-gold transition-colors"><Linkedin size={24} /></Link>
                 <Link href={`mailto:${attorney.email}`} className="text-white opacity-75 hover-text-gold transition-colors"><EnvelopeFill size={24} /></Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="mt-5">
        <Row className="gy-5">
          <Col lg={8}>
            <div className="bg-white p-5 shadow-sm mb-4">
               <h3 className="h4 fw-bold mb-4 text-navy border-bottom pb-3">Professional Biography</h3>
               <div className="content fs-5 text-muted mb-5" style={{ lineHeight: '1.8' }}>
                 {attorney.bio || "No biography available at this time."}
               </div>
               
               <h3 className="h4 fw-bold mb-4 text-navy border-bottom pb-3 mt-5">Education & Background</h3>
               {attorney.education && attorney.education.length > 0 ? (
                 <ListGroup variant="flush">
                    {attorney.education.map((edu: any, idx: number) => (
                      <ListGroup.Item key={idx} className="border-0 px-0 py-3 bg-transparent">
                         <div className="d-flex gap-3 align-items-start">
                            <MortarboardFill className="text-gold mt-1" size={24} />
                            <div>
                               <div className="fw-bold">{edu.degree}</div>
                               <div className="text-muted">{edu.institution}</div>
                               <div className="small text-gold">{edu.year}</div>
                            </div>
                         </div>
                      </ListGroup.Item>
                    ))}
                 </ListGroup>
               ) : (
                 <p className="text-muted">Education information not listed.</p>
               )}
            </div>
          </Col>

          <Col lg={4}>
             <div className="sticky-top" style={{ top: '100px' }}>
                <Card className="border-0 shadow-sm rounded-0 p-5 bg-white mb-4">
                   <h4 className="fw-bold mb-4 text-navy small text-uppercase letter-spacing-wide">Book a Confidential Consultation</h4>
                   <p className="text-muted mb-4 fs-6">Experience the technical precision and strategic depth that {attorney.full_name} brings to every case.</p>
                   <Link href="/book-consultation" className="btn btn-gold w-100 py-3 rounded-0 fs-5 text-decoration-none text-center d-block">
                      Schedule Now
                   </Link>
                </Card>
                
                <div className="p-5 border border-navy border-opacity-10 bg-white">
                   <h4 className="fw-bold mb-4 text-navy small text-uppercase letter-spacing-wide">Firm Affiliations</h4>
                   <div className="d-flex align-items-start gap-3 mb-3">
                      <AwardFill className="text-gold mt-1" size={20} />
                      <span className="small text-muted">Liberian National Bar Association</span>
                   </div>
                   <div className="d-flex align-items-start gap-3">
                      <BriefcaseFill className="text-gold mt-1" size={20} />
                      <span className="small text-muted">West African Legal Alliance</span>
                   </div>
                </div>
             </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

"use client";

import { useAuth } from "@/context/AuthContext";
import { Container, Row, Col, Card, Badge, ProgressBar, Table, Button } from "react-bootstrap";
import { 
  FolderFill, FileEarmarkTextFill, 
  ClockHistory, CheckCircleFill, ExclamationCircleFill 
} from "react-bootstrap-icons";

export default function DashboardPage() {
  const { user } = useAuth();

  const stats = [
    { name: 'Active Cases', count: 2, icon: <FolderFill />, color: 'navy' },
    { name: 'Pending Docs', count: 5, icon: <FileEarmarkTextFill />, color: 'gold' },
    { name: 'Unpaid Invoices', count: 1, icon: <ExclamationCircleFill />, color: 'danger' },
  ];

  const recentCases = [
    { id: 'CL-2024-082', title: 'Corporate Restructuring', status: 'In Progress', progress: 65, updated: '2 days ago' },
    { id: 'CL-2024-015', title: 'Land Title Verification', status: 'Completed', progress: 100, updated: '1 week ago' },
  ];

  return (
    <div className="reveal visible">
      <div className="mb-5">
         <h1 className="h2 fw-bold text-navy mb-2">Welcome Back, {user?.username}</h1>
         <p className="text-muted">Here is a summary of your active legal matters and pending actions.</p>
      </div>

      {/* Stats Grid */}
      <Row className="gy-4 mb-5">
         {stats.map((stat, idx) => (
           <Col key={idx} md={4}>
              <Card className="border-0 shadow-sm rounded-0 p-4 card-luxury">
                 <div className="d-flex align-items-center gap-4">
                    <div className={`bg-${stat.color} bg-opacity-10 p-3 text-${stat.color} fs-2`}>
                       {stat.icon}
                    </div>
                    <div>
                       <div className="h2 fw-bold text-navy mb-0">{stat.count}</div>
                       <div className="small text-muted text-uppercase fw-bold letter-spacing-wide">{stat.name}</div>
                    </div>
                 </div>
              </Card>
           </Col>
         ))}
      </Row>

      <Row className="gy-5">
         {/* Active Cases */}
         <Col xl={8}>
            <Card className="border-0 shadow-sm rounded-0 bg-white">
               <Card.Header className="bg-white p-4 border-bottom d-flex justify-content-between align-items-center">
                  <h3 className="h5 fw-bold mb-0 text-navy">Active Legal Matters</h3>
                  <Button variant="link" className="text-gold fw-bold text-decoration-none small text-uppercase p-0">View All</Button>
               </Card.Header>
               <Card.Body className="p-0">
                  <Table responsive hover className="mb-0">
                     <thead className="bg-light">
                        <tr>
                           <th className="px-4 py-3 small text-uppercase letter-spacing-wide">Case / ID</th>
                           <th className="py-3 small text-uppercase letter-spacing-wide">Status</th>
                           <th className="py-3 small text-uppercase letter-spacing-wide" style={{ width: '200px' }}>Progress</th>
                           <th className="py-3 small text-uppercase letter-spacing-wide">Updated</th>
                        </tr>
                     </thead>
                     <tbody className="border-top-0">
                        {recentCases.map((c) => (
                           <tr key={c.id}>
                              <td className="px-4 py-4">
                                 <div className="fw-bold text-navy">{c.title}</div>
                                 <div className="small text-muted">{c.id}</div>
                              </td>
                              <td className="py-4">
                                 <Badge bg={c.status === 'Completed' ? 'success' : 'gold'} className="rounded-0 px-3 py-2 fw-normal">
                                    {c.status}
                                 </Badge>
                              </td>
                              <td className="py-4 align-middle">
                                 <div className="small mb-1 text-end">{c.progress}%</div>
                                 <ProgressBar now={c.progress} variant={c.progress === 100 ? 'success' : 'navy'} style={{ height: '6px' }} className="rounded-0" />
                              </td>
                              <td className="py-4 small text-muted">{c.updated}</td>
                           </tr>
                        ))}
                     </tbody>
                  </Table>
               </Card.Body>
            </Card>
         </Col>

         {/* Notifications / Right Sidebar */}
         <Col xl={4}>
            <Card className="border-0 shadow-sm rounded-0 bg-navy text-white p-4">
               <h4 className="text-gold mb-4 fw-bold small text-uppercase letter-spacing-wide">Next Steps</h4>
               <div className="d-flex flex-column gap-4">
                  <div className="d-flex gap-3">
                     <div className="text-gold flex-shrink-0 mt-1"><CheckCircleFill /></div>
                     <div>
                        <div className="small fw-bold">Sign Retainer Agreement</div>
                        <div className="small opacity-50">Sent via DocuSign yesterday</div>
                     </div>
                  </div>
                  <div className="d-flex gap-3">
                     <div className="text-gold flex-shrink-0 mt-1"><ClockHistory /></div>
                     <div>
                        <div className="small fw-bold">Pre-Trial Conference</div>
                        <div className="small opacity-50">Monday, Apr 10 at 9:00 AM</div>
                     </div>
                  </div>
                  <div className="d-flex gap-3">
                     <div className="text-gold flex-shrink-0 mt-1"><ExclamationCircleFill className="text-warning" /></div>
                     <div>
                        <div className="small fw-bold text-warning">Upload ID Documents</div>
                        <div className="small opacity-50">Required for compliance</div>
                     </div>
                  </div>
               </div>
               <Button variant="outline-gold" className="mt-5 w-100 py-3 rounded-0 fw-bold letter-spacing-wide border-2">
                  UPLOAD DOCUMENTS
               </Button>
            </Card>
         </Col>
      </Row>
    </div>
  );
}

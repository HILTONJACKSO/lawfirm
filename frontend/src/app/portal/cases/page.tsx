"use client";

import { Container, Row, Col, Card, Badge, Table, Button } from "react-bootstrap";
import { FolderFill, Search } from "react-bootstrap-icons";

export default function CasesPage() {
  const cases = [
    { id: 'CL-2024-082', title: 'Corporate Restructuring', practice: 'Corporate', status: 'In Progress', attorney: 'Cllr. Sherman', updated: '2 days ago' },
    { id: 'CL-2024-015', title: 'Land Title Verification', practice: 'Real Estate', status: 'Completed', attorney: 'Cllr. Sannoh', updated: '1 week ago' },
    { id: 'CL-2023-942', title: 'Maritime Arbitration', practice: 'Maritime', status: 'Closed', attorney: 'Cllr. Gongloe', updated: '3 months ago' },
  ];

  return (
    <div className="reveal visible">
      <div className="d-flex justify-content-between align-items-end mb-5">
         <div>
            <h1 className="h2 fw-bold text-navy mb-2">My Legal Matters</h1>
            <p className="text-muted">A comprehensive overview of all your cases with Century Law.</p>
         </div>
      </div>

      <Card className="border-0 shadow-sm rounded-0 bg-white">
         <Card.Header className="bg-white p-4 border-bottom">
            <Row className="align-items-center">
               <Col md={6}>
                  <h3 className="h5 fw-bold mb-0 text-navy">All Cases</h3>
               </Col>
               <Col md={6} className="text-end">
                  <div className="d-inline-flex border border-stone p-1">
                     <Button variant="light" className="rounded-0 small px-3 py-1 bg-navy text-white">Active</Button>
                     <Button variant="light" className="rounded-0 small px-3 py-1 text-muted border-0">All</Button>
                  </div>
               </Col>
            </Row>
         </Card.Header>
         <Card.Body className="p-0">
            <Table responsive hover className="mb-0">
               <thead className="bg-light">
                  <tr>
                     <th className="px-4 py-3 small text-uppercase letter-spacing-wide">Case ID</th>
                     <th className="py-3 small text-uppercase letter-spacing-wide">Title / Description</th>
                     <th className="py-3 small text-uppercase letter-spacing-wide">Practice Area</th>
                     <th className="py-3 small text-uppercase letter-spacing-wide">Lead Attorney</th>
                     <th className="py-3 small text-uppercase letter-spacing-wide">Status</th>
                     <th className="py-3 small text-uppercase letter-spacing-wide text-end px-4">Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {cases.map((c) => (
                     <tr key={c.id}>
                        <td className="px-4 py-4 fw-bold text-navy">{c.id}</td>
                        <td className="py-4 fs-6">{c.title}</td>
                        <td className="py-4 text-muted small">{c.practice}</td>
                        <td className="py-4 text-muted small">{c.attorney}</td>
                        <td className="py-4">
                           <Badge bg={c.status === 'Completed' ? 'success' : c.status === 'Closed' ? 'secondary' : 'gold'} className="rounded-0 px-3 py-2 fw-normal">
                              {c.status}
                           </Badge>
                        </td>
                        <td className="py-4 text-end px-4">
                           <Button variant="outline-navy" size="sm" className="rounded-0 px-3">Details</Button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </Table>
         </Card.Body>
      </Card>
    </div>
  );
}

"use client";

import { Container, Row, Col, Card, Table, Button, Badge } from "react-bootstrap";
import { CreditCardFill, PrinterFill, Download } from "react-bootstrap-icons";

export default function InvoicesPage() {
  const invoices = [
    { id: 'INV-2024-001', amount: '$1,250.00', status: 'Unpaid', dueDate: 'Apr 15, 2024', description: 'Initial Consultation & Research Fee' },
    { id: 'INV-2023-142', amount: '$4,500.00', status: 'Paid', dueDate: 'Dec 20, 2023', description: 'Court Representation - Civil Case 42' },
  ];

  return (
    <div className="reveal visible">
      <div className="mb-5">
         <h1 className="h2 fw-bold text-navy mb-2">Billing & Invoices</h1>
         <p className="text-muted">Manage your payments and view detailed financial statements.</p>
      </div>

      <Row className="gy-4 mb-5">
         <Col md={4}>
            <Card className="border-0 shadow-sm rounded-0 p-4 bg-navy text-white">
               <div className="small text-uppercase fw-bold text-gold letter-spacing-wide mb-2">TOTAL OUTSTANDING</div>
               <div className="h2 fw-bold mb-0">$1,250.00</div>
               <Button className="btn-gold mt-4 py-2 w-100 rounded-0 fw-bold letter-spacing-wide">PAY NOW</Button>
            </Card>
         </Col>
      </Row>

      <Card className="border-0 shadow-sm rounded-0 bg-white">
         <Card.Header className="bg-white p-4 border-bottom">
            <h3 className="h5 fw-bold mb-0 text-navy">Invoice History</h3>
         </Card.Header>
         <Card.Body className="p-0">
            <Table responsive hover className="mb-0">
               <thead className="bg-light">
                  <tr>
                     <th className="px-4 py-3 small text-uppercase letter-spacing-wide">Invoice ID</th>
                     <th className="py-3 small text-uppercase letter-spacing-wide">Description</th>
                     <th className="py-3 small text-uppercase letter-spacing-wide">Amount</th>
                     <th className="py-3 small text-uppercase letter-spacing-wide">Due Date</th>
                     <th className="py-3 small text-uppercase letter-spacing-wide">Status</th>
                     <th className="py-3 small text-uppercase letter-spacing-wide text-end px-4">Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {invoices.map((inv) => (
                     <tr key={inv.id}>
                        <td className="px-4 py-4 fw-bold text-navy">{inv.id}</td>
                        <td className="py-4">{inv.description}</td>
                        <td className="py-4 fw-bold">{inv.amount}</td>
                        <td className="py-4 small text-muted">{inv.dueDate}</td>
                        <td className="py-4">
                           <Badge bg={inv.status === 'Paid' ? 'success' : 'danger'} className="rounded-0 px-3 py-2 fw-normal">
                              {inv.status}
                           </Badge>
                        </td>
                        <td className="py-4 text-end px-4">
                           <div className="d-flex justify-content-end gap-2">
                              <Button variant="outline-stone" size="sm" className="rounded-0"><PrinterFill /></Button>
                              <Button variant="outline-stone" size="sm" className="rounded-0 border-2"><Download /></Button>
                           </div>
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

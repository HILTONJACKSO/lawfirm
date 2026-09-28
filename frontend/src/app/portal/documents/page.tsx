"use client";

import { Container, Row, Col, Card, Table, Button, Badge } from "react-bootstrap";
import { 
  FileEarmarkPdfFill, FileEarmarkWordFill, 
  Download, Upload, FileTextFill 
} from "react-bootstrap-icons";

export default function DocumentsPage() {
  const documents = [
    { id: 1, name: 'Retainer_Agreement_Signed.pdf', type: 'PDF', case: 'CL-2024-082', date: 'Apr 05, 2024', status: 'Verified' },
    { id: 2, name: 'Evidence_Inventory_Draft.docx', type: 'DOCX', case: 'CL-2024-015', date: 'Apr 02, 2024', status: 'Pending Review' },
    { id: 3, name: 'Supreme_Court_Ruling_392.pdf', type: 'PDF', case: 'General', date: 'Mar 15, 2024', status: 'Public Record' },
  ];

  return (
    <div className="reveal visible">
      <div className="d-flex justify-content-between align-items-end mb-5">
         <div>
            <h1 className="h2 fw-bold text-navy mb-2">Document Repository</h1>
            <p className="text-muted">Secure access to your legal filings, contracts, and evidence.</p>
         </div>
         <Button className="btn-gold px-4 py-2 rounded-0 d-flex align-items-center gap-2 fw-bold shadow-sm">
            <Upload /> UPLOAD FILE
         </Button>
      </div>

      <Card className="border-0 shadow-sm rounded-0 bg-white">
         <Card.Body className="p-0">
            <Table responsive hover className="mb-0">
               <thead className="bg-light">
                  <tr>
                     <th className="px-4 py-3 small text-uppercase letter-spacing-wide">Document Name</th>
                     <th className="py-3 small text-uppercase letter-spacing-wide">Type</th>
                     <th className="py-3 small text-uppercase letter-spacing-wide">Linked Case</th>
                     <th className="py-3 small text-uppercase letter-spacing-wide">Date Modified</th>
                     <th className="py-3 small text-uppercase letter-spacing-wide">Status</th>
                     <th className="py-3 small text-uppercase letter-spacing-wide text-end px-4">Download</th>
                  </tr>
               </thead>
               <tbody>
                  {documents.map((doc) => (
                     <tr key={doc.id}>
                        <td className="px-4 py-4">
                           <div className="d-flex align-items-center gap-3">
                              {doc.type === 'PDF' ? <FileEarmarkPdfFill className="text-danger fs-4" /> : <FileEarmarkWordFill className="text-primary fs-4" />}
                              <span className="fw-bold text-navy">{doc.name}</span>
                           </div>
                        </td>
                        <td className="py-4 small text-muted">{doc.type}</td>
                        <td className="py-4 small">{doc.case}</td>
                        <td className="py-4 small text-muted">{doc.date}</td>
                        <td className="py-4">
                           <span className={`small fw-bold ${doc.status === 'Verified' ? 'text-success' : 'text-warning'}`}>
                              {doc.status}
                           </span>
                        </td>
                        <td className="py-4 text-end px-4">
                           <Button variant="outline-stone" size="sm" className="rounded-0 text-navy border-2">
                              <Download />
                           </Button>
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

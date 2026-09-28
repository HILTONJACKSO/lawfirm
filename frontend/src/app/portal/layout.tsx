"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { Container, Row, Col, ListGroup, Nav, Button, Spinner } from "react-bootstrap";
import Link from "next/link";
import { 
  Grid1x2Fill, FolderFill, FileTextFill, CreditCardFill, 
  PersonCircle, BoxArrowRight, BellFill 
} from "react-bootstrap-icons";

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const { user, loading, isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [loading, isAuthenticated, router]);

  if (loading) {
    return (
      <div className="vh-100 d-flex align-items-center justify-content-center bg-stone bg-opacity-25">
        <Spinner animation="border" variant="gold" />
      </div>
    );
  }

  if (!isAuthenticated) return null;

  const menuItems = [
    { name: 'Dashboard', icon: <Grid1x2Fill />, path: '/portal/dashboard' },
    { name: 'Active Cases', icon: <FolderFill />, path: '/portal/cases' },
    { name: 'Documents', icon: <FileTextFill />, path: '/portal/documents' },
    { name: 'Invoices', icon: <CreditCardFill />, path: '/portal/invoices' },
  ];

  return (
    <div className="bg-light min-vh-100">
      {/* Portal Top Bar */}
      <div className="bg-navy py-3 px-4 shadow-sm position-sticky top-0 z-index-100">
         <Container fluid>
            <div className="d-flex justify-content-between align-items-center">
               <Link href="/portal/dashboard" className="text-decoration-none">
                  <h3 className="h4 fw-bold text-white mb-0">CENTURY <span className="text-gold">PORTAL</span></h3>
               </Link>
               <div className="d-flex align-items-center gap-4">
                  <div className="text-white opacity-50"><BellFill size={20} /></div>
                  <div className="d-flex align-items-center gap-3 ps-4 border-start border-white border-opacity-10">
                     <div className="text-white text-end d-none d-md-block">
                        <div className="small fw-bold">{user?.username}</div>
                        <div className="small opacity-50" style={{ fontSize: '0.75rem' }}>CLIENT ID: #100{user?.id}</div>
                     </div>
                     <PersonCircle size={32} className="text-gold" />
                  </div>
               </div>
            </div>
         </Container>
      </div>

      <Container fluid className="px-0">
         <Row className="g-0">
            {/* Sidebar */}
            <Col lg={2} className="bg-white border-end min-vh-100 d-none d-lg-block shadow-sm">
               <div className="p-4">
                  <Nav className="flex-column gap-2 mt-4">
                     {menuItems.map((item) => (
                        <Nav.Link 
                           key={item.name} 
                           as={Link} 
                           href={item.path}
                           className={`p-3 d-flex align-items-center gap-3 rounded-0 transition-all ${pathname === item.path ? 'bg-navy text-white shadow-sm' : 'text-muted hover-bg-light'}`}
                        >
                           <span className={pathname === item.path ? 'text-gold' : 'text-navy'}>{item.icon}</span>
                           <span className="fw-medium">{item.name}</span>
                        </Nav.Link>
                     ))}
                     <div className="mt-5 pt-5 border-top border-stone">
                        <Button 
                           variant="link" 
                           onClick={logout}
                           className="p-3 d-flex align-items-center gap-3 text-danger text-decoration-none w-100 text-start hover-bg-light rounded-0"
                        >
                           <BoxArrowRight />
                           <span className="fw-medium">Sign Out</span>
                        </Button>
                     </div>
                  </Nav>
               </div>
            </Col>

            {/* Main Content */}
            <Col lg={10} className="p-4 p-md-5">
               {children}
            </Col>
         </Row>
      </Container>
    </div>
  );
}

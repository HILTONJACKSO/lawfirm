"use client";

import React, { useState } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { GeoAltFill, CameraVideoFill, ArrowRight } from "react-bootstrap-icons";

const attorneys = [
  { id: 1, name: "Cllr. Varney", title: "SENIOR MANAGING PARTNER", img: "/attorney-1.png" },
  { id: 2, name: "Cllr. Mensah-Kroma", title: "INTERNATIONAL ARBITRATION", img: "/attorney-2.png" },
  { id: 3, name: "Atty. George", title: "CORPORATE LITIGATION", img: "/attorney-3.png" },
];

const practiceAreas = [
  "Corporate & Commercial Law",
  "Maritime & Shipping Law",
  "Mining & Natural Resources",
  "Litigation & Dispute Resolution",
  "Real Estate & Property Law",
  "Banking & Financial Services",
];

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "01:30 PM", "03:00 PM", "03:30 PM", "04:30 PM", "05:00 PM"
];

const ConsultationForm = () => {
  const [selectedAttorney, setSelectedAttorney] = useState(1);
  const [consultationType, setConsultationType] = useState("in-person");
  const [selectedTime, setSelectedTime] = useState("10:00 AM");

  return (
    <div className="consultation-flow">
      {/* 01 Select Legal Counsel */}
      <section className="mb-5 pb-5">
        <div className="d-flex align-items-center gap-3 mb-5">
           <span className="display-6 fw-light text-gold opacity-25">01</span>
           <h2 className="h4 fw-bold text-navy mb-0 letter-spacing-wide">Select Legal Counsel</h2>
        </div>
        <Row className="gy-4">
          {attorneys.map((atty) => (
            <Col key={atty.id} md={4}>
              <div 
                className={`atty-card pointer transition-all overflow-hidden ${selectedAttorney === atty.id ? 'active' : ''}`}
                onClick={() => setSelectedAttorney(atty.id)}
              >
                <div className="img-container grayscale-hover">
                   <img src={atty.img} alt={atty.name} className="img-fluid w-100 h-100 object-fit-cover" />
                </div>
                <div className="p-4 bg-white border border-top-0">
                   <h3 className="h5 fw-bold text-navy mb-1">{atty.name}</h3>
                   <p className="smaller text-gold fw-bold mb-0 letter-spacing-wide">{atty.title}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* 02 & 03 Row */}
      <Row className="mb-5 pb-5">
        <Col lg={6}>
          <div className="d-flex align-items-center gap-3 mb-4">
             <span className="display-6 fw-light text-gold opacity-25">02</span>
             <h2 className="h4 fw-bold text-navy mb-0 letter-spacing-wide">Practice Area</h2>
          </div>
          <Form.Select className="form-control-luxury p-3 text-navy bg-white rounded-0">
             {practiceAreas.map((pa, idx) => <option key={idx}>{pa}</option>)}
          </Form.Select>
          <p className="smaller text-muted mt-3 opacity-50 letter-spacing-wide">PLEASE SELECT THE MOST RELEVANT SECTOR FOR YOUR INQUIRY</p>
        </Col>
        <Col lg={6} className="mt-5 mt-lg-0">
          <div className="d-flex align-items-center gap-3 mb-4">
             <span className="display-6 fw-light text-gold opacity-25">03</span>
             <h2 className="h4 fw-bold text-navy mb-0 letter-spacing-wide">Consultation Type</h2>
          </div>
          <Row className="gx-3">
             <Col xs={6}>
                <div 
                  className={`type-card p-4 text-center pointer transition-all ${consultationType === 'in-person' ? 'bg-navy text-white' : 'bg-white text-navy'}`}
                  onClick={() => setConsultationType('in-person')}
                >
                   <GeoAltFill size={24} className={consultationType === 'in-person' ? 'text-gold' : 'text-gold opacity-50'} />
                   <div className="small fw-bold mt-3 letter-spacing-wide">IN-PERSON</div>
                   <div className="smaller opacity-50">Monrovia Chambers</div>
                </div>
             </Col>
             <Col xs={6}>
                <div 
                  className={`type-card p-4 text-center pointer transition-all ${consultationType === 'virtual' ? 'bg-navy text-white' : 'bg-white text-navy'}`}
                  onClick={() => setConsultationType('virtual')}
                >
                   <CameraVideoFill size={24} className={consultationType === 'virtual' ? 'text-gold' : 'text-gold opacity-50'} />
                   <div className="small fw-bold mt-3 letter-spacing-wide">VIRTUAL</div>
                   <div className="smaller opacity-50">Zoom / Global</div>
                </div>
             </Col>
          </Row>
        </Col>
      </Row>

      {/* 04 Date & Time */}
      <section className="mb-5 pb-5">
         <div className="d-flex align-items-center gap-3 mb-5">
             <span className="display-6 fw-light text-gold opacity-25">04</span>
             <h2 className="h4 fw-bold text-navy mb-0 letter-spacing-wide">Date & Time Availability</h2>
         </div>
         <div className="bg-white shadow-sm p-4 p-lg-5">
            <Row className="gy-5">
               <Col lg={7}>
                  <div className="calendar-placeholder p-4 bg-cream h-100 text-center">
                     <div className="d-flex justify-content-between align-items-center mb-4">
                        <span className="fw-bold text-navy letter-spacing-wide">OCTOBER 2024</span>
                        <div className="d-flex gap-3">
                           <span className="pointer opacity-50">&lt;</span>
                           <span className="pointer">&gt;</span>
                        </div>
                     </div>
                     <div className="calendar-grid">
                        {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(d => <div key={d} className="smaller fw-bold opacity-25 py-2">{d}</div>)}
                        {[...Array(31)].map((_, i) => (
                           <div key={i} className={`py-3 smaller pointer ${i+1 === 5 ? 'bg-gold text-white' : ''}`}>
                              {i+1}
                           </div>
                        ))}
                     </div>
                  </div>
               </Col>
               <Col lg={5} className="ps-lg-5">
                  <h3 className="smaller fw-bold letter-spacing-wide opacity-50 mb-4">AVAILABLE SLOTS</h3>
                  <Row className="gx-2 gy-2">
                     {timeSlots.map(slot => (
                        <Col xs={6} key={slot}>
                           <div 
                              className={`p-3 text-center border pointer transition-all small ${selectedTime === slot ? 'border-gold bg-cream text-navy' : 'border-light'}`}
                              onClick={() => setSelectedTime(slot)}
                           >
                              {slot}
                           </div>
                        </Col>
                     ))}
                  </Row>
               </Col>
            </Row>
         </div>
      </section>

      {/* 05 Personal Details */}
      <section className="mb-5 pb-4">
         <div className="d-flex align-items-center gap-3 mb-5">
             <span className="display-6 fw-light text-gold opacity-25">05</span>
             <h2 className="h4 fw-bold text-navy mb-0 letter-spacing-wide">Personal Details</h2>
         </div>
         <Row className="gy-4">
            <Col md={6}>
               <Form.Group>
                  <Form.Label className="smaller fw-bold opacity-50 letter-spacing-wide mb-1">FULL NAME</Form.Label>
                  <Form.Control type="text" placeholder="Jefferson B. Williams" className="form-control-luxury" />
               </Form.Group>
            </Col>
            <Col md={6}>
               <Form.Group>
                  <Form.Label className="smaller fw-bold opacity-50 letter-spacing-wide mb-1">PHONE NUMBER</Form.Label>
                  <Form.Control type="text" placeholder="+231 770 000 000" className="form-control-luxury" />
               </Form.Group>
            </Col>
            <Col md={12}>
               <Form.Group>
                  <Form.Label className="smaller fw-bold opacity-50 letter-spacing-wide mb-1">EMAIL ADDRESS</Form.Label>
                  <Form.Control type="email" placeholder="j.williams@example.com" className="form-control-luxury" />
               </Form.Group>
            </Col>
            <Col md={12}>
               <Form.Group>
                  <Form.Label className="smaller fw-bold opacity-50 letter-spacing-wide mb-1">DESCRIPTION OF LEGAL MATTER</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Provide a brief overview of the situation requiring counsel..." className="form-control-luxury" />
               </Form.Group>
            </Col>
         </Row>
      </section>

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mt-5 pt-4">
         <div className="mb-4 mb-md-0 d-none d-md-block">
            <p className="smaller italic opacity-50 mb-1">"Lex et Justitia"</p>
            <p className="smaller opacity-25 mb-0" style={{ maxWidth: '300px' }}>
               By submitting this request, you acknowledge that a formal attorney-client relationship is only established upon signed engagement letter.
            </p>
         </div>
         <Button className="btn-gold px-5 py-3 rounded-0 fw-bold letter-spacing-wide fs-5 d-inline-flex align-items-center gap-3">
            REQUEST CONSULTATION <ArrowRight />
         </Button>
      </div>

      <style jsx>{`
        .pointer { cursor: pointer; }
        .smaller { font-size: 0.65rem; }
        .letter-spacing-wide { letter-spacing: 0.1em; }
        
        .img-container { height: 350px; overflow: hidden; }
        .atty-card {
          border-bottom: 3px solid transparent;
          &.active { border-bottom-color: #B8974D; }
          &:hover img { transform: scale(1.05); }
        }
        
        .type-card {
          border: 1px solid #EAE4DA;
          &.bg-navy { border-color: #040B16; }
        }
        
        .calendar-grid {
           display: grid;
           grid-template-columns: repeat(7, 1fr);
           gap: 1px;
        }
        
        .form-control-luxury {
          background: transparent;
          border: none;
          border-bottom: 1px solid #EAE4DA;
          border-radius: 0;
          padding: 1rem 0;
          color: #040B16;
          &:focus {
            box-shadow: none;
            border-bottom-color: #B8974D;
          }
        }
        
        .transition-all { transition: all 0.3s ease; }
        .grayscale-hover {
           filter: grayscale(100%);
           &:hover { filter: grayscale(0%); }
        }
        .italic { font-style: italic; }
      `}</style>
    </div>
  );
};

export default ConsultationForm;

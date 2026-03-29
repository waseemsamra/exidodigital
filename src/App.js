import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import HomePage from './components/HomePage';
import AIPage from './components/AIPage';
import EcommercePage from './components/EcommercePage';
import MobilePage from './components/MobilePage';
import MarketingPage from './components/MarketingPage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import SoftwarePage from './components/SoftwarePage';
import SecurityPage from './components/SecurityPage';
import NetworkPage from './components/NetworkPage';
import AccountingPage from './components/AccountingPage';
import DataWarehousingPage from './components/DataWarehousingPage';
import HostingPage from './components/HostingPage';
import CareersPage from './components/CareersPage';
import ContactPage from './components/ContactPage';
import InsightHub from './components/InsightHub';
import PartnerEcosystem from './components/PartnerEcosystem';
import MissionManifesto from './components/MissionManifesto';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import SecurityAudit from './components/SecurityAudit';
import APIDocumentation from './components/APIDocumentation';
import Works from './components/Works';
import CaseStudyAutonomousInventory from './components/case-studies/CaseStudyAutonomousInventory';
import CaseStudyDiagnosticAI from './components/case-studies/CaseStudyDiagnosticAI';
import CaseStudyPredictiveTrading from './components/case-studies/CaseStudyPredictiveTrading';
import CaseStudyHeadlessCommerce from './components/case-studies/CaseStudyHeadlessCommerce';
import CaseStudyFleetManagement from './components/case-studies/CaseStudyFleetManagement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ai" element={<AIPage />} />
        <Route path="/ecommerce" element={<EcommercePage />} />
        <Route path="/mobile" element={<MobilePage />} />
        <Route path="/marketing" element={<MarketingPage />} />
        <Route path="/software" element={<SoftwarePage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/network" element={<NetworkPage />} />
        <Route path="/accounting" element={<AccountingPage />} />
        <Route path="/data-warehousing" element={<DataWarehousingPage />} />
        <Route path="/hosting" element={<HostingPage />} />
        <Route path="/insight-hub" element={<InsightHub />} />
        <Route path="/partner-ecosystem" element={<PartnerEcosystem />} />
        <Route path="/mission-manifesto" element={<MissionManifesto />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/security-audit" element={<SecurityAudit />} />
        <Route path="/api-documentation" element={<APIDocumentation />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/autonomous-inventory" element={<CaseStudyAutonomousInventory />} />
        <Route path="/works/diagnostic-ai" element={<CaseStudyDiagnosticAI />} />
        <Route path="/works/predictive-trading" element={<CaseStudyPredictiveTrading />} />
        <Route path="/works/headless-commerce" element={<CaseStudyHeadlessCommerce />} />
        <Route path="/works/fleet-management" element={<CaseStudyFleetManagement />} />
        <Route path="/bi" element={<AIPage />} />
      </Routes>
    </Router>
  );
}

export default App;

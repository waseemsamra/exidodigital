import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Layout from './components/Layout';
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
import Contact from './components/Contact';
import InsightHub from './components/InsightHub';
import PartnerEcosystem from './components/PartnerEcosystem';
import MissionManifesto from './components/MissionManifesto';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import SecurityAudit from './components/SecurityAudit';
import APIDocumentation from './components/APIDocumentation';
import Works from './components/Works';
import Industries from './components/Industries';
import Healthcare from './components/Healthcare';
import FinTech from './components/FinTech';
import Logistics from './components/Logistics';
import RealEstate from './components/RealEstate';
import Ecommerce from './components/Ecommerce';
import Travel from './components/Travel';
import Education from './components/Education';
import Manufacturing from './components/Manufacturing';
import Platform from './components/Platform';
import Support from './components/Support';
import Partnership from './components/Partnership';
import NewsPress from './components/NewsPress';
import ETLSAutomationBlog from './components/blogs/ETLSAutomationBlog';
import ObsidianLayerBlog from './components/blogs/ObsidianLayerBlog';
import AtmosphericDataVizBlog from './components/blogs/AtmosphericDataVizBlog';
import GlobalNodeExpansionBlog from './components/blogs/GlobalNodeExpansionBlog';
import NeuralSynapseBlog from './components/blogs/NeuralSynapseBlog';
import EtherNetAnomalyBlog from './components/blogs/EtherNetAnomalyBlog';
import AsymmetricShardingBlog from './components/blogs/AsymmetricShardingBlog';
import MediaSolutions from './components/MediaSolutions';
import AllArticles from './components/AllArticles';
import FreeConsultation from './components/FreeConsultation';
import CaseStudyAutonomousInventory from './components/case-studies/CaseStudyAutonomousInventory';
import CaseStudyDiagnosticAI from './components/case-studies/CaseStudyDiagnosticAI';
import CaseStudyPredictiveTrading from './components/case-studies/CaseStudyPredictiveTrading';
import CaseStudyHeadlessCommerce from './components/case-studies/CaseStudyHeadlessCommerce';
import CaseStudyShoppingAssistant from './components/case-studies/CaseStudyShoppingAssistant';
import CaseStudyInventorySync from './components/case-studies/CaseStudyInventorySync';
import CaseStudyBankingApp from './components/case-studies/CaseStudyBankingApp';
import CaseStudyPatientMonitoring from './components/case-studies/CaseStudyPatientMonitoring';
import CaseStudyBiometricSecurity from './components/case-studies/CaseStudyBiometricSecurity';
import CaseStudyZeroTrustFleet from './components/case-studies/CaseStudyZeroTrustFleet';
import CaseStudyZeroTrustNetwork from './components/case-studies/CaseStudyZeroTrustNetwork';
import CaseStudyFleetManagement from './components/case-studies/CaseStudyFleetManagement';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/free-consultation" element={<FreeConsultation />} />
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
          <Route path="/industries" element={<Industries />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/fintech" element={<FinTech />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/realestate" element={<RealEstate />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/education" element={<Education />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/support" element={<Support />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/news" element={<NewsPress />} />
          <Route path="/news/etl-automation" element={<ETLSAutomationBlog />} />
          <Route path="/news/obsidian-layer" element={<ObsidianLayerBlog />} />
          <Route path="/news/atmospheric-viz" element={<AtmosphericDataVizBlog />} />
          <Route path="/news/global-expansion" element={<GlobalNodeExpansionBlog />} />
          <Route path="/news/neural-synapse" element={<NeuralSynapseBlog />} />
          <Route path="/news/ether-net-anomaly" element={<EtherNetAnomalyBlog />} />
          <Route path="/news/asymmetric-sharding" element={<AsymmetricShardingBlog />} />
          <Route path="/news/all-articles" element={<AllArticles />} />
          <Route path="/media-solutions" element={<MediaSolutions />} />
          <Route path="/works/autonomous-inventory" element={<CaseStudyAutonomousInventory />} />
          <Route path="/works/diagnostic-ai" element={<CaseStudyDiagnosticAI />} />
          <Route path="/works/predictive-trading" element={<CaseStudyPredictiveTrading />} />
          <Route path="/works/headless-commerce" element={<CaseStudyHeadlessCommerce />} />
          <Route path="/works/shopping-assistant" element={<CaseStudyShoppingAssistant />} />
          <Route path="/works/inventory-sync" element={<CaseStudyInventorySync />} />
          <Route path="/works/banking-app" element={<CaseStudyBankingApp />} />
          <Route path="/works/patient-monitoring" element={<CaseStudyPatientMonitoring />} />
          <Route path="/works/biometric-security" element={<CaseStudyBiometricSecurity />} />
          <Route path="/works/zero-trust-fleet" element={<CaseStudyZeroTrustFleet />} />
          <Route path="/works/zero-trust-network" element={<CaseStudyZeroTrustNetwork />} />
          <Route path="/works/fleet-management" element={<CaseStudyFleetManagement />} />
          <Route path="/bi" element={<AIPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

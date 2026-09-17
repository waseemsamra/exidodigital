import React, { useState } from 'react';

const tabs = [
  {
    id: 'ai',
    label: 'AI & Machine Learning Solutions',
    icon: (
      <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="2"></circle>
        <path d="M12 2a10 10 0 0 1 10 10"></path>
        <path d="M12 22a10 10 0 0 1-10-10"></path>
        <path d="M4.93 4.93l14.14 14.14"></path>
        <path d="M19.07 4.93L4.93 19.07"></path>
        <circle cx="12" cy="2" r="1"></circle>
        <circle cx="12" cy="22" r="1"></circle>
        <circle cx="2" cy="12" r="1"></circle>
        <circle cx="22" cy="12" r="1"></circle>
      </svg>
    ),
    title: 'AI & Machine Learning Solutions',
    description: 'We deliver production-ready AI systems that go beyond experimentation. From predictive analytics and computer vision to NLP and intelligent automation, our AI solutions are engineered for real-world enterprise environments. We focus on accuracy, governance, scalability, and measurable business impact.',
    tech: ['Azure AI', 'Hugging Face', 'Open AI', 'Tensorflow', 'PyTorch', 'LangChain', 'Pinecone Systems Inc Logo', 'FAISS'],
  },
  {
    id: 'liferay',
    label: 'Liferay Development',
    icon: (
      <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 18h6"></path>
        <path d="M10 22h4"></path>
        <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z"></path>
      </svg>
    ),
    title: 'Liferay Enterprise Platform Engineering',
    description: 'With one of the largest Liferay practices in the region, we build secure portals, citizen platforms, employee experience systems, and enterprise intranets for complex government and corporate ecosystems. Our solutions are fully customized, integration-ready, and built for long-term scalability.',
    tech: ['Liferay DXP', 'Spring Boot', 'Rest API Integration', 'Single Sign-On (SSO)', 'Elasticsearch', 'Keycloak', 'Microservices Architecture', 'Kubernetes'],
  },
  {
    id: 'custom',
    label: 'Custom Software Engineering',
    icon: (
      <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <polyline points="8 9 12 12 8 15"></polyline>
        <line x1="16" y1="9" x2="16" y2="15"></line>
      </svg>
    ),
    title: 'Custom Application Development',
    description: 'We architect and develop mission-critical applications tailored to your business model. From enterprise web platforms to large-scale backend systems, our engineering teams deliver secure, high-performance solutions aligned with governance, compliance, and scalability standards.',
    tech: ['.NET', 'Java', 'NodeJs', 'Python', 'React.js', 'Angular', 'Spring Boot', 'Next.js'],
  },
  {
    id: 'staff',
    label: 'Staff Augmentation',
    icon: (
      <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    title: 'Dedicated Development Teams',
    description: 'Scale your engineering capacity with pre-vetted, enterprise-experienced developers from our India delivery center, managed through our Dubai office. We provide structured governance, transparent reporting, and seamless integration with your internal teams.',
    tech: ['Microsoft .NET', 'Java', 'React & React Native', 'Python and Django', 'Liferay DXP', 'DevOps & CICD', 'Angular', 'Node.js'],
  },
  {
    id: 'modernization',
    label: 'Enterprise Modernization & Integration',
    icon: (
      <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        <path d="M8 10h8"></path>
        <path d="M8 14h8"></path>
      </svg>
    ),
    title: 'System Integration & Modernization',
    description: 'We help enterprises modernize legacy systems, migrate to cloud environments, and integrate multi-platform ecosystems. Our approach ensures business continuity, security compliance, and optimized operational performance.',
    tech: ['Microsoft Azure', 'AWS Cloud', 'Docker', 'Kubernetes', 'MuleSoft', 'Apache Kafka', 'Apache Camel', 'API Gateway'],
  },
];

function EnterpriseServices() {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <div className="main-container">
      <div className="top-header">
        <div className="header-text">
          <h1>Enterprise-Grade Software Engineering Services</h1>
          <p>We design, modernize, and scale secure digital platforms for governments and large enterprises across GCC and EMEA. Our engineering teams deliver resilient, high-performance systems built for compliance, security, and long-term scalability.</p>
        </div>
        <button className="btn-view-all">View All Services</button>
      </div>

      <div className="layout-wrapper">
        <div className="sidebar">
          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              className={`tab-item${index === active ? ' active' : ''}`}
              onClick={() => setActive(index)}
            >
              <div className="tab-icon">{tab.icon}</div>
              <div className="tab-text">{tab.label}</div>
            </div>
          ))}
        </div>

        <div className="content-panel">
          <h2>{current.title}</h2>
          <p>{current.description}</p>

          <div className="tech-grid">
            {current.tech.map((name, i) => (
              <div className="tech-card" key={i}>
                <div className="tech-logo">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" alt={name} />
                </div>
                <div className="tech-name">{name}</div>
              </div>
            ))}
          </div>

          <button className="btn-read-more">
            <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default EnterpriseServices;
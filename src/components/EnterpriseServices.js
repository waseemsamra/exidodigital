import React from 'react';

function EnterpriseServices() {
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
          <div className="tab-item active">
            <div className="tab-icon">
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
            </div>
            <div className="tab-text">AI & Machine Learning Solutions</div>
          </div>

          <div className="tab-item">
            <div className="tab-icon">
              <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 18h6"></path>
                <path d="M10 22h4"></path>
                <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z"></path>
              </svg>
            </div>
            <div className="tab-text">Liferay Development</div>
          </div>

          <div className="tab-item">
            <div className="tab-icon">
              <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <polyline points="8 9 12 12 8 15"></polyline>
                <line x1="16" y1="9" x2="16" y2="15"></line>
              </svg>
            </div>
            <div className="tab-text">Custom Software Engineering</div>
          </div>

          <div className="tab-item">
            <div className="tab-icon">
              <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="tab-text">Staff Augmentation</div>
          </div>

          <div className="tab-item">
            <div className="tab-icon">
              <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="M8 10h8"></path>
                <path d="M8 14h8"></path>
              </svg>
            </div>
            <div className="tab-text">Enterprise Modernization & Integration</div>
          </div>
        </div>

        <div className="content-panel">
          <h2>AI & Machine Learning Solutions</h2>
          <p>We deliver production-ready AI systems that go beyond experimentation. From predictive analytics and computer vision to NLP and intelligent automation, our AI solutions are engineered for real-world enterprise environments. We focus on accuracy, governance, scalability, and measurable business impact.</p>

          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" alt="Azure AI" />
              </div>
              <div className="tech-name">Azure AI</div>
            </div>

            <div className="tech-card">
              <div className="tech-logo">
                <img src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" alt="Hugging Face" />
              </div>
              <div className="tech-name">Hugging Face</div>
            </div>

            <div className="tech-card">
              <div className="tech-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" alt="OpenAI" />
              </div>
              <div className="tech-name">Open AI</div>
            </div>

            <div className="tech-card">
              <div className="tech-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" alt="TensorFlow" />
              </div>
              <div className="tech-name">Tensorflow</div>
            </div>

            <div className="tech-card">
              <div className="tech-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg" alt="PyTorch" />
              </div>
              <div className="tech-name">PyTorch</div>
            </div>

            <div className="tech-card">
              <div className="tech-logo">
                <img src="https://avatars.githubusercontent.com/u/126733545?s=200&v=4" alt="LangChain" />
              </div>
              <div className="tech-name">LangChain</div>
            </div>

            <div className="tech-card">
              <div className="tech-logo">
                <img src="https://avatars.githubusercontent.com/u/75748490?s=200&v=4" alt="Pinecone" />
              </div>
              <div className="tech-name">Pinecone Systems Inc Logo</div>
            </div>

            <div className="tech-card">
              <div className="tech-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Faiss_logo.png" alt="FAISS" />
              </div>
              <div className="tech-name">FAISS</div>
            </div>
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
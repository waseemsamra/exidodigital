import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function EtherNetAnomalyBlog() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary">
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center overflow-hidden px-8 md:px-20 py-24 bg-surface-container-low">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tertiary/10 border border-tertiary/20 mb-6">
              <span className="material-symbols-outlined text-tertiary text-sm">terminal</span>
              <span className="font-label text-xs tracking-widest text-tertiary uppercase">Technical Deep-Dive</span>
            </div>
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-tight">
              Real-time Anomaly Detection via <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Ether-Net</span>
            </h1>
            <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Utilizing temporal convolution networks for proactive infrastructure threat mitigation and predictive anomaly detection at global scale.
            </p>
            <div className="mt-12 flex items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary text-sm">science</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-on-surface">Exido Security Research</p>
                  <p className="text-xs text-on-surface-variant">Advanced Threat Detection Lab</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                <span className="material-symbols-outlined text-sm">schedule</span>
                <span>12 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-24 px-8 md:px-20">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-invert prose-lg max-w-none mb-16">
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                In an era where infrastructure threats evolve at machine speed, traditional reactive security measures are no longer sufficient. Exido's Ether-Net represents a paradigm shift toward proactive threat mitigation through advanced temporal convolution networks (TCNs) that detect anomalies before they escalate into critical incidents.
              </p>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                This technical deep-dive explores the architecture, implementation, and real-world performance of our proprietary anomaly detection system that processes 2.4 TB/s of telemetry data across 500+ global edge nodes.
              </p>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                <p className="font-headline text-4xl font-black text-primary mb-2">99.7%</p>
                <p className="text-on-surface-variant text-sm uppercase tracking-widest">Detection Accuracy</p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                <p className="font-headline text-4xl font-black text-secondary mb-2">&lt;50ms</p>
                <p className="text-on-surface-variant text-sm uppercase tracking-widest">Detection Latency</p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                <p className="font-headline text-4xl font-black text-tertiary mb-2">87%</p>
                <p className="text-on-surface-variant text-sm uppercase tracking-widest">False Positive Reduction</p>
              </div>
            </div>

            {/* Section 1 */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">The Challenge: Traditional Anomaly Detection Limitations</h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  Conventional anomaly detection systems rely on static thresholds and rule-based engines that struggle with the dynamic nature of modern distributed infrastructure. These approaches suffer from fundamental limitations:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-tertiary text-lg mt-0.5">warning</span>
                    <span><strong>High False Positive Rates:</strong> Static thresholds generate alert fatigue, causing security teams to miss genuine threats amid noise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-tertiary text-lg mt-0.5">warning</span>
                    <span><strong>Reactive Detection:</strong> Anomalies are only identified after they've already impacted system performance or security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-tertiary text-lg mt-0.5">warning</span>
                    <span><strong>Poor Temporal Understanding:</strong> Traditional ML models fail to capture time-dependent patterns and seasonal variations in infrastructure metrics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-tertiary text-lg mt-0.5">warning</span>
                    <span><strong>Scale Limitations:</strong> Rule-based systems don't scale horizontally across thousands of distributed nodes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Ether-Net Architecture</h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  Ether-Net leverages a multi-layered architecture combining temporal convolution networks, attention mechanisms, and distributed stream processing to achieve real-time anomaly detection at global scale.
                </p>
                
                <h3 className="font-headline text-2xl font-bold text-on-surface mt-8 mb-4">Core Components:</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-primary text-3xl">network_node</span>
                      <h4 className="font-headline text-lg font-bold text-on-surface">Temporal Convolution Networks</h4>
                    </div>
                    <p className="text-on-surface-variant text-sm">
                      TCNs process time-series telemetry data with causal convolutions, capturing long-range temporal dependencies while maintaining real-time inference capabilities. Dilated convolutions enable receptive fields spanning hours of historical data.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-secondary text-3xl">auto_awesome</span>
                      <h4 className="font-headline text-lg font-bold text-on-surface">Attention Mechanisms</h4>
                    </div>
                    <p className="text-on-surface-variant text-sm">
                      Self-attention layers identify critical timepoints and metric correlations, enabling the model to focus on anomalous patterns while filtering out normal operational variance.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-tertiary text-3xl">stream</span>
                      <h4 className="font-headline text-lg font-bold text-on-surface">Distributed Stream Processing</h4>
                    </div>
                    <p className="text-on-surface-variant text-sm">
                      Apache Kafka and Flink-based stream processing pipeline ingests 2.4 TB/s of telemetry data across 500+ edge nodes with sub-50ms end-to-end latency from collection to anomaly alert.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
                      <h4 className="font-headline text-lg font-bold text-on-surface">Adaptive Learning</h4>
                    </div>
                    <p className="text-on-surface-variant text-sm">
                      Continuous online learning adapts models to infrastructure changes and emerging threat patterns without requiring complete retraining cycles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Technical Implementation</h2>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 mb-8">
                <div className="aspect-video bg-surface-container-highest rounded-lg flex items-center justify-center border border-outline-variant/10">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-tertiary text-6xl mb-4">network_check</span>
                    <p className="text-on-surface-variant text-sm">Ether-Net Architecture Diagram</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  The Ether-Net implementation consists of four integrated layers working in concert:
                </p>
                <ol className="space-y-4 ml-6 list-decimal">
                  <li className="leading-relaxed">
                    <strong className="text-on-surface">Data Ingestion Layer:</strong> Real-time telemetry collection from infrastructure metrics (CPU, memory, network I/O, disk I/O), application logs, security events, and business metrics. Data is normalized, enriched with contextual metadata, and streamed to the processing layer.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-on-surface">Feature Engineering Layer:</strong> Automated feature extraction including statistical features (mean, variance, skewness), frequency-domain features (FFT coefficients), and temporal features (trends, seasonality, autocorrelation). Features are computed in real-time using sliding windows.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-on-surface">Model Inference Layer:</strong> Deployed TCN models process feature vectors with 50ms inference latency. Models are deployed across edge nodes for distributed inference, reducing central processing load and enabling faster anomaly detection.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-on-surface">Alert Orchestration Layer:</strong> Anomaly scores are aggregated, correlated across multiple metrics, and contextualized with business impact. Alerts are routed to appropriate teams with severity levels and recommended actions.
                  </li>
                </ol>
              </div>
            </div>

            {/* Section 4 - Performance Results */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Performance Results</h2>
              <div className="bg-gradient-to-br from-surface-container-high to-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-headline text-xl font-bold text-on-surface mb-4">Detection Performance</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                        <span><strong>99.7% Detection Accuracy:</strong> Successfully identifies genuine anomalies while minimizing false positives</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                        <span><strong>87% False Positive Reduction:</strong> Compared to traditional threshold-based systems</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                        <span><strong>&lt;50ms Detection Latency:</strong> From metric anomaly to alert generation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                        <span><strong>94% Precision:</strong> Alerts are actionable and relevant</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold text-on-surface mb-4">Operational Impact</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-secondary text-lg mt-0.5">check_circle</span>
                        <span><strong>73% Reduction in MTTR:</strong> Mean time to resolution decreased from 4.2 hours to 1.1 hours</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-secondary text-lg mt-0.5">check_circle</span>
                        <span><strong>62% Fewer Incidents:</strong> Proactive detection prevents issues from escalating</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-secondary text-lg mt-0.5">check_circle</span>
                        <span><strong>99.99% Uptime:</strong> Improved infrastructure reliability</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-secondary text-lg mt-0.5">check_circle</span>
                        <span><strong>$4.2M Annual Savings:</strong> Reduced downtime and operational costs</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-tertiary pl-6 py-4 my-6">
                  <p className="text-on-surface-variant italic leading-relaxed">
                    "Ether-Net transformed our security operations from reactive firefighting to proactive threat prevention. We're now detecting and resolving issues before they impact customers."
                  </p>
                  <footer className="mt-4 text-sm text-on-surface">
                    — VP of Infrastructure, Global E-commerce Platform
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* Section 5 - Future Development */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Future Development</h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  Exido's research team continues to advance Ether-Net through ongoing development initiatives:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <h4 className="font-headline text-lg font-bold text-on-surface mb-3">Multi-Modal Learning</h4>
                    <p className="text-on-surface-variant text-sm">
                      Integrating logs, metrics, traces, and security events into unified multi-modal models for comprehensive anomaly detection across all observability signals.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <h4 className="font-headline text-lg font-bold text-on-surface mb-3">Root Cause Analysis</h4>
                    <p className="text-on-surface-variant text-sm">
                      Automated root cause identification using causal inference and dependency graph analysis to pinpoint the source of anomalies in complex distributed systems.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <h4 className="font-headline text-lg font-bold text-on-surface mb-3">Prescriptive Actions</h4>
                    <p className="text-on-surface-variant text-sm">
                      Moving beyond detection to automated remediation with safe, tested remediation playbooks that can automatically resolve common anomalies.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <h4 className="font-headline text-lg font-bold text-on-surface mb-3">Federated Learning</h4>
                    <p className="text-on-surface-variant text-sm">
                      Privacy-preserving model training across multiple organizations, enabling collective threat intelligence without sharing sensitive operational data.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary/10 via-surface-container-high to-secondary/10 p-12 rounded-2xl border border-outline-variant/10 text-center">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Implement Proactive Threat Detection</h2>
              <p className="text-on-surface-variant mb-8 max-w-2xl mx-auto">
                Discover how Ether-Net can transform your infrastructure security from reactive to proactive with real-time anomaly detection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(143,245,255,0.4)] transition-all">
                  Schedule Technical Briefing
                </Link>
                <Link to="/contact" className="bg-surface-container-highest border border-outline-variant/30 text-on-surface px-8 py-4 rounded-lg font-bold hover:bg-surface-bright transition-all">
                  Request Architecture Review
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="py-24 px-8 md:px-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-12">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/news/obsidian-layer" className="group bg-surface rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all">
                <div className="aspect-video bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-4xl">article</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-secondary uppercase tracking-widest mb-2">Cloud Security</p>
                  <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">Exido's Obsidian Layer: Redefining Cloud Security</h3>
                  <p className="text-on-surface-variant text-sm mt-2">How Exido's revolutionary zero-trust architecture is setting new industry standards.</p>
                </div>
              </Link>
              
              <Link to="/news/etl-automation" className="group bg-surface rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all">
                <div className="aspect-video bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-4xl">article</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-primary uppercase tracking-widest mb-2">Data Engineering</p>
                  <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">ETL Automation: The Future of Data Integration</h3>
                  <p className="text-on-surface-variant text-sm mt-2">How Exido's autonomous ETL pipelines are revolutionizing enterprise data workflows.</p>
                </div>
              </Link>
              
              <Link to="/news/global-expansion" className="group bg-surface rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all">
                <div className="aspect-video bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary text-4xl">article</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-tertiary uppercase tracking-widest mb-2">Infrastructure</p>
                  <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">Global Node Expansion: Reaching the Edge of the Atmosphere</h3>
                  <p className="text-on-surface-variant text-sm mt-2">Exido's historic 500+ node deployment across 40 countries.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default EtherNetAnomalyBlog;

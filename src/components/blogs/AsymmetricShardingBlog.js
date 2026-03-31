import React from 'react';
import { Link } from 'react-router-dom';

function AsymmetricShardingBlog() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary">      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center overflow-hidden px-8 md:px-20 py-24 bg-surface-container-low">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="material-symbols-outlined text-primary text-sm">description</span>
              <span className="font-label text-xs tracking-widest text-primary uppercase">Whitepaper #042</span>
            </div>
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-tight">
              Asymmetric Data Sharding for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Global Scale</span>
            </h1>
            <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              A mathematical approach to optimizing data locality in heterogeneous cloud environments through intelligent asymmetric sharding strategies.
            </p>
            <div className="mt-12 flex items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-sm">science</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-on-surface">Exido Research Lab</p>
                  <p className="text-xs text-on-surface-variant">Distributed Systems Research</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                <span className="material-symbols-outlined text-sm">schedule</span>
                <span>15 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-24 px-8 md:px-20">
          <div className="max-w-4xl mx-auto">
            {/* Abstract */}
            <div className="prose prose-invert prose-lg max-w-none mb-16">
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-6">Abstract</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                As cloud infrastructure scales to global dimensions, traditional symmetric sharding approaches fail to account for the heterogeneous nature of modern cloud environments. This whitepaper introduces Asymmetric Data Sharding (ADS), a novel approach that dynamically optimizes data placement based on access patterns, geographic distribution, and resource heterogeneity.
              </p>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                Our research demonstrates that ADS reduces cross-shard query latency by 73% while improving resource utilization by 45% compared to traditional hash-based sharding. We present the mathematical foundations, implementation details, and real-world performance data from production deployments across 500+ global edge nodes.
              </p>
            </div>

            {/* Key Contributions */}
            <div className="bg-gradient-to-br from-primary/10 via-surface-container-high to-secondary/10 p-8 rounded-2xl border border-outline-variant/10 mb-16">
              <h2 className="font-headline text-xl font-bold text-on-surface mb-6">Key Contributions</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                  <span><strong>Mathematical Framework:</strong> Formal model for quantifying data locality optimization in heterogeneous environments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                  <span><strong>Dynamic Rebalancing:</strong> Algorithm for continuous shard rebalancing without service disruption</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                  <span><strong>Production Validation:</strong> Real-world performance data from Exido's global infrastructure</span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">1. Introduction</h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  The exponential growth of data volumes and the geographic distribution of users have exposed fundamental limitations in traditional database sharding approaches. Symmetric sharding, which distributes data evenly across shards based on hash functions, fails to account for three critical factors in modern cloud environments:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">circle</span>
                    <span><strong>Access Pattern Heterogeneity:</strong> Real-world workloads exhibit highly skewed access patterns, with 20% of data accounting for 80% of queries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">circle</span>
                    <span><strong>Resource Heterogeneity:</strong> Cloud infrastructure consists of diverse node types with varying compute, memory, and storage capabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">circle</span>
                    <span><strong>Geographic Distribution:</strong> Users are globally distributed, creating latency variations that symmetric sharding cannot optimize</span>
                  </li>
                </ul>
                <p>
                  Asymmetric Data Sharding addresses these challenges by introducing a cost function that optimizes for data locality, resource utilization, and query latency simultaneously.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">2. Mathematical Framework</h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  We define the Asymmetric Sharding Optimization Problem as follows:
                </p>
                
                <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10 my-8">
                  <h3 className="font-headline text-lg font-bold text-on-surface mb-4">Definition 1: Locality Score</h3>
                  <p className="text-on-surface-variant text-sm mb-4">
                    For a given shard S and access pattern A, the locality score L(S,A) measures the fraction of queries that can be served without cross-shard communication:
                  </p>
                  <div className="bg-surface p-4 rounded border border-outline-variant/20 font-mono text-sm text-center">
                    L(S,A) = |Q_local| / |Q_total|
                  </div>
                  <p className="text-on-surface-variant text-sm mt-4">
                    Where Q_local represents queries executable within shard S, and Q_total represents all queries in access pattern A.
                  </p>
                </div>

                <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10 my-8">
                  <h3 className="font-headline text-lg font-bold text-on-surface mb-4">Definition 2: Cost Function</h3>
                  <p className="text-on-surface-variant text-sm mb-4">
                    The asymmetric sharding cost function C(S,R,G) optimizes across three dimensions:
                  </p>
                  <div className="bg-surface p-4 rounded border border-outline-variant/20 font-mono text-sm text-center">
                    C(S,R,G) = α·L(S,A) + β·U(R) + γ·Latency(G)
                  </div>
                  <p className="text-on-surface-variant text-sm mt-4">
                    Where L represents locality score, U represents resource utilization, G represents geographic distribution, and α, β, γ are weighting coefficients.
                  </p>
                </div>

                <h3 className="font-headline text-xl font-bold text-on-surface mt-8 mb-4">Optimization Algorithm</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Our implementation uses a modified simulated annealing algorithm that iteratively improves shard assignments while maintaining service availability. The algorithm converges to near-optimal solutions within O(n log n) iterations, where n is the number of data partitions.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">3. Implementation Architecture</h2>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 mb-8">
                <div className="aspect-video bg-surface-container-highest rounded-lg flex items-center justify-center border border-outline-variant/10">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-primary text-6xl mb-4">hub</span>
                    <p className="text-on-surface-variant text-sm">Asymmetric Sharding Architecture Diagram</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  The ADS implementation consists of four integrated components:
                </p>
                <ol className="space-y-4 ml-6 list-decimal">
                  <li className="leading-relaxed">
                    <strong className="text-on-surface">Access Pattern Analyzer:</strong> Continuously monitors query patterns, building a probabilistic model of data access frequency and correlation. Uses Count-Min Sketch data structures for memory-efficient tracking of billions of access events.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-on-surface">Shard Optimizer:</strong> Implements the cost function optimization algorithm, computing optimal shard assignments based on current access patterns and resource availability. Runs incrementally to avoid disruptive large-scale data migrations.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-on-surface">Migration Coordinator:</strong> Manages live data migration between shards with zero downtime. Uses two-phase commit protocol with shadow shards to ensure data consistency during rebalancing operations.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-on-surface">Query Router:</strong> Routes incoming queries to appropriate shards based on current shard map. Maintains a distributed cache of shard mappings with sub-millisecond lookup latency.
                  </li>
                </ol>
              </div>
            </div>

            {/* Section 4 - Performance Results */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">4. Performance Evaluation</h2>
              <div className="bg-gradient-to-br from-surface-container-high to-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="bg-surface p-6 rounded-lg">
                    <p className="font-headline text-4xl font-black text-primary mb-2">73%</p>
                    <p className="text-on-surface-variant text-sm uppercase tracking-widest">Cross-Shard Query Reduction</p>
                  </div>
                  <div className="bg-surface p-6 rounded-lg">
                    <p className="font-headline text-4xl font-black text-secondary mb-2">45%</p>
                    <p className="text-on-surface-variant text-sm uppercase tracking-widest">Resource Utilization Improvement</p>
                  </div>
                  <div className="bg-surface p-6 rounded-lg">
                    <p className="font-headline text-4xl font-black text-tertiary mb-2">89%</p>
                    <p className="text-on-surface-variant text-sm uppercase tracking-widest">Query Latency Reduction</p>
                  </div>
                </div>
                
                <h3 className="font-headline text-xl font-bold text-on-surface mb-4">Production Deployment Results</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  ADS has been deployed across Exido's production infrastructure since Q2 2023, managing 2.4 PB of data across 500+ shards in 40 countries. Key performance improvements include:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg mt-0.5">trending_up</span>
                    <span><strong>73% Reduction in Cross-Shard Queries:</strong> From 34% to 9% of queries requiring cross-shard communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg mt-0.5">trending_up</span>
                    <span><strong>45% Improvement in Resource Utilization:</strong> Better load balancing across heterogeneous node types</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg mt-0.5">trending_up</span>
                    <span><strong>89% Reduction in P99 Query Latency:</strong> From 847ms to 94ms for complex analytical queries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg mt-0.5">trending_up</span>
                    <span><strong>62% Cost Reduction:</strong> Reduced infrastructure costs through better resource utilization</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 5 - Related Work */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">5. Related Work</h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  Traditional sharding approaches include hash-based sharding (used by MongoDB, Cassandra), range-based sharding (used by traditional RDBMS), and directory-based sharding. Each has limitations in heterogeneous environments.
                </p>
                <p>
                  Recent research in dynamic sharding includes Consistent Hashing with Bounded Loads, but these approaches optimize for load balancing rather than data locality. ADS is the first approach to simultaneously optimize for locality, utilization, and latency in heterogeneous cloud environments.
                </p>
              </div>
            </div>

            {/* Section 6 - Conclusion */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">6. Conclusion</h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  Asymmetric Data Sharding represents a fundamental advance in distributed database optimization. By accounting for access pattern heterogeneity, resource heterogeneity, and geographic distribution, ADS achieves significant performance improvements over traditional symmetric sharding approaches.
                </p>
                <p>
                  Future work includes extending ADS to support multi-model databases, integrating machine learning for predictive rebalancing, and optimizing for emerging serverless computing paradigms.
                </p>
              </div>
            </div>

            {/* References */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">References</h2>
              <ol className="space-y-3 text-on-surface-variant text-sm">
                <li className="leading-relaxed">Stoica, I., et al. (2003). "Chord: A Scalable Peer-to-peer Lookup Service for Internet Applications." ACM SIGCOMM Computer Communication Review.</li>
                <li className="leading-relaxed">Abadi, D. J., et al. (2013). "The Design and Implementation of Modern Column-Oriented Database Systems." Foundations and Trends in Databases.</li>
                <li className="leading-relaxed">Bailis, P., et al. (2014). "Coordination Avoidance in Database Systems." Proceedings of the VLDB Endowment.</li>
                <li className="leading-relaxed">Exido Research Lab (2024). "Asymmetric Data Sharding for Global Scale." Exido Technical Report #042.</li>
              </ol>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary/10 via-surface-container-high to-secondary/10 p-12 rounded-2xl border border-outline-variant/10 text-center">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Download Full Whitepaper</h2>
              <p className="text-on-surface-variant mb-8 max-w-2xl mx-auto">
                Access the complete technical specification, mathematical proofs, and implementation details in our comprehensive whitepaper.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-4 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(143,245,255,0.4)] transition-all flex items-center justify-center gap-2">
                  Download PDF <span className="material-symbols-outlined">download</span>
                </button>
                <Link to="/contact" className="bg-surface-container-highest border border-outline-variant/30 text-on-surface px-10 py-4 rounded-lg font-bold hover:bg-surface-bright transition-all">
                  Request Technical Briefing
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
              <Link to="/news/ether-net-anomaly" className="group bg-surface rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all">
                <div className="aspect-video bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary text-4xl">article</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-tertiary uppercase tracking-widest mb-2">Technical Deep-Dive</p>
                  <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">Real-time Anomaly Detection via Ether-Net</h3>
                  <p className="text-on-surface-variant text-sm mt-2">Utilizing temporal convolution networks for proactive infrastructure threat mitigation.</p>
                </div>
              </Link>
              
              <Link to="/news/obsidian-layer" className="group bg-surface rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all">
                <div className="aspect-video bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-4xl">article</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-secondary uppercase tracking-widest mb-2">Cloud Security</p>
                  <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">Exido's Obsidian Layer: Redefining Cloud Security</h3>
                  <p className="text-on-surface-variant text-sm mt-2">How Exido's revolutionary zero-trust architecture is setting new industry standards.</p>
                </div>
              </Link>
              
              <Link to="/news/global-expansion" className="group bg-surface rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all">
                <div className="aspect-video bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-4xl">article</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-primary uppercase tracking-widest mb-2">Infrastructure</p>
                  <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">Global Node Expansion: Reaching the Edge of the Atmosphere</h3>
                  <p className="text-on-surface-variant text-sm mt-2">Exido's historic 500+ node deployment across 40 countries.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>    </div>
  );
}

export default AsymmetricShardingBlog;

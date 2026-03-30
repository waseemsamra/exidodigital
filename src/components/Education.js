import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

function Education() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30">
      <NavBar />
      <main className="relative pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center overflow-hidden px-8">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface-container-low to-surface-container-highest opacity-90"></div>
            <img 
              className="w-full h-full object-cover mix-blend-overlay" 
              src="/assets/images/education-hero.png"
              alt="Abstract visualization of a neural network with glowing fiber optic lines connecting knowledge nodes in a dark ethereal digital space"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block label-md uppercase tracking-[0.3em] text-secondary mb-6 font-semibold">The Future of Pedagogy</span>
              <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter text-on-surface mb-8 leading-[0.9]">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container glow-text">Neural Nexus</span> of Learning
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl font-light leading-relaxed mb-10">
                Synthesizing cognitive science and machine intelligence to build education systems that adapt to the individual, not the institution.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="/contact" className="bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold py-4 px-10 rounded-lg text-sm uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_0_20px_rgba(0,222,236,0.3)]">
                  Deploy Nexus
                </a>
                <a href="/contact" className="px-10 py-4 border border-outline-variant/30 glass-panel rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-surface-container-high transition-colors">
                  Technical Spec
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative glass-panel rounded-xl p-8 overflow-hidden aspect-square flex items-center justify-center border-l-4 border-secondary shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                  <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent"></div>
                </div>
                <div className="text-center">
                  <span className="material-symbols-outlined text-8xl text-secondary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                  <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">99.8%</h3>
                  <p className="text-on-surface-variant uppercase tracking-widest text-xs">Adaptive Retention Accuracy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-Tutor Kernels Section */}
        <section className="py-32 px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 pt-12">
                    <div className="h-64 rounded-xl glass-panel overflow-hidden">
                      <img 
                        className="w-full h-full object-cover" 
                        src="/assets/images/education-chip.png"
                        alt="Microscopic view of advanced computer processing chips glowing with neon blue circuitry patterns on dark background"
                      />
                    </div>
                    <div className="h-48 rounded-xl bg-secondary/10 flex flex-col justify-end p-6 border-b-2 border-secondary">
                      <span className="text-secondary font-headline text-4xl font-bold">1:1</span>
                      <span className="text-on-surface-variant text-xs uppercase tracking-widest">Tutor Ratio</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-48 rounded-xl bg-primary/10 flex flex-col justify-end p-6 border-b-2 border-primary">
                      <span className="text-primary font-headline text-4xl font-bold">24/7</span>
                      <span className="text-on-surface-variant text-xs uppercase tracking-widest">Availability</span>
                    </div>
                    <div className="h-64 rounded-xl glass-panel overflow-hidden">
                      <img 
                        className="w-full h-full object-cover" 
                        src="/assets/images/education-robot.png"
                        alt="Sleek humanoid robot hand pointing at a translucent data display interface with complex mathematical formulas"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8 leading-tight">
                  AI-Tutor <span className="text-secondary">Kernels</span>
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  Every student is paired with a dedicated AI Kernel—a persistent cognitive engine that evolves alongside the learner. These kernels understand nuance, detect frustration in real-time, and dynamically restructure curriculum on the fly.
                </p>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined text-secondary">memory</span>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1">Cognitive Mapping</h4>
                      <p className="text-sm text-on-surface-variant">Real-time tracking of knowledge gaps and conceptual mastery.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined text-secondary">speech_to_text</span>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1">Socratic Dialogue</h4>
                      <p className="text-sm text-on-surface-variant">Natural language engines that guide students to answers rather than providing them.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Immersive Learning Meshes Section */}
        <section className="py-32 px-8">
          <div className="max-w-7xl mx-auto text-center mb-24">
            <span className="label-md uppercase tracking-widest text-primary mb-4 block">Visualized Intelligence</span>
            <h2 className="text-4xl md:text-6xl font-headline font-bold text-on-surface">Immersive Learning Meshes</h2>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-1 rounded-xl group transition-all duration-500 hover:scale-[1.02]">
              <div className="p-8 h-full flex flex-col">
                <div className="w-16 h-16 rounded-lg bg-surface-container-high flex items-center justify-center mb-8 border border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary text-3xl">view_in_ar</span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">Spatial Curriculums</h3>
                <p className="text-on-surface-variant leading-relaxed flex-grow">Transform static textbooks into three-dimensional interactive environments where history and physics are experienced, not read.</p>
                <div className="mt-8 pt-6 border-t border-outline-variant/20 flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest font-bold text-primary">Explore Mesh</span>
                  <span className="material-symbols-outlined text-primary text-sm">arrow_forward</span>
                </div>
              </div>
            </div>
            <div className="glass-panel p-1 rounded-xl group transition-all duration-500 hover:scale-[1.02] border-t-2 border-primary">
              <div className="p-8 h-full flex flex-col">
                <div className="w-16 h-16 rounded-lg bg-surface-container-high flex items-center justify-center mb-8 border border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary text-3xl">hub</span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">Haptic Feedback</h3>
                <p className="text-on-surface-variant leading-relaxed flex-grow">Advanced multisensory integration allows learners to 'feel' the weight of molecules or the tension of structural engineering models.</p>
                <div className="mt-8 pt-6 border-t border-outline-variant/20 flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest font-bold text-primary">Explore Mesh</span>
                  <span className="material-symbols-outlined text-primary text-sm">arrow_forward</span>
                </div>
              </div>
            </div>
            <div className="glass-panel p-1 rounded-xl group transition-all duration-500 hover:scale-[1.02]">
              <div className="p-8 h-full flex flex-col">
                <div className="w-16 h-16 rounded-lg bg-surface-container-high flex items-center justify-center mb-8 border border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary text-3xl">diversity_2</span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">Global Classrooms</h3>
                <p className="text-on-surface-variant leading-relaxed flex-grow">Synchronous immersive environments that collapse geographical distance, allowing students from every continent to collaborate.</p>
                <div className="mt-8 pt-6 border-t border-outline-variant/20 flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest font-bold text-primary">Explore Mesh</span>
                  <span className="material-symbols-outlined text-primary text-sm">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Secure Student Data Lakes Section */}
        <section className="py-32 px-8 bg-surface-container-highest/30">
          <div className="max-w-7xl mx-auto">
            <div className="bg-surface rounded-3xl p-8 md:p-16 border border-outline-variant/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top_right,_#00eefc,_transparent)]"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8">Secure Student <span className="text-primary">Data Lakes</span></h2>
                  <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                    Privacy is not a feature; it's the foundation. Our Data Lakes use zero-knowledge proofs to ensure academic progress is verifiable by institutions while remaining completely owned and controlled by the individual.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
                      <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>encrypted</span>
                      <span className="font-medium">End-to-End Encrypted Knowledge Graphs</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
                      <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                      <span className="font-medium">Sovereign Identity Protection</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
                      <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>lan</span>
                      <span className="font-medium">Blockchain-Verified Accreditation</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-video glass-panel rounded-2xl p-2">
                    <img 
                      className="w-full h-full object-cover rounded-xl" 
                      src="/assets/images/education-server.png"
                      alt="Server room with vertical lines of blue and white LED lights representing data storage and cloud infrastructure"
                    />
                  </div>
                  {/* Floating Metric Chip */}
                  <div className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-xl border-l-4 border-primary shadow-2xl">
                    <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-1 font-bold">Encryption Standard</p>
                    <p className="font-headline text-2xl font-bold">Quantum-Resistant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scalable EdTech Section - Bento Grid Style */}
        <section className="py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-headline font-bold mb-4">Ecosystem Architecture</h2>
              <p className="text-on-surface-variant">Global-scale infrastructure for digital-first institutions.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
              <div className="md:col-span-2 md:row-span-2 glass-panel rounded-2xl p-10 flex flex-col justify-end group overflow-hidden relative">
                <img 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700" 
                  src="/assets/images/education-earth.png"
                  alt="Distant view of earth from space at night with bright city light clusters and atmospheric glow"
                />
                <div className="relative z-10">
                  <h4 className="text-3xl font-headline font-bold mb-4">Infinite Scale</h4>
                  <p className="text-on-surface-variant">Elastic compute clusters that handle millions of simultaneous AI tutor sessions without latency degradation.</p>
                </div>
              </div>
              <div className="md:col-span-2 glass-panel rounded-2xl p-10 flex items-center gap-8 border-r-4 border-secondary">
                <span className="material-symbols-outlined text-5xl text-secondary">analytics</span>
                <div>
                  <h4 className="text-xl font-bold mb-2">Predictive Pedagogy</h4>
                  <p className="text-sm text-on-surface-variant">Anticipate system-wide learning roadblocks before they manifest in student performance data.</p>
                </div>
              </div>
              <div className="glass-panel rounded-2xl p-8 flex flex-col justify-center text-center">
                <span className="text-primary font-headline text-4xl font-bold mb-2">10ms</span>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Global Average Latency</p>
              </div>
              <div className="glass-panel rounded-2xl p-8 flex flex-col justify-center text-center border-b-4 border-primary">
                <span className="text-primary font-headline text-4xl font-bold mb-2">99.99%</span>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Uptime SLA</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-8 mb-20">
          <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-12 text-center border border-primary/20 bg-gradient-to-b from-surface-container-high to-surface">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6">Ready to transcend?</h2>
            <p className="text-on-surface-variant text-lg mb-10 max-w-xl mx-auto">Join the ranks of elite institutions pioneering the next epoch of human intelligence development.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <input 
                className="bg-surface-container-low border-b-2 border-outline-variant px-6 py-4 focus:border-secondary transition-all outline-none rounded-lg text-on-surface w-full md:w-80" 
                placeholder="Institutional Email" 
                type="email"
              />
              <a href="/contact" className="bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold py-4 px-10 rounded-lg text-sm uppercase tracking-widest hover:brightness-110 transition-all">
                Request Access
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Education;

import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

function APIDocumentation() {
  const [activeTab, setActiveTab] = React.useState('curl');

  const codeExamples = {
    curl: `curl -X POST "https://api.exidodigital.com/v1/core/execute" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "flow_id": "a83f-9128-44dc-bd10",
    "sync_mode": true,
    "metadata": {
      "env": "production"
    }
  }'`,
    python: `import requests

url = "https://api.exidodigital.com/v1/core/execute"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
payload = {
    "flow_id": "a83f-9128-44dc-bd10",
    "sync_mode": True,
    "metadata": {
        "env": "production"
    }
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`,
    nodejs: `const axios = require('axios');

const config = {
  method: 'post',
  url: 'https://api.exidodigital.com/v1/core/execute',
  headers: { 
    'Authorization': 'Bearer YOUR_API_KEY', 
    'Content-Type': 'application/json'
  },
  data: {
    flow_id: 'a83f-9128-44dc-bd10',
    sync_mode: true,
    metadata: {
      env: 'production'
    }
  }
};

axios(config)
  .then(response => console.log(JSON.stringify(response.data)))
  .catch(error => console.log(error));`,
    go: `package main

import (
  "bytes"
  "encoding/json"
  "fmt"
  "net/http"
)

func main() {
  url := "https://api.exidodigital.com/v1/core/execute"
  payload := map[string]interface{}{
    "flow_id": "a83f-9128-44dc-bd10",
    "sync_mode": true,
    "metadata": map[string]string{
      "env": "production",
    },
  }
  req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonPayload))
  req.Header.Set("Authorization", "Bearer YOUR_API_KEY")
  req.Header.Set("Content-Type", "application/json")
  
  client := &http.Client{}
  resp, _ := client.Do(req)
  fmt.Println(resp)
}`
  };

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30 selection:text-primary">
      <NavBar />
      <main className="pt-24 px-8 py-12 lg:py-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Documentation Text */}
          <div className="lg:col-span-7">
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded tracking-widest uppercase">Endpoints</span>
                <span className="text-on-surface-variant text-[10px]">•</span>
                <span className="text-on-surface-variant text-[10px] uppercase tracking-widest">Core Execution</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-headline font-extrabold tracking-tight text-on-surface mb-6">
                Execute Kinetic Flow
              </h1>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Initiate a synchronized data process across the Exido lattice. This endpoint triggers the underlying obsidian engine to process complex datasets with cryptographic proof-of-transit.
              </p>
            </header>

            <section className="mb-16">
              <div className="flex items-center gap-4 mb-8 bg-surface-container-low p-4 rounded-xl border border-outline-variant/15">
                <span className="bg-primary text-on-primary px-3 py-1 font-mono text-xs font-bold rounded">POST</span>
                <span className="font-mono text-on-surface text-sm tracking-tight break-all">https://api.exidodigital.com/v1/core/execute</span>
              </div>

              <h3 className="text-on-surface font-headline font-bold text-xl mb-6">Request Parameters</h3>
              <div className="space-y-4">
                <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/15 hover:border-primary/30 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-primary font-bold">flow_id</span>
                    <span className="text-[10px] bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded uppercase">Required</span>
                  </div>
                  <p className="text-sm text-on-surface-variant mb-3">The unique identifier for the pre-defined obsidian flow pattern.</p>
                  <span className="font-mono text-[11px] text-secondary">string {'<uuid>'}</span>
                </div>

                <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/15 hover:border-primary/30 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-primary font-bold">sync_mode</span>
                    <span className="text-[10px] bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded uppercase">Optional</span>
                  </div>
                  <p className="text-sm text-on-surface-variant mb-3">Determines if the response should wait for complete lattice verification.</p>
                  <span className="font-mono text-[11px] text-secondary">boolean (default: false)</span>
                </div>

                <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/15 hover:border-primary/30 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-primary font-bold">metadata</span>
                    <span className="text-[10px] bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded uppercase">Optional</span>
                  </div>
                  <p className="text-sm text-on-surface-variant mb-3">Custom key-value pairs for tracking purposes within the Exido.</p>
                  <span className="font-mono text-[11px] text-secondary">object (max 10 keys)</span>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-on-surface font-headline font-bold text-xl mb-6">Response Object</h3>
              <div className="bg-surface-container-highest p-6 rounded-xl border border-outline-variant/20">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span className="text-xs uppercase font-bold tracking-widest text-on-surface">Data Structure</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-outline-variant/10 pb-3">
                    <span className="font-mono text-sm text-on-surface">transaction_id</span>
                    <span className="font-mono text-xs text-primary">string</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/10 pb-3">
                    <span className="font-mono text-sm text-on-surface">status</span>
                    <span className="font-mono text-xs text-primary">"queued" | "active"</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-mono text-sm text-on-surface">convergence_eta</span>
                    <span className="font-mono text-xs text-primary">integer {'<ms>'}</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Code Playground */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="bg-surface-container-low rounded-2xl border border-outline-variant/15 overflow-hidden shadow-2xl">
                <div className="flex border-b border-outline-variant/10 bg-surface-container-low">
                  {['curl', 'python', 'nodejs', 'go'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-4 text-[10px] font-bold uppercase tracking-widest transition-colors ${
                        activeTab === tab
                          ? 'text-primary border-b-2 border-primary'
                          : 'text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      {tab === 'nodejs' ? 'Node.js' : tab}
                    </button>
                  ))}
                </div>
                <div className="p-8 font-mono text-sm leading-relaxed overflow-x-auto selection:bg-secondary/40">
                  <pre className="text-primary whitespace-pre-wrap">{codeExamples[activeTab]}</pre>
                  
                  <div className="mt-10 pt-10 border-t border-outline-variant/10">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-6 flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">description</span>
                      Response Sample
                    </h4>
                    <div className="bg-black/40 p-6 rounded-lg border border-outline-variant/10">
                      <pre className="text-secondary text-xs">
{`{
  "status": "success",
  "data": {
    "transaction_id": "ke_8921_x20",
    "convergence_eta": 142
  }
}`}
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="p-4 bg-surface-container-low/50 border-t border-outline-variant/10 flex justify-end gap-6">
                  <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-sm">content_copy</span>
                    Copy
                  </button>
                  <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-sm">terminal</span>
                    Test
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Ambient Glow Elements */}
      <div className="fixed bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed top-[20%] right-[-5%] w-[30%] h-[30%] bg-secondary/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
    </div>
  );
}

export default APIDocumentation;

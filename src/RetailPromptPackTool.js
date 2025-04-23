import React, { useState } from 'react';

const promptModules = {
  "Listing + Positioning": [
    "Draft a broker flyer for a new QSR space near Whole Foods in [Neighborhood].",
    "Create a compelling pitch for a second-gen restaurant with patio seating and foot traffic."
  ],
  "Client Communication": [
    "Write a tour recap for a national fitness tenant comparing 3 sites.",
    "Send a follow-up to a franchisee after they filled out a contact form."
  ],
  "Market Research + Site Selection": [
    "Summarize demographic, traffic, and co-tenancy data for [ZIP] for a Chick-fil-A site.",
    "Compare 3 sites for a pet supply tenant based on rent, parking, and visibility."
  ],
  "Lease + Deal Structuring": [
    "Draft a term sheet for a 10-year lease at $35/SF NNN with TI allowance and % rent clause.",
    "Summarize risk in lease clauses due to co-tenancy conflicts."
  ],
  "Marketing + Brand Building": [
    "Write a LinkedIn post about signing a new retail lease in a high-profile corridor.",
    "Repurpose a deal story into an Instagram caption and carousel headlines."
  ]
};

export default function RetailPromptPackTool() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState('');

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold text-center text-gray-800">🧠 Advanced AI Prompt Pack for Retail Brokers</h1>
      <p className="text-center text-gray-600 text-sm">Select a workflow → choose a prompt → copy and drop into ChatGPT, Claude, Gemini, or Copilot</p>

      <select
        className="w-full border p-2 rounded"
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          setSelectedPrompt('');
        }}
      >
        <option value="">-- Choose a Prompt Category --</option>
        {Object.keys(promptModules).map((cat, idx) => (
          <option key={idx} value={cat}>{cat}</option>
        ))}
      </select>

      {selectedCategory && (
        <select
          className="w-full border p-2 rounded"
          value={selectedPrompt}
          onChange={(e) => setSelectedPrompt(e.target.value)}
        >
          <option value="">-- Choose a Prompt --</option>
          {promptModules[selectedCategory].map((prompt, idx) => (
            <option key={idx} value={prompt}>{prompt}</option>
          ))}
        </select>
      )}

      {selectedPrompt && (
        <div className="space-y-2">
          <textarea
            readOnly
            value={selectedPrompt}
            className="w-full h-32 border p-2 rounded bg-gray-100 font-mono text-sm"
          />
          <button
            onClick={() => navigator.clipboard.writeText(selectedPrompt)}
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 font-semibold"
          >📋 Copy Prompt</button>
        </div>
      )}
    </div>
  );
}
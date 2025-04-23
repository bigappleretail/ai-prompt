import React, { useState, useEffect } from 'react';
import { NicheSelector } from './NicheSelector';
import { PromptCategory } from './PromptCategory';
import { PromptEditor } from './PromptEditor';
import { RecentPrompts } from './RecentPrompts';
import { SavedPrompts } from './SavedPrompts';
import { SearchBar } from './SearchBar';
import { promptLibrary } from '../data/promptLibrary';

export const PromptAssistant: React.FC = () => {
  const [selectedNiche, setSelectedNiche] = useState<string>('retail');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedPrompt, setSelectedPrompt] = useState<string>('');
  const [customizedPrompt, setCustomizedPrompt] = useState<string>('');
  const [recentPrompts, setRecentPrompts] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Get available categories for the selected niche
  const availableCategories = selectedNiche ? Object.keys(promptLibrary[selectedNiche]) : [];

  // Get available prompts for the selected category
  const availablePrompts = selectedCategory && selectedNiche
    ? promptLibrary[selectedNiche][selectedCategory]
    : [];

  // Effect to update customized prompt when a prompt is selected
  useEffect(() => {
    if (selectedPrompt) {
      setCustomizedPrompt(selectedPrompt);
    } else {
      setCustomizedPrompt('');
    }
  }, [selectedPrompt]);

  // Handle niche selection
  const handleNicheSelect = (niche: string) => {
    setSelectedNiche(niche);
    setSelectedCategory('');
    setSelectedPrompt('');
  };

  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSelectedPrompt('');
  };

  // Handle prompt selection
  const handlePromptSelect = (prompt: string) => {
    setSelectedPrompt(prompt);
  };

  // Handle prompt customization
  const handlePromptCustomize = (customPrompt: string) => {
    setCustomizedPrompt(customPrompt);
  };

  // Handle prompt copy and add to recent
  const handlePromptCopy = () => {
    if (customizedPrompt) {
      navigator.clipboard.writeText(customizedPrompt);
      
      // Add to recent prompts if not already in the list
      if (!recentPrompts.includes(customizedPrompt)) {
        setRecentPrompts(prev => [customizedPrompt, ...prev.slice(0, 4)]);
      }
    }
  };

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Reset selections when searching
    if (query) {
      setSelectedCategory('');
      setSelectedPrompt('');
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Commercial Real Estate Prompt Assistant</h2>
        <p className="text-gray-600 mb-6">
          Select your niche, choose a prompt category, and customize prompts for AI tools like ChatGPT, Claude, or Copilot to streamline your commercial real estate workflows.
        </p>
        
        <SearchBar onSearch={handleSearch} />
        
        <NicheSelector 
          niches={Object.keys(promptLibrary)} 
          selectedNiche={selectedNiche}
          onNicheSelect={handleNicheSelect}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {searchQuery ? (
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-4">Search Results for "{searchQuery}"</h3>
              <div className="space-y-3">
                <p className="text-gray-600">Search functionality will be implemented in the next iteration.</p>
              </div>
            </div>
          ) : (
            <>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold mb-4">Select Prompt Category</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {availableCategories.map((category) => (
                    <PromptCategory
                      key={category}
                      category={category}
                      isSelected={category === selectedCategory}
                      onSelect={() => handleCategorySelect(category)}
                    />
                  ))}
                </div>
              </div>

              {selectedCategory && (
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-semibold mb-4">Select Prompt Template</h3>
                  <div className="space-y-3">
                    {availablePrompts.map((prompt, index) => (
                      <div 
                        key={index}
                        className={`p-3 border rounded-lg cursor-pointer transition-all hover:border-blue-500 ${
                          selectedPrompt === prompt ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                        }`}
                        onClick={() => handlePromptSelect(prompt)}
                      >
                        <p className="text-sm">{prompt.length > 120 ? prompt.substring(0, 120) + '...' : prompt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {selectedPrompt && (
            <PromptEditor
              prompt={customizedPrompt}
              onChange={handlePromptCustomize}
              onCopy={handlePromptCopy}
              category={selectedCategory}
              niche={selectedNiche}
            />
          )}
        </div>

        <div className="space-y-6">
          <SavedPrompts onSelect={handlePromptSelect} />
          
          <RecentPrompts
            prompts={recentPrompts}
            onSelect={handlePromptSelect}
          />
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-4">Tips & Best Practices</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">•</span>
                <span>Be specific with property details for more accurate results</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">•</span>
                <span>Include market context when analyzing opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">•</span>
                <span>For property descriptions, specify target audience</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">•</span>
                <span>Use brackets [like this] to indicate custom fields</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
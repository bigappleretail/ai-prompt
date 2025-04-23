import React, { useState } from 'react';
import { Copy, Check, Bookmark, BookmarkCheck } from 'lucide-react';
import { usePromptStore } from '../store/promptStore';

interface PromptEditorProps {
  prompt: string;
  onChange: (prompt: string) => void;
  onCopy: () => void;
  category: string;
  niche: string;
}

export const PromptEditor: React.FC<PromptEditorProps> = ({
  prompt,
  onChange,
  onCopy,
  category,
  niche,
}) => {
  const [copied, setCopied] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [promptTitle, setPromptTitle] = useState('');
  const { addPrompt } = usePromptStore();

  const handleCopy = () => {
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    setIsSaving(true);
  };

  const savePrompt = () => {
    addPrompt({
      title: promptTitle,
      content: prompt,
      category,
      niche,
    });
    setIsSaving(false);
    setPromptTitle('');
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Customize Your Prompt</h3>
        <div className="flex space-x-2">
          <button
            className={`flex items-center px-3 py-1 rounded text-sm transition-colors ${
              isSaving
                ? 'bg-blue-100 text-blue-700'
                : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
            }`}
            onClick={handleSave}
          >
            {isSaving ? (
              <BookmarkCheck className="h-4 w-4 mr-1" />
            ) : (
              <Bookmark className="h-4 w-4 mr-1" />
            )}
            Save
          </button>
          <button
            className={`flex items-center px-3 py-1 rounded text-sm transition-colors ${
              copied
                ? 'bg-green-100 text-green-700'
                : 'bg-blue-900 text-white hover:bg-blue-800'
            }`}
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-1" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-1" />
                Copy
              </>
            )}
          </button>
        </div>
      </div>

      {isSaving && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter a title for your prompt"
            value={promptTitle}
            onChange={(e) => setPromptTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setIsSaving(false)}
              className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={savePrompt}
              disabled={!promptTitle}
              className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Save Prompt
            </button>
          </div>
        </div>
      )}
      
      <div className="relative">
        <textarea
          value={prompt}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
          placeholder="Customize your prompt here. Replace placeholders like [LOCATION] with specific details."
        />
        <div className="absolute bottom-3 right-3 text-xs text-gray-500">
          {prompt.length} characters
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-lg">
        <h4 className="text-sm font-semibold text-blue-900 mb-2">Customization Tips</h4>
        <p className="text-sm text-blue-800">
          Replace any text in [BRACKETS] with specific details about your property or market.
          Add more context for better results.
        </p>
      </div>
    </div>
  );
};
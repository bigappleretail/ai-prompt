import React from 'react';
import { Bookmark, Trash2 } from 'lucide-react';
import { usePromptStore } from '../store/promptStore';

interface SavedPromptsProps {
  onSelect: (prompt: string) => void;
}

export const SavedPrompts: React.FC<SavedPromptsProps> = ({ onSelect }) => {
  const { savedPrompts, removePrompt } = usePromptStore();

  if (savedPrompts.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-4">Saved Prompts</h3>
        <div className="text-sm text-gray-500 flex flex-col items-center justify-center p-6">
          <Bookmark className="h-8 w-8 text-gray-300 mb-2" />
          <p>Save your favorite prompts for quick access</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-4">Saved Prompts</h3>
      <div className="space-y-3">
        {savedPrompts.map((prompt) => (
          <div
            key={prompt.id}
            className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium text-sm">{prompt.title}</h4>
              <div className="flex space-x-2">
                <button
                  onClick={() => onSelect(prompt.content)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Use
                </button>
                <button
                  onClick={() => removePrompt(prompt.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2">{prompt.content}</p>
            <div className="mt-2 flex items-center space-x-2">
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {prompt.niche}
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {prompt.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
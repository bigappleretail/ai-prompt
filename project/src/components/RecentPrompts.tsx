import React from 'react';
import { Clock } from 'lucide-react';

interface RecentPromptsProps {
  prompts: string[];
  onSelect: (prompt: string) => void;
}

export const RecentPrompts: React.FC<RecentPromptsProps> = ({
  prompts,
  onSelect,
}) => {
  if (prompts.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-4">Recently Used</h3>
        <div className="text-sm text-gray-500 flex flex-col items-center justify-center p-6">
          <Clock className="h-8 w-8 text-gray-300 mb-2" />
          <p>Your recently used prompts will appear here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-4">Recently Used</h3>
      <div className="space-y-3">
        {prompts.map((prompt, index) => (
          <div
            key={index}
            className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-all"
            onClick={() => onSelect(prompt)}
          >
            <p className="text-sm text-gray-700 line-clamp-2">{prompt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
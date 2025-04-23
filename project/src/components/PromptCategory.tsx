import React from 'react';
import { 
  ListChecks, 
  MessageSquare, 
  Search, 
  FileText, 
  Share2 
} from 'lucide-react';

interface PromptCategoryProps {
  category: string;
  isSelected: boolean;
  onSelect: () => void;
}

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'listing & positioning':
      return <ListChecks className="h-5 w-5" />;
    case 'client communication':
      return <MessageSquare className="h-5 w-5" />;
    case 'market research & site selection':
      return <Search className="h-5 w-5" />;
    case 'lease & deal structuring':
      return <FileText className="h-5 w-5" />;
    case 'marketing & brand building':
      return <Share2 className="h-5 w-5" />;
    default:
      return <MessageSquare className="h-5 w-5" />;
  }
};

export const PromptCategory: React.FC<PromptCategoryProps> = ({
  category,
  isSelected,
  onSelect,
}) => {
  return (
    <button
      className={`flex items-center p-4 rounded-lg border transition-all ${
        isSelected
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
      }`}
      onClick={onSelect}
    >
      <div
        className={`p-2 rounded-full ${
          isSelected ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
        }`}
      >
        {getCategoryIcon(category)}
      </div>
      <span className="ml-3 font-medium">{category}</span>
    </button>
  );
};
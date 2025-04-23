import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
        <div className="pl-3 pr-1 text-gray-400">
          <Search className="h-5 w-5" />
        </div>
        <input
          type="text"
          className="flex-1 p-3 outline-none text-gray-700"
          placeholder="Search for prompts (e.g., 'lease comparison', 'tenant pitch')"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="px-3 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        )}
        <button
          type="submit"
          className="bg-blue-900 text-white px-4 py-3 font-medium hover:bg-blue-800 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
};
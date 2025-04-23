import React from 'react';
import { Building2, Home, Warehouse, Store, Building } from 'lucide-react';

interface NicheSelectorProps {
  niches: string[];
  selectedNiche: string;
  onNicheSelect: (niche: string) => void;
}

const getNicheIcon = (niche: string) => {
  switch (niche) {
    case 'office':
      return <Building2 className="h-5 w-5" />;
    case 'multifamily':
      return <Home className="h-5 w-5" />;
    case 'industrial':
      return <Warehouse className="h-5 w-5" />;
    case 'retail':
      return <Store className="h-5 w-5" />;
    default:
      return <Building className="h-5 w-5" />;
  }
};

const getNicheLabel = (niche: string) => {
  return niche.charAt(0).toUpperCase() + niche.slice(1);
};

export const NicheSelector: React.FC<NicheSelectorProps> = ({
  niches,
  selectedNiche,
  onNicheSelect,
}) => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">Select Your CRE Niche</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {niches.map((niche) => (
          <button
            key={niche}
            className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${
              selectedNiche === niche
                ? 'border-blue-900 bg-blue-50 text-blue-900'
                : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
            }`}
            onClick={() => onNicheSelect(niche)}
          >
            <div className={`p-2 rounded-full ${
              selectedNiche === niche
                ? 'bg-blue-900 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}>
              {getNicheIcon(niche)}
            </div>
            <span className="mt-2 font-medium text-sm">{getNicheLabel(niche)}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
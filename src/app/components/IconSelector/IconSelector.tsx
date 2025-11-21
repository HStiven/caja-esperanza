import { useState } from 'react';
import IconRenderer from './IconRenderer';

const availableIcons = [
  'MusicNote', 'School', 'BusinessCenter', 'SelfImprovement',
  'FitnessCenter', 'Diversity3', 'People', 'Work', 'Book',
  'Psychology', 'HealthAndSafety', 'EmojiPeople'
];

interface IconSelectorProps {
  value: string;
  onChange: (iconName: string) => void;
}

export const IconSelector: React.FC<IconSelectorProps> = ({
  value,
  onChange
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-2 border rounded bg-white flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <IconRenderer iconName={value} className="text-xl" />
          <span>{value}</span>
        </div>
        <span>▼</span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border rounded shadow-lg max-h-60 overflow-y-auto">
          <div className="grid grid-cols-4 gap-2 p-2">
            {availableIcons.map((iconName) => (
              <button
                key={iconName}
                type="button"
                onClick={() => {
                  onChange(iconName);
                  setIsOpen(false);
                }}
                className={`p-2 rounded hover:bg-gray-100 flex flex-col items-center ${
                  value === iconName ? 'bg-blue-100 border border-blue-300' : ''
                }`}
              >
                <IconRenderer iconName={iconName} className="text-xl" />
                <span className="text-xs mt-1">{iconName}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
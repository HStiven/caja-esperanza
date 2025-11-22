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

  return (
      <div className="bg-white border rounded shadow-lg overflow-y-auto">
        <div className="grid grid-cols-4 gap-2 p-2 ">
          {availableIcons.map((iconName) => (
            <button
              key={iconName}
              type="button"
              onClick={() => {
                onChange(iconName);
              }}
              className={`p-2 rounded hover:bg-gray-100 flex flex-col items-center ${value === iconName ? 'bg-blue-100 border border-blue-300' : ''
                }`}
            >
              <IconRenderer iconName={iconName} className="text-xl" />
              <span className="text-xs mt-1">{iconName}</span>
            </button>
          ))}
        </div>
      </div>
  );
};
import { useState } from 'react';

const availableColors = [
    { name: 'Azul', value: 'bg-blue-500' },
    { name: 'Rosa', value: 'bg-pink-500' },
    { name: 'Morado', value: 'bg-purple-500' },
    { name: 'Rojo', value: 'bg-red-500' },
    { name: 'Verde', value: 'bg-green-500' },
    { name: 'Amarillo', value: 'bg-yellow-500' },
    { name: 'Naranja', value: 'bg-orange-500' },
    { name: 'Índigo', value: 'bg-indigo-500' },
    { name: 'Cian', value: 'bg-cyan-500' },
    { name: 'Lima', value: 'bg-lime-500' },
];

interface ColorPickerProps {
    value: string;
    onChange: (color: string) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
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
                    <div className={`w-4 h-4 rounded ${value}`}></div>
                    <span>{availableColors.find(c => c.value === value)?.name || 'Seleccionar'}</span>
                </div>
                <span>▼</span>
            </button>

            {isOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border rounded shadow-lg">
                    <div className="grid grid-cols-2 gap-2 p-2">
                        {availableColors.map((color) => (
                            <button
                                key={color.value}
                                type="button"
                                onClick={() => {
                                    onChange(color.value);
                                    setIsOpen(false);
                                }}
                                className={`p-2 rounded hover:bg-gray-100 flex items-center gap-2 ${value === color.value ? 'bg-blue-100 border border-blue-300' : ''
                                    }`}
                            >
                                <div className={`w-4 h-4 rounded ${color.value}`}></div>
                                <span className="text-sm">{color.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
import { useState } from 'react';
import { Add, Delete, Edit } from '@mui/icons-material';
import type { UsService } from '../../info/interface/typesInfo';
import { IconSelector } from '../../../components/IconSelector/IconSelector';

interface ServiceEditorProps {
  services: UsService[];
  onUpdate: (services: UsService[]) => void;
}

export const ServiceEditor: React.FC<ServiceEditorProps> = ({
  services,
  onUpdate
}) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newService, setNewService] = useState<UsService>({
    id: '',
    icon: 'MusicNote',
    title: '',
    description: '',
    color: 'bg-blue-500'
  });

  const addService = () => {
    const serviceToAdd = {
      ...newService,
      id: Date.now().toString()
    };
    const updatedServices = [...services, serviceToAdd];
    onUpdate(updatedServices);
    setNewService({
      id: '',
      icon: 'MusicNote',
      title: '',
      description: '',
      color: 'bg-blue-500'
    });
  };

  const updateService = (index: number, updates: Partial<UsService>) => {
    const updatedServices = services.map((service, i) =>
      i === index ? { ...service, ...updates } : service
    );
    onUpdate(updatedServices);
  };

  const deleteService = (index: number) => {
    const updatedServices = services.filter((_, i) => i !== index);
    onUpdate(updatedServices);
  };

  return (
    <div className="space-y-6">
      {/* Formulario para agregar nuevo servicio */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Agregar Nuevo Servicio</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Icono</label>
            <IconSelector
              value={newService.icon}
              onChange={(icon) => setNewService({ ...newService, icon })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Color</label>
            {/* <ColorPicker
              value={newService.color}
              onChange={(color) => setNewService({ ...newService, color })}
            /> */}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Título</label>
            <input
              type="text"
              value={newService.title}
              onChange={(e) => setNewService({ ...newService, title: e.target.value })}
              className="w-full p-2 border rounded"
              placeholder="Ej: Caja de Talentos"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Descripción</label>
            <textarea
              value={newService.description}
              onChange={(e) => setNewService({ ...newService, description: e.target.value })}
              className="w-full p-2 border rounded"
              rows={3}
              placeholder="Descripción del servicio..."
            />
          </div>
        </div>
        <button
          onClick={addService}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <Add /> Agregar Servicio
        </button>
      </div>

      {/* Lista de servicios existentes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Servicios Existentes</h3>
        {services.map((service, index) => (
          <div key={service.id} className="border rounded-lg p-4 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Icono</label>
                <IconSelector
                  value={service.icon}
                  onChange={(icon) => updateService(index, { icon })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Color</label>
                {/* <ColorPicker
                  value={service.color}
                  onChange={(color) => updateService(index, { color })}
                /> */}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Título</label>
                <input
                  type="text"
                  value={service.title}
                  onChange={(e) => updateService(index, { title: e.target.value })}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Descripción</label>
                <textarea
                  value={service.description}
                  onChange={(e) => updateService(index, { description: e.target.value })}
                  className="w-full p-2 border rounded"
                  rows={3}
                />
              </div>
            </div>
            <button
              onClick={() => deleteService(index)}
              className="mt-3 bg-red-500 text-white px-3 py-1 rounded flex items-center gap-1 text-sm"
            >
              <Delete /> Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
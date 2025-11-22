import { useState, useEffect } from 'react';
import { Save, Warning } from '@mui/icons-material';
import type { UsService } from '../../info/interface/typesInfo';
import { IconSelector } from '../../../components/IconSelector/IconSelector';
import { ColorPicker } from '../../../components/ColorPiciker/ColorPicker';
import IconRenderer from '../../../components/IconSelector/IconRenderer';

interface ServiceEditorProps {
  services: UsService[];
  onUpdate: (services: UsService[]) => void;
}

const CHAR_LIMITS = {
  title: 40,       // Máximo 40 caracteres para título
  description: 180 // Máximo 180 caracteres para descripción
};

export const ServiceEditor: React.FC<ServiceEditorProps> = ({
  services,
  onUpdate
}) => {
  const ensureThreeServices = (currentServices: UsService[]): UsService[] => {
    const defaultServices: UsService[] = [
      {
        id: '1',
        icon: 'MusicNote',
        title: 'Caja de Talentos',
        description: 'Clases de música en tres instrumentos: piano, guitarra y batería. Desarrollamos habilidades artísticas y creativas.',
        color: 'bg-blue-500',
        links: ''
      },
      {
        id: '2',
        icon: 'School',
        title: 'Caja del Saber',
        description: 'Programas de apoyo a las niñas en edad escolar, aumento de su autoestima y refuerzo de temas y valores con influencia de temas.',
        color: 'bg-pink-500',
      },
      {
        id: '3',
        icon: 'BusinessCenter',
        title: 'Caja Empresarial',
        description: 'Programa de capacitación, talleres, conferencias a nivel de emprendimiento. Reforzamos los valores empresariales.',
        color: 'bg-purple-500'
      }
    ];

    // Usar datos de Firebase si existen, sino usar defaults
    return defaultServices.map((defaultService, index) => {
      const firebaseService = currentServices[index];
      return firebaseService ? { ...defaultService, ...firebaseService } : defaultService;
    });
  };

  const [originalServices, setOriginalServices] = useState<UsService[]>([]);
  const [editedServices, setEditedServices] = useState<UsService[]>([]);
  const [selectedCard, setSelectedCard] = useState<number>(0);
  const [hasChanges, setHasChanges] = useState(false);

  // Cargar servicios desde Firebase al iniciar
  useEffect(() => {
    if (services && services.length > 0) {
      const processedServices = ensureThreeServices(services);
      setOriginalServices(processedServices);
      setEditedServices([...processedServices]); // Copia para editar
    }
  }, [services]);

  // Verificar cambios
  useEffect(() => {
    if (originalServices.length > 0 && editedServices.length > 0) {
      const hasUnsavedChanges = JSON.stringify(originalServices) !== JSON.stringify(editedServices);
      setHasChanges(hasUnsavedChanges);
    }
  }, [editedServices, originalServices]);

  const updateService = (index: number, updates: Partial<UsService>) => {
    const updatedServices = editedServices.map((service, i) =>
      i === index ? { ...service, ...updates } : service
    );
    setEditedServices(updatedServices);
  };

  // Función para validar y truncar texto si excede el límite
  const handleInputChange = (index: number, field: 'title' | 'description', value: string) => {
    if (value.length <= CHAR_LIMITS[field]) {
      updateService(index, { [field]: value });
    }
  };

  const handleSave = () => {
    const hasExceededLimits = editedServices.some(service =>
      service.title.length > CHAR_LIMITS.title ||
      service.description.length > CHAR_LIMITS.description ||
      (service.links && service.links.length > 500)
    );

    if (hasExceededLimits) {
      alert('❌ No se puede guardar: Algunos campos exceden el límite de caracteres');
      return;
    }

    onUpdate(editedServices);
    setOriginalServices([...editedServices]);
  };

  const handleCancel = () => {
    setEditedServices([...originalServices]);
  };

  if (editedServices.length === 0) {
    return <div>Cargando servicios...</div>;
  }

  const currentService = editedServices[selectedCard];
  const titleLength = currentService.title.length;
  const descriptionLength = currentService.description.length;
  const titleExceeded = titleLength > CHAR_LIMITS.title;
  const descriptionExceeded = descriptionLength > CHAR_LIMITS.description;
  const canSave = hasChanges && !titleExceeded && !descriptionExceeded;

  // const linksLength = (currentService.links || '').length;

  return (
    <div className="space-y-6">
      {/* Header con información y límites */}
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">
          ⚙️ Editor de Servicios
        </h3>
        <p className="text-blue-600 text-sm mb-2">
          Selecciona una carta para editar. Los cambios solo se guardan cuando presiones el botón "Guardar Cambios".
        </p>
        <div className="text-xs text-gray-600 space-y-1">
          <p>📝 <strong>Límites de caracteres:</strong></p>
          <p>• Título: Máximo {CHAR_LIMITS.title} caracteres</p>
          <p>• Descripción: Máximo {CHAR_LIMITS.description} caracteres</p>
        </div>
      </div>

      {/* Selector de carta */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <label className="block text-sm font-medium mb-3 text-gray-700">
          📋 Seleccionar Carta para Editar
        </label>
        <select
          value={selectedCard}
          onChange={(e) => setSelectedCard(Number(e.target.value))}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {editedServices.map((service, index) => (
            <option key={index} value={index}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      {/* Editor de la carta seleccionada */}
      <div className="border-2 border-gray-200 rounded-xl p-6 bg-white shadow-sm">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <h4 className="text-xl font-bold text-gray-800">
              Editando: {currentService.title}
            </h4>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${hasChanges ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
            }`}>
            {hasChanges ? '⚠️ Cambios sin guardar' : '✅ Todo guardado'}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Columna 1: Icono y Color */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-3 text-gray-700">
                🎨 Icono del Servicio
              </label>
              <IconSelector
                value={currentService.icon}
                onChange={(icon) => updateService(selectedCard, { icon })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-3 text-gray-700">
                🎨 Color de Fondo
              </label>
              <ColorPicker
                value={currentService.color}
                onChange={(color) => updateService(selectedCard, { color })}
              />
            </div>
          </div>

          {/* Columna 2: Título y Descripción */}
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="block text-sm font-medium text-gray-700">
                  📝 Título
                </label>
                <span className={`text-xs ${titleExceeded ? 'text-red-500 font-bold' :
                  titleLength > CHAR_LIMITS.title * 0.8 ? 'text-orange-500' : 'text-gray-500'
                  }`}>
                  {titleLength}/{CHAR_LIMITS.title}
                </span>
              </div>
              <input
                type="text"
                value={currentService.title}
                onChange={(e) => handleInputChange(selectedCard, 'title', e.target.value)}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${titleExceeded ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                placeholder="Ej: Caja de Talentos"
              />
              {titleExceeded && (
                <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
                  <Warning fontSize="small" />
                  Límite excedido. Acorta el título.
                </div>
              )}
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="block text-sm font-medium text-gray-700">
                  📄 Descripción
                </label>
                <span className={`text-xs ${descriptionExceeded ? 'text-red-500 font-bold' :
                  descriptionLength > CHAR_LIMITS.description * 0.8 ? 'text-orange-500' : 'text-gray-500'
                  }`}>
                  {descriptionLength}/{CHAR_LIMITS.description}
                </span>
              </div>
              <textarea
                value={currentService.description}
                onChange={(e) => handleInputChange(selectedCard, 'description', e.target.value)}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${descriptionExceeded ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                rows={5}
                placeholder="Describe el servicio..."
              />
              {descriptionExceeded && (
                <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
                  <Warning fontSize="small" />
                  Límite excedido. Acorta la descripción.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Vista previa */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg border">
          <p className="text-sm text-gray-600 font-medium mb-3">👀 Vista previa de la carta:</p>
          <div className="bg-white rounded-lg p-6 shadow-inner border">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className={`p-4 rounded-full ${currentService.color} shadow-lg`}>
                <IconRenderer
                  iconName={currentService.icon}
                  className="text-white text-3xl"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 champ-bold">
                {currentService.title}
              </h3>
              <p className="text-gray-600 leading-relaxed poppins-regular max-w-md">
                {currentService.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <div className="flex justify-between items-center mb-3">
          <label className="block text-sm font-medium text-gray-700">
            🔗 Enlace (Opcional)
          </label>

        </div>
        <input
          type="url"
          value={currentService.links || ''}
          onChange={(e) => updateService(selectedCard, { links: e.target.value })}
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              }`}
          placeholder="https://ejemplo.com o /ruta-interna"
        />
        <p className="text-xs text-gray-500 mt-1">
          Deja vacío si no quieres enlace. Usa "/ruta" para enlaces internos o "https://" para externos.
        </p>
      </div>

      {/* Botones de acción */}
      <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border">
        <div className="text-sm text-gray-600">
          {hasChanges ? (
            <div>
              <span className="text-orange-600">⚠️ Tienes cambios sin guardar</span>
              {(titleExceeded || descriptionExceeded) && (
                <div className="text-red-500 text-xs mt-1">
                  ❌ Corrige los campos en rojo antes de guardar
                </div>
              )}
            </div>
          ) : (
            <span className="text-green-600">✅ Todos los cambios están guardados</span>
          )}
        </div>

        <div className="flex gap-3">
          {hasChanges && (
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition-all"
            >
              Cancelar
            </button>
          )}

          <button
            onClick={handleSave}
            disabled={!canSave}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${canSave
              ? 'bg-green-500 text-white hover:bg-green-600 shadow-lg transform hover:scale-105'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
          >
            <Save />
            {canSave ? 'Guardar Cambios' : 'Guardado'}
          </button>
        </div>
      </div>
    </div>
  );
};
import { useState, useEffect } from 'react';
import { Save, Warning } from '@mui/icons-material';
import type { CustomizeMissionLetter } from "../../info/interface/typesInfo";

interface MissionVisionEditorProps {
  missionLetter: CustomizeMissionLetter;
  visionLetter: CustomizeMissionLetter;
  onUpdate: (mission: CustomizeMissionLetter, vision: CustomizeMissionLetter) => void;
}

const CHAR_LIMITS = {
  mission: 200,
  vision: 200
};

export const MissionVisionEditor: React.FC<MissionVisionEditorProps> = ({
  missionLetter,
  visionLetter,
  onUpdate
}) => {
  const [editedMission, setEditedMission] = useState<CustomizeMissionLetter>(missionLetter);
  const [editedVision, setEditedVision] = useState<CustomizeMissionLetter>(visionLetter);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    const missionChanged = JSON.stringify(missionLetter) !== JSON.stringify(editedMission);
    const visionChanged = JSON.stringify(visionLetter) !== JSON.stringify(editedVision);
    setHasChanges(missionChanged || visionChanged);
  }, [editedMission, editedVision, missionLetter, visionLetter]);

  const handleSave = () => {
    if (editedMission.textInfo.length > CHAR_LIMITS.mission || editedVision.textInfo.length > CHAR_LIMITS.vision) {
      alert('❌ No se puede guardar: Algunos textos exceden el límite de caracteres');
      return;
    }
    
    onUpdate(editedMission, editedVision);
  };

  const handleCancel = () => {
    setEditedMission(missionLetter);
    setEditedVision(visionLetter);
  };

  const missionLength = editedMission.textInfo.length;
  const visionLength = editedVision.textInfo.length;
  const missionExceeded = missionLength > CHAR_LIMITS.mission;
  const visionExceeded = visionLength > CHAR_LIMITS.vision;
  const canSave = hasChanges && !missionExceeded && !visionExceeded;

  return (
    <div className="space-y-6">
      {/* Header con información */}
      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
        <h3 className="text-lg font-semibold text-purple-800 mb-2">
          📜 Editor de Misión y Visión
        </h3>
        <p className="text-purple-600 text-sm mb-2">
          Edita la misión y visión de la fundación. Los cambios se guardan cuando presiones "Guardar Cambios".
        </p>
        <div className="text-xs text-gray-600 space-y-1">
          <p>📝 <strong>Límites de caracteres:</strong></p>
          <p>• Misión: Máximo {CHAR_LIMITS.mission} caracteres</p>
          <p>• Visión: Máximo {CHAR_LIMITS.vision} caracteres</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Editor de Misión */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl poppins-bold text-green-600">
              Misión
            </h2>
            {/* <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">Color:</span>
              <ColorPicker
                value={editedMission.color}
                onChange={(color) => setEditedMission({ ...editedMission, color })}
              />
            </div> */}
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Texto de Misión
                </label>
                <span className={`text-xs ${
                  missionExceeded ? 'text-red-500 font-bold' : 
                  missionLength > CHAR_LIMITS.mission * 0.8 ? 'text-orange-500' : 'text-gray-500'
                }`}>
                  {missionLength}/{CHAR_LIMITS.mission}
                </span>
              </div>
              <textarea
                value={editedMission.textInfo}
                onChange={(e) => setEditedMission({ ...editedMission, textInfo: e.target.value })}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 min-h-[120px] ${
                  missionExceeded ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="Describe la misión de la fundación..."
              />
              {missionExceeded && (
                <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
                  <Warning fontSize="small" />
                  Límite excedido. Acorta el texto.
                </div>
              )}
            </div>

            {/* <div className="bg-gray-50 p-3 rounded-lg border">
              <p className="text-sm text-gray-600 font-medium mb-2">Vista previa:</p>
              <div className="flex items-start gap-3">
                <div className={`w-3 h-3 rounded-full mt-1 ${editedMission.color}`}></div>
                <p className="text-gray-700 text-sm">{editedMission.textInfo}</p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Editor de Visión */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl poppins-bold text-blue-600">
              Visión
            </h2>
            {/* <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">Color:</span>
              <ColorPicker
                value={editedVision.color}
                onChange={(color) => setEditedVision({ ...editedVision, color })}
              />
            </div> */}
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Texto de Visión
                </label>
                <span className={`text-xs ${
                  visionExceeded ? 'text-red-500 font-bold' : 
                  visionLength > CHAR_LIMITS.vision * 0.8 ? 'text-orange-500' : 'text-gray-500'
                }`}>
                  {visionLength}/{CHAR_LIMITS.vision}
                </span>
              </div>
              <textarea
                value={editedVision.textInfo}
                onChange={(e) => setEditedVision({ ...editedVision, textInfo: e.target.value })}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[120px] ${
                  visionExceeded ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="Describe la visión de la fundación..."
              />
              {visionExceeded && (
                <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
                  <Warning fontSize="small" />
                  Límite excedido. Acorta el texto.
                </div>
              )}
            </div>

            {/* <div className="bg-gray-50 p-3 rounded-lg border">
              <p className="text-sm text-gray-600 font-medium mb-2">Vista previa:</p>
              <div className="flex items-start gap-3">
                <div className={`w-3 h-3 rounded-full mt-1 ${editedVision.color}`}></div>
                <p className="text-gray-700 text-sm">{editedVision.textInfo}</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border">
        <div className="text-sm text-gray-600">
          {hasChanges ? (
            <div>
              <span className="text-orange-600">⚠️ Tienes cambios sin guardar</span>
              {(missionExceeded || visionExceeded) && (
                <div className="text-red-500 text-xs mt-1">
                  ❌ Corrige los textos en rojo antes de guardar
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
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              canSave
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

export default MissionVisionEditor;
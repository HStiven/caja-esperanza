import { db } from './config';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import type { AdminConfig, CustomizeMissionLetter, UsService } from '../app/pages/info/interface/typesInfo';

const ADMIN_DOC_ID = 'siteConfig';

// Obtener toda la configuración
export const getAdminConfig = async (): Promise<AdminConfig> => {
  try {
    const docRef = doc(db, 'admin', ADMIN_DOC_ID);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data() as AdminConfig;
    } else {
      // Configuración por defecto
      const defaultConfig: AdminConfig = {
        services: [],
        missionLetter: { color: 'green-500', textInfo: '' },
        visionLetter: { color: 'blue-500', textInfo: '' },
        foundationCards: [],
        foundationData: [],
        locationData: {
          LocationMap: {
            id: '',
            src: '',
            descriptionAlt: '',
            direction: '',
            cellphone: 0,
            email: ''
          },
          CarruselImageLocation: []
        }
      };
      await setDoc(docRef, defaultConfig);
      return defaultConfig;
    }
  } catch (error) {
    console.error('Error obteniendo configuración:', error);
    throw error;
  }
};

// Actualizar toda la configuración
export const updateAdminConfig = async (config: Partial<AdminConfig>) => {
  try {
    const docRef = doc(db, 'admin', ADMIN_DOC_ID);
    await updateDoc(docRef, config);
  } catch (error) {
    console.error('Error actualizando configuración:', error);
    throw error;
  }
};

// Actualizar servicios
export const updateServices = async (services: UsService[]) => {
  await updateAdminConfig({ services });
};

// Actualizar misión/visión
export const updateMissionVision = async (
  missionLetter: CustomizeMissionLetter, 
  visionLetter: CustomizeMissionLetter
) => {
  await updateAdminConfig({ missionLetter, visionLetter });
};
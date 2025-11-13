import { db } from './config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

// Guardar mensaje de contacto
export const saveContactMessage = async (data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) => {
  try {
    const docRef = await addDoc(collection(db, 'contactMessages'), {
      ...data,
      createdAt: Timestamp.now(),
      read: false
    });
    return docRef.id;
  } catch (error) {
    console.error('Error guardando mensaje:', error);
    throw error;
  }
};
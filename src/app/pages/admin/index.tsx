import { useEffect, useState } from 'react';
import { getAdminConfig, updateMissionVision, updateServices } from '../../../firebase/adminIperations';
import useMediaQueryScreen from '../../hooks/MediaScreen/useMediaQueryScreen';
import { toast } from 'react-toastify';
import './index.css';
import type { AdminConfig, CustomizeMissionLetter, UsService } from '../info/interface/typesInfo';
import { ServiceEditor } from './elements/ServiceEditor';
import { MissionVisionEditor } from './elements/MissionVisionEditor';

const AdminSettings: React.FC = () => {
    const [isxSmall, isSmall] = useMediaQueryScreen();
    const [config, setConfig] = useState<AdminConfig | null>(null);
    const [loading, setLoading] = useState(true);

    // CORREGIDO: Estado inicial correcto para misión y visión
    const [missionVision, setMissionVision] = useState<{
        mission: CustomizeMissionLetter;
        vision: CustomizeMissionLetter;
    }>({
        mission: {
            color: 'green-500',
            textInfo: ''
        },
        vision: {
            color: 'blue-500', 
            textInfo: ''
        }
    });

    useEffect(() => {
        loadConfig();
    }, []);

    const loadConfig = async () => {
        try {
            const data = await getAdminConfig();
            setConfig(data);
            
            // CORREGIDO: Actualizar missionVision cuando se cargan los datos
            if (data) {
                setMissionVision({
                    mission: data.missionLetter || {
                        color: 'green-500',
                        textInfo: 'Nuestra misión es brindar apoyo integral a niñas en situación de vulnerabilidad...'
                    },
                    vision: data.visionLetter || {
                        color: 'blue-500',
                        textInfo: 'Nuestra visión es ser un referente en la protección y promoción de los derechos de las niñas...'
                    }
                });
            }
        } catch (error) {
            console.error('Error cargando configuración:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateServices = async (services: UsService[]) => {
        try {
            await updateServices(services);
            setConfig(prev => prev ? { ...prev, services } : null);
            toast.success('Servicios actualizados correctamente');
        } catch (error) {
            toast.error('Error actualizando servicios');
        }
    };

    const handleMissionVisionUpdate = async (mission: CustomizeMissionLetter, vision: CustomizeMissionLetter) => {
        try {
            await updateMissionVision(mission, vision);
            setMissionVision({ mission, vision });
            // CORREGIDO: También actualizar el config
            setConfig(prev => prev ? { 
                ...prev, 
                missionLetter: mission, 
                visionLetter: vision 
            } : null);
            toast.success('Misión y Visión actualizadas correctamente');
        } catch (error) {
            toast.error('Error actualizando Misión y Visión');
        }
    };

    if (loading) return <div className='w-full h-full flex justify-center items-center text-pink-500 champ-bold' style={{ fontSize: '3.8rem' }}>Cargando...</div>;
    if (!config) return <div className='w-full h-full flex justify-center items-center text-orange-500 champ-bold' style={{ fontSize: '3.8rem' }}>Error cargando configuración</div>;

    return (
        <>
            <section className='app-background bg-soft-pastel-step-two' />
            <section className="w-full h-full flex flex-col p-16" style={{ overflow: 'hidden auto' }}>
                <h1 className="font-bold text-center text-cyan-500 mb-8 champ-bold text-center" style={{ fontSize: ((isSmall || isxSmall) ? '3rem' : '5rem'), padding: ((isSmall || isxSmall) ? '5px 20px' : '10px 100px') }}>Panel administrativo de la plataforma</h1>
                <article className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl poppins-bold mb-4 text-blue-600">
                            Servicios - Cajas
                        </h2>
                        <ServiceEditor
                            services={config.services}
                            onUpdate={handleUpdateServices}
                        />
                    </div>
                    <div className="h-full grid grid-cols-1 gap-6 items-start">
                        <MissionVisionEditor
                            missionLetter={missionVision.mission}
                            visionLetter={missionVision.vision}
                            onUpdate={handleMissionVisionUpdate}
                        />
                    </div>
                </article>
            </section>
        </>
    )
}

export default AdminSettings;
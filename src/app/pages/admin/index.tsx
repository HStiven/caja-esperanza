import { useEffect, useState } from 'react';
import { getAdminConfig, updateServices } from '../../../firebase/adminIperations';
import useMediaQueryScreen from '../../hooks/MediaScreen/useMediaQueryScreen';
import './index.css';
import type { AdminConfig, UsService } from '../info/interface/typesInfo';
import { ServiceEditor } from './elements/ServiceEditor';

const AdminSettings: React.FC = () => {
    const [isxSmall, isSmall] = useMediaQueryScreen();
    const [config, setConfig] = useState<AdminConfig | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadConfig();
    }, []);

    const loadConfig = async () => {
        try {
            const data = await getAdminConfig();
            setConfig(data);
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
            alert('Servicios actualizados correctamente');
        } catch (error) {
            alert('Error actualizando servicios');
        }
    };

    if (loading) return <div>Cargando...</div>;
    if (!config) return <div>Error cargando configuración</div>;

    return (
        <>
            <section className='app-background bg-soft-pastel-step-two' />
            <section className="w-full h-full p-16">
                <h1 className="font-bold text-center text-cyan-500 mb-8 champ-bold text-center" style={{ fontSize: ((isSmall || isxSmall) ? '3rem' : '4rem'), padding: ((isSmall || isxSmall) ? '5px 20px' : '10px 100px') }}>Panel administrativo de la plataforma</h1>
                <div className="w-full flex mt-4">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                            Servicios - Cajas
                        </h2>
                        <ServiceEditor
                            services={config.services}
                            onUpdate={handleUpdateServices}
                        />
                    </div>
                </div>
            </section>
        </>

    )
}

export default AdminSettings;
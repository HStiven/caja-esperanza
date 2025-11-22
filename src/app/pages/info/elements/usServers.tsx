import type { CustomizeMissionLetter, UsService } from "../interface/typesInfo";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import { AnimatedScrollComponent } from "../../../components/AnimatedRenderContent";
import { useNavigate } from 'react-router-dom';
import IconRenderer from "../../../components/IconSelector/IconRenderer";
interface UsServersProps {
    services: UsService[];
    missionLetter?: CustomizeMissionLetter;
    visionLetter?: CustomizeMissionLetter;
}

const UsServers: React.FC<UsServersProps> = ({ services, missionLetter, visionLetter }) => {
    const navigate = useNavigate();

    // Mapeo estático de clases Tailwind para evitar problemas con purge/JIT
    // const COLOR_CLASSES: Record<string, { bg: string; border: string; text: string }> = {
    //     'green-500': { bg: 'bg-green-500', border: 'border-3 border-green-500', text: 'text-green-500' },
    //     'blue-500': { bg: 'bg-blue-500', border: 'border-3 border-blue-500', text: 'text-blue-500' },
    //     'red-500': { bg: 'bg-red-500', border: 'border-3 border-red-500', text: 'text-red-500' },
    //     'purple-500': { bg: 'bg-purple-500', border: 'border-3 border-purple-500', text: 'text-purple-500' },
    //     'pink-500': { bg: 'bg-pink-500', border: 'border-3 border-pink-500', text: 'text-pink-500' },
    // }


    return (
        <section id="usservers" className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-100 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <AnimatedScrollComponent
                    key="full"
                    className=""
                    direction="up"
                    delay={0.3}
                >
                    <div className="text-center mb-10 2xl:mb-16">
                        <h1 className="text-5xl font-bold text-gray-800 mb-4 champ-bold">
                            Nuestros Servicios
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto poppins-regular">
                            Programas integrales diseñados para el desarrollo personal y profesional
                        </p>
                    </div>
                </AnimatedScrollComponent>

                <AnimatedScrollComponent
                    key="full"
                    className=""
                    direction="up"
                    delay={0.45}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-between bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                style={{ minHeight: '300px' }}
                            >
                                {/* Icon Header */}
                                <div className={`${service.color} py-6 flex justify-center`}>
                                    <div className="bg-white p-4 rounded-full shadow-lg">
                                        <IconRenderer
                                            iconName={service.icon}  // ← USA IconRenderer aquí
                                            className="text-4xl"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4 champ-bold text-center">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed poppins-regular text-center">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Footer */}
                                <div className="px-8 pb-6">
                                    <button
                                        className="w-full py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300 poppins-medium"
                                        style={{ cursor: service.links ? 'pointer' : '' }}
                                        onClick={() => {
                                            if (!service.links) return;
                                            // internal route -> use react-router navigate to avoid full reload
                                            if (service.links.startsWith('/')) {
                                                navigate(service.links);
                                            } else {
                                                // external link -> full navigation
                                                window.location.href = service.links;
                                            }
                                        }}
                                    >
                                        Conocer Más
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedScrollComponent>
                {/* Services Grid */}

<AnimatedScrollComponent
    key="full"
    className=""
    direction="up"
    delay={0.55}
>
    <div className="w-full flex flex-col md:flex-row gap-5 mt-6 2xl:mt-16 text-center">
        {/* Misión card */}
        {(() => {
            // Mapa de colores para Tailwind
            const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
                'green-500': { bg: 'bg-green-500', text: 'text-green-500', border: 'border-green-500' },
                'blue-500': { bg: 'bg-blue-500', text: 'text-blue-500', border: 'border-blue-500' },
                'red-500': { bg: 'bg-red-500', text: 'text-red-500', border: 'border-red-500' },
                'pink-500': { bg: 'bg-pink-500', text: 'text-pink-500', border: 'border-pink-500' },
                'purple-500': { bg: 'bg-purple-500', text: 'text-purple-500', border: 'border-purple-500' },
                'yellow-500': { bg: 'bg-yellow-500', text: 'text-yellow-500', border: 'border-yellow-500' },
                'indigo-500': { bg: 'bg-indigo-500', text: 'text-indigo-500', border: 'border-indigo-500' },
                'teal-500': { bg: 'bg-teal-500', text: 'text-teal-500', border: 'border-teal-500' },
            };

            const mColor = missionLetter?.color ?? 'green-500';
            const mStyles = colorMap[mColor] || colorMap['green-500'];
            const mBorder = `border-3 ${mStyles.border}`;

            return (
                <article className={`w-full md:w-1/2 flex rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${mBorder}`} style={{ maxHeight: '200px' }}>
                    <div className={`${mStyles.bg} py-6 flex justify-center items-center px-4`}>
                        <div className="bg-white p-4 rounded-full shadow-lg">
                            <CrisisAlertIcon className={mStyles.text} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between bg-white py-8 px-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 champ-bold">
                            Misión
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed poppins-regular">
                            {missionLetter?.textInfo ?? 'Promover la transformación social que propenda hacia la recuperación integral de las niñas y sus respectivas familias.'}
                        </p>
                    </div>
                </article>
            );
        })()}

        {/* Visión card */}
        {(() => {
            // Mapa de colores para Tailwind
            const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
                'green-500': { bg: 'bg-green-500', text: 'text-green-500', border: 'border-green-500' },
                'blue-500': { bg: 'bg-blue-500', text: 'text-blue-500', border: 'border-blue-500' },
                'red-500': { bg: 'bg-red-500', text: 'text-red-500', border: 'border-red-500' },
                'pink-500': { bg: 'bg-pink-500', text: 'text-pink-500', border: 'border-pink-500' },
                'purple-500': { bg: 'bg-purple-500', text: 'text-purple-500', border: 'border-purple-500' },
                'yellow-500': { bg: 'bg-yellow-500', text: 'text-yellow-500', border: 'border-yellow-500' },
                'indigo-500': { bg: 'bg-indigo-500', text: 'text-indigo-500', border: 'border-indigo-500' },
                'teal-500': { bg: 'bg-teal-500', text: 'text-teal-500', border: 'border-teal-500' },
            };

            const vColor = visionLetter?.color ?? 'blue-500';
            const vStyles = colorMap[vColor] || colorMap['blue-500'];
            const vBorder = `border-3 ${vStyles.border}`;

            return (
                <article className={`w-full md:w-1/2 flex rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${vBorder}`} style={{ maxHeight: '200px' }}>
                    <div className={`${vStyles.bg} py-6 flex justify-center items-center px-4`}>
                        <div className="bg-white p-4 rounded-full shadow-lg">
                            <RemoveRedEyeIcon className={vStyles.text} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between bg-white py-8 px-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 champ-bold">
                            Visión
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed poppins-regular">
                            {visionLetter?.textInfo ?? 'Promover la transformación social que propenda hacia la recuperación integral de las niñas y sus respectivas familias.'}
                        </p>
                    </div>
                </article>
            );
        })()}
    </div>
</AnimatedScrollComponent>
            </div>
        </section>
    )
}

export { UsServers }
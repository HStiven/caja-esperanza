import type { CustomizeMissionLetter, UsService } from "../interface/typesInfo";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
interface UsServersProps {
    services: UsService[];
    missionLetter?: CustomizeMissionLetter;
    visionLetter?: CustomizeMissionLetter;
}

const UsServers: React.FC<UsServersProps> = ({ services, missionLetter, visionLetter }) => {

    return (
        <section id="usservers" className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4 champ-bold">
                        Nuestros Servicios
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto poppins-regular">
                        Programas integrales diseñados para el desarrollo personal y profesional
                    </p>
                </div>

                {/* Services Grid */}
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
                                    {service.icon}
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
                                <button className="w-full py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300 poppins-medium">
                                    Conocer Más
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full flex flex-col md:flex-row gap-5 mt-16 text-center">
                    {/* Misión card - color and text from props (missionLetter) */}
                    {(() => {
                        const mColor = missionLetter?.color ?? 'green-500';
                        const mBg = `bg-${mColor}`;
                        const mBorder = `border-3 border-${mColor}`;
                        const mTextClass = `text-${mColor}`;

                        return (
                            <article className={`w-full md:w-1/2 flex rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${mBorder}`} style={{ maxHeight: '200px' }}>
                                <div className={`${mBg} py-6 flex justify-center items-center px-4`}>
                                    <div className="bg-white p-4 rounded-full shadow-lg">
                                        <CrisisAlertIcon className={mTextClass} />
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

                    {/* Visión card - color and text from props (visionLetter) */}
                    {(() => {
                        const vColor = visionLetter?.color ?? 'blue-500';
                        const vBg = `bg-${vColor}`;
                        const vBorder = `border-3 border-${vColor}`;
                        const vTextClass = `text-${vColor}`;

                        return (
                            <article className={`w-full md:w-1/2 flex rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${vBorder}`} style={{ maxHeight: '200px' }}>
                                <div className={`${vBg} py-6 flex justify-center items-center px-4`}>
                                    <div className="bg-white p-4 rounded-full shadow-lg">
                                        <RemoveRedEyeIcon className={vTextClass} />
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
            </div>
        </section>
    )
}

export { UsServers }
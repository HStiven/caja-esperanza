import type { UsService } from "../interface/typesInfo";

interface UsServersProps {
    services: UsService[];
}

const UsServers: React.FC<UsServersProps> = ({ services }) => {

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
                            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
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

                {/* Additional Info */}
                <div className="mt-16 text-center">
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 champ-bold">
                            Transformando Vidas a Través de la Educación
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed poppins-regular">
                            Cada uno de nuestros programas está diseñado para potenciar las habilidades únicas de cada individuo, 
                            fomentando el crecimiento personal y profesional en un ambiente de apoyo y colaboración.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { UsServers }
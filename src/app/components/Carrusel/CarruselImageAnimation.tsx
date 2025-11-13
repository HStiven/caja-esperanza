import { useEffect, useState, type CSSProperties } from "react";

interface CarruselImageLocation {
    id: string;
    src: string;
    descriptionAlt: string;
}

interface CarruselProps {
    images: CarruselImageLocation[];
    className?: string;
    style?: CSSProperties;
    autoPlay?: boolean;
    interval?: number;
    height?: string;
    showIndicators?: boolean;
    showControls?: boolean;
}

const Carrusel: React.FC<CarruselProps> = ({
    images,
    className = "",
    style = {},
    autoPlay = false,
    interval = 5000,
    height = "400px",
    showIndicators = true,
    showControls = true
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        if (autoPlay && images.length > 1) {
            const timer = setInterval(nextSlide, interval);
            return () => clearInterval(timer);
        }
    }, [autoPlay, interval, images.length]);

    if (images.length === 0) {
        return (
            <div
                className={`flex items-center justify-center bg-gray-100 rounded-xl ${className}`}
                style={{ height: '100%', ...style }}
            >
                <p className="text-gray-500">No hay imágenes para mostrar</p>
            </div>
        );
    }

    return (
        <div
            className={`relative w-full overflow-hidden ${className}`}
            style={{ height, ...style }}
        >
            {/* Carrusel wrapper */}
            <div className="relative w-full h-full">
                {images.map((image, index) => (
                    <div
                        key={image.id}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                            index === currentSlide 
                                ? 'opacity-100 scale-100' 
                                : 'opacity-0 scale-105'
                        }`}
                    >
                        <img
                            src={image.src}
                            className="w-full h-full object-cover"
                            alt={image.descriptionAlt}
                        />
                        {/* Overlay de información */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                            <p className="text-pink-400 text-lg font-semibold">
                                {image.descriptionAlt}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Indicadores mejorados */}
            {showIndicators && images.length > 1 && (
                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-20 left-1/2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-4 h-4 rounded-full transition-all duration-300 ${
                                index === currentSlide 
                                    ? 'bg-pink-500 scale-125 shadow-lg' 
                                    : 'bg-pink-500/50 hover:bg-pink-500/70'
                            }`}
                            aria-label={`Ir a imagen ${index + 1}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            )}

            {/* Controles de navegación mejorados */}
            {showControls && images.length > 1 && (
                <>
                    <button
                        type="button"
                        className="absolute top-1/2 left-6 z-30 flex items-center justify-center w-12 h-12 -translate-y-1/2 bg-black/30 rounded-full hover:bg-black/50 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                        onClick={prevSlide}
                    >
                        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="sr-only">Anterior</span>
                    </button>

                    <button
                        type="button"
                        className="absolute top-1/2 right-6 z-30 flex items-center justify-center w-12 h-12 -translate-y-1/2 bg-black/30 rounded-full hover:bg-black/50 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                        onClick={nextSlide}
                    >
                        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="sr-only">Siguiente</span>
                    </button>
                </>
            )}

            {/* Contador de imágenes */}
            <div className="absolute top-4 right-4 z-30 bg-black/50 text-pink-400 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                {currentSlide + 1} / {images.length}
            </div>
        </div>
    );
};

export default Carrusel;
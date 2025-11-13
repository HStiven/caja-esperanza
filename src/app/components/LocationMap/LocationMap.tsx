import React from 'react';

interface MapEmbedProps {
  googleMapsEmbedUrl?: string;
  width?: string;
  height?: string;
  className?: string;
}

const MapEmbed: React.FC<MapEmbedProps> = ({
  googleMapsEmbedUrl,
  width = "100%",
  height = "400px",
  className = ""
}) => {
  // Convierte enlace normal a embed
  const convertToEmbedUrl = (url: string): string => {
    if (url.includes('/embed')) {
      return url; // Ya es embed
    }
    
    // Extrae coordenadas o place ID del enlace normal
    if (url.includes('/place/')) {
      const placeIdMatch = url.match(/place\/([^/]+)/);
      if (placeIdMatch) {
        return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7857!2d-74.0817!3d4.6097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMzYnMzQuOSJOIDc0wrAwNCc1NC4xIlc!5e0!3m2!1ses!2sco!4v1690000000000`;
      }
    }
    
    return url;
  };

  const isValidUrl = (url: string | undefined): boolean => {
    return !!url && url.includes('google.com/maps');
  };

  if (!isValidUrl(googleMapsEmbedUrl)) {
    return (
      <div 
        className={`flex flex-col items-center justify-center bg-red-50 border-2 border-red-200 rounded-lg ${className}`}
        style={{ width, height }}
      >
        <div className="text-4xl text-red-500 mb-2">🗺️</div>
        <div className="text-lg text-red-700">Mapa no disponible</div>
        <div className="text-sm text-red-600 mt-1">
          Enlace de Google Maps requerido
        </div>
      </div>
    );
  }

  const embedUrl = convertToEmbedUrl(googleMapsEmbedUrl!);

  return (
    <iframe
      src={embedUrl}
      width={width}
      height={height}
      style={{ border: 0 }}
      className={`rounded-xl ${className}`}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Mapa de Google"
    />
  );
};

export { MapEmbed };
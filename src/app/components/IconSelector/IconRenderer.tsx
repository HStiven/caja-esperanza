import React from 'react';
import {
  MusicNote,
  School,
  BusinessCenter,
  SelfImprovement,
  FitnessCenter,
  Diversity3,
  People,
  Work,
  Book,
  Psychology,
  HealthAndSafety,
  EmojiPeople,
  Favorite,
  Group,
  Public,
  Lightbulb,
  TrendingUp,
  Restaurant,
  LocalLibrary,
  SportsEsports,
  TheaterComedy,
  Brush,
  Calculate,
  Language,
  Science,
  History,
  Code,
  Palette,
  VolumeUp,
  Videocam,
  CameraAlt,
  Create,
  Dashboard,
  Analytics,
  Security,
  Cloud,
  Storage,
  Phone,
  Email,
  LocationOn,
  Share,
  ThumbUp,
  Comment,
  Schedule,
  Event,
  Notifications,
} from '@mui/icons-material';

interface IconRendererProps {
  iconName: string;
  className?: string;
  style?: React.CSSProperties;
}

// Mapa de todos los iconos disponibles
const iconMap: Record<string, React.ComponentType<any>> = {
  MusicNote,
  School,
  BusinessCenter,
  SelfImprovement,
  FitnessCenter,
  Diversity3,
  
  People,
  Work,
  Book,
  Psychology,
  HealthAndSafety,
  EmojiPeople,
  Favorite,
  Group,
  Public,
  Lightbulb,
  TrendingUp,
  Restaurant,
  LocalLibrary,
  SportsEsports,
  TheaterComedy,
  Brush,
  Calculate,
  Language,
  Science,
  History,
  Code,
  Palette,
  VolumeUp,
  Videocam,
  CameraAlt,
  Create,
  Dashboard,
  Analytics,
  Security,
  Cloud,
  Storage,
  Phone,
  Email,
  LocationOn,
  Share,
  ThumbUp,
  Comment,
  Schedule,
  Event,
  Notifications,
};

export const IconRenderer: React.FC<IconRendererProps> = ({ 
  iconName, 
  className = "text-4xl",
  style 
}) => {
  const IconComponent = iconMap[iconName];
  
  if (!IconComponent) {
    console.warn(`Icono no encontrado: ${iconName}`);
    return <div className={className} style={style}>❓</div>;
  }

  return <IconComponent className={className} style={style} />;
};

export default IconRenderer;
export interface AdminConfig {
  services: UsService[];
  missionLetter: CustomizeMissionLetter;
  visionLetter: CustomizeMissionLetter;
  foundationCards: FoundationCard[];
  foundationData: ListFundationDefinitive[];
  locationData: LocationMapInterfaceImage;
}

export interface UsService {
    id: string;
    icon: string;
    title: string;
    description: string;
    color: string;
    links?: string;
}

export interface CustomizeMissionLetter {
    color: string;
    textInfo: string;
}
1
export interface CustomizeVisionChart{
    color: string;
    textInfo: string;
}

export interface CardsFundaments {
    icon: String;
    color: string;
    textColor: string;
    title: string;
}

type SubListFundation = {
    id: string;
    text: string;
}

export interface ListFundationDefinitive {
    id: string;
    title: string;
    SubListFundation?: SubListFundation[];
}

type LocationMap = {
    id: string;
    src: string;
    descriptionAlt?: string;
    direction: string;
    cellphone: number;
    email: string;
}

type CarruselImageLocation ={
    id: string;
    src: string;
    descriptionAlt: string;
}

export interface LocationMapInterfaceImage{
    LocationMap: LocationMap;
    CarruselImageLocation: CarruselImageLocation[];
}

export interface FoundationCard {
  id: string;
  icon: string;
  color: string;
  textColor: string;
  title: string;
  description: string;
}
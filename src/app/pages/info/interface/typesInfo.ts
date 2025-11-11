import type { ReactNode } from 'react';

export interface UsService {
    icon: ReactNode;
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
    icon: ReactNode;
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
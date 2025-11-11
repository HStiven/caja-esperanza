import type { ReactNode } from 'react';

export interface UsService {
    icon: ReactNode;
    title: string;
    description: string;
    color: string;
}

export interface CustomizeMissionLetter {
    color: string;
    textInfo: string;
}

export interface CustomizeVisionChart{
    color: string;
    textInfo: string;
}
import './index.css';
import { MusicNote, School, BusinessCenter } from '@mui/icons-material';
import type { CustomizeMissionLetter, UsService } from './interface/typesInfo';
import { UsServers } from './elements/usServers';
import { OurFoundation } from './elements/ourFoundation';
const InfoPage: React.FC = () => {
    
    const services: UsService[] = [
        {
            icon: <MusicNote className="text-4xl" />,
            title: "Caja de Talentos",
            description: "Clases de música en tres instrumentos: piano, guitarra y batería. Desarrollamos habilidades artísticas y creativas.",
            color: "bg-blue-500"
        },
        {
            icon: <School className="text-4xl" />,
            title: "Caja del Saber",
            description: "Programas de apoyo a las niñas en edad escolar, aumento de su autoestima y refuerzo de temas y valores con influencia de temas.",
            color: "bg-pink-500"
        },
        {
            icon: <BusinessCenter className="text-4xl" />,
            title: "Caja Empresarial",
            description: "Programa de capacitación, talleres, conferencias a nivel de emprendimiento. Reforzamos los valores empresariales.",
            color: "bg-purple-500"
        }
    ];

    const missionLetter: CustomizeMissionLetter = {
        color: 'green-500',
        textInfo: 'Nuestra misión es brindar apoyo integral a niñas en situación de vulnerabilidad, promoviendo su desarrollo personal y social a través de programas educativos, culturales y de bienestar.'
    }

    const visionLetter: CustomizeMissionLetter = {
        color: 'blue-500',
        textInfo: 'Nuestra visión es ser un referente en la protección y promoción de los derechos de las niñas, garantizando su bienestar y desarrollo integral.'
    }

    const foundationCards = [
        {
            icon: <School className="text-4xl" />,  
            color: 'bg-red-500',
            textColor: 'text-white',
            title: 'Dimensión Cognitiva'
        },
    ]

    return (
        <section
            className="w-full h-screen md:snap-y md:snap-mandatory overflow-y-auto"
            style={{ scrollBehavior: 'smooth' }}
        >
            <div className="w-full h-screen md:snap-always md:snap-start">
                <UsServers services={services} visionLetter={visionLetter} missionLetter={missionLetter} />
            </div>

            <div className="w-full md:h-screen md:snap-always md:snap-start">
                <OurFoundation CardsFundaments={foundationCards} />
            </div>
        </section>
    )
}

export { InfoPage }
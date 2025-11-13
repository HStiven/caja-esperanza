import './index.css';
import { MusicNote, School, BusinessCenter, SelfImprovement, FitnessCenter, Diversity3 } from '@mui/icons-material';
import type { CustomizeMissionLetter, ListFundationDefinitive, UsService } from './interface/typesInfo';
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
            icon: <School style={{ fontSize: '2.8rem' }} />,
            color: 'bg-red-500',
            textColor: 'text-white',
            title: 'Dimensión Cognitiva',
            description: 'Desarrollo del pensamiento crítico, habilidades analíticas y capacidad de aprendizaje continuo.'
        },
        {
            icon: <SelfImprovement style={{ fontSize: '2.8rem' }} />,
            color: 'bg-blue-500',
            textColor: 'text-white',
            title: 'Dimensión Espiritual',
            description: 'Cultivo de valores, principios éticos y conexión con el propósito de vida.'
        },
        {
            icon: <FitnessCenter style={{ fontSize: '2.8rem' }} />,
            color: 'bg-green-500',
            textColor: 'text-white',
            title: 'Dimensión Corporal',
            description: 'Cuidado de la salud física, bienestar corporal y desarrollo de hábitos saludables.'
        },
        {
            icon: <Diversity3 style={{ fontSize: '2.8rem' }} />,
            color: 'bg-purple-500',
            textColor: 'text-white',
            title: 'Dimensión Socio-afectiva',
            description: 'Desarrollo de inteligencia emocional, habilidades sociales y relaciones interpersonales.'
        }
    ];

    const foundationData: ListFundationDefinitive[] = [
        {
            id: "1",
            title: "Programa de emprendimiento social y económico, que desarrollamos durante la semana con chicas entre los 15 y los 18 años.",
        },
        {
            id: "2",
            title: "Trabajamos varias ideas de productos.",
            SubListFundation: [
                { id: "2-1", text: "Submisión de camisetas" },
                { id: "2-2", text: "Submisión de vasos grupos de diferentes tamaños" },
                { id: "2-3", text: "Submisión de gorras" },
                { id: "2-4", text: "Aromas artesanales de varios tamaños" }
            ]
        },
        {
            id: "3",
            title: "Brigadas: Nuestra fundación realiza cada año brigadas en diferentes localidades, en diversas áreas, como salud, belleza y educación.",
        }
    ];

    return (
        <section
            className="w-full h-screen md:snap-y md:snap-mandatory overflow-y-auto"
            style={{ scrollBehavior: 'smooth' }}
        >
            <div className="w-full md:h-screen md:snap-always md:snap-start">
                <UsServers services={services} visionLetter={visionLetter} missionLetter={missionLetter} />
            </div>

            <div className="w-full md:h-screen md:snap-always md:snap-start">
                <OurFoundation CardsFundaments={foundationCards} ListFundationDefinitive={foundationData} />
            </div>
        </section>
    )
}

export { InfoPage }
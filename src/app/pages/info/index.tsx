import './index.css';
import { MusicNote, School, BusinessCenter, SelfImprovement, FitnessCenter, Diversity3 } from '@mui/icons-material';
import type { CustomizeMissionLetter, ListFundationDefinitive, LocationMapInterfaceImage, UsService } from './interface/typesInfo';
import { UsServers } from './elements/usServers';
import { OurFoundation } from './elements/ourFoundation';
import { LocationFoundation } from './elements/locationFoundation';
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

    const fundacionLocationData: LocationMapInterfaceImage = {
        LocationMap: {
            id: "mapa-sede-principal",
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15906.96588166767!2d-74.2065026!3d4.6221277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9f00178ff577%3A0x5882b73321cb811b!2sFundacion%20Caja%20de%20Esperanza!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco",
            descriptionAlt: "Ubicación de Fundación Caja de Esperanza en Bosa, Bogotá",
            direction: "Cl. 80a Sur #88I-33, Bosa, Bogotá, D.C, Bogotá",
            cellphone: 30000,
            email: 'ejemplo@gmail.com'
        },
        CarruselImageLocation: [
            {
                id: "img-1",
                src: "https://dkumy02vmzh93.cloudfront.net/bcabda69-aa45-4e14-9d51-4f2a9b29fa28.01",
                descriptionAlt: "Fachada principal de la fundación",
            },
            {
                id: "img-2",
                src: "https://dkumy02vmzh93.cloudfront.net/f6fabd1b-badf-415b-8801-32b14f1845ef.01",
                descriptionAlt: "Mural",
             
            },
            {
                id: "img-3",
                src: "https://dkumy02vmzh93.cloudfront.net/82b7f8fc-191c-4b2b-b33f-d75fda885436.01",
                descriptionAlt: "Área interior de actividades con niños",
            },
              {
                id: "img-3",
                src: "https://dkumy02vmzh93.cloudfront.net/1fbeb911-e073-4cbf-9d0b-f7f1e4ae1c29.01",
                descriptionAlt: "Caja de bondad",
            },
        ]
    }

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

            <div className="w-full md:h-screen md:snap-always md:snap-start">
                <LocationFoundation fundacionLocationData={fundacionLocationData}/>
            </div>
        </section>
    )
}

export { InfoPage }
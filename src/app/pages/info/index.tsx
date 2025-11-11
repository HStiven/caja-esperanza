import { MusicNote, School, BusinessCenter } from '@mui/icons-material';
import type { UsService } from './interface/typesInfo';
import { UsServers } from './elements/usServers';

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

    return (
        <section className="w-full flex flex-col">
            <UsServers services={services} />
        </section>
    )
}

export { InfoPage }
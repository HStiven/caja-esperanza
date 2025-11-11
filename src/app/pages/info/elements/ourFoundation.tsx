import type { CardsFundaments } from '../interface/typesInfo';
import './../index.css';

interface OurFoundationProps {
    CardsFundaments: CardsFundaments[];
}

const OurFoundation: React.FC<OurFoundationProps> = ({ CardsFundaments }) => {
    return (
        <section id="ourfundation" className="w-full h-full flex flex-col md:flex-row background-step-one">
            <article className="w-1/2 flex justify-center items-center p-10">
                <div className="flex flex-col">
                    <h1 className="text-white champ-bold" style={{fontSize: '3.2rem'}}>Nuestros fundamentos</h1>
                    <div className="mt-10 flex flex-col gap-6">
                        {CardsFundaments.map((card, index) => (
                            <div key={index} className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-5">
                                ssss
                            </div>
                        ))}
                    </div>
                </div>
            </article>
            <article className="w-1/2" style={{backgroundColor: '#00000075'}}>

            </article>
        </section>
    )
}

export { OurFoundation }
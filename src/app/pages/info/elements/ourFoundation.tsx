import { CheckCircleOutline } from '@mui/icons-material';
import { AnimatedScrollComponent } from '../../../components/AnimatedRenderContent';
import type { CardsFundaments, ListFundationDefinitive } from '../interface/typesInfo';
import './../index.css';
import useMediaQueryScreen from '../../../hooks/MediaScreen/useMediaQueryScreen';
import { IconRenderer } from '../../../components/IconSelector/IconRenderer';

interface OurFoundationProps {
    CardsFundaments: CardsFundaments[];
    ListFundationDefinitive: ListFundationDefinitive[];
}

const OurFoundation: React.FC<OurFoundationProps> = ({ CardsFundaments, ListFundationDefinitive }) => {

    const [isSmall] = useMediaQueryScreen();

    return (
        <section id="ourfundation" className="w-full h-full flex flex-col md:flex-row background-step-one">
            <article className="md:w-1/2 flex justify-center items-center p-10">
                <div className="flex flex-col text-center" style={{ width: '70%' }}>
                    <h1 className="text-white champ-bold" style={{ fontSize: '3.2rem' }}>Nuestros fundamentos</h1>
                    <AnimatedScrollComponent
                        key="full"
                        className=""
                        direction="up"
                        delay={0.3}
                    >
                        <div className="mt-10 grid md:grid-cols-2 gap-6">
                            {CardsFundaments.map((card, index) => (
                                <div key={index} className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-5">
                                    <div className={`flex flex-col items-center`}>
                                        <div className={`${card.color} ${card.textColor} p-4 rounded-full shadow-lg`}>
                                            <IconRenderer
                                                iconName={card.icon}
                                                className="text-4xl"
                                            />
                                        </div>
                                        <h3 className="text-2xl font-bold mt-4 mb-2 champ-bold text-center">
                                            {card.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedScrollComponent>
                </div>
            </article>
            <article className="md:w-1/2 flex justify-center items-center p-10" style={{ backgroundColor: '#00000075' }}>
                <div className='flex flex-col bg-pink-500 rounded-xl' style={{ width: (isSmall) ? '90%' : '80%', maxWidth: '400px', maxHeight: '600px', backgroundColor: '#ffffff75', padding: '2rem', overflow: 'hidden auto' }}>
                    <div className="text-center mb-8">
                        <h1 className="text-4xl text-pink-500 font-bold champ-bold mb-2">Vitae</h1>
                        <h2 className="text-2xl text-white poppins-regular">Fundación</h2>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        {ListFundationDefinitive.map((item) => (
                            <div key={item.id} className="text-white">
                                <div className="flex items-start gap-3 mb-3">
                                    <CheckCircleOutline className="text-pink-500 mt-1 flex-shrink-0" />
                                    <span className="poppins-regular text-lg leading-relaxed">
                                        {item.title}
                                    </span>
                                </div>

                                {item.SubListFundation && item.SubListFundation.length > 0 && (
                                    <ul className="ml-8 space-y-2">
                                        {item.SubListFundation.map((subItem) => (
                                            <li key={subItem.id} className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></div>
                                                <span className="poppins-regular text-gray-200">
                                                    {subItem.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </article>
        </section>
    )
}

export { OurFoundation }
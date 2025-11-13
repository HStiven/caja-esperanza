import Carrusel from "../../../components/Carrusel/CarruselImageAnimations";
import { MapEmbed } from "../../../components/LocationMap/LocationMap";
import type { LocationMapInterfaceImage } from "../interface/typesInfo";

type Props = {
    fundacionLocationData: LocationMapInterfaceImage;
}

const LocationFoundation: React.FC<Props> = ({fundacionLocationData}) => {

    return (
       <section className="flex flex-col md:flex-row md:justify-center md:items-center bg-soft-pastel-step-two px-20 gap-5">
            <article className="md:h-full flex flex-col gap-5">
                <h1 className="w-full champ-bold text-center md:text-start text-pink-700" style={{fontSize: '4.5rem'}}>Ubicación</h1>
                <div className="md:h-full flex flex-col justify-center items-center gap-10" style={{padding:'0 10px'}}>
                    <div className="flex flex-col gap-5 justify-between bg-gray-100 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-8">
                        <span className="flex items-center gap-3" style={{verticalAlign: 'middle'}}>
                            <div className="flex items-center justify-center text-white bg-pink-500" style={{ width: '30px', height: '30px', borderRadius: '50px'}}>
                                <i className="fa-solid fa-location-dot"/>
                            </div>
                            <h1 className="w-full champ-bold text-start text-blue-600" style={{fontSize: '1.4rem'}}> <span className="text-black">
                                {fundacionLocationData.LocationMap.direction}</span>
                            </h1>
                        </span>
                        <span className="flex items-center gap-3" style={{verticalAlign: 'middle'}}>
                            <div className="flex items-center justify-center text-white bg-cyan-500" style={{ width: '30px', height: '30px', borderRadius: '50px'}}>
                                <i className="fa-solid fa-phone"/>
                            </div>
                            <h1 className="w-full champ-bold text-start text-blue-600" style={{fontSize: '1.4rem'}}> <span className="text-black">
                                {fundacionLocationData.LocationMap.cellphone}</span>
                            </h1>
                        </span>

                        <span className="flex items-center gap-3" style={{verticalAlign: 'middle'}}>
                            <div className="flex items-center justify-center text-white bg-blue-500" style={{ width: '30px', height: '30px', borderRadius: '50px'}}>
                                <i className="fa-solid fa-envelope"/>
                            </div>
                            <h1 className="w-full champ-bold text-start text-blue-600" style={{fontSize: '1.4rem'}}> <span className="text-black">
                                {fundacionLocationData.LocationMap.email}</span>
                            </h1>
                        </span>

                    </div>
                    <MapEmbed googleMapsEmbedUrl={fundacionLocationData.LocationMap.src} />
                </div>
            </article>
            <article className="md:h-full flex flex-col justify-center items-center gap-5" style={{padding:'0 50px'}}>
                <h1 className="w-full champ-bold text-center md:text-start text-pink-700" style={{fontSize: '4.5rem'}}>Imágenes en carrusel:</h1>
                <div className="w-full md:h-full flex flex-col justify-center items-center gap-5">                   
                    <div className="" style={{width: '600px', height: '400px'}}>
                        <Carrusel images={fundacionLocationData.CarruselImageLocation} style={{borderRadius: '20px'}} />         
                    </div>
                </div>
            </article>
       </section>
    )
}

export {LocationFoundation}
import { MapEmbed } from "../../../components/LocationMap/LocationMap";
import type { LocationMapInterfaceImage } from "../interface/typesInfo";

type Props = {
    fundacionLocationData: LocationMapInterfaceImage;
}

const LocationFoundation: React.FC<Props> = ({fundacionLocationData}) => {

    return (
       <section className="flex flex-col md:flex-row md:justify-center bg-soft-pastel-step-two">
            <article className="md:w-1/3 flex flex-col gap-5 py-20">
                <h1 className="w-full champ-bold text-center text-pink-700" style={{fontSize: '4.5rem'}}>Ubicación</h1>
                <div className="md:h-full flex flex-col justify-center items-center gap-10" style={{padding:'0 10px'}}>
                    <MapEmbed googleMapsEmbedUrl={fundacionLocationData.LocationMap.src} />
                    <h1 className="w-full champ-bold text-center text-blue-600" style={{fontSize: '1.4rem'}}>Dirección: <span className="text-black">{fundacionLocationData.LocationMap.direction}</span> </h1>
                </div>
            </article>
            <article className="md:w-2/3 flex flex-col justify-center items-center">
                <h1 className="w-full champ-bold text-center text-pink-700" style={{fontSize: '4.5rem'}}></h1>
                <div className="md:h-full flex flex-col justify-center items-center" style={{padding:'0 30px'}}>
                    s
                </div>
            </article>
       </section>
    )
}

export {LocationFoundation}
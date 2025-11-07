import { useState } from 'react'
import Button from '@mui/material/Button'
import './index.css'
import { AnimatedScrollComponent } from '../../components/AnimatedRenderContent'

const DashboardMain: React.FC = () => {
    const [isViewLogin, setIsViewLogin] = useState(false);
    // const navigate = useNavigate()

    return (
        <section className="fondo-vitae">
            
            {/* <article className="w-full h-full flex justify-center items-center">
                <div className="w-auto flex flex-col justify-center items-center">
                    <h1 className="text-white text-center champ-bold" style={{ fontSize: '5.6rem' }}>FUNDACIÓN CAJA DE <span className="bg-pink-500 p-2" style={{ borderRadius: '10px' }}>ESPERANZA</span></h1>
                    <h2 className="text-white text-center poppins-bold mt-2" style={{ fontSize: '3.4rem', }}>"Nuestra <span className="allura-regular" style={{ fontSize: '4rem' }}>Esperanza</span> está en las nuevas <span className="allura-regular" style={{ fontSize: '4rem' }}>Generaciones</span>"</h2>
                    <p className="champ-light text-white md:text-center text-justify mt-2" style={{ width: '55%', fontSize: '1.6rem'}}>Nos dedicamos a establecer centros integrales, a través de los cuales promovemos los valores morales y principios éticos basados en la familia y sociedad.</p>
                    <AnimatedScrollComponent
                        key="full"
                        className="flex flex-col gap-4 mt-30"
                        direction="up"
                        delay={0.4}
                    >
                        <Button className='flex justify-center items-center px-6 mt-6 text-white champ-bold' variant="contained" style={{ height: '50px', backgroundColor: '#FF4081', fontSize: '2.4rem', borderRadius: '10px' }}>
                            Conoce Más
                        </Button>
                    </AnimatedScrollComponent>
                </div>
            </article> */}

            <article className="w-full h-full flex justify-center items-center">
                
            </article>
        </section>
    )
}

export { DashboardMain }
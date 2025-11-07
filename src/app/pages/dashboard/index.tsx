import './index.css'

const DashboardMain:React.FC = () => {
    return (
        <section className="fondo-vitae">
            <article className="w-full h-full flex justify-center items-center">
                <div className="w-auto flex flex-col justify-center items-center">
                    <h1 className="text-white champ-bold" style={{fontSize: '3.5rem'}}>FUNDACIÓN CAJA DE <span className="bg-pink-500 p-2" style={{borderRadius: '10px'}}>ESPERANZA</span></h1>
                    <h2 className="text-white poppins-bold mt-4" style={{fontSize: '2rem', }}>"Nuestra <span className="allura-regular" style={{fontSize: '2.4rem'}}>Esperanza</span> está en las nuevas <span className="allura-regular" style={{fontSize: '2.4rem'}}>Generaciones</span>"</h2>
                </div>
            </article>
        </section>
    )
}

export { DashboardMain }
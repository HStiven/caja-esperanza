import './index.css'

const DashboardMain:React.FC = () => {
    return (
        <section className="fondo-vitae">
            <article className="w-full h-full flex justify-center items-center">
                <div className="w-auto flex flex-col justify-center items-center">
                    <h1 className="text-white champ-bold" style={{fontSize: '3rem'}}>FUNDACIÓN CAJA DE <span className="bg-pink-500 p-2" style={{borderRadius: '10px'}}>ESPERANZA</span></h1>
                    <h2 className="text-white allura-regular mt-5" style={{fontSize: '1.8rem', }}>Nuestra Esperanza está en las nuevas Generaciones</h2>
                </div>
            </article>
        </section>
    )
}

export { DashboardMain }
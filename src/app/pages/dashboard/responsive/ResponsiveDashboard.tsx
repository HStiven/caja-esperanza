import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { AnimatedScrollComponent } from "../../../components/AnimatedRenderContent";
import { useNavigate } from "react-router-dom";

type LoginFormData = {
    email: string;
    password: string;
};

type Props = {
    isViewLogin: boolean;
    setIsViewLogin: React.Dispatch<React.SetStateAction<boolean>>;
    showHelpCard: boolean;
    setShowHelpCard: React.Dispatch<React.SetStateAction<boolean>>;
    formData: LoginFormData;
    setFormData: React.Dispatch<React.SetStateAction<LoginFormData>>;
    loginError: string;
    handleLogin: (e: React.FormEvent<HTMLFormElement>) => void | Promise<void>;
};

const ResponsiveDashboard: React.FC<Props> = ({
    isViewLogin,
    setIsViewLogin,
    showHelpCard,
    setShowHelpCard,
    formData,
    setFormData,
    loginError,
    handleLogin,
}) => {

    const navigate = useNavigate();

    return (
        <>
            {!isViewLogin ? (
                <article className="w-full h-full flex justify-center items-center">
                    <div className="w-auto flex flex-col justify-center items-center">
                        <h1 className="text-white text-center champ-bold" style={{ fontSize: '3.6rem' }}>FUNDACIÓN CAJA DE <span className="bg-pink-500 p-2" style={{ borderRadius: '10px' }}>ESPERANZA</span></h1>
                        <h2 className="text-white text-center poppins-bold mt-8" style={{ fontSize: '2rem', lineHeight: '25px', padding: '0 20px' }}>"Nuestra <span className="allura-regular" style={{ fontSize: '2.5rem' }}>Esperanza</span> está en las nuevas <span className="allura-regular" style={{ fontSize: '2.5rem' }}>Generaciones</span>"</h2>
                        <p className="champ-light text-white md:text-center text-justify mt-10" style={{ width: '75%', fontSize: '1.6rem' }}>Nos dedicamos a establecer centros integrales, a través de los cuales promovemos los valores morales y principios éticos basados en la familia y sociedad.</p>

                        <div className="flex flex-col items-center md:mt-6 gap-10">
                            <AnimatedScrollComponent
                                key="full"
                                className="flex flex-col gap-4 mt-30"
                                direction="up"
                                delay={0.4}
                            >
                                <Button
                                    className='flex justify-center items-center px-6 text-white champ-bold' variant="contained"
                                    style={{ height: '50px', backgroundColor: '#FF4081', fontSize: '2.4rem', borderRadius: '10px' }}
                                    onClick={() => { navigate('/info') }}
                                >
                                    Conoce Más
                                </Button>
                            </AnimatedScrollComponent>
                            <AnimatedScrollComponent
                                key="full"
                                className="w-full h-full"
                                direction="up"
                                delay={0.6}
                            >
                                <span className="flex champ-bold" onClick={() => setIsViewLogin(prev => !prev)} style={{ color: 'whitesmoke', fontSize: '1.2rem', cursor: 'pointer' }}>¿Eres administrador?, inicia sesión aquí.</span>
                            </AnimatedScrollComponent>
                        </div>
                    </div>
                </article>

            ) : (
                <AnimatedScrollComponent
                    key="full"
                    className="w-full h-full"
                    direction="up"
                    delay={0.6}
                >
                    <article className="w-full h-full flex flex-col justify-center items-center">

                        <span className='text-white text-4xl' onClick={() => setIsViewLogin(prev => !prev)}>
                            <KeyboardBackspaceIcon style={{ fontSize: '3rem', }} /> Ir atrás
                        </span>

                        {/* Contenedor principal con posición relativa para la carta animada */}
                        <div className="relative flex justify-center items-center mt-10">

                            {/* Carta de login */}
                            <div className={`flex justify-center items-center px-10 py-10 rounded-xxl transition-all duration-500 ${showHelpCard ? 'blur-sm scale-95' : ''}`}
                                style={{
                                    width: '300px',
                                    backgroundColor: '#ffffff4f',
                                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: '10px',
                                    border: '1px solid rgba(255, 255, 255, 0.18)',
                                    zIndex: 10
                                }}>
                                <form className="form" onSubmit={handleLogin}>
                                    <span className="input-span">
                                        <label htmlFor="email" className="label poppins-bold">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                        />
                                    </span>
                                    <span className="input-span">
                                        <label htmlFor="password" className="label poppins-bold">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            value={formData.password}
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                            required
                                        />
                                    </span>
                                    {loginError && <p className="poppins-bold mt-5 text-red-600 text-xl">{loginError}</p>}
                                    <input className="submit mt-5" type="submit" value="Iniciar sesión" />
                                </form>
                            </div>

                            {/* Carta de ayuda con animación */}
                            {showHelpCard && (
                                <div className="absolute inset-0 flex justify-center items-center">
                                    {/* Carta que se abre detrás */}
                                    <div
                                        className="absolute px-8 py-8 rounded-xxl shadow-2xl backdrop-blur-md"
                                        style={{
                                            width: '340px',
                                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                            boxShadow: 'rgba(0, 0, 0, 0.3) 0px 20px 40px -10px',
                                            borderRadius: '15px',
                                            border: '2px solid rgba(255, 255, 255, 0.3)',
                                            transform: 'translateY(-20px) scale(0.9)',
                                            animation: 'cardOpen 0.6s ease-out forwards',
                                            zIndex: 20
                                        }}
                                    >
                                        <div className="flex flex-col gap-4">
                                            <h3 className="text-2xl font-bold text-gray-800 poppins-bold text-center">
                                                Ayuda - Módulo de Login
                                            </h3>

                                            <div className="space-y-3">
                                                <div className="bg-blue-50 p-3 rounded-lg">
                                                    <h4 className="font-semibold text-blue-800 poppins-medium">📧 Email</h4>
                                                    <p className="text-sm text-gray-600 poppins-regular">
                                                        Ingresa el email proporcionado por el administrador del sistema.
                                                    </p>
                                                </div>

                                                <div className="bg-green-50 p-3 rounded-lg">
                                                    <h4 className="font-semibold text-green-800 poppins-medium">🔑 Contraseña</h4>
                                                    <p className="text-sm text-gray-600 poppins-regular">
                                                        Introduce tu contraseña personal. Si la olvidaste, contacta al administrador.
                                                    </p>
                                                </div>

                                                <div className="bg-yellow-50 p-3 rounded-lg">
                                                    <h4 className="font-semibold text-gray-400 poppins-medium">❔Información del modulo del Login</h4>
                                                    <p className="text-sm text-gray-600 poppins-regular">
                                                        Esté modulo funciona para que las personas autorizadas puedan ingresar al panel de administración del sistema.
                                                    </p>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => setShowHelpCard(false)}
                                                className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg poppins-medium hover:bg-pink-600 transition-colors duration-200"
                                            >
                                                Entendido
                                            </button>
                                        </div>
                                    </div>

                                    {/* Overlay para cerrar al hacer clic fuera */}
                                    <div
                                        className="absolute inset-0 bg-black bg-opacity-20 -z-10"
                                        onClick={() => setShowHelpCard(false)}
                                        style={{ zIndex: 15 }}
                                    />
                                </div>
                            )}
                        </div>
                    </article>
                </AnimatedScrollComponent>
            )}
        </>
    )
}

export { ResponsiveDashboard }
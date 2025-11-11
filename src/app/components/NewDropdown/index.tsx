import './index.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { AnimatedScrollComponent } from '../AnimatedRenderContent';
import RadarIcon from '@mui/icons-material/Radar';
import Groups2Icon from '@mui/icons-material/Groups2';
import logo from './../../media/img-logo.png';
const NewDropDown = () => {
    const [show, setShow] = useState<'mini' | 'full'>('mini');
    const [activeSection, setActiveSection] = useState<string>('');
    const navigate = useNavigate();

    const navButtons = [
        // { path: '/dashboard', type: 'icon', iconClass: 'fa-solid fa-house', text: 'Inicio' },
        { id: 'usservers', type: 'icon', icon: <LocalLibraryIcon sx={{ fontSize: 26, color: 'white' }} />, text: 'Fundamentos' }, // Material
        { id: 'ourfundation', type: 'icon', icon: <RadarIcon sx={{ fontSize: 26, color: 'white' }} />, text: 'Radar' }, // Material
        { id: '', type: 'iconClass', iconClass: 'fa-solid fa-circle-info', text: 'Misión y visión' }, // Font Awesome
        { id: '', type: 'icon', icon: <Groups2Icon sx={{ fontSize: 26, color: 'white' }} />, text: 'Nosotros' }, // Material
    ];

    const toggleSidebar = () => {
        setShow((prev) => (prev === 'mini' ? 'full' : 'mini'));
    };

    // IntersectionObserver para detectar secciones visibles
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 } // 30% de la sección visible
        );

        // Observar todos los elementos con los ids de las secciones
        navButtons.forEach((btn) => {
            const element = document.getElementById(btn.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [navButtons]);

    return (
        <div id="openSideBar">
            {show === 'full' && (
                <div
                    onClick={() => setShow('mini')}
                    className="fixed top-0 left-0 w-screen h-screen bg-black/50 backdrop-blur-sm z-[9997]"
                />
            )}

            <main className="flex items-center h-full fixed left-5 z-[9998]">
                <div
                    className={`flex flex-col element-card-generic ${show === 'full' ? 'full-dropdown' : ''
                        } h-[400px] max-h-[500px] max-w-[200px] p-[20px_10px_15px_10px] rounded-[15px] backdrop-blur-lg`}
                        style={{backgroundColor: '#8a019492'}}
                >
                    {/* Header */}
                    <article className="flex items-start max-w-full min-h-[40%] overflow-hidden">
                        {show === 'full' ? (
                            <AnimatedScrollComponent
                                key="full"
                                className="flex flex-col gap-4"
                                direction="right"
                                delay={0.4}
                            >
                                <div className="w-full flex justify-end px-6">
                                    <img
                                        className="w-[30px] cursor-pointer"
                                        src="https://dkumy02vmzh93.cloudfront.net/6b46d204-8034-4156-b155-3eaced79c45f.svg"
                                        draggable="false"
                                        onClick={toggleSidebar}
                                        alt="menu"
                                    />
                                </div>
                                <div className="flex justify-center items-center">
                                    <img
                                        className="cursor-pointer w-[70%]"
                                        onClick={() => { navigate('/') }}
                                        src={logo}
                                        draggable="false"
                                        alt="logo"
                                    />
                                </div>
                            </AnimatedScrollComponent>
                        ) : (
                            <AnimatedScrollComponent
                                key="mini"
                                className="flex flex-col gap-4"
                                direction="left"
                                delay={0.4}
                            >
                                <div className="flex justify-center items-center">
                                    <img
                                        className="cursor-pointer w-[80%]"
                                        onClick={() => { navigate('/') }}
                                        src={logo}
                                        draggable="false"
                                        alt="logo"
                                    />
                                </div>
                                <div className="w-full flex justify-center px-3">
                                    <img
                                        className="w-[30px] cursor-pointer"
                                        src="https://dkumy02vmzh93.cloudfront.net/6b46d204-8034-4156-b155-3eaced79c45f.svg"
                                        draggable="false"
                                        onClick={toggleSidebar}
                                        alt="menu"
                                    />
                                </div>
                            </AnimatedScrollComponent>
                        )}
                    </article>

                    {/* Navigation buttons */}
                    <article className="flex items-start max-w-full min-h-[60%] overflow-hidden">
                        <div
                            className={`w-full flex flex-col justify-center ${show === 'full' ? 'items-start' : 'items-center'
                                } mt-4 gap-3 px-3`}
                        >
                            {navButtons.map((btn, index) => {
                                const isActive = activeSection === btn.id;

                                return (
                                    <div
                                        key={index}
                                        className={`flex justify-between items-center ${show === 'full' ? 'full-dropdown' : ''
                                            }`}
                                        style={{
                                            backgroundColor: isActive ? '#e911f892' : 'transparent',
                                            borderRadius: '10px',
                                            padding: '6px 10px',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => {
                                            const element = document.getElementById(btn.id);
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth' });
                                                window.location.hash = btn.id;
                                            }
                                        }}
                                    >
                                        {show === 'full' ? (
                                            <>
                                                <div className="flex justify-start items-center gap-2">
                                                    {/* 👇 Aquí se maneja FontAwesome o Material */}
                                                    {btn.iconClass ? (
                                                        <i className={`${btn.iconClass} text-white text-[2.2rem]`} />
                                                    ) : (
                                                        btn.icon
                                                    )}

                                                    <h4 className="champ-light text-white mt-1 mb-0">{btn.text}</h4>
                                                </div>
                                                {isActive && (
                                                    <div className="ms-3 w-[5px] h-[20px] bg-white rounded-[20px]" />
                                                )}
                                            </>
                                        ) : (
                                            btn.iconClass ? (
                                                <i className={`${btn.iconClass} text-white text-[2.2rem]`} />
                                            ) : (
                                                btn.icon
                                            )
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </article>
                </div>
            </main>
        </div>
    );
};

export { NewDropDown };
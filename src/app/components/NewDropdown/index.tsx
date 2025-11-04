import './index.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatedScrollComponent } from '../AnimatedRenderContent';
import RadarIcon from '@mui/icons-material/Radar';
import Groups2Icon from '@mui/icons-material/Groups2';

const NewDropDown = () => {
    const [show, setShow] = useState<'mini' | 'full'>('mini');
    const location = useLocation();

    const navButtons = [
        { path: '/dashboard', type: 'icon', iconClass: 'fa-solid fa-house', text: 'Inicio' },
        { path: '/s', type: 'icon', icon: <RadarIcon sx={{ fontSize: 26, color: 'white' }} />, text: 'Fundamentos' }, // Material
        { path: '/t', type: 'iconClass', iconClass: 'fa-solid fa-circle-info', text: 'Misión y visión' }, // Font Awesome
        { path: '/b', type: 'icon', icon: <Groups2Icon sx={{ fontSize: 26, color: 'white' }} />, text: 'Nosotros' }, // Material
    ];

    const toggleSidebar = () => {
        setShow((prev) => (prev === 'mini' ? 'full' : 'mini'));
    };

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
                                        src="src/app/media/img-logo.png"
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
                                        src="src/app/media/img-logo.png"
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
                                const isActive = location.pathname === btn.path;

                                return (
                                    <div
                                        key={index}
                                        className={`flex justify-between items-center ${show === 'full' ? 'full-dropdown' : ''
                                            }`}
                                        style={{
                                            backgroundColor: isActive ? '#3780EE' : 'transparent',
                                            borderRadius: '10px',
                                            padding: '6px 0px',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => (window.location.href = btn.path)}
                                    >
                                        {show === 'full' ? (
                                            <>
                                                <div className="flex justify-start items-center gap-3">
                                                    {/* 👇 Aquí se maneja FontAwesome o Material */}
                                                    {btn.iconClass ? (
                                                        <i className={`${btn.iconClass} text-white text-[2.2rem]`} />
                                                    ) : (
                                                        btn.icon
                                                    )}

                                                    <h4 className="champ-light text-white mt-1 mb-0">{btn.text}</h4>
                                                </div>
                                                {isActive && (
                                                    <div className="me-1 w-[5px] h-[20px] bg-white rounded-[20px]" />
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
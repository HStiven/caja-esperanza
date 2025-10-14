import './index.css';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ProfileNewDropDown } from "./profileNewDropDown";
import { AnimatedScrollComponent } from '../AnimatedRenderContent';
const userAvatarClass = 'symbol-30px symbol-md-40px'

const NewDropDown = () => {

    const [show, setShow] = useState<'mini' | 'full'>('mini');
    // const { logout, profile, fullName } = useAuth();
    const location = useLocation();

    const navButtons = [
        { path: '/dashboard', type: 'icon', iconClass: 'fa-solid fa-house', text: 'Home' },
        {
            path: '/payments/me',
            type: 'img',
            src: 'https://dkumy02vmzh93.cloudfront.net/b4c20218-67d4-4f56-a193-fc8901bf9f0f.svg',
            text: 'Michipay'
        },
        {
            path: '/tests',
            type: 'img',
            src: 'https://dkumy02vmzh93.cloudfront.net/48ff5748-b3c9-4523-a400-08a87a5270b2.svg',
            text: 'Tests'
        },
        {
            path: '/certificate',
            type: 'img',
            src: 'https://dkumy02vmzh93.cloudfront.net/a06790c9-eaef-46d4-8578-5a8d9bc9b079.svg',
            text: 'Certificates'
        },
        {
            path: '/trail-freezing',
            type: 'img',
            src: 'https://dkumy02vmzh93.cloudfront.net/455c184b-df5b-4f99-abd6-04e176a74985.svg',
            text: 'Freezing'
        },
        {
            path: '/me-resume',
            type: 'img',
            src: 'https://dkumy02vmzh93.cloudfront.net/b929d964-5672-4399-816b-0a9016648a2b.svg',
            text: 'History'
        },
        {
            path: '',
            type: 'img',
            src: 'https://dkumy02vmzh93.cloudfront.net/c82ccdf6-af34-4ffb-a7f7-ead24e533092.svg',
            text: 'Faqs'
        },
    ]

    const toggleSidebar = () => {
        setShow((prev) => (prev === 'mini' ? 'full' : 'mini'));
    };

    return (
        <div id='openSideBar'>
            {(show === 'full') && (
                <div
                    onClick={() => {
                        setShow('mini')
                    }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(3px)',
                        zIndex: 9997,
                    }}
                />
            )}
            <main className='d-flex align-items-center' style={{ height: '100%', position: 'fixed', left: '20px', zIndex: '9998' }}>
                <div className={`d-flex flex-column element-card-generic ${show === 'full' ? 'full-dropdown' : ''}`} 
                    style={{ height: '650px', maxHeight: '690px', maxWidth: '280px', padding: '20px 10px 15px 10px', backgroundColor: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(10px)', borderRadius: '15px' }}
                >
                    <article className='d-flex align-items-start' style={{maxWidth: '100%', minHeight: '20%', overflow: 'hidden'}}>
                        {show === 'full' ? (
                            <AnimatedScrollComponent key="full" className='d-flex flex-column gap-4' direction="right" delay={0.4}>
                                <div className="w-100 d-flex justify-content-end px-6">
                                    <img
                                        className='w-30px cursor-pointer'
                                        src={'https://dkumy02vmzh93.cloudfront.net/6b46d204-8034-4156-b155-3eaced79c45f.svg'}
                                        draggable='false'
                                        onClick={toggleSidebar}
                                        alt="menu"
                                    />
                                </div>
                                <div className="d-flex justify-content-center align-content-center">
                                    <img
                                        className="cursor-pointer"
                                        style={{ width: '75%' }}
                                        draggable='false'
                                        alt="logo"
                                    />
                                </div>
                            </AnimatedScrollComponent>
                        ) : (
                            <AnimatedScrollComponent className='d-flex flex-column gap-4' key="mini" direction="left" delay={0.4}>
                                <div className="d-flex justify-content-center align-content-center">
                                    <img
                                        className="cursor-pointer"
                                        style={{ width: '80%' }}
                                        src={'/media/logos/logo-michigan.svg'}
                                        draggable='false'
                                        alt="logo"
                                    />
                                </div>
                                <div className="w-100 d-flex justify-content-center px-6">
                                    <img
                                        className='w-30px cursor-pointer'
                                        src={'https://dkumy02vmzh93.cloudfront.net/6b46d204-8034-4156-b155-3eaced79c45f.svg'}
                                        draggable='false'
                                        onClick={toggleSidebar}
                                        alt="menu"
                                    />
                                </div>
                            </AnimatedScrollComponent>
                        )}
                    </article>

                    <article className='d-flex align-items-start' style={{ maxWidth: '100%', minHeight: '10%', overflow: 'hidden' }}>
                        <div className="w-100 d-flex justify-content-center align-items-center">

                            {show === 'full' && (
                                <AnimatedScrollComponent key="full" direction="left" delay={0.4}>
                                    <div className="d-flex overflow-hidden poppins-bold text-white gap-2">
                                        <div className="d-flex justify-content-end flex-column text-white" style={{ lineHeight: '1.1' }}>
                                            <span className="poppins-light" style={{ marginBottom: '2px' }}>Buenos días</span>
                                            <span className="poppins-bold">name</span>
                                        </div>
                                        <div className="d-flex flex-end">
                                            <button className="d-flex justify-content-center align-content-center flex-wrap px-3 py-2" style={{ backgroundColor: '#D9EEFF', border: 'none', borderRadius: '50%' }}>
                                                <i className="fa-solid fa-chevron-right" style={{ fontSize: '1.2rem', color: '#3780EE' }} />
                                            </button>
                                        </div>
                                    </div>
                                </AnimatedScrollComponent>
                            )}
                        </div>
                    </article>

                    <article className='d-flex align-items-start' style={{maxWidth: '100%', minHeight: '60%', overflow: 'hidden'}}>
                        <div className={`w-100 d-flex flex-column justify-content-center  ${show === 'full' ? 'align-items-start' : 'align-items-center'} align-items-start mt-md-4 gap-3 px-3`}>
                            {navButtons.map((btn, index) => {
                                const isActive = location.pathname === btn.path;

                                const commonStyle = {
                                    // width: show === 'full' ? '100%' : '80%',
                                    backgroundColor: isActive ? '#3780EE' : 'transparent',
                                    borderRadius: '10px',
                                    padding: '6px 5px',
                                    cursor: 'pointer',
                                };

                                return (
                                    <>
                                        <div key={index} className={`d-flex justify-content-between align-items-center element-button-route ${show === 'full' ? 'full-dropdown' : ''}`} style={commonStyle} onClick={() => window.location.href = btn.path}>
                                            {show === 'full' ? (
                                                <>
                                                    <div className="d-flex justify-content-start align-items-center gap-3">
                                                        {btn.type === 'icon' ? (
                                                            <i className={`${btn.iconClass} text-white`} style={{ fontSize: '2rem' }} />
                                                        ) : (
                                                            <img
                                                                src={btn.src}
                                                                alt={btn.text}
                                                                draggable="false"
                                                                style={{ width: '30px' }}
                                                            />
                                                        )}
                                                        <h4 className="d-flex champ-light text-white mt-1 mb-0">{btn.text}</h4>
                                                    </div>
                                                    {isActive && <div className="me-1" style={{ width: '5px', height: '20px', backgroundColor: 'white', borderRadius: '20px' }} />}
                                                </>
                                            ) : (
                                                <>
                                                    {btn.type === 'icon' ? (
                                                        <i className={`${btn.iconClass} text-white`} style={{ fontSize: '2rem' }} />
                                                    ) : (
                                                        <img
                                                            src={btn.src}
                                                            alt={btn.text}
                                                            draggable="false"
                                                            style={{ width: '30px' }}
                                                        />
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </>
                                );
                            })}
                            {/* <div className="d-flex justify-content-center align-items-center flex-wrap gap-4 cursor-pointer">
                                    <img className="w-30px cursor-pointer" src="https://dkumy02vmzh93.cloudfront.net/b4c20218-67d4-4f56-a193-fc8901bf9f0f.svg" alt="MichiPay" draggable='false' />
                                    <h4 className="d-flex champ-light text-white mt-1 mb-0">MichiPay</h4>
                                </div> */}
                        </div>
                    </article>

                    <article className='d-flex align-items-end' style={{maxWidth: '100%', minHeight: '10%', overflow: 'hidden'}}>
                        <div className="w-100 d-flex justify-content-center mt-4">
                            <button className={`element-button-logout d-flex ${show === 'full' ? 'justify-content-between full-dropdown' : 'justify-content-center'} px-4 py-2`}
                                style={{ backgroundColor: 'white', border: 'none', borderRadius: '10px' }}
                            >
                                {show === 'full' && (
                                    <AnimatedScrollComponent key="full" className='d-flex align-items-center' direction="down" delay={0.3} withExit>
                                        <span className="d-flex align-content-center flex-wrap blue-michigan champ-extrabold" style={{ fontSize: '1.2rem', lineHeight: '1' }}>Logout</span>
                                    </AnimatedScrollComponent>
                                )}
                                <i className="bi bi-box-arrow-right" style={{ fontSize: '2rem', color: '#2d30e1' }} />
                            </button>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}

export { NewDropDown }
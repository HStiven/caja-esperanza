import React from "react";
import clsx from "clsx";
import { t } from "i18next";

type Props = {
    onClick: () => void;
    avatarDefault: string
}

// Falta agregarlo (no borrarlo)

const ProfileNewDropDown: React.FC<Props> = ({ onClick, avatarDefault }) => {

    const [loading, setLoading] = React.useState<boolean>(false);

    return (
        <section className="d-flex flex-column justify-content-between overflow-hidden" style={{ width: '260px', height: '650px', maxHeight: '690px', maxWidth: '280px', padding: '38px 10px 15px 10px', backgroundColor: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(10px)', borderRadius: '15px' }}>
            <div className="w-100 d-flex justify-content-center px-6 gap-2">
                <button onClick={onClick} className="d-flex justify-content-center align-items-center px-3 py-2" style={{ backgroundColor: '#D9EEFF', border: 'none', borderRadius: '50%' }}>
                    <i className="fa-solid fa-chevron-left" style={{ color: '#3780EE', fontSize: '1.5rem' }} />
                </button>
                <span className="d-flex align-items-center text-white champ-bold" style={{ fontSize: '1.3rem', verticalAlign: 'middle' }}>Profile</span>
            </div>
            <article className="d-flex flex-column align-content-center gap-2">
                <div className="d-flex flex-column text-center px-2">
                    <h1 className="text-white poppins-bold m-0" style={{ fontSize: '1.6rem' }}>Profile</h1>
                    <span className="poppins-bold text-white" style={{ fontSize: '1.3rem' }}>s</span>
                </div>
            </article>
            <article className="d-flex flex-column align-items-start px-2 gap-3">
                <div className="d-flex align-items-start gap-2">
                    <div className="px-2 py-1" style={{ height: 'auto', backgroundColor: '#2d30e1', borderRadius: '10px' }}>
                        <i className="fa-regular fa-envelope text-white" style={{ fontSize: '1.5rem' }} />
                    </div>
                    <div className="d-flex flex-column justify-content-end">
                        <h2 className="text-white poppins-bold m-0" style={{ fontSize: '1rem' }}>Correo:</h2>
                        <p className="text-white poppins-light m-0"
                            style={{ fontSize: '1.1rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px' }}>
                            email
                        </p>
                    </div>
                </div>
                <div className="d-flex align-items-start gap-2">
                    <div className="px-2 py-1" style={{ height: 'auto', backgroundColor: '#2d30e1', borderRadius: '10px' }}>
                        <i className="bi bi-calendar-week text-white" style={{ fontSize: '1.5rem' }} />
                    </div>
                    <div className="d-flex flex-column justify-content-end">
                        <h2 className="text-white poppins-bold m-0" style={{ fontSize: '1rem' }}>Fecha de nacimiento:</h2>
                        <p className="text-white poppins-light m-0"
                            style={{ fontSize: '1.1rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '190px' }}>
                            brithday
                        </p>
                    </div>
                </div>
                <div className="d-flex align-items-start gap-2">
                    <div className="px-2 py-1" style={{ height: 'auto', backgroundColor: '#2d30e1', borderRadius: '10px' }}>
                        <i className="bi bi-geo-alt text-white" style={{ fontSize: '1.5rem' }}/>
                    </div>
                    <div className="d-flex flex-column gap-2">
                        <div className="d-flex flex-column justify-content-end">
                            <h2 className="text-white poppins-bold m-0" style={{ fontSize: '1rem' }}>Departamento:</h2>
                            <p className="text-white poppins-light m-0"
                                style={{ fontSize: '1.1rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '190px' }}>
                                departamento
                            </p>
                        </div>
                        <div className="d-flex flex-column justify-content-end">
                            <h2 className="text-white poppins-bold m-0" style={{ fontSize: '1rem' }}>Ciudad:</h2>
                            <p className="text-white poppins-light m-0"
                                style={{ fontSize: '1.1rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '190px' }}>
                                ciudad - departamento
                            </p>
                        </div>
                        <div className="d-flex flex-column justify-content-end">
                            <h2 className="text-white poppins-bold m-0" style={{ fontSize: '1rem' }}>Sexo:</h2>
                            <p className="text-white poppins-light m-0"
                                style={{ fontSize: '1.1rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '190px' }}>
                                genero
                            </p>
                        </div>
                    </div>
                </div>
            </article>

            <div className="w-100 px-4">
                <button className="w-100 d-flex flex-column text-white text-center rounded-lg champ-extrabold pt-2 pb-1" style={{ fontSize: '1.5rem', lineHeight: '1.1', backgroundColor: '#2d30e1', border: 'none', borderRadius: '10px'}}>
                    <span>Actualización</span>
                    <span>de datos</span>
                </button>
            </div>
        </section>
    )
}

export { ProfileNewDropDown }
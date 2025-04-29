import React from "react";

import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';


const TheServices = () => {
    return (
        <div className="bg-secondary-200 px-8 py-24">
            <div className="xl:w-[85%] mx-auto">

                <div className="flex justify-between mb-12">
                    <h3 className="text-3xl text-[#453227] capitalize tracking-wide font-semibold w-1/2">Explora nuestros productos <br /> y encuentra algo nuevo</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 text-center">

                    <div className="flex flex-col items-center bg-[#c5a491] py-12 px-8 rounded">
                        <span className="flex justify-center items-center w-16 h-16 mb-4 rounded-full text-3xl bg-[#eaded7]"><GiCompass /></span>
                        <h4 className="capitalize text-2xl mb-3 font-bold">Misión</h4>
                        <p className="leading-relaxed text-[#5f4435]">Ofrecer una plataforma digital transparente, accesible y certificada que facilite la comercialización de créditos de carbono, brindando a las empresas la oportunidad de compensar su huella de carbono y apoyar proyectos sustentables en México, contribuyendo así a la lucha contra el cambio climático.</p>
                    </div>

                    <div className="flex flex-col items-center bg-[#c5a491] py-12 px-8 rounded">
                        <span className="flex justify-center items-center w-16 h-16 mb-4 rounded-full text-3xl bg-[#eaded7]"><GiDiamondHard /></span>
                        <h4 className="capitalize text-2xl mb-3 font-bold">Visión</h4>
                        <p className="leading-relaxed text-[#5f4435]">Ser la plataforma líder en el comercio digital de créditos de carbono en México,
                            facilitando el acceso a proyectos sostenibles y permitiendo a empresas de todo el mundo
                            compensar sus emisiones de CO₂ de manera transparente y eficaz.</p>
                    </div>


                </div>
            </div>
        </div>
    );
};



export default TheServices;
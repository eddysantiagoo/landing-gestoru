"use client"
import { useState } from "react";
import PricingCard from "../Card/PricingCard";
import Image from "next/image";

const Pricing1 = () => {

    const [isActive, setIsActive] = useState('yearly');

    return (
        <section className="pricing-section section-padding pt-0 fix">
        <div className="container">
            <div className="section-title text-center mxw-685 mx-auto">
                <div className="subtitle">
                    Nuestros Precios 
                </div>
                <h2 className="title" style={{textWrap: 'balance'}}>¡Elige el Plan que se Adapte a Ti!</h2>
                <p className="text">Ofrecemos diferentes opciones de precios para satisfacer las necesidades de tu negocio
                </p>
            </div>
            <div className="pricing-wrapper style1">
                <div className="tab-section d-flex justify-content-center align-items-center">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className={`nav-item ${isActive === 'monthly' ? 'active' : ''}`} onClick={() => setIsActive('monthly')} role="presentation">
                            <button className={`nav-link ${isActive === 'monthly' ? 'active' : ''}`} id="pills-monthly-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-monthly" type="button" role="tab" aria-controls="pills-monthly"
                                aria-selected={isActive === 'monthly'}>Mensual</button>
                        </li>
                        <li className={`nav-item ${isActive === 'yearly' ? 'active' : ''}`} onClick={() => setIsActive('yearly')}  role="presentation">
                            <button className={`nav-link ${isActive === 'yearly' ? 'active' : ''}`} id="pills-yearly-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-yearly" type="button" role="tab" aria-controls="pills-yearly"
                                aria-selected={isActive === 'yearly'} tabIndex={isActive === 'yearly' ? "0" : "-1"}>Anual</button>
                        </li>
                    </ul>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div className={`tab-pane fade ${isActive === 'monthly' ? 'show active' : ''}`} id="pills-monthly" role="tabpanel"
                        aria-labelledby="pills-monthly-tab">
                        <div className="row gy-4 gx-3 justify-content-center align-items-stretch">

                            <PricingCard
                                name="Plan Básico"
                                price="$25.900"
                                monthly="Mensual"
                                content="Perfecto para pequeñas empresas que necesitan funcionalidades"
                                FeatureList={[
                                    "10 Documentos electrónicos",
                                    "Bancos",
                                    "Reportes",
                                    "Inventario",
                                    "Compras",
                                ]} 
                                btnname="Más Información"
                                btnurl="https://api.whatsapp.com/send/?phone=573226501735&text=Hola, me interesa conocer mas sobre el plan básico de Gestoru"
                            ></PricingCard>

                            <PricingCard
                                name="Plan Emprendedor"
                                price="$49.500"
                                monthly="Mensual"
                                content="Perfecto para emprendedores que buscan hacer crecer su negocio"
                                FeatureList={[
                                    "100 Documentos electrónicos",
                                    "Bancos",
                                    "Reportes",
                                    "Inventario",
                                    "Compras",
                                ]} 
                                btnname="Más Información"
                                btnurl="https://api.whatsapp.com/send/?phone=573226501735&text=Hola, me interesa conocer mas sobre el plan Emprendedor de Gestoru"
                            ></PricingCard>

                            <PricingCard
                                name="Plan PYME"
                                price="$87.900"
                                monthly="Mensual"
                                content="Diseñado especialmente para pequeñas y medianas empresas"
                                FeatureList={[
                                    "500 Documentos electrónicos",
                                    "Bancos",
                                    "Reportes",
                                    "Inventario",
                                    "Compras",
                                ]} 
                                btnname="Más Información"
                                btnurl="https://api.whatsapp.com/send/?phone=573226501735&text=Hola, me interesa conocer mas sobre el plan PYME de Gestoru"
                            ></PricingCard>

                            <PricingCard
                                name="Plan Avanzado"
                                price="$124.900"
                                monthly="Mensual"
                                content="Para empresas que necesitan el máximo volumen de documentos"
                                FeatureList={[
                                    "1000 Documentos electrónicos",
                                    "Bancos",
                                    "Reportes",
                                    "Inventario",
                                    "Inventario",
                                ]} 
                                btnname="Más Información"
                                btnurl="https://api.whatsapp.com/send/?phone=573226501735&text=Hola, me interesa conocer mas sobre el plan Avanzado de Gestoru"
                            ></PricingCard>

                        </div>
                    </div>
                    <div className={`tab-pane fade ${isActive === 'yearly' ? 'show active' : ''}`} id="pills-yearly" role="tabpanel" aria-labelledby="pills-yearly-tab">
                        <div className="row gy-4 gx-3 justify-content-center align-items-stretch">

                        <PricingCard
                                name="Plan Básico"
                                price="$273.504"
                                originalPrice="$310.800"
                                monthly="Anual"
                                content="Ahorra con nuestro plan anual - Perfecto para pequeñas empresas"
                                FeatureList={[
                                    "10 Documentos electrónicos",
                                    "Bancos",
                                    "Reportes",
                                    "Inventario",
                                    "Compras",
                                ]} 
                                btnname="Más Información"
                                btnurl="https://api.whatsapp.com/send/?phone=573226501735&text=Hola, me interesa conocer mas sobre el plan básico de Gestoru"
                            ></PricingCard>

                            <PricingCard
                                name="Plan Emprendedor"
                                price="$522.720"
                                originalPrice="$594.000"
                                monthly="Anual"
                                content="Plan anual para emprendedores - Ahorra más con el pago anual"
                                FeatureList={[
                                    "100 Documentos electrónicos",
                                    "Bancos",
                                    "Reportes",
                                    "Inventario",
                                    "Compras",
                                ]} 
                                btnname="Más Información"
                                btnurl="https://api.whatsapp.com/send/?phone=573226501735&text=Hola, me interesa conocer mas sobre el plan Emprendedor de Gestoru"
                            ></PricingCard>

                            <PricingCard
                                name="Plan PYME"
                                price="$928.224"
                                originalPrice="$1.054.800"
                                monthly="Anual"
                                content="Plan anual PYME - Máximo descuento para medianas empresas"
                                FeatureList={[
                                    "500 Documentos electrónicos",
                                    "Bancos",
                                    "Reportes",
                                    "Inventario",
                                    "Compras",
                                ]} 
                                btnname="Más Información"
                                btnurl="https://api.whatsapp.com/send/?phone=573226501735&text=Hola, me interesa conocer mas sobre el plan PYME de Gestoru"
                            ></PricingCard>

                            <PricingCard
                                name="Plan Avanzado"
                                price="$1.318.184"
                                originalPrice="$1.498.800"
                                monthly="Anual"
                                content="Plan anual avanzado - Para empresas que manejan alto volumen"
                                FeatureList={[
                                    "1000 Documentos electrónicos",
                                    "Bancos",
                                    "Reportes",
                                    "Inventario",
                                    "Inventario",
                                ]} 
                                btnname="Más Información"
                                btnurl="https://api.whatsapp.com/send/?phone=573226501735&text=Hola, me interesa conocer mas sobre el plan Avanzado de Gestoru"
                            ></PricingCard>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Pricing1;
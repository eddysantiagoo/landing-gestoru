"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import About4 from "../../../../Components/About/About4";
import PricingCard from "@/app/Components/Card/PricingCard";

const ServiceDetailNomina = () => {
  const [isActive, setIsActive] = useState('yearly');
  
  const featureList = [
    "Automatización completa de procesos de nómina",
    "Cumplimiento 100% normativa DIAN",
    "Certificado y adaptado a la resolución",
    "Actívate como generador ante la DIAN",
    "Implementación fácil y rápida",
    "Soporte continuo y especializado",
  ];

  return (
    <div className="service-details-section">
      {/* About Style Section */}
      <section className="about-section fix">
        <About4
          img1="/assets/images/services/nomina.webp"
          img2="/assets/images/about/aboutThumb1_2.png"
          title="Nómina Electrónica"
          content="Implementa fácilmente la Nómina Electrónica en tu empresa. Adaptado, certificado y diseñado para el cumplimiento de la normativa establecido por la DIAN en el proyecto de resolución referente a Nómina Electrónica."
          FeatureList={featureList}
          btnname="Contactar por WhatsApp"
          btnurl="https://wa.me/573226501735?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20la%20nómina%20electrónica%20de%20Gestoru"
        />
      </section>

      {/* Additional Information Section */}
      <section className="about-section section-padding pt-0 fix">
        <section className="wcu-section section-padding fix">
          <div className="wcu-container-wrapper style3">
            <div className="container">
              <div className="wcu-wrapper style3">
                <div className="row gy-5 gx-60">
                  {/* Pricing Section */}
                  <div className="pricing-wrapper style1">
                    <div className="tab-section d-flex justify-content-center align-items-center">
                      <ul className="nav nav-pills mb-3" id="pills-tab-nomina" role="tablist">
                        <li className={`nav-item ${isActive === 'monthly' ? 'active' : ''}`} onClick={() => setIsActive('monthly')} role="presentation">
                          <button className={`nav-link ${isActive === 'monthly' ? 'active' : ''}`} id="pills-monthly-tab-nomina" data-bs-toggle="pill"
                            data-bs-target="#pills-monthly-nomina" type="button" role="tab" aria-controls="pills-monthly-nomina"
                            aria-selected={isActive === 'monthly'}>Mensual</button>
                        </li>
                        <li className={`nav-item ${isActive === 'yearly' ? 'active' : ''}`} onClick={() => setIsActive('yearly')} role="presentation">
                          <button className={`nav-link ${isActive === 'yearly' ? 'active' : ''}`} id="pills-yearly-tab-nomina" data-bs-toggle="pill"
                            data-bs-target="#pills-yearly-nomina" type="button" role="tab" aria-controls="pills-yearly-nomina"
                            aria-selected={isActive === 'yearly'} tabIndex={isActive === 'yearly' ? "0" : "-1"}>Anual</button>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content" id="pills-tabContent-nomina">
                      <div className={`tab-pane fade ${isActive === 'monthly' ? 'show active' : ''}`} id="pills-monthly-nomina" role="tabpanel"
                        aria-labelledby="pills-monthly-tab-nomina">
                        <div className="row gy-4 gx-3 justify-content-center align-items-stretch">
                          <PricingCard
                            name="NÓMINA BÁSICA"
                            price="$24.000"
                            monthly="Mensual"
                            content="Plan nómina para pequeñas empresas que están iniciando."
                            FeatureList={[
                              "8 nóminas mensuales",
                              "Nómina electrónica DIAN",
                              "Automatización básica",
                              "Soporte estándar",
                            ]}
                            btnname="Más Información"
                            btnurl="https://api.whatsapp.com/send/?phone=573226501735&text=Hola, me interesa conocer mas sobre el plan NÓMINA BÁSICA de Gestoru"
                          />

                          <PricingCard
                            name="NÓMINA EMPRENDEDOR"
                            price="$42.000"
                            monthly="Mensual"
                            content="Plan para pequeñas y medianas empresas en crecimiento."
                            FeatureList={[
                              "15 nóminas mensuales",
                              "Nómina electrónica DIAN",
                              "Procesos automatizados",
                              "Soporte prioritario",
                            ]}
                            btnname="Más Información"
                            btnurl="https://api.whatsapp.com/send/?phone=573226501735&text=Hola, me interesa conocer mas sobre el plan NÓMINA EMPRENDEDOR de Gestoru"
                            recommended={true}
                          />

                          <PricingCard
                            name="NÓMINA PYME"
                            price="$72.000"
                            monthly="Mensual"
                            content="Plan ideal para pequeñas y medianas empresas establecidas."
                            FeatureList={[
                              "25 nóminas mensuales",
                              "Nómina electrónica DIAN",
                              "Automatización completa",
                              "Soporte especializado",
                            ]}
                            btnname="Más Información"
                            btnurl="https://api.whatsapp.com/send/?phone=573226501735&text=Hola, me interesa conocer mas sobre el plan NÓMINA PYME de Gestoru"
                          />

                          <PricingCard
                            name="NÓMINA AVANZADO"
                            price="$108.000"
                            monthly="Mensual"
                            content="Plan ideal para grandes empresas con alto volumen de empleados."
                            FeatureList={[
                              "50 nóminas mensuales",
                              "Nómina electrónica DIAN",
                              "Gestión empresarial",
                              "Soporte 24/7",
                            ]}
                            btnname="Más Información"
                            btnurl="https://api.whatsapp.com/send/?phone=573226501735&text=Hola, me interesa conocer mas sobre el plan NÓMINA AVANZADO de Gestoru"
                          />
                        </div>
                      </div>
                      <div className={`tab-pane fade ${isActive === 'yearly' ? 'show active' : ''}`} id="pills-yearly-nomina" role="tabpanel" aria-labelledby="pills-yearly-tab-nomina">
                        <div className="row gy-4 gx-3 justify-content-center align-items-stretch">
                          <PricingCard
                            name="NÓMINA BÁSICA"
                            price="$253.440"
                            originalPrice="$288.000"
                            monthly="Anual"
                            content="Plan anual con descuento - Perfecto para pequeñas empresas."
                            FeatureList={[
                              "8 nóminas mensuales",
                              "Nómina electrónica DIAN",
                              "Automatización básica",
                              "Soporte estándar",
                            ]}
                            btnname="Más Información"
                            btnurl="https://api.whatsapp.com/send/?phone=573226501735&text=Hola, me interesa conocer mas sobre el plan NÓMINA BÁSICA de Gestoru"
                          />

                          <PricingCard
                            name="NÓMINA EMPRENDEDOR"
                            price="$443.520"
                            originalPrice="$504.000"
                            monthly="Anual"
                            content="Plan anual emprendedor - Ahorra más con el pago anual."
                            FeatureList={[
                              "15 nóminas mensuales",
                              "Nómina electrónica DIAN",
                              "Procesos automatizados",
                              "Soporte prioritario",
                            ]}
                            btnname="Más Información"
                            btnurl="https://api.whatsapp.com/send/?phone=573226501735&text=Hola, me interesa conocer mas sobre el plan NÓMINA EMPRENDEDOR de Gestoru"
                            recommended={true}
                          />

                          <PricingCard
                            name="NÓMINA PYME"
                            price="$760.320"
                            originalPrice="$864.000"
                            monthly="Anual"
                            content="Plan anual PYME - Máximo descuento para medianas empresas."
                            FeatureList={[
                              "25 nóminas mensuales",
                              "Nómina electrónica DIAN",
                              "Automatización completa",
                              "Soporte especializado",
                            ]}
                            btnname="Más Información"
                            btnurl="https://api.whatsapp.com/send/?phone=573226501735&text=Hola, me interesa conocer mas sobre el plan NÓMINA PYME de Gestoru"
                          />

                          <PricingCard
                            name="NÓMINA AVANZADO"
                            price="$1.141.440"
                            originalPrice="$1.296.000"
                            monthly="Anual"
                            content="Plan anual avanzado - Para grandes empresas con alto volumen."
                            FeatureList={[
                              "50 nóminas mensuales",
                              "Nómina electrónica DIAN",
                              "Gestión empresarial",
                              "Soporte 24/7",
                            ]}
                            btnname="Más Información"
                            btnurl="https://api.whatsapp.com/send/?phone=573226501735&text=Hola, me interesa conocer mas sobre el plan NÓMINA AVANZADO de Gestoru"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6">
                    <div className="wcu-content">
                      <div className="section-title">
                        <div
                          className="subtitle wow fadeInUp"
                          data-wow-delay=".2s"
                        >
                          Gestoru - Nómina Electrónica{" "}
                          <Image
                            src="/assets/images/icon/fireIcon.svg"
                            alt="img"
                            width={16}
                            height={17}
                          />
                        </div>
                        <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                          Automatización Total de Procesos
                        </h2>
                        <p className="text1 wow fadeInUp" data-wow-delay=".6s">
                          Automatiza tus procesos de nómina electrónica con
                          Gestoru. Nuestro sistema está completamente adaptado y
                          certificado para cumplir con la normativa establecida
                          por la DIAN, garantizando que tu empresa esté siempre
                          al día con los requerimientos legales.
                        </p>
                        <p className="text2 wow fadeInUp" data-wow-delay=".8s">
                          Actívate como generador de Nómina ante la DIAN de
                          manera fácil y rápida. Con Gestoru tendrás todo lo
                          necesario para implementar la nómina electrónica en tu
                          empresa, cumpliendo al 100% con los requisitos de la
                          DIAN.
                        </p>
                      </div>
                      <Link
                        className="theme-btn rounded-5 wow fadeInUp"
                        data-wow-delay=".4s"
                        href="https://wa.me/573226501735?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20la%20nómina%20electrónica%20de%20Gestoru"
                      >
                        Contactar por WhatsApp
                        <svg
                          className="ms-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_190_64)">
                            <path
                              d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_190_64">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </div>
                  </div>

                  <div className="col-xl-6">
                    <div className="wcu-thumb">
                      <div
                        className="main-thumb img-custom-anim-left wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <Image
                          src="/assets/images/services/nomina-2.webp"
                          className="img-fluid"
                          alt="img"
                          width={386}
                          height={503}
                        />
                      </div>
                      <div className="thumb2">
                        <Image
                          src="/assets/images/wcu/wcuThumb3_2.png"
                          alt="img"
                          width={558}
                          height={340}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ServiceDetailNomina;

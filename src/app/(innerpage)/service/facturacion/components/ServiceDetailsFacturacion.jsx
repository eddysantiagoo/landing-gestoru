import Image from "next/image";
import Link from "next/link";
import About4 from "../../../../Components/About/About4";
import Choose3 from "../../../../Components/Choose/Choose3";
import PricingCard from "@/app/Components/Card/PricingCard";

const ServiceDetailsFacturacion = () => {
  const featureList = [
    "Personalización completa de facturas",
    "Envío automatizado por correo electrónico",
    "Formato PDF descargable",
    "Cumplimiento 100% DIAN",
    "Acompañamiento en el proceso de registro",
    "Transformación digital eficiente",
  ];

  return (
    <div className="service-details-section">
      {/* About Style Section */}
      <section className="about-section  fix">
        <About4
          img1="/assets/images/services/facturacion.webp"
          img2="/assets/images/about/aboutThumb1_2.png"
          title="Facturación Electrónica"
          content=" Con Gestoru podrás hacer tus facturas electrónicas de
            manera sencilla, ágil y con un soporte continuo.
             Personaliza tu factura con tu logo y datos de contacto.
             Una vez configurado, tus facturas quedarán listas para
           el envío automático."
          FeatureList={featureList}
          btnname="Contactar por WhatsApp"
          btnurl="https://wa.me/1234567890?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20Gestoru"
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
                  <div className="row gy-4 gx-3 justify-content-center align-items-stretch">
                    <PricingCard
                      name="Plan BÁSICO"
                      price="$25.900"
                      monthly="Mensual"
                      content="Perfecto para pequeñas empresas que están iniciando con facturación electrónica."
                      FeatureList={[
                        "10 facturas mensuales",
                        "Facturación electrónica DIAN",
                        "Soporte básico",
                        "Panel web",
                      ]}
                      btnname="Más Información"
                      btnurl="https://api.whatsapp.com/send/?phone=573226501735&text=Hola, me interesa conocer mas sobre el plan BÁSICO facturación de Gestoru"
                    />

                    <PricingCard
                      name="Plan EMPRENDEDOR"
                      price="$49.500"
                      monthly="Mensual"
                      content="Ideal para emprendedores que buscan hacer crecer su negocio digitalmente."
                      FeatureList={[
                        "100 facturas mensuales",
                        "Facturación electrónica DIAN",
                        "Soporte prioritario",
                        "Reportes avanzados",
                      ]}
                      btnname="Más Información"
                      btnurl="https://api.whatsapp.com/send/?phone=573226501735&text=Hola, me interesa conocer mas sobre el plan EMPRENDEDOR facturación de Gestoru"
                    />

                    <PricingCard
                      name="Plan PYME"
                      price="$87.900"
                      monthly="Mensual"
                      content="Diseñado especialmente para pequeñas y medianas empresas en crecimiento."
                      FeatureList={[
                        "500 facturas mensuales",
                        "Facturación electrónica DIAN",
                        "Soporte especializado",
                        "Reportes completos",
                      ]}
                      btnname="Más Información"
                      btnurl="https://api.whatsapp.com/send/?phone=573226501735&text=Hola, me interesa conocer mas sobre el plan PYME facturación de Gestoru"
                    />

                    <PricingCard
                      name="Plan AVANZADO"
                      price="$124.900"
                      monthly="Mensual"
                      content="Para empresas establecidas que manejan alto volumen de facturación."
                      FeatureList={[
                        "1000 facturas mensuales",
                        "Facturación electrónica DIAN",
                        "Soporte 24/7",
                        "Reportes ejecutivos",
                      ]}
                      btnname="Más Información"
                      btnurl="https://api.whatsapp.com/send/?phone=573226501735&text=Hola, me interesa conocer mas sobre el plan AVANZADO facturación de Gestoru"
                    />
                  </div>

                  <div className="col-xl-6">
                    <div className="wcu-content">
                      <div className="section-title">
                        <div
                          className="subtitle wow fadeInUp"
                          data-wow-delay=".2s"
                        >
                          Gestoru - Facturación{" "}
                        </div>
                        <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                          Acompañamiento Completo
                        </h2>
                        <p className="text1 wow fadeInUp" data-wow-delay=".6s">
                          Te acompañaremos en todo el proceso de registro para
                          implementar la Factura Electrónica en tu empresa. Una
                          vez estés habilitado para emitir facturas electrónicas
                          ante la DIAN, con Gestoru podrás hacer emisión,
                          recepción y almacenamiento de todas las facturas
                          electrónicas.
                        </p>
                        <p className="text2 wow fadeInUp" data-wow-delay=".8s">
                          Una de las grandes ventajas es que al enviar tu
                          factura llegará directamente al email de tu cliente en
                          formato PDF. También tendrás un historial completo
                          para tener el control de todas las facturas que
                          envías.
                        </p>
                      </div>
                      <Link
                        className="theme-btn rounded-5 wow fadeInUp"
                        data-wow-delay=".4s"
                        href="https://wa.me/573226501735?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20la%20facturación%20electrónica%20de%20Gestoru"
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
                          src="/assets/images/services/facturacion-2.webp"
                          alt="img"
                          width={386}
                          height={503}
                          className="img-fluid"
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

export default ServiceDetailsFacturacion;

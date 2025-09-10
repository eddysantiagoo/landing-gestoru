import Image from "next/image";
import Link from "next/link";
import About4 from "../../../../Components/About/About4";

const ServiceDetailsPos = () => {
  const featureList = [
    "Personalización de la factura (Tirilla)",
    "Inventario automatizado y actualizado",
    "Informes y descargables en PDF",
    "Cotizaciones profesionales",
    "Facturas en tirilla con requisitos DIAN",
    "Compatible con códigos de barras",
  ];

  return (
    <div className="service-details-section">
      {/* About Style Section */}
      <section className="about-section fix">
        <About4
          img1="/assets/images/services/pos-2.webp"
          img2="/assets/images/about/aboutThumb1_2.png"
          title="Sistema POS, Facturación para Negocios"
          content="Con Gestoru tendrás un sistema que te permite agilizar las tareas relacionadas con la venta, facturación y el cobro de productos o servicios en tu negocio local. Tu inventario está siempre actualizado y digitalizado, controlando la entrada y salida de todos tus productos en tiempo real."
          FeatureList={featureList}
          btnname="Contactar por WhatsApp"
          btnurl="https://wa.me/573135219304?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20el%20sistema%20POS%20de%20Gestoru"
        />
      </section>

      {/* Additional Information Section */}
      <section className="about-section section-padding pt-0 fix">
        <section className="wcu-section section-padding fix">
          <div className="wcu-container-wrapper style3">
            <div className="container">
              <div className="wcu-wrapper style3">
                <div className="row gy-5 gx-60">
                  <div className="col-xl-6">
                    <div className="wcu-content">
                      <div className="section-title">
                        <div
                          className="subtitle wow fadeInUp"
                          data-wow-delay=".2s"
                        >
                          Gestoru - Sistema POS{" "}
                          <Image
                            src="/assets/images/icon/fireIcon.svg"
                            alt="img"
                            width={16}
                            height={17}
                          />
                        </div>
                        <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                          ¿Qué beneficios tengo con el sistema de facturación POS?
                        </h2>
                        <p className="text1 wow fadeInUp" data-wow-delay=".6s">
                          Agilizas tu proceso de venta al crear tus tirillas y facturas en segundos, simplificas el manejo de tus terminales de venta al gestionar todo desde un solo lugar. Ahorras tiempo al mantener tu inventario siempre actualizado y controlas ágilmente tu efectivo al realizar fácilmente cierres de turnos.
                        </p>
                        <p className="text2 wow fadeInUp" data-wow-delay=".8s">
                          Usa tu impresora conectada a nuestro sistema POS y utiliza todos los códigos de barra de tus productos. Con Gestoru, tienes acceso a facturas en tirilla con todos los requisitos DIAN, garantizando el cumplimiento legal de tu negocio.
                        </p>
                      </div>
                      <Link
                        className="theme-btn rounded-5 wow fadeInUp"
                        data-wow-delay=".4s"
                        href="https://wa.me/573135219304?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20el%20sistema%20POS%20de%20Gestoru"
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
                          src="/assets/images/services/pos.webp"
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

export default ServiceDetailsPos;
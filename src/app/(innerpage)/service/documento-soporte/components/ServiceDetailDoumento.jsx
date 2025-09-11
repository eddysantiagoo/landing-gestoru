import Image from "next/image";
import Link from "next/link";
import About4 from "../../../../Components/About/About4";

const ServiceDetailDoumento = () => {
  const featureList = [
    "Numeración autorizada por la DIAN",
    "Costos, deducciones e impuestos descontables",
    "Envío ágil y sencillo del documento",
    "Informe en formato PDF descargable",
    "Cumplimiento 100% normativa tributaria",
    "Maximización de beneficios fiscales",
  ];

  return (
    <div className="service-details-section">
      {/* About Style Section */}
      <section className="about-section fix">
        <About4
          img1="/assets/images/services/documentos.webp"
          img2="/assets/images/about/aboutThumb1_2.png"
          title="Documento Soporte DIAN" 
          content="Es el documento que usas para acreditar la compra de un bien o servicio, y que debe generar el comprador cuando hace transacciones con un proveedor que no está obligado a expedir factura de venta o documento equivalente."
          FeatureList={featureList}
          btnname="Contactar por WhatsApp"
          btnurl="https://wa.me/573226501735?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20el%20documento%20soporte%20de%20Gestoru"
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
                          Gestoru - Documento Soporte{" "}
                          <Image
                            src="/assets/images/icon/fireIcon.svg"
                            alt="img"
                            width={16}
                            height={17}
                          />
                        </div>
                        <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                          ¿Qué beneficios tiene expedir el documento soporte?
                        </h2>
                        <p className="text1 wow fadeInUp" data-wow-delay=".6s">
                          Te permite documentar las operaciones cuando se realizan con proveedores no obligados a emitir factura o documento equivalente. Así soportas adecuadamente costos, deducciones, o impuestos descontables en estas adquisiciones.
                        </p>
                        <p className="text2 wow fadeInUp" data-wow-delay=".8s">
                          Con Gestoru podrás expedir tus documentos soporte con numeración autorizada por la DIAN 2022, garantizando el cumplimiento total de la normativa tributaria y maximizando tus beneficios fiscales de manera legal y segura.
                        </p>
                      </div>
                      <Link
                        className="theme-btn rounded-5 wow fadeInUp"
                        data-wow-delay=".4s"
                        href="https://wa.me/573226501735?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20el%20documento%20soporte%20de%20Gestoru"
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
                          src="/assets/images/services/documentos-2.webp"
                          alt="img"
                          width={386}
                          height={503}
                          className="img-fluid" 
                          style={{
                            maxWidth: '100%',
                            height: 'auto',
                            '@media (max-width: 725px)': {
                              left: '12px',
                            }
                          }}
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

export default ServiceDetailDoumento;
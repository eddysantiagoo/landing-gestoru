import Image from "next/image";
import Link from "next/link";
import About4 from "../../../../Components/About/About4";

const ServiceDetailNomina = () => {
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
          img1="/assets/images/about/aboutThumb1_1.png"
          img2="/assets/images/about/aboutThumb1_2.png"
          title="Nómina Electrónica"
          content="Implementa fácilmente la Nómina Electrónica en tu empresa. Adaptado, certificado y diseñado para el cumplimiento de la normativa establecido por la DIAN en el proyecto de resolución referente a Nómina Electrónica."
          FeatureList={featureList}
          btnname="Contactar por WhatsApp"
          btnurl="https://wa.me/573135219304?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20la%20nómina%20electrónica%20de%20Gestoru"
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
                          Automatiza tus procesos de nómina electrónica con Gestoru. Nuestro sistema está completamente adaptado y certificado para cumplir con la normativa establecida por la DIAN, garantizando que tu empresa esté siempre al día con los requerimientos legales.
                        </p>
                        <p className="text2 wow fadeInUp" data-wow-delay=".8s">
                          Actívate como generador de Nómina ante la DIAN de manera fácil y rápida. Con Gestoru tendrás todo lo necesario para implementar la nómina electrónica en tu empresa, cumpliendo al 100% con los requisitos de la DIAN.
                        </p>
                      </div>
                      <Link
                        className="theme-btn rounded-5 wow fadeInUp"
                        data-wow-delay=".4s"
                        href="https://wa.me/573135219304?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20la%20nómina%20electrónica%20de%20Gestoru"
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
                          src="/assets/images/wcu/wcuThumb3_1.png"
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

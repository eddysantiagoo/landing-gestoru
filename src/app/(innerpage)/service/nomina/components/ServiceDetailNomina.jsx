import Image from "next/image";

const ServiceDetailNomina = () => {
  return (
    <div className="service-details-section">
      <div className="service-details-container-wrapper section-padding fix">
        <div className="container">
          <div className="service-details-wrapper">
            <div
              className="main-thumb img-custom-anim-right wow fadeInLeft"
              data-wow-delay=".3s"
            >
              <Image
                src="/assets/images/services/servicesDetailsThumb1_1.jpg"
                alt="img"
                width={1410}
                height={646}
              />
            </div>
            <h2 className="title wow fadeInUp" data-wow-delay=".3s">
              Nómina Electrónica - Cumplimos al 100% los requisitos de la DIAN
            </h2>
            <div className="tagcloud">
              <div className="tag">
                <a href="#">Nómina DIAN</a>
              </div>
              <div className="tag">
                <a href="#">Automatización</a>
              </div>
              <div className="tag">
                <a href="#">Generador</a>
              </div>
              <div className="tag">
                <a href="#">Certificado</a>
              </div>
            </div>
            <div className="details-box1">
              <h3 className="subtitle wow fadeInUp" data-wow-delay=".3s">
                Visión General del Servicio
              </h3>
              <div className="row gy-3">
                <div className="col-xl-7">
                  <p className="text wow fadeInUp" data-wow-delay=".3s">
                    Implementa fácilmente la Nómina Electrónica en tu empresa.
                    Adaptado, certificado y diseñado para el cumplimiento de la
                    normativa establecido por la DIAN en el proyecto de
                    resolución referente a Nómina Electrónica.
                  </p>
                </div>
                <div className="col-xl-5">
                  <p className="text wow fadeInUp" data-wow-delay=".5s">
                    Con Gestoru podrás automatizar tus procesos de nómina
                    electrónica y activarte como generador de Nómina ante la
                    DIAN de manera sencilla y eficiente.
                  </p>
                </div>
              </div>
            </div>
            <div className="details-box2">
              <h3 className="subtitle wow fadeInUp" data-wow-delay=".3s">
                Beneficios de Nuestro Servicio
              </h3>
              <div className="row gy-3">
                <div className="col-xl-6">
                  <div
                    className="feature-wrapper wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <ul className="feature">
                      <li>Automatización completa de procesos de nómina</li>
                      <li>Cumplimiento 100% normativa DIAN</li>
                      <li>Certificado y adaptado a la resolución</li>
                    </ul>
                    <ul className="feature">
                      <li>Actívate como generador ante la DIAN</li>
                      <li>Implementación fácil y rápida</li>
                      <li>Soporte continuo y especializado</li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="progress-wrap">
                    <div className="progress-meta">
                      <div className="title">Cumplimiento DIAN</div>
                      <div className="percentage">100%</div>
                    </div>
                    <div className="progress-container">
                      <div className="progress-bar"></div>
                    </div>
                  </div>
                  <div className="progress-wrap mb-0">
                    <div className="progress-meta">
                      <div className="title">Automatización</div>
                      <div className="percentage">100%</div>
                    </div>
                    <div className="progress-container">
                      <div className="progress-bar"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="thumb-wrapper">
                <div className="row gy-3">
                  <div className="col-xl-6">
                    <div
                      className="thumb img-custom-anim-left wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <Image
                        src="/assets/images/services/servicesDetailsThumb1_2.jpg"
                        alt="img"
                        width={690}
                        height={328}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div
                      className="thumb  img-custom-anim-left wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <Image
                        src="/assets/images/services/servicesDetailsThumb1_3.jpg"
                        alt="img"
                        width={690}
                        height={328}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text1 wow fadeInUp" data-wow-delay=".3s">
                Automatiza tus procesos de nómina electrónica con Gestoru.
                Nuestro sistema está completamente adaptado y certificado para
                cumplir con la normativa establecida por la DIAN, garantizando
                que tu empresa esté siempre al día con los requerimientos
                legales.
              </p>
              <p className="text2 wow fadeInUp" data-wow-delay=".5s">
                Actívate como generador de Nómina ante la DIAN de manera fácil y
                rápida. Con Gestoru tendrás todo lo necesario para implementar
                la nómina electrónica en tu empresa, cumpliendo al 100% con los
                requisitos de la DIAN y optimizando tus procesos
                administrativos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailNomina;

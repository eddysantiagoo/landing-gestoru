import Image from "next/image";
import FeatureCard from "../Card/FeatureCard";
import SectionTitle from "../Common/SectionTitle";

const Feature1 = () => {
  return (
    <section className="wcu-section section-padding fix">
      <div className="wcu-container-wrapper style1">
        <div className="container">
          <div
            className="section-title text-center mxw-685 mx-auto wow fadeInUp"
            data-wow-delay=".2s"
          >
            <SectionTitle
              SubTitle="Herramientas que tendrás a disposición en Gestoru"
              Title="Una serie de módulos diseñados para llevar tu empresa a otro nivel"
            />
          </div>

          <div className="wcu-wrapper style1">
            <div className="row gy-5 d-flex justify-content-center">
              {/* Columna izquierda */}
              <div className="col-xl-4 d-flex justify-content-center">
                <div className="wcu-content">
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_1.svg"
                    title="Facturación"
                    content="Emite facturas electrónicas cumpliendo con la normativa de la DIAN."
                  />
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_2.svg"
                    title="Documentos"
                    content="Genera documentos soporte autorizados por la DIAN."
                  />
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_3.svg"
                    title="Nómina"
                    content="Implementa la nómina electrónica en tu empresa."
                  />
                </div>
              </div>

              {/* Imagen central (no se cambia) */}
              <div className="col-xl-4 d-flex justify-content-center">
                <div className="wcu-thumb wow fadeInUp" data-wow-delay=".2s">
                  <div
                    className="main-thumb wow bounceInUp"
                    data-wow-delay=".6s"
                  >
                    <Image
                      src="/assets/images/wcu/wcuThumb1_1.webp"
                      alt="Gestoru"
                      className="img-fluid"
                      width={376}
                      height={342}
                    />
                  </div>
                  <div className="shape">
                    <Image
                      src="/assets/images/shape/wcuThumbShape1_1.png"
                      alt="shape"
                      width={376}
                      height={377}
                    />
                  </div>
                </div>
              </div>

              {/* Columna derecha */}
              <div className="col-xl-4 d-flex justify-content-center justify-content-xl-end">
                <div className="wcu-content">
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_4.svg"
                    title="POS Venta"
                    content="Sistema POS integrado."
                  />
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_5.svg"
                    title="Reportes"
                    content="Obtén reportes claros y en tiempo real."
                  />
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_6.svg"
                    title="Inventario"
                    content="Gestiona y controla tu inventario."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;

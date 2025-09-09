import React from "react";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import Brand1 from "../Components/Brand/Brand1";
import About1 from "../Components/About/About1";
import HowWork from "../Components/HowWork/HowWork";
import Choose1 from "../Components/Choose/Choose1";
import Feature1 from "../Components/Feature/Feature1";
import Counter1 from "../Components/Counter/Counter1";
import Faq1 from "../Components/Faq/Faq1";
import Testimonial from "../Components/Testimonial/Testimonial";
import Feature2 from "../Components/Feature/Feature2";
import Pricing1 from "../Components/Pricing/Pricing1";
import Cta1 from "../Components/Cta/Cta1";
import Blog1 from "../Components/Blog/Blog1";

const page = () => {
  return (
    <div>
      <HeroBanner1
        subtitle="<span>Bienvenido/a</span>Soluciones para tu PYME"
        title="Gestión simple para tu PYME"
        content="Te acompañamos en la gestión y organización de tu PYME con herramientas en la nube fáciles de usar. Nuestra solución te permite optimizar procesos, mantener todo en orden y dedicar más tiempo a lo realmente importante: hacer crecer tu negocio."
        btnname="Pruebalo por 30 días"
        btnurl="/contact"
        btntwo=""
        btn2url="/about"
        cusimg="/assets/images/intro/introProfileThumb1_1.webp"
        cusnumber="2,291"
        cuscontent="Clientes satisfechos"
        rating="5/5"
        ratingcon="Rating"
        img="/assets/images/intro/introThumb1_1.webp"
      ></HeroBanner1>
      <Brand1></Brand1>
      <About1
        img1="/assets/images/about/aboutThumb1_1_home.webp"
        img2="/assets/images/about/aboutThumb1_2.png"
        subtitle="Gestoru"
        title="Gestión simple y en la nube para tu negocio"
        content="En Gestoru ayudamos a organizar y estructurar tu PYME con herramientas tecnológicas que integran facturación electrónica, nómina, POS, reportes, inventario y mucho más. Todo en un solo software para que tu empresa crezca sin complicaciones."
        FeatureList={[
          "Software administrativo y de facturación en la nube",
          "Reportes claros y en tiempo real",
          "Confiado por emprendedores y PYMEs en todo el país",
          "Pruébalo gratis por 30 días, sin tarjeta de crédito",
        ]}
        btnname="Discover More"
        btnurl="/about"
      ></About1>

      <Feature1></Feature1>

      {/* <Faq1></Faq1> */}

      {/* <Testimonial></Testimonial> */}
      {/* <Feature2></Feature2> */}
      <Pricing1></Pricing1>
      <Cta1
        subtitle="Gestoru"
        title="Pruebalo por 30 días"
        content="¡Comienza hoy y disfruta de 30 días gratis sin necesidad de tarjeta! Descubre cómo Gestoru puede transformar la gestión de tu negocio."
        btnurl1="https://play.google.com/store"
        btnurl2="https://www.apple.com/store"
        img="/assets/images/cta/ctaThumb1_1.webp"
      ></Cta1>

    </div>
  );
};

export default page;

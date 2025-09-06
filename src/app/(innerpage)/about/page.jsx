import BreadCumb from "../../Components/Common/BreadCumb";
import About4 from "../../Components/About/About4";
import Choose2 from "../../Components/Choose/Choose2";
import Choose4 from "../../Components/Choose/Choose4";
import HowWork from "../../Components/HowWork/HowWork";

const page = () => {
  const featureList = [
    "Software en la nube para PYMES",
    "Suite completa de herramientas",
    "Gestión integral de negocios",
    "Soporte especializado"
  ];

  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title="Quiénes Somos"
      ></BreadCumb>

      <About4
        img1="/assets/images/about/aboutThumb1_1.webp"
        img2="/assets/images/about/aboutThumb1_2.png"
        subtitle="Gestoru"
        title="Quiénes Somos"
        content="En Gestoru ayudamos a gestionar y estructurar tu PYME o tu negocio a través de nuestro software en la nube. Una suite de herramientas para llevar a otro nivel tu emprendimiento."
        FeatureList={featureList}
        btnname="Contactar por WhatsApp"
        btnurl="https://wa.me/1234567890?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20Gestoru"
      />

      <Choose2
        img1="/assets/images/wcu/wcuThumb2_1.webp"
        img2="/assets/images/wcu/wcuThumb2_2.png"
        img3="/assets/images/wcu/wcuThumb2_3.png"
        subtitle="Soluciones Personalizadas"
        title="Gestiona tu negocio de manera eficiente"
        content="Ofrecemos herramientas especializadas para optimizar los procesos de tu empresa, desde la facturación hasta el control de inventarios, todo en una plataforma integrada."
        boximg1="/assets/images/icon/wcuIcon2_1.svg"
        boxtitle1="Fácil Colaboración"
        boxcontent1="Nuestro software permite que tu equipo trabaje de manera coordinada y eficiente"
        boximg2="/assets/images/icon/wcuIcon2_2.svg"
        boxtitle2="Soluciones Innovadoras"
        boxcontent2="Tecnología de vanguardia adaptada a las necesidades de tu negocio"
      ></Choose2>
    </div>
  );
};

export default page;

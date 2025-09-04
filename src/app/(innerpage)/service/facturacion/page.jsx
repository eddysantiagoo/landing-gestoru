import BreadCumb from "../../../Components/Common/BreadCumb";
import React from "react";
import ServiceDetailsFacturacion from "./components/ServiceDetailsFacturacion";

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title="Facturación Electrónica DIAN"
      ></BreadCumb>
      <ServiceDetailsFacturacion></ServiceDetailsFacturacion>
    </div>
  );
};

export default page;

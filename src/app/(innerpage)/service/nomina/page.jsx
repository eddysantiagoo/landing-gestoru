import BreadCumb from "../../../Components/Common/BreadCumb";
import React from "react";
import ServiceDetailNomina from "./components/ServiceDetailNomina";

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title="Nómina Electrónica DIAN"
      ></BreadCumb>
      <ServiceDetailNomina></ServiceDetailNomina>
    </div>
  );
};

export default page;

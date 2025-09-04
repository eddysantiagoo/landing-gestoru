import BreadCumb from "../../../Components/Common/BreadCumb";
import React from "react";
import ServiceDetailPos from "./components/ServiceDetailPos";

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title="Sistema de Facturación POS"
      ></BreadCumb>
      <ServiceDetailPos></ServiceDetailPos>
    </div>
  );
};

export default page;

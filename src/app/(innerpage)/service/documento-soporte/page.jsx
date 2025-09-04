import BreadCumb from "../../../Components/Common/BreadCumb";
import React from "react";
import ServiceDetailDoumento from "./components/ServiceDetailDoumento";

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title="Documento Soporte"
      ></BreadCumb>
      <ServiceDetailDoumento></ServiceDetailDoumento>
    </div>
  );
};

export default page;

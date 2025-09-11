import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import React from "react";
import BreadCumb from "../../Components/Common/BreadCumb";

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title="Contáctanos"
      ></BreadCumb>
      <ContactInfo></ContactInfo>
    </div>
  );
};

export default page;

import Services1 from "../../Components/Services/Services1";
import Team2 from "../../Components/Team/Team2";
import React from "react";
import Brand1 from "../../Components/Brand/Brand1";
import Cta1 from "../../Components/Cta/Cta1";
import BreadCumb from "../../Components/Common/BreadCumb";

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title="Services"
      ></BreadCumb>
      <Cta1></Cta1>
      <Services1></Services1>
      <Team2></Team2>
      <Brand1></Brand1>
    </div>
  );
};

export default page;

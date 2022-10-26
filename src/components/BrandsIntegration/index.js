import React from "react";
import "./brandsIntegration.css";

const BransIntegration = () => {
  return (
    <div className="brand-integration">
      <img
        src={require("../../assets/brandLogos.png")}
        alt="Brand Logos"
        className="bi-logos"
      />
    </div>
  );
};

export default BransIntegration;

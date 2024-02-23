import React from "react";

const Footer = ({ title }) => {
  return (
    <div>
      <div className="py-4 mt-4 font-bold text-purple-800  shadow-sm  bg-purple-200  flex justify-center">
        <p className="">{title}</p>
      </div>
    </div>
  );
};

export default Footer;

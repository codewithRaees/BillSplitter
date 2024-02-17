import React from "react";

const Header = ({ title }) => {
  return (
    <>
      <div className="py-4 w-full  font-semibold text-purple-800  shadow-sm  bg-purple-200 m-auto flex justify-center">
        <h1 className="text-3xl">{title}</h1>
      </div>
    </>
  );
};

export default Header;

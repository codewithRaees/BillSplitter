import React from "react";

const BilloutPut = ({ value }) => {
  return (
    <div>
      <div className=" m-auto mt-5">
        <p className="text-sm  mb-2 text-white my-10 m-auto justify-center  block font-medium leading-6">
          {value}
        </p>
      </div>
    </div>
  );
};

export default BilloutPut;

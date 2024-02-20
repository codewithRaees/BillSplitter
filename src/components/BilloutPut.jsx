import React from "react";

const BilloutPut = ({ value, tip }) => {
  return (
    <div>
      <div className=" flex m-auto mt-5">
        <p className="text-sm  mb-2 text-white my-10 m-auto justify-center  block font-medium leading-6">
          {value}
        </p>
        {}
        switch (value) {
          case Tip:
            <p className="text-sm  mb-2 text-white my-10 m-auto justify-center  block font-medium leading-6">
          {tip}
        </p>
            break;
        
          default:
            break;
        }
          
        
        
      </div>
    </div>
  );
};

export default BilloutPut;

import React from "react";

const BilloutPut = ({ value, tip, bill, customtip }) => {
  return (
    <div>
      <div className="    mt-1 justify-start">
        <div className="flex ">
          <p className="text-sm  mb-2 mt-2 text-white  px-4   font-medium leading-6">
            {value}
          </p>
          {tip && (
            <p className="text-sm  mb-2 mt-2 text-white  px-4   font-medium leading-6">
              {tip}
            </p>
          )}
          {bill && !tip && (
            <p className="text-sm  mb-2 mt-2 text-white  px-4   font-medium leading-6">
              {bill}
            </p>
          )}
          {customtip && !tip && !bill && (
            <p className="text-sm  mb-2 mt-2 text-white  px-4   font-medium leading-6">
              {customtip}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BilloutPut;

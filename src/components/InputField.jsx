import React, { useState } from "react";
const InputField = ({ setBill }) => {
  // const [bill, setBill] = useState(0);
  const handleChange = (event) => {
    setBill(event.target.value);
   
  };


  return (
    <div className="flex text-purple-700 flex-col   m-auto justify-center">
      <div className="w-[272px] ">
        <label
          htmlFor="price"
          className=" text-2xl text-purple-700 block font-medium leading-6"
        >
          Bill
        </label>
        <div className="relative mt-2 rounded-md  shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-purple-800 sm:text-sm">$</span>
          </div>
          <input
            onChange={handleChange}
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-purple-900 ring-1 ring-inset ring-purple-500 placeholder:text-purple-300 focus:outline-purple-600 text-sm sm:leading-6"
            placeholder="0.00"
            aria-describedby="price-currency"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-purple-800 sm:text-sm" id="price-currency">
              PKR
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputField;

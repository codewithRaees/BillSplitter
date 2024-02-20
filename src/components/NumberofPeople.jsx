import React from "react";
const NumberofPeople = ({ placeholder, name, setPerson }) => {
  const handleChange = (event) => {
    setPerson(event.target.value);
  };
  return (
    <div className="flex text-purple-700 flex-col mt-1   justify-center">
      <div className="w-[272px]  ">
        <div className="relative  rounded-md  shadow-sm">
          <input
            onChange={handleChange}
            type="text"
            name={name}
            id="numberofpeople"
            className="block w-full rounded-md text-sm border-0 py-1.5 pl-2 pr-12 text-purple-900 ring-1 ring-inset ring-purple-500 placeholder:text-purple-300 focus:outline-purple-600 sm:text-sm sm:leading-6"
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default NumberofPeople;

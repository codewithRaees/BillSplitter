import React from "react";

const GenerateBill = ({ value, width, mtop }) => {
  //   const handleClick = (event) => {
  //     event.preventDefault();
  //     setTip(parseInt(event.target.value));
  //   };
  return (
    <>
      <button
        type="submit"
        value={value}
        className={`bg-transparent  ${mtop} mr-4 ${width}  hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded`}
      >
        {value}
      </button>
    </>
  );
};

export default GenerateBill;

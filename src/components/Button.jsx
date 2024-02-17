import React from "react";

const Button = ({ value, width, mtop }) => {
  return (
    <>
      <button
        class={`bg-transparent  ${mtop} mr-4 ${width}  hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded`}
      >
        {value}
      </button>
    </>
  );
};

export default Button;

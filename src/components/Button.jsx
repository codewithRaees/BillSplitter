import React, { useState } from "react";

const Button = ({ value, width, mtop, setTipAmount }) => {
  const [changecolor, setChangeColor] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    setTipAmount(parseInt(event.target.value));
    setChangeColor(!changecolor);
  };
  return (
    <>
      <button
        value={value}
        onClick={handleClick}
        className={`bg-transparent  ${mtop} mr-4 ${width}  ${
          changecolor === true
            ? "bg-purple-700 text-white border-purple-700"
            : "bg-purple-400 text-white border-purple-400"
        }   hover:bg-purple-500  font-semibold hover:text-white py-2 px-4 border  hover:border-transparent rounded`}
      >
        {value}
      </button>
    </>
  );
};

export default Button;

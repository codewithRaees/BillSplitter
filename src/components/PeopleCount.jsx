import React from "react";

const PeopleCount = ({ value }) => {
  return (
    <div className=" m-auto mt-3">
      <h6 className="  mb-2 m-auto justify-center text-purple-700 block font-medium leading-6">
        {value}
      </h6>
    </div>
  );
};

export default PeopleCount;

import React from "react";
const CustomTip = () => {
  return (
    <div className="flex text-purple-700 flex-col mt-1 ml-4   m-auto justify-center">
      <div className="w-[200px]  ">
        <div className="relative  rounded-md  shadow-sm">
          <input
            type="text"
            name="price"
            id="customtip"
            className="block w-full rounded-md border-0 py-1.5 pl-2 pr-12 text-purple-900 ring-1 ring-inset ring-purple-500 placeholder:text-purple-300 focus:outline-purple-600 sm:text-sm sm:leading-6"
            placeholder="Custom Tip"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomTip;

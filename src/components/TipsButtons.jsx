import React from "react";

const TipsButtons = () => {
  return (
    <>
      <div className="flex flex-col mt-3 mb-3   ">
        <div className="button-1strow m-auto mb-3 ">
          <h1 className=" text-xl mb-2 text-purple-700 block font-medium leading-6">
            Select Tip
          </h1>
          <button class="bg-transparent mr-4 w-20  hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
            5%
          </button>
          <button class="bg-transparent mr-4 w-20 hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
            10%
          </button>
          <button class="bg-transparent mr-4 w-20 hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
            15%
          </button>
        </div>
        <div className="flex m-auto  ">
          <button class="bg-transparent mr-4 w-20 hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
            25%
          </button>
          <button class="bg-transparent mr-4 w-20 hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
            50%
          </button>
          <button class="bg-transparent mr-4 w-20 hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
            75%
          </button>
        </div>
      </div>
    </>
  );
};

export default TipsButtons;

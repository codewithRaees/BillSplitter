import React, { useState } from "react";
import Button from "./Button";

const TipsButtons = ({ setTip }) => {
  const [tipamount, setTipAmount] = useState();
  setTip(tipamount);
  return (
    <>
      <div className="flex flex-col mt-3 mb-3   ">
        <div className="button-1strow  mb-3 ">
          <h1 className=" text-xl mb-2 text-purple-700 block font-medium leading-6">
            Select Tip
          </h1>
          <Button value="5%" width="w-20" setTipAmount={setTipAmount} />
          <Button value="10%" width="w-20" setTipAmount={setTipAmount} />
          <Button value="15%" width="w-20" setTipAmount={setTipAmount} />
        </div>
        <div className="flex  ">
          <Button value="25%" width="w-20" setTipAmount={setTipAmount} />
          <Button value="50%" width="w-20" setTipAmount={setTipAmount} />
          <Button value="75%" width="w-20" setTipAmount={setTipAmount} />
        </div>
      </div>
    </>
  );
};

export default TipsButtons;

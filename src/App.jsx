import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import InputField from "./components/InputField";
import Footer from "./components/Footer";
import TipsButtons from "./components/TipsButtons";
import CustomTip from "./components/CustomTip";
import PeopleCount from "./components/PeopleCount";
import Button from "./components/Button";
import BilloutPut from "./components/BilloutPut";
import NumberofPeople from "./components/NumberofPeople";
import GenerateBill from "./components/GenerateBill";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [person, setPerson] = useState(0);
  const [customtip, setCustomTip] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };
  // const TipCalculated = parseInt((bill * tip) / 100);
  let result;
  if (tip) {
    result = parseInt((bill * tip) / 100);
  } else if (customtip) {
    result = parseInt((bill * customtip) / 100);
  }
  const TotalBill = parseInt(bill) + parseInt(result);
  const EachoneBill = parseInt(TotalBill) / parseInt(person);
  const clearFields = () => {
    setBill(" ");
    setTip(" ");
    setCustomTip(" ");
    setPerson(" ");
  };
  return (
    <div className="flex justify-center flex-col ">
      <Header title="Party Bill Splitter" />
      <div className="main-wrapper flex justify-center md:flex-row flex-col m-auto mt-4">
        <form onSubmit={handleSubmit} className="flex md:flex-row flex-col">
          <div className="bill-input px-4 bg-purple-200  py-3 rounded-md">
            <InputField setBill={setBill} />
            <TipsButtons setTip={setTip} />
            <CustomTip
              placeholder="Custom Tip"
              name="customtip"
              setCustomTip={setCustomTip}
            />
            <PeopleCount value=" Number of Peoples" />
            <NumberofPeople
              placeholder="No of Poeples"
              name="peoplecount"
              setPerson={setPerson}
            />

            <div className="flex justify-center m-auto mb-3 ">
              <GenerateBill
                value="Generate Bill"
                width="w-[272px]"
                mtop="mt-4"
              />
            </div>
          </div>
          <div className="bill-output px-4 w-[350px]  bg-purple-500 md:ml-5 mt-5 md:mt-0 py-3 rounded-md">
            {formSubmitted && (
              <>
                <BilloutPut value="Tip Amount : " tip={result} />
                <BilloutPut value="Total : " bill={TotalBill} />
                <BilloutPut
                  value="Each Person Bill : "
                  customtip={EachoneBill}
                />
              </>
            )}
          </div>
        </form>
      </div>
      <Footer title="codewithraees" />
    </div>
  );
}

export default App;

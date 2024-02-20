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

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);

 
  return (
    <div className="flex justify-center flex-col ">
      <Header title="Party Bill Splitter" />
      <div className="main-wrapper flex justify-center md:flex-row flex-col m-auto mt-4">
        <div className="bill-input px-4 bg-purple-200  py-3 rounded-md">
          <InputField setBill={setBill} />
          <TipsButtons setTip={setTip} />
          <CustomTip placeholder="Custom Tip" name="customtip" />
          <PeopleCount value=" Number of Peoples" />
          <CustomTip placeholder="No of Poeples" name="peoplecount" />
          <div className="flex justify-center m-auto mb-3 ">
            <Button value="Generate Bill" width="w-[272px]" mtop="mt-4" />
          </div>
        </div>
        <div className="bill-output px-4 w-[350px]  bg-purple-500 md:ml-5 mt-5 md:mt-0 py-3 rounded-md">
          <BilloutPut value="Tip Amount : " tip={tip}  />
          <BilloutPut value="Total : " bill={bill} />
          <BilloutPut value="Each Person Bill : " />
        </div>
      </div>
      <Footer title="codewithraees" />
    </div>
  );
}

export default App;

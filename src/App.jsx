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

function App() {
  return (
    <>
      <Header title="Divide your Party Bill" />
      <div className="main-wrapper flex justify-center md:flex-row flex-col m-auto mt-4">
        <div className="bill-input md:px-4 bg-purple-50 rounded-md">
          <InputField />
          <TipsButtons />
          <CustomTip />
          <PeopleCount />
        </div>
        <div className="bill-output ">
          <InputField />
        </div>
      </div>
      <Footer title="codewithraees" />
    </>
  );
}

export default App;

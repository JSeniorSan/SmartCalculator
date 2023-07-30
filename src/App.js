import { React, useState, useEffect } from "react";
import "./App.css";
import DropMenu from "./Components/DropMenu";
import ButtonsChoiseConverter from "./Components/ButtonsChoiseConverter";
import MetricConverter from "./Components/MetricConverter.jsx";
import MoneyConverter from "./Components/MainConverter/MoneyConverter.jsx";
// -------------------------
// List of main components
import Header from "./Components/Header";
import MainCalc from "./Components/MainCalc";
// ----------------------------------------------

function App() {
  const [mode, setMode] = useState("Calculator");
  let selectedMode;

  function menuItemCickHandler(chapter) {
    setMode(chapter);
  }

  switch (mode) {
    case "Calculator":
      selectedMode = <MainCalc />;
      break;
    case "Converters":
      selectedMode = (
        <ButtonsChoiseConverter menuItemCickHandler={menuItemCickHandler} />
      );
      break;
    case "MoneyConverter":
      selectedMode = <MoneyConverter />;
      break;
    case "MetricConverter":
      selectedMode = <MetricConverter />;
      break;
    default:
      selectedMode = <MainCalc />;
  }

  return (
    <div className="App">
      <Header />
      <main>
        <DropMenu menuItemCickHandler={menuItemCickHandler} />
        {selectedMode}
      </main>
    </div>
  );
}

export default App;

import {
  Box,
  Text,
  Button,
  Input,
  Flex,
  ListItem,
  UnorderedList,
  List,
} from "@chakra-ui/react";

import { React, useState, useEffect } from "react";
import "./App.css";
import DropMenu from "./Components/DropMenu";
import Converter from "./Components/Converter";

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
    case "DropMenu":
      selectedMode = <Converter />;
      break;
    default:
      selectedMode = <MainCalc />;
  }

  // const menuElement = document.querySelector(".nav-section");
  // const header = document.querySelector("header");

  // useEffect(() => {
  //   console.log("yes");

  //   function observerCallback(e) {
  //     const entry = e[0];
  //     console.log(entry);
  //     if (entry.isIntersecting === false) {
  //       menuElement.style.position = "fixed";
  //     } else {
  //       menuElement.style.position = "static";
  //     }
  //   }
  //   const observerOptions = {
  //     root: null, //элемент сравнения
  //     rootMargin: "-20px",
  //     threshold: 0.1,
  //   };

  //   const observer = new IntersectionObserver(
  //     observerCallback,
  //     observerOptions
  //   );
  //   observer.observe(header);
  // }, []);

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

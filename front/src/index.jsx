import React from "react";
import "./main.css";
import "./index.css";
import { hydrate, render } from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

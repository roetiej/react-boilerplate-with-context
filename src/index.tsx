import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { AppProvider } from "./context";

const rootElement = document.getElementById("app");

ReactDOM.render(
	<AppProvider>
    	<App />
  	</AppProvider>,
  rootElement
);

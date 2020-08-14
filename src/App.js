import React from "react";
import "./App.css";

import { useApp } from "./context";

const App = () => {
  const [state] = useApp();
  
  return <div>App</div>;
};

export default App;

import React from "react";
import "./App.css";

import { useState } from "react";
import "./App.css";

const App = () => {
  const [contador, setContador] = useState(0);
  const aumentar = num => {
    setContador(num);
  };
  return (
    <div>
      <span className="value">{contador}</span>
      <button id="inc" onClick={() => aumentar(contador + 1)}>
        Incrementa
      </button>
    </div>
  );
};

export default App;

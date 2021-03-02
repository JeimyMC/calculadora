/* eslint no-eval: 0 */
import React, { useState } from "react";
import { Functions } from "./components/Functions";
import { MathOperations } from "./components/MathOperations";
import { Numbers } from "./components/Numbers";
import { Result } from "./components/Result";
import "./App.css";

const App = () => {
  const [data, setData] = useState("");

  return (
    <div className="calculator">
      <Result value={data}></Result>
      <Numbers
        onClickNum={(number) => {
          console.log(number);
          return setData(`${data}${number}`);
        }}
      ></Numbers>
      <Functions
        onContentClear={() => setData("")}
        onDelete={() => {
          if (data.length > 0) {
            const newData = data.substring(0, data.length - 1);
            setData(newData);
          }
        }}
      ></Functions>
      <MathOperations
        onClickOperation={(operation) => setData(`${data}${operation}`)}
        onClickEqual={() => setData(eval(data).toString())}
      ></MathOperations>
    </div>
  );
};

export { App };

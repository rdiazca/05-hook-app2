import React, { useCallback } from "react";
import { useState } from "react";
import { ShowIncrement } from "./ShowIncrement";
import "../02-useEffect/effects.css";
import { useEffect } from "react";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  //   const increment = () => {
  //     setCounter(counter + 1);
  //   };

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  useEffect(() => {}, [increment]);
  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </>
  );
};

import React from "react";
import { useRef } from "react";
import "../02-useEffect/effects.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
  };
  return (
    <>
      <h1>FocusScreen</h1>
      <hr />
      <input className="form-control" placeholder="Nombre" ref={inputRef} />
      <button className="btn btn-outline-primary mt-3" onClick={handleClick}>
        Focus
      </button>
    </>
  );
};

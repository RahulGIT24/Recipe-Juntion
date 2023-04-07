import React from "react";
import err from "../Assets/cry.gif"

function NotFound() {
  return (
    <div className="err my-32 flex justify-center items-center flex-col">
      <h1 className="text-center text-white text-6xl">
        <b>Not Found!!!</b>
      </h1>
      <img src={err} alt="error" className="w-56 mt-16"/>
    </div>
  );
}

export default NotFound;

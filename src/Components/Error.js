import React from "react";
import err from "../Assets/cry.gif"
function Error() {
  return (
    <>
      <div className="err my-32 flex justify-center items-center flex-col">
        <h1 className="text-center text-white text-6xl"><b>Enable to fetch.<br className="mt-2"/>Connect to internet!!!!</b></h1>
        <img src={err} alt="error" className="w-56 mt-16"/>
      </div>
    </>
  );
}

export default Error;

import React from "react";

export default function TerrainType(props) {
  return (
    <div className=" w-48 lg:w-64 text-black flex font-rale items-center mx-auto px-0 py-0 mt-2 lg:px-2 lg:py-1 text-lg font-bold leading-none rounded opacity-80">
      <span className="bg-sky-700 rounded-lg py-1 lg:px-2 text-white font-sans font-extralight w-48 ">
        {props.type}
      </span>
      <img
        className="bg-white rounded-2xl ml-4"
        src="https://via.placeholder.com/32"
        alt=""
      />
    </div>
  );
}

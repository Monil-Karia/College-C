import React from "react";
import Navbar from "../Components/Navbar";

export default function Clubs() {
  return (
    <div className="p-4 bg-gray-800">
      <div className="flex flex-row gap-4">
        <Navbar />
        <div className="w-full flex flex-col">Clubs</div>
      </div>
    </div>
  );
}
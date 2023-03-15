import React from "react";
import "../components/style/middle.style.css";

const Middle = () => {
  return (
    <div className="container-fluid middle text-center">
      <div>
        <button className="btn btn-danger btn-sm mb-5">
          Alert!
        </button>
        <p className="text-white">
          From now on, sweet dreams are made of chili and sight-seeing in
          Cincinnati
        </p>
      </div>
    </div>
  );
};

export default Middle;

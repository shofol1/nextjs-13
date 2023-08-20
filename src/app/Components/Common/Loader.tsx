import { useState, CSSProperties } from "react";
import React from "react";
import { ScaleLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const LoaderComponent = ({ className }: { className: string }) => {
  let [color, setColor] = useState("#3d4041");
  return (
    <div className={` text-center  ${className}`}>
      <ScaleLoader
        color={color}
        loading={true}
        cssOverride={override}
        data-testid="loader"
      />
    </div>
  );
};

export default LoaderComponent;

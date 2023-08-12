import React, { useState } from "react";
import style from "./width.module.css";

const Width = ({
  handleLineChange,
  selectedLayer,
  activeProperty,
  width,
  setWidth,
}) => {
  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value);
    setWidth(newValue);

    handleLineChange(selectedLayer, "width", newValue);
  };

  const capitalizedActiveProperty =
    activeProperty.charAt(0).toUpperCase() + activeProperty.slice(1);
  return (
    <>
      <div className={style.heading}>{capitalizedActiveProperty}</div>

      <div className={style.container}>
        <input
          type="range"
          min={1}
          max={6}
          value={width}
          onChange={handleSliderChange}
          className={style.slider}
        />
        <p>Line width: {width}px</p>
      </div>
    </>
  );
};

export default Width;

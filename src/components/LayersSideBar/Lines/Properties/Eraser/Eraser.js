import React from "react";
import style from "./eraser.module.css";

const Eraser = ({
  handleLineChange,
  selectedLayer,
  activeProperty,
  eraser,
  setEraser,
}) => {
  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value);
    setEraser(newValue);

    handleLineChange(selectedLayer, "eraser", newValue);
  };

  const capitalizedActiveProperty =
    activeProperty.charAt(0).toUpperCase() + activeProperty.slice(1);
  return (
    <>
      <div className={style.heading}>{capitalizedActiveProperty}</div>

      <div className={style.container}>
        <input
          type="range"
          min={0}
          max={10}
          value={eraser}
          onChange={handleSliderChange}
          className={style.slider}
        />
        <p>Line length: {eraser}px</p>
      </div>
    </>
  );
};

export default Eraser;

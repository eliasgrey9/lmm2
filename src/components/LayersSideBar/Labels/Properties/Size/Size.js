import React from "react";
import style from "./size.module.css";

const Size = ({
  handleLabelChange,
  selectedLayer,
  activeProperty,
  size,
  setSize,
}) => {
  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value);
    setSize(newValue);

    handleLabelChange(selectedLayer, "size", newValue);
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
          max={22}
          value={size}
          onChange={handleSliderChange}
          className={style.slider}
        />
        <p>Font size: {size}px</p>
      </div>
    </>
  );
};

export default Size;

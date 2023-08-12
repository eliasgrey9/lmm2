import React from "react";
import { SketchPicker } from "react-color";
import style from "./color.module.css";

const Color = ({
  handleLineChange,
  selectedLayer,
  activeProperty,
  setColor,
  color,
}) => {
  const handleColorChange = (color) => {
    setColor(color.hex);
    handleLineChange(selectedLayer, "color", color.hex);
  };
  const capitalizedActiveProperty =
    activeProperty.charAt(0).toUpperCase() + activeProperty.slice(1);

  return (
    <>
      <div className={style.heading}>{capitalizedActiveProperty}</div>
      <div className={style.container}>
        <SketchPicker color={color} onChange={handleColorChange} />
      </div>
    </>
  );
};

export default Color;

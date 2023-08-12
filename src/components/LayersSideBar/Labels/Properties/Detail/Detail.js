import React from "react";
import style from "./detail.module.css";

const Detail = ({
  handleLabelChange,
  selectedLayer,
  activeProperty,
  detail,
  setDetail,
}) => {
  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value);
    setDetail(newValue);

    handleLabelChange(selectedLayer, "detail", newValue);
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
          value={detail}
          onChange={handleSliderChange}
          className={style.slider}
        />
        <p>Zoom level: {detail}</p>
      </div>
    </>
  );
};

export default Detail;

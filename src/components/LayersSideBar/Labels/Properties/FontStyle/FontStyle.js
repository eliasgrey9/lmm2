import React, { useState } from "react";
import style from "./fontStyle.module.css";

const FontStyle = ({
  handleLabelChange,
  selectedLayer,
  activeProperty,
  fontStyle,
  setFontStyle,
}) => {
  const [styles, setStyles] = useState([]);

  const handleStyleChange = (style) => {
    let updatedStyles;

    if (fontStyle.includes(style)) {
      // Remove style if already selected
      updatedStyles = fontStyle.filter((s) => s !== style);
    } else {
      // Add style if not selected
      updatedStyles = [...fontStyle, style];
    }

    setFontStyle(updatedStyles);

    handleLabelChange(selectedLayer, "style", updatedStyles);
  };
  const capitalizedActiveProperty =
    activeProperty.charAt(0).toUpperCase() + activeProperty.slice(1);

  return (
    <>
      <div className={style.heading}>{capitalizedActiveProperty}</div>

      <div className={style.body}>
        <div className={style.checkboxAndLabel}>
          <div className={style.boldIcon}>B</div>
          <input
            type="checkbox"
            checked={fontStyle.includes("bold")}
            onChange={() => handleStyleChange("bold")}
          />
        </div>
        <div className={style.checkboxAndLabel}>
          <div className={style.underlineIcon}>U</div>
          <input
            type="checkbox"
            checked={fontStyle.includes("underline")}
            onChange={() => handleStyleChange("underline")}
          />
        </div>
        <div className={style.checkboxAndLabel}>
          <div className={style.italicIcon}>I</div>
          <input
            type="checkbox"
            checked={fontStyle.includes("italic")}
            onChange={() => handleStyleChange("italic")}
          />
        </div>
      </div>
    </>
  );
};

export default FontStyle;

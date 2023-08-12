import React, { useState, useEffect } from "react";
import ReactGFL from "react-gfl";
import style from "./font.module.css"; // Import the CSS module

const fonts = [
  {
    name: "Roboto",
  },
  {
    name: "Bitter",
  },
  {
    name: "Dancing Script",
  },
  {
    name: "Abel",
  },
  {
    name: "Lobster",
  },
  {
    name: "Pacifico",
  },
];

const Font = ({
  activeProperty,
  handleLabelChange,
  selectedLayer,
  font,
  setFont,
}) => {
  useEffect(() => {
    setSelectedFont(font); // Set selected font from prop when component mounts
  }, [font]);

  const [selectedFont, setSelectedFont] = useState(null);

  const handleFontChange = (fontName) => {
    setSelectedFont(fontName); // Update selectedFont state when font is clicked
    setFont(fontName);
    handleLabelChange(selectedLayer, "font", fontName);
  };

  const capitalizedActiveProperty =
    activeProperty.charAt(0).toUpperCase() + activeProperty.slice(1);
  return (
    <>
      <ReactGFL
        fonts={fonts.map((font) => ({
          font: font.name,
        }))}
      />
      <div className={style.heading}>{capitalizedActiveProperty}</div>

      <div className={style.body}>
        {fonts.map((font, index) => (
          <div
            key={index}
            className={`${style.listItem} ${
              selectedFont === font.name ? style.selectedListItem : ""
            }`}
            style={{
              fontFamily: font.name,
            }}
            onClick={() => handleFontChange(font.name)}
          >
            {font.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Font;

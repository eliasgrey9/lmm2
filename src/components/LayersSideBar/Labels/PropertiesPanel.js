import React, { useEffect, useState } from "react";
import Color from "./Properties/Color/Color";
import Detail from "./Properties/Detail/Detail";
import Font from "./Properties/Font/Font";
import FontStyle from "./Properties/FontStyle/FontStyle";
import Size from "./Properties/Size/Size";
import style from "./propertiesPanel.module.css";
const LabelPropertiesPanel = ({
  selectedLayer,
  closeModifyLayerContainer,
  handleLabelChange,
  labelStateArr,
}) => {
  //The state, variables, functions and boolean to switch between properties in a layer (Color, Font, Size, Style, Detail)
  const COLOR_PROP = "color";
  const FONT_PROP = "font";
  const SIZE_PROP = "size";
  const STYLE_PROP = "style";
  const DETAIL_PROP = "detail";

  const [activeProperty, setActiveProperty] = useState(COLOR_PROP);

  const changeToColorProp = () => setActiveProperty(COLOR_PROP);
  const changeToDetailProp = () => setActiveProperty(DETAIL_PROP);
  const changeToFontProp = () => setActiveProperty(FONT_PROP);
  const changeToSizeProp = () => setActiveProperty(SIZE_PROP);
  const changeToStyleProp = () => setActiveProperty(STYLE_PROP);
  const isColorPropActive = activeProperty === COLOR_PROP;
  const isDetailPropActive = activeProperty === DETAIL_PROP;
  const IsFontPropActive = activeProperty === FONT_PROP;
  const isSizePropActive = activeProperty === SIZE_PROP;
  const isStylePropActive = activeProperty === STYLE_PROP;

  //Capitalizing the selected layer for render purposes
  const capitalizedSelectedLayer =
    selectedLayer.charAt(0).toUpperCase() + selectedLayer.slice(1);

  //The values of the properties for render purposes
  const [color, setColor] = useState("");
  const [detail, setDetail] = useState(1);
  const [font, setFont] = useState("");
  const [fontStyle, setFontStyle] = useState("");
  const [size, setSize] = useState(0);

  //This useEffect ensures the current values of the properties match the layer selected
  useEffect(() => {
    const showLayerProperties = () => {
      labelStateArr.map((layer) => {
        if (selectedLayer === layer.state.name) {
          setColor(layer.state.color);
          setFont(layer.state.font);
          setDetail(layer.state.detail);
          setSize(layer.state.size);
          setFontStyle(layer.state.style);
        }
      });
    };

    showLayerProperties();
  }, [selectedLayer, handleLabelChange]);

  return (
    <div className={style.body}>
      <div className={style.layerHeading}>
        <div>{capitalizedSelectedLayer}</div>
        <div
          className={style.closeContainer}
          onClick={closeModifyLayerContainer}
        >
          X
        </div>
      </div>
      <div className={style.leftAndRightSections}>
        <div className={style.propertyOptions}>
          <div
            className={
              isColorPropActive ? style.selectedProperty : style.propertyOption
            }
            onClick={() => changeToColorProp()}
          >
            <div className={style.propertyTitle}>Color</div>
            <div className={style.colorIcon}>
              <div
                style={{
                  //styles inline for ease of dynamic background color
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  border: "1px solid lightgray",
                  backgroundColor: color,
                }}
              ></div>
            </div>
          </div>
          <div
            className={
              isDetailPropActive ? style.selectedProperty : style.propertyOption
            }
            onClick={() => changeToDetailProp()}
          >
            <div className={style.propertyTitle}>Detail</div>
            <div>{detail}</div>
          </div>
          <div
            className={
              IsFontPropActive ? style.selectedProperty : style.propertyOption
            }
            onClick={() => changeToFontProp()}
          >
            <div className={style.propertyTitle}>Font</div>
            <div
              style={{
                fontFamily: font,
              }}
            >
              {font}
            </div>
          </div>
          <div
            className={
              isSizePropActive ? style.selectedProperty : style.propertyOption
            }
            onClick={() => changeToSizeProp()}
          >
            <div className={style.propertyTitle}>Size</div>
            <div>{size}px</div>
          </div>
          <div
            className={
              isStylePropActive ? style.selectedProperty : style.propertyOption
            }
            onClick={() => changeToStyleProp()}
          >
            <div className={style.propertyTitle}>Style</div>
            <div className={style.styleIconRow}>
              <div className={style.boldIcon}>B</div>
              <div className={style.underlineIcon}>U</div>
              <div className={style.italicIcon}>I</div>
            </div>
          </div>
        </div>
        <div className={style.rightSection}>
          {isColorPropActive ? (
            <div className={style.colorPicker}>
              <Color
                setColor={setColor}
                color={color}
                activeProperty={activeProperty}
                handleLabelChange={handleLabelChange}
                selectedLayer={selectedLayer}
              />
            </div>
          ) : null}
          {isDetailPropActive ? (
            <div>
              <Detail
                handleLabelChange={handleLabelChange}
                selectedLayer={selectedLayer}
                activeProperty={activeProperty}
                detail={detail}
                setDetail={setDetail}
              />
            </div>
          ) : null}
          {IsFontPropActive ? (
            <div>
              <Font
                handleLabelChange={handleLabelChange}
                selectedLayer={selectedLayer}
                activeProperty={activeProperty}
                font={font}
                setFont={setFont}
              />
            </div>
          ) : null}
          {isSizePropActive ? (
            <div>
              <Size
                handleLabelChange={handleLabelChange}
                selectedLayer={selectedLayer}
                activeProperty={activeProperty}
                size={size}
                setSize={setSize}
              />
            </div>
          ) : null}
          {isStylePropActive ? (
            <div>
              <FontStyle
                labelStateArr={labelStateArr}
                handleLabelChange={handleLabelChange}
                selectedLayer={selectedLayer}
                activeProperty={activeProperty}
                fontStyle={fontStyle}
                setFontStyle={setFontStyle}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LabelPropertiesPanel;

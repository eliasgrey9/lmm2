import React, { useEffect, useState } from "react";
import style from "./propertiesPanel.module.css";
import Color from "./Properties/Color/Color";
import Detail from "./Properties/Detail/Detail";
import Eraser from "./Properties/Eraser/Eraser";
import Width from "./Properties/Width/Width";

const LinePropertiesPanel = ({
  selectedLayer,
  closeModifyLayerContainer,
  handleLineChange,
  lineStateArr,
}) => {
  //The state, variables, functions and boolean to switch between properties in a layer (Color, Detail, Eraser, Width)
  const COLOR_PROP = "color";
  const DETAIL_PROP = "detail";
  const ERASER_PROP = "eraser";
  const WIDTH_PROP = "width";

  const [activeProperty, setActiveProperty] = useState(COLOR_PROP);

  const changeToColorProp = () => setActiveProperty(COLOR_PROP);
  const changeToDetailProp = () => setActiveProperty(DETAIL_PROP);
  const changeToEraserProp = () => setActiveProperty(ERASER_PROP);
  const changeToWidthProp = () => setActiveProperty(WIDTH_PROP);
  const isColorPropActive = activeProperty === COLOR_PROP;
  const isDetailPropActive = activeProperty === DETAIL_PROP;
  const isEraserPropActive = activeProperty === ERASER_PROP;
  const isWidthPropActive = activeProperty === WIDTH_PROP;

  //Capitalizing the selected layer for render purposes
  const capitalizedSelectedLayer =
    selectedLayer.charAt(0).toUpperCase() + selectedLayer.slice(1);

  //The values of the properties for render purposes
  const [color, setColor] = useState("");
  const [detail, setDetail] = useState(1);
  const [eraser, setEraser] = useState(0);
  const [width, setWidth] = useState(1);

  //This useEffect ensures the current values of the properties match the layer selected
  useEffect(() => {
    const showLayerProperties = () => {
      lineStateArr.map((layer) => {
        if (selectedLayer === layer.state.name) {
          setColor(layer.state.color);
          setDetail(layer.state.detail);
          setEraser(layer.state.eraser);
          setWidth(layer.state.width);
        }
      });
    };

    showLayerProperties();
  }, [selectedLayer, handleLineChange]);

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
              isEraserPropActive ? style.selectedProperty : style.propertyOption
            }
            onClick={() => changeToEraserProp()}
          >
            <div className={style.propertyTitle}>Eraser</div>
            <div>{eraser}</div>
          </div>
          <div
            className={
              isWidthPropActive ? style.selectedProperty : style.propertyOption
            }
            onClick={() => changeToWidthProp()}
          >
            <div className={style.propertyTitle}>Width</div>
            <div>{width}</div>
          </div>
        </div>
        <div className={style.rightSection}>
          {isColorPropActive ? (
            <div className={style.colorPicker}>
              <Color
                setColor={setColor}
                color={color}
                activeProperty={activeProperty}
                handleLineChange={handleLineChange}
                selectedLayer={selectedLayer}
              />
            </div>
          ) : null}
          {isDetailPropActive ? (
            <div>
              <Detail
                handleLineChange={handleLineChange}
                selectedLayer={selectedLayer}
                activeProperty={activeProperty}
                detail={detail}
                setDetail={setDetail}
              />
            </div>
          ) : null}
          {isEraserPropActive ? (
            <div>
              <Eraser
                handleLineChange={handleLineChange}
                selectedLayer={selectedLayer}
                activeProperty={activeProperty}
                eraser={eraser}
                setEraser={setEraser}
              />
            </div>
          ) : null}
          {isWidthPropActive ? (
            <div>
              <Width
                handleLineChange={handleLineChange}
                selectedLayer={selectedLayer}
                activeProperty={activeProperty}
                width={width}
                setWidth={setWidth}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LinePropertiesPanel;

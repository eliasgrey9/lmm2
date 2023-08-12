import React, { useState } from "react";
import style from "./layersSideBar.module.css";
import LinePropertiesPanel from "./Lines/PropertiesPanel";
import LabelPropertiesPanel from "./Labels/PropertiesPanel";

const LayersSideBar = ({
  handleLineChange,
  handleLabelChange,
  lineStateArr,
  labelStateArr,
}) => {
  //The state, variables, functions and boolean to switch between tabs
  const LINES_TAB = "LINES_TAB";
  const LABELS_TAB = "LABELS_TAB";
  const [layersTab, setLayersTab] = useState(LINES_TAB);
  const changeToLinesTab = () => setLayersTab(LINES_TAB);
  const changeToLabelsTab = () => setLayersTab(LABELS_TAB);
  const isLinesTabActive = layersTab === LINES_TAB;
  const isLabelsTabActive = layersTab === LABELS_TAB;

  //Open, close and change the layer within the modifcation container
  const [showModifyLayerContainer, setShowModifyLayerContainer] =
    useState(false);

  const [selectedLayer, setSelectedLayer] = useState("roads");

  const showLayer = (layer) => {
    setShowModifyLayerContainer(true);
    setSelectedLayer(layer);
  };
  const closeModifyLayerContainer = () => {
    setShowModifyLayerContainer(false);
  };

  return (
    <>
      <div className={style.body}>
        <div className={style.tabs}>
          <div
            className={isLinesTabActive ? style.activeTab : style.tab}
            onClick={changeToLinesTab}
          >
            Lines
          </div>
          <div
            className={isLabelsTabActive ? style.activeTab : style.tab}
            onClick={changeToLabelsTab}
          >
            Labels
          </div>
        </div>

        {isLinesTabActive ? (
          <>
            <div className={style.layersContainer}>
              <div
                className={
                  selectedLayer === "roads" ? style.selectedLayer : style.layer
                }
              >
                <div className={style.layerTitle}>Roads</div>
                <div
                  className={style.layerIcons}
                  onClick={() => showLayer("roads")}
                >
                  Layer Icons
                </div>
              </div>
              <div
                className={
                  selectedLayer === "traffic"
                    ? style.selectedLayer
                    : style.layer
                }
              >
                <div className={style.layerTitle}>Traffic</div>
                <div
                  className={style.layerIcons}
                  onClick={() => showLayer("traffic")}
                >
                  Layer Icons
                </div>
              </div>
              <div
                className={
                  selectedLayer === "ocean bathymetry"
                    ? style.selectedLayer
                    : style.layer
                }
              >
                <div className={style.layerTitle}>Ocean Bathymetry</div>
                <div
                  className={style.layerIcons}
                  onClick={() => showLayer("ocean bathymetry")}
                >
                  Layer Icons
                </div>
              </div>
              <div
                className={
                  selectedLayer === "water" ? style.selectedLayer : style.layer
                }
              >
                <div className={style.layerTitle}>Water</div>
                <div
                  className={style.layerIcons}
                  onClick={() => showLayer("water")}
                >
                  Layer Icons
                </div>
              </div>
              <div
                className={
                  selectedLayer === "waterway"
                    ? style.selectedLayer
                    : style.layer
                }
              >
                <div className={style.layerTitle}>Waterway</div>
                <div
                  className={style.layerIcons}
                  onClick={() => showLayer("waterway")}
                >
                  Layer Icons
                </div>
              </div>
              <div
                className={
                  selectedLayer === "country border"
                    ? style.selectedLayer
                    : style.layer
                }
              >
                <div className={style.layerTitle}>Country Border</div>
                <div
                  className={style.layerIcons}
                  onClick={() => showLayer("country border")}
                >
                  Layer Icons
                </div>
              </div>
              <div
                className={
                  selectedLayer === "terrain contour"
                    ? style.selectedLayer
                    : style.layer
                }
              >
                <div className={style.layerTitle}>Terrain Contour</div>
                <div
                  className={style.layerIcons}
                  onClick={() => showLayer("terrain contour")}
                >
                  Layer Icons
                </div>
              </div>
              <div
                className={
                  selectedLayer === "terrain hillshade"
                    ? style.selectedLayer
                    : style.layer
                }
              >
                <div className={style.layerTitle}>Terrain Hillshade</div>
                <div
                  className={style.layerIcons}
                  onClick={() => showLayer("terrain hillshade")}
                >
                  Layer Icons
                </div>
              </div>
              <div
                className={
                  selectedLayer === "land cover"
                    ? style.selectedLayer
                    : style.layer
                }
              >
                <div className={style.layerTitle}>Land Cover</div>
                <div
                  className={style.layerIcons}
                  onClick={() => showLayer("land cover")}
                >
                  Layer Icons
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className={style.layersContainer}>
            <div
              className={
                selectedLayer === "roads" ? style.selectedLayer : style.layer
              }
            >
              <div className={style.layerTitle}>Roads</div>
              <div
                className={style.layerIcons}
                onClick={() => showLayer("roads")}
              >
                Layer Icons
              </div>
            </div>
            <div
              className={
                selectedLayer === "places" ? style.selectedLayer : style.layer
              }
            >
              <div className={style.layerTitle}>Places</div>
              <div
                className={style.layerIcons}
                onClick={() => showLayer("places")}
              >
                Layer Icons
              </div>
            </div>
            <div
              className={
                selectedLayer === "natural" ? style.selectedLayer : style.layer
              }
            >
              <div className={style.layerTitle}>Natural</div>
              <div
                className={style.layerIcons}
                onClick={() => showLayer("natural")}
              >
                Layer Icons
              </div>
            </div>
            <div
              className={
                selectedLayer === "points of interest"
                  ? style.selectedLayer
                  : style.layer
              }
            >
              <div className={style.layerTitle}>Points of Interest</div>
              <div
                className={style.layerIcons}
                onClick={() => showLayer("points of interest")}
              >
                Layer Icons
              </div>
            </div>
          </div>
        )}
      </div>
      {showModifyLayerContainer ? (
        layersTab === LINES_TAB ? (
          <LinePropertiesPanel
            lineStateArr={lineStateArr}
            handleLineChange={handleLineChange}
            closeModifyLayerContainer={closeModifyLayerContainer}
            selectedLayer={selectedLayer}
          />
        ) : (
          <LabelPropertiesPanel
            labelStateArr={labelStateArr}
            handleLabelChange={handleLabelChange}
            closeModifyLayerContainer={closeModifyLayerContainer}
            selectedLayer={selectedLayer}
          />
        )
      ) : null}
    </>
  );
};

export default LayersSideBar;

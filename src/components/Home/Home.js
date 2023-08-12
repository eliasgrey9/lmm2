import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import LayersSideBar from "../LayersSideBar/LayersSideBar";
import Map from "../Map/Map";
import style from "./home.module.css";
import Toolbar from "../Toolbar/Toolbar";

const Home = () => {
  //Label Layer states
  const [roadLabelLayer, setRoadLabelLayer] = useState({
    name: "roads",
    color: "#23dd3d",
    detail: 0,
    font: "Roboto",
    size: 0,
    style: [],
  });
  const [placeLabelLayer, setPlaceLabelLayer] = useState({
    name: "places",
    color: "#23eeed",
    detail: 0,
    font: "Roboto",
    size: 0,
    style: "",
  });
  const [naturalLabelLayer, setNaturalLabelLayer] = useState({
    name: "natural",
    color: "#003d9d",
    detail: 0,
    font: "Roboto",
    size: 0,
    style: [],
  });
  const [pointsOfInterestLabelLayer, setPointsOfInterestLabelLayer] = useState({
    name: "points of interest",
    color: "#00000d",
    detail: 0,
    font: "Roboto",
    size: 0,
    style: [],
  });

  //Line Layer states
  const [roadLineLayer, setRoadLineLayer] = useState({
    name: "roads",
    color: "#023fec",
    detail: 0,
    eraser: 12,
    width: 12,
  });
  const [trafficLineLayer, setTrafficLineLayer] = useState({
    name: "traffic",
    color: "#a23fac",
    detail: 0,
    eraser: 12,
    width: 12,
  });
  const [oceanBathymetryLineLayer, setOceanBathymetryLineLayer] = useState({
    name: "ocean bathymetry",
    color: "#f32e99",
    detail: 0,
    eraser: 12,
    width: 12,
  });
  const [waterLineLayer, setWaterLineLayer] = useState({
    name: "water",
    color: "#000000",
    detail: 0,
    eraser: 12,
    width: 12,
  });
  const [waterwayLineLayer, setWaterwayLineLayer] = useState({
    name: "waterway",
    color: "#000000",
    detail: 0,
    eraser: 12,
    width: 12,
  });
  const [countryBorderLineLayer, setCountryBorderLineLayer] = useState({
    name: "country border",
    color: "#000000",
    detail: 0,
    eraser: 12,
    width: 12,
  });
  const [terrainContourLineLayer, setTerrainContourLineLayer] = useState({
    name: "terrain contour",
    color: "#000000",
    detail: 0,
    eraser: 12,
    width: 12,
  });
  const [terrainHillshadeLineLayer, setTerrainHillshadeLineLayer] = useState({
    name: "terrain hillshade",
    color: "#000000",
    detail: 0,
    eraser: 12,
    width: 12,
  });
  const [landCoverLineLayer, setLandCoverLineLayer] = useState({
    name: "land cover",
    color: "#000000",
    detail: 0,
    eraser: 12,
    width: 12,
  });

  // Line layer state object for passing props
  const lineStateArr = [
    { state: roadLineLayer, setState: setRoadLineLayer },
    { state: trafficLineLayer, setState: setTrafficLineLayer },
    { state: oceanBathymetryLineLayer, setState: setOceanBathymetryLineLayer },
    { state: waterLineLayer, setState: setWaterLineLayer },
    { state: waterwayLineLayer, setState: setWaterwayLineLayer },
    { state: countryBorderLineLayer, setState: setCountryBorderLineLayer },
    { state: terrainContourLineLayer, setState: setTerrainContourLineLayer },
    {
      state: terrainHillshadeLineLayer,
      setState: setTerrainHillshadeLineLayer,
    },
    { state: landCoverLineLayer, setState: setLandCoverLineLayer },
  ];

  // Label layer state object for passing props
  const labelStateArr = [
    { state: roadLabelLayer, setState: setRoadLabelLayer },
    { state: placeLabelLayer, setState: setPlaceLabelLayer },
    { state: naturalLabelLayer, setState: setNaturalLabelLayer },
    {
      state: pointsOfInterestLabelLayer,
      setState: setPointsOfInterestLabelLayer,
    },
  ];
  //Changes the line layer state dynamically
  const handleLineChange = (selectedLayer, activeProperty, value) => {
    const layerMatch = lineStateArr.find(
      (layer) => layer.state.name === selectedLayer
    );

    if (layerMatch) {
      layerMatch.setState((prevState) => ({
        ...prevState,
        [activeProperty]: value,
      }));
    }
  };

  //Changes the label layer state dynamically
  const handleLabelChange = (selectedLayer, activeProperty, value) => {
    const layerMatch = labelStateArr.find(
      (layer) => layer.state.name === selectedLayer
    );

    if (layerMatch) {
      layerMatch.setState((prevState) => ({
        ...prevState,
        [activeProperty]: value,
      }));
    }
  };
  return (
    <>
      <Navbar />
      <div className={style.body}>
        <LayersSideBar
          handleLabelChange={handleLabelChange}
          handleLineChange={handleLineChange}
          lineStateArr={lineStateArr}
          labelStateArr={labelStateArr}
        />
        <Map />
      </div>
    </>
  );
};

export default Home;

import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import style from "./map.module.css";
import Toolbar from "../Toolbar/Toolbar";

const Map = () => {
  const mapContainerRef = useRef(null); // Ref for the map container

  const accessToken =
    "pk.eyJ1IjoiZWxpYXNncmV5OSIsImEiOiJjbGZtdXd2NnAwZmdkM3VwaTZ0Zmw2OGNyIn0.TzeOb0_3JU7kl52wGIq37w";
  const mapStyle = "mapbox://styles/eliasgrey9/clfq4l248000w01pjoan6mqaj";

  const [currentZoom, setCurrentZoom] = useState(10);
  const [lockMap, setLockMap] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(2);

  useEffect(() => {
    // Set the Mapbox access token
    mapboxgl.accessToken = accessToken;

    // Create the map instance
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: mapStyle,
      center: [-122.4194, 37.7749], // San Francisco coordinates
      zoom: currentZoom,
    });

    // Add controls
    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      })
    );
    map.addControl(new mapboxgl.NavigationControl());

    //This saves the new map zoom. Allowing you to switch mapviews and zoom won't reset to default.
    map.on("zoom", async () => {
      const newZoom = map.getZoom();
      setCurrentZoom(newZoom.toFixed(2));
    });

    // Clean up the map instance when the component unmounts
    return () => {
      map.remove();
    };
  }, []);

  return (
    <>
      <div className={style.map} ref={mapContainerRef} />
      <div className={style.container}>
        <Toolbar
          currentZoom={currentZoom}
          lockMap={lockMap}
          setLockMap={setLockMap}
          aspectRatio={aspectRatio}
          setAspectRatio={setAspectRatio}
        />
      </div>
    </>
  );
};

export default Map;

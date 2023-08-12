import React from "react";
import style from "./toolbar.module.css";
import { PiArrowCounterClockwiseThin, PiExportBold } from "react-icons/pi";
import { BsLock, BsUnlock } from "react-icons/bs";
import { AiOutlineAim } from "react-icons/ai";

const Toolbar = ({
  currentZoom,
  lockMap,
  setLockMap,
  aspectRatio,
  setAspectRatio,
}) => {
  return (
    <div className={style.body}>
      <div className={style.zoomReading}>
        <div className={style.zoomIcon}>
          <AiOutlineAim />
        </div>
        <div>{currentZoom}</div>
      </div>
      <div className={style.iconContainer}>
        {lockMap ? (
          <div
            className={style.icon}
            onClick={() => {
              setLockMap(false);
            }}
          >
            <BsLock />
          </div>
        ) : (
          <div
            className={style.icon}
            onClick={() => {
              setLockMap(true);
            }}
          >
            <BsUnlock />
          </div>
        )}

        <div className={style.icon}>
          <PiExportBold />
        </div>
        <div
          onClick={() => {
            setAspectRatio(1);
          }}
          className={
            aspectRatio === 1
              ? style.aspectRatioIconSelected
              : style.aspectRatioIcon
          }
        >
          1:1
        </div>
        <div
          onClick={() => {
            setAspectRatio(2);
          }}
          className={
            aspectRatio === 2
              ? style.aspectRatioIconSelected
              : style.aspectRatioIcon
          }
        >
          2:1
        </div>
      </div>
    </div>
  );
};

export default Toolbar;

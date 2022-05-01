import React from "react";

import "./video.css";

import "react-awesome-slider/dist/styles.css";
import AwesomeSlider from "react-awesome-slider";

const Video = () => {
  return (
    <div className="video">
      <AwesomeSlider className="slider">
        <div className="darker">
          <div className="cover1 flex justify-center items-center text-5xl primary-color-text font-extrabold">
            <h1>Best bakery food chain provider in town</h1>
          </div>
        </div>
        <div className="cover2 flex justify-center items-center text-5xl primary-color-text font-extrabold">
          <h1>High quality products everyday</h1>
        </div>
        <div className="cover3 flex justify-center items-center text-5xl primary-color-text font-extrabold">
          <h1>Best in quality and price</h1>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Video;

import React from "react";

import "./video.css";

const Video = () => {
  return (
    <div className="cover1 flex  justify-evenly items-center primary-color-text ">
      <div className="transparent-grey p-10 flex items-center justify-center">
        <div className="box">
          <h1 className="font-normal primary-color-text text-6xl">
            Best bakery food chain provider in town
          </h1>
          <p className="my-5">
            We are manufacturer and supplier of bakeries items for 20 years in
            Dhaka City. We deliver the most quality full product around the city
            with very good price.
          </p>
          <button className="text-1xl btn1">Read more</button>
        </div>
      </div>
      <div className="w-full">
        {/* <h2>Get our news letter at every Sunday</h2>
                <form>
                    <input type="email" name="" id="" />
                </form> */}
      </div>
    </div>
  );
};

export default Video;

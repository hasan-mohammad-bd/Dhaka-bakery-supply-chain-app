import React from "react";
import "./About.css";

const About = () => {
  return (
    <div color="primary-color-bg">
      <div className="md:flex container mx-auto my-20">
        <div className="photo-cover"></div>
        <div className="text-area third-color-bg p-5 flex justify-center items-center">
          <div className="w-3/4">
            <h1 className="font-normal primary-color-text text-4xl md:text-6xl">
              About Us ..
            </h1>
            <p className="primary-color-text para my-5">
              We are bakery product manufacturer and supplier established from
              2022. we are supplier very necessary products all over the town in
              very low price comparing with others. We based in Dhaka City and
              also supplying Narayangange city. You can check our product. To
              know us more, please click on read more button.
            </p>
            <button className="btn2">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

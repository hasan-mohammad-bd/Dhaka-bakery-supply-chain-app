import React from "react";
import About from "../About/About";
import ManageInvHome from "../ManageInventoryHome/ManageInvHome";
import Offer from "../Offer/Offer";
import Video from "../Video/video";

const Home = () => {
  return (
    <div>
      <Video></Video>
      <About></About>
      <ManageInvHome></ManageInvHome>
      <Offer></Offer>

    </div>
  );
};

export default Home;

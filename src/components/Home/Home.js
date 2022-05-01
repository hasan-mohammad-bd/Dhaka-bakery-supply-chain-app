import React from "react";
import { motion } from "framer-motion";
import Video from "../Video/video";
import Social from "../Social/Social";

const Home = () => {
  return (

    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
              <Social></Social>
      <Video></Video>
    </motion.div>
  );
};

export default Home;

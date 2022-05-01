import React from 'react';
import {motion} from 'framer-motion';
import Video from '../Video/video';

const Home = () => {
    return (
        <motion.div intial={{width: 0}} animate={{width:"100%"}} exit={{x: window.innerWidth}}>
        <Video></Video>

        </motion.div>
    );
};

export default Home;
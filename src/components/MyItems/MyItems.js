import React from 'react';
import { motion } from 'framer-motion';
import Video from '../Video/video';

const MyItems = () => {
    return (
        <motion.div intial={{width: 0}} animate={{width:"100%"}} exit={{x: window.innerWidth}}>

        </motion.div>
    );
};

export default MyItems;
import React from 'react';
import { motion } from 'framer-motion';

const MyItems = () => {
    return (
        <motion.div intial={{width: 0}} animate={{width:"100%"}} exit={{x: window.innerWidth}}>
            <h2>this is my items</h2>
        </motion.div>
    );
};

export default MyItems;
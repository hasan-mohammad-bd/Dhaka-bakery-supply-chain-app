import React from 'react';
import { motion } from 'framer-motion';

const AddItems = () => {
    return (
        <motion.div intial={{width: 0}} animate={{width:"100%"}} exit={{x: window.innerWidth}}>
            <h2>This is add items section</h2>
        </motion.div>
    );
};

export default AddItems;
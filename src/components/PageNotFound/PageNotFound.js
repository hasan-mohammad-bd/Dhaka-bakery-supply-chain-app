import React from 'react';
import { motion } from 'framer-motion';

const PageNotFound = () => {
    return (
        <motion.div intial={{width: 0}} animate={{width:"100%"}} exit={{x: window.innerWidth}}>
            <h2>This is no page found section</h2>

        </motion.div>
    );
};

export default PageNotFound;
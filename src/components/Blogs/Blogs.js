import { motion } from 'framer-motion';
import React from 'react';


const Blogs = () => {
    return (
        <motion.div intial={{width: 0}} animate={{width:"100%"}} exit={{x: window.innerWidth}}>
            <h2>This is blog section</h2>
        </motion.div>
    );
};

export default Blogs;
import React from 'react';
import { motion } from 'framer-motion';

const Register = () => {
    return (
        <motion.div intial={{width: 0}} animate={{width:"100%"}} exit={{x: window.innerWidth}}>
            <h2>this is login page</h2>
        </motion.div>
    );
};

export default Register;
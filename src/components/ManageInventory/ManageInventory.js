import React from 'react';
import './ManageInventory.css'
import { motion } from 'framer-motion';

const ManageInventory = () => {
    return (
        <motion.div intial={{width: 0}} animate={{width:"100%"}} exit={{x: window.innerWidth}}>
            <h2>This is manage Inventory</h2>
        </motion.div>
    );
};

export default ManageInventory;
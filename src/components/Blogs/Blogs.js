import { motion } from 'framer-motion';
import React from 'react';



const Blogs = () => {
    return (
        <div className='container mx-auto mt-20'>
            <h2 className='text-3xl my-3'>Difference between javascript and node.js</h2>
            <p>Answer: JavaScrip is a programming language that runs in browser in js engine. for  node js, node js is an interpreter or can be called running environment for a java script language.
                JavaScrip is mostly used in client side activities where node js allows run javascript in backend server.
                js run in mainly engine like v6, spider monkey where node js only support v8 
                 js is mainly used in building interface. with node js, server side is maintained   </p>
                 <h2 className='text-3xl my-3'>when should you use node.js and when should you use mongodb?</h2>
                <p>Answer: Node.js usage: we should use node.js when its a single page application for low user. or when it need to fister application to run. node.js is appropriate for small enterpriser type business. node js is very fast for its single thread capacity. node.js is very useful when developer only know javascript. its very for fontend dev to use node.js to build back end server 
                    <br />
                    MongoDB usage: mongodb is used for making nonsql data base. when it need to host nosql data. mongodb id perfact. because it is free, any newby can use this database very easilty. mongodb is very fast. because is its speed, it is very easy to keep data
                </p>
                <h2 className='text-3xl my-3'>differences between sql and nosql database.</h2>
                <p>Answer: NoSql database are non-relational. but Sql database is relational.
                    Sql data base is structured but NoSql databases have dynamic schemas for unstructured data.
                    sql databases are scalable, while nosql are scalable horizontally. sql database maintain table. while noSql database are graph, document, key-value, or wide-column stores.
                    sql database sometimes better for multi-row. while noSql can understand better data like json


                </p>
                
        </div>
    );
};

export default Blogs;

import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'; 
import logo from '../assets/images.jpg'
function NavBar(props) {
    return (
        <motion.div className='h-[80px] drop-shadow-2xl bg-[#c2dcfb] flex justify-around items-center font-sans font-semibold rounded-full mx-2 '
        initial={{y:-30, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{ duration:0.5, delay:1 }}
        >
            <div className="logo">
               <img  src={logo} alt="" className='h-[60px] w-[70px] rounded-lg' />
            </div>

            <nav>
                <ul className='flex justify-around items-center space-x-[15px] font-sans font-bold text-zinc-800'>
                    <li className='hover:bg-black hover:text-white px-4 py-1 rounded-lg'>
                        <Link to="/">Home</Link>
                    </li>

                    <li className='hover:bg-black hover:text-white px-4 py-1 rounded-lg'>
                        <Link to="/about">About</Link>
                    </li>

                    <li className='hover:bg-black hover:text-white px-4 py-1 rounded-lg'>
                        <Link to="/services">Services</Link>
                    </li>

                    {/* <li className='hover:bg-black hover:text-white px-4 py-1 rounded-lg'>
                        <Link to="/contact">Contact</Link>
                    </li> */}

                    <li className='hover:bg-black hover:text-white px-4 py-1 rounded-lg'>
                        <Link to="/news">News</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <input type="search" placeholder='Search' className='p-2 px-2 rounded-3xl'/>
            </div>

            <div className="btn ml-5">
                <button className='px-3 py-2 bg-blue-600 text-white rounded-3xl w-[100px]'>SIGN UP</button>
            </div>
        </motion.div>
    );
}

export default NavBar;

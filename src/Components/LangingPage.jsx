import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from '../varient';
import Services from './Services';
import About from './About';
import HospitalList from './HospitalList';
import Footer from './Footer';
function LangingPage(props) {



    return (
        <>
        <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-[20px] flex justify-between h-[560px]'>

            <motion.div className='lg" h-[386px]'
            initial={{x:-600,opacity:0.5}}
            animate={{x:0 ,opacity:1}}
            transition={{
                delay:1,duration:0.5
            }}>
                <div className="content w-[500px] ml-6 flex flex-col mt-8 space-y-[50px]">
                    <h1 className='font-bold text-4xl mt-4'>
                    Connect with your healthcare provider and secure your appointment.
                    </h1>
                    <p className='text-inherit'>Engage with expert doctors online for rapid advice, prescription management, and refills, revolutionizing your healthcare experience.</p>
                    <div className='flex justify-center items-center'>
                        <button className='px-4 py-2 bg-blue-600 rounded-lg text-white w-[200px] '>Register Now</button>
                    </div>

                </div>
            </motion.div>
            <motion.div className='drop-shadow-2xl'
             initial={{x:700,opacity:0.5}}
             animate={{x:0 ,opacity:1}}
             transition={{
                 delay:1,
                 duration:0.5
             }}
           
             >
                <img src="https://i.pinimg.com/564x/0d/b5/61/0db561697eabc8be9a7c6ad46c7ae3c5.jpg" alt="" className='lg: h-[426px] rounded-br-[100px] rounded-tl-[100px] rounded-tr-lg rounded-bl-lg' />
            </motion.div>
        </div>
        <Services></Services>
        <HospitalList></HospitalList>
        <About></About>
         <Footer />
        </>
    );
}

export default LangingPage;
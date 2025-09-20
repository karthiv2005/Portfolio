import React, { useState } from 'react'
import images from '../assets/images'
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'
import { IoMdClose } from "react-icons/io";

const Contact = () => {
    return (
        <div className='md:min-h-screen relative z-20 w-screen bg-gray-50 pb-32 md:pb-0 flex flex-col items-center '>
            <div className='w-full '>
                <img src={images.Car} alt="Car" className='md:w-2/6  h-auto ' />
            </div>
            <h1 className='text-4xl md:text-6xl font-extrabold text-dark mb-6 md:mb-8 text-center'>Contact Me</h1>
            <p className='text-gray-700 text-base md:text-lg mb-8 md:mb-12 text-center max-w-xl md:max-w-2xl'>
                I’m always open to discussing new projects, opportunities, or collaborations.
                Feel free to reach out through any of the platforms below!
            </p>

            <div className='flex flex-wrap justify-center gap-6 md:gap-8'>
                {/* Email */}
                <a href="mailto:vkarthi598@gmail.com" className='flex flex-col items-center text-dark hover:text-gray-700 transition-colors duration-300'>
                    <FaEnvelope size={30} className=' md:size-16' />
                    <span className='mt-2 text-base md:text-lg hidden md:block'>Email</span>
                </a>

                {/* Phone */}
                <a href="tel:+7418239763" className='flex flex-col items-center text-dark hover:text-gray-700 transition-colors duration-300'>
                    <FaPhone size={30} className=' md:size-16' />
                    <span className='mt-2 text-base md:text-lg hidden md:block'>Call</span>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/karthi-v-881899379/" target="_blank" rel="noopener noreferrer"
                    className='flex flex-col items-center text-dark hover:text-gray-700 transition-colors duration-300'>
                    <FaLinkedin size={30} className=' md:size-16' />
                    <span className='mt-2 text-base md:text-lg hidden md:block'>LinkedIn</span>
                </a>

                {/* GitHub */}
                <a href="https://github.com/karthicb22s614595" target="_blank" rel="noopener noreferrer"
                    className='flex flex-col items-center text-dark hover:text-gray-700 transition-colors duration-300'>
                    <FaGithub size={30} className=' md:size-16' />
                    <span className='mt-2 text-base md:text-lg hidden md:block'>GitHub</span>
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/mrr_kd_karthi/" target="_blank" rel="noopener noreferrer"
                    className='flex flex-col items-center text-dark hover:text-gray-700 transition-colors duration-300'>
                    <FaInstagram size={30} className=' md:size-16' />
                    <span className='mt-2 text-base md:text-lg hidden md:block'>Instagram</span>
                </a>
            </div>
        </div>
    )
}

const Home = () => {

    const [ fullImage, setFullImage ] = useState(false)

    function toggleImage() {
        setFullImage(!fullImage)
    }

    return (
        <div className='overflow-x-hidden relative'>
            {
                fullImage &&
                <div onClick={toggleImage} className='fixed h-screen w-screen bg-black/60 z-50 flex justify-center items-center'>
                    <button onClick={toggleImage} className='absolute top-4 right-6 text-black p-2 rounded-full cursor-pointer text-4xl bg-white'><IoMdClose /></button>
                    <img src={images.Full} className='h-screen  md:h-[90vh] object-cover md:rounded-3xl relative z-50' alt="" srcset="" />
                </div>
            }
            {/* Navbar */}
            <div className='flex fixed z-10 top-0 w-full backdrop-blur-sm justify-between px-4 md:px-12 py-4 md:py-6 items-center text-base md:text-xl'>
                <div className='flex space-x-3 items-center'>
                    <img src={images.Half} onClick={toggleImage} className='w-16 h-16 rounded-full' alt="" />
                    <h1 className='uppercase text-2xl md:text-3xl font-bold'>Karthi</h1>
                </div>
                <div className='space-x-4 md:space-x-6  hidden md:flex'>
                    <a href="https://www.linkedin.com/in/karthi-v-881899379/" target="_blank" className='hover:text-dark transition-colors duration-300' rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://www.instagram.com/mrr_kd_karthi/" target="_blank" className='hover:text-dark transition-colors duration-300' rel="noopener noreferrer">Instagram</a>
                    <a href="https://github.com/karthicb22s614595" target="_blank" className='hover:text-dark transition-colors duration-300' rel="noopener noreferrer">GitHub</a>
                </div>
                <a href="https://karthiv2005.github.io/Portfolio/Karthi_Resume.pdf" target="_blank" className='hover:text-dark transition-colors duration-300' rel="noopener noreferrer">Resume</a>
            </div>

            {/* Hero Section */}
            <div className='md:h-screen flex flex-col md:flex-row pt-20 md:pt-0  md:justify-center items-center px-4 md:px-12 '>
                <div className='md:w-full w-full'>
                    <h2 className='text-3xl md:text-6xl uppercase font-semibold tracking-tight leading-tight mb-4 md:mb-6'>
                        Full Stack Developer <span className="text-gray-500">crafting seamless digital experiences across</span>
                        <span className='block md:inline border-dashed border-gray-600 border-b-2'> front-end </span>
                        <span className='text-dark'>[+]</span>
                        <span className='block md:inline border-dashed border-gray-600 border-b-2'> back-end</span>.
                    </h2>
                    <div className='flex flex-col md:flex-row md:justify-between text-gray-500 italic mt-4 md:mt-6 text-sm md:text-base'>
                        <div>Interface, User Experience, Modern Trends</div>
                        <div>Optimization, Performance</div>
                    </div>
                </div>
                <div className='md:w-1/2 w-full mt-8 md:mt-0 flex justify-center'>
                    <img src={images.Rabbit} className='w-64 md:w-96 rounded-2xl md:rounded-4xl' alt="Hero" />
                </div>
            </div>

            {/* Projects Section */}
            <div className='ms:min-h-screen relative z-20 w-full bg-white p-6 md:p-8'>
                <h1 className='text-4xl md:text-7xl font-extrabold text-dark text-center md:text-left'>Projects</h1>
                <div className='space-y-8 md:space-y-12 mt-8 md:mt-16 flex flex-col items-center'>
                    {/* Project Card */}
                    <div className="flex flex-col md:flex-row w-full md:w-4/5 rounded-2xl md:rounded-3xl overflow-hidden border border-black transition-shadow duration-300">
                        <img
                            src={images.Crowd}
                            alt="Crowd Density Analysis Project"
                            className="w-full md:w-1/2 h-64 md:h-auto object-cover rounded-t-2xl md:rounded-l-3xl md:rounded-tr-none"
                        />
                        <div className="p-6 md:p-12 flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl md:text-5xl font-bold mb-4">Crowd Density Analysis</h2>
                                <p className="text-gray-700 text-sm md:text-lg mb-4 md:mb-6 leading-relaxed">
                                    Developed a <span className="text-black">real-time crowd monitoring system</span> using CNNs
                                    to detect, track, and count individuals. Ensures
                                    <span className="text-black"> social distancing compliance</span> with live alerts and heatmaps.
                                </p>
                                <div className='flex flex-col space-y-1'>
                                    <div className="text-gray-500 italic text-sm md:text-base">Technologies: TensorFlow, OpenCV, React</div>
                                </div>
                                <div className='flex flex-wrap gap-2 md:gap-4 mt-4 md:mt-6'>
                                    <div className='bg-gray-100 text-dark font-medium px-3 py-1 md:px-4 md:py-2 rounded-full border border-gray-300 hover:bg-gray-200 transition-colors duration-300 cursor-default'>Python</div>
                                    <div className='bg-gray-100 text-dark font-medium px-3 py-1 md:px-4 md:py-2 rounded-full border border-gray-300 hover:bg-gray-200 transition-colors duration-300 cursor-default'>React</div>
                                    <div className='bg-gray-100 text-dark font-medium px-3 py-1 md:px-4 md:py-2 rounded-full border border-gray-300 hover:bg-gray-200 transition-colors duration-300 cursor-default'>JavaScript</div>
                                    <div className='bg-gray-100 text-dark font-medium px-3 py-1 md:px-4 md:py-2 rounded-full border border-gray-300 hover:bg-gray-200 transition-colors duration-300 cursor-default'>TailwindCSS</div>
                                </div>
                            </div>
                            <div className='flex justify-end mt-4 md:mt-6'>
                                <a
                                    href="https://github.com/your-repo-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-dark text-white px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-medium text-sm md:text-lg hover:bg-gray-800 transition-colors duration-300"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Contact />
        </div>
    )
}

export default Home

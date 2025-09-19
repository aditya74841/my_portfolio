import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';
import { FaSquareXTwitter } from "react-icons/fa6";

const HeaderSocials = () => {
    return (
        <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
            <div className="flex flex-col gap-4">
                <a 
                    href="https://www.linkedin.com/in/aditya74841/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-500 hover:border-blue-500"
                >
                    <BsLinkedin className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                    <span className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                        LinkedIn
                    </span>
                </a>
                
                <a 
                    href="https://github.com/aditya74841" 
                    target="_blank" 
                    rel="noreferrer"
                    className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-800 hover:border-gray-800"
                >
                    <FaGithub className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                    <span className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                        GitHub
                    </span>
                </a>
                
                <a 
                    href="https://dribbble.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-pink-500 hover:border-pink-500"
                >
                    <FiDribbble className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                    <span className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                        Dribbble
                    </span>
                </a>
                
                <a 
                    href="https://x.com/adixranjan08" 
                    target="_blank" 
                    rel="noreferrer"
                    className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-black hover:border-black"
                >
                    <FaSquareXTwitter className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                    <span className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                        Twitter
                    </span>
                </a>
            </div>
        </div>
    );
};

export default HeaderSocials;

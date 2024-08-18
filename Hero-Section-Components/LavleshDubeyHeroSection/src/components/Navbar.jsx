import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

    const links = ["home", "features", "pricing", "about us", "contact us"];

    const [active, seActive] = useState(links[0]);

    const [hamburger, setHamburger] = useState(false);

    console.log(active);

    return (
        <header className='max-w-[1740px] z-10 px-2 md:px-5 py-2 mx-auto font-semibold'>
            <nav className='flex justify-between items-center'>
                <a href="#" className='p-2'>
                    <img src={logo} alt="VR" className='w-10 lg:w-auto' />
                </a>

                <div className='p-2 block relative z-20 lg:hidden'>
                    <button  onClick={() => setHamburger(prev => !prev)} className='scale-150 cursor-pointer' >
                        {!hamburger?<CgMenuRight/>:<IoClose />}
                        
                    </button>

                    <div className={`${!hamburger && "hidden"} bg-gradient-to-b from-royalBlue to-darkBlue shadow-[0px_4px_4px_0] shadow-brightCyan rounded-lg w-56 right-[11%] top-10 p-5 absolute`}>
                        <ul className='flex flex-col max-w-fit gap-y-4 mx-auto'>
                            {
                                links.map((link, index) => (
                                    <li key={index} className='capitalize'>
                                        <a href="#" onClick={() => seActive(links[index])} className={`${active === links[index] ? "sideDot" : "opacity-30 hover:opacity-100 duration-300"}`}>{link}</a>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className='w-full text-center mt-7'>
                            <button className='btn w-full'>Explore Now</button>
                        </div>

                    </div>
                </div>


                <ul className='hidden lg:flex items-center gap-x-12 capitalize'>
                    {
                        links.map((link, index) => (
                            <li key={index} className='p-2'>
                                <a href="#" onClick={() => seActive(links[index])} className={`${active === links[index] ? "bottomDot" : "opacity-30 hover:opacity-100 duration-300"}`}>{link}</a>
                            </li>
                        ))
                    }
                </ul>

                <button className='hidden lg:block btn'>Explore Now</button>
            </nav>
        </header>
    )
}

export default Navbar;
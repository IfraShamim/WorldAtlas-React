import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { AiTwotoneCloseSquare } from "react-icons/ai";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const lists = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <div className='shadow p-[1.2rem] w-full'>
            <div className='max-w-[1100px] mx-auto'>
                <header className='flex justify-between items-center'>
                    {/* Logo */}
                    <NavLink to='/'>
                        <div className='text-[1.5rem] font-bold'>WorldAtlas</div>
                    </NavLink>

                    {/* Hamburger Icon */}
                    {toggle ? 
                        <IoClose 
                            onClick={() => setToggle(false)} 
                            className='md:hidden block cursor-pointer text-3xl duration-500' 
                        />
                        : 
                        <FaBarsStaggered 
                            onClick={() => setToggle(true)} 
                            className='md:hidden block cursor-pointer text-2xl duration-500' 
                        />
                    }

                    {/* Desktop Navbar */}
                    <ul className='hidden md:flex gap-10'>
                        {lists.map((list, index) => (
                            <NavLink key={index} to={list.path} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                                <li className='cursor-pointer font-semibold hover:underline'>{list.name}</li>
                            </NavLink>
                        ))}
                    </ul>

                    {/* Mobile Navbar */}
                    <ul className={`bg-black/80 text-white
 md:hidden flex flex-col mx-auto gap-10 fixed top-0 right-0 w-[60%] h-full justify-center text-center transition-all duration-300 ${toggle ? 'right-0' : 'right-[-100%]'}`}>
                        <AiTwotoneCloseSquare 
                            onClick={() => setToggle(false)} 
                            className='md:hidden block absolute top-5 right-5 cursor-pointer text-3xl' 
                        />
                        {lists.map((list, index) => (
                            <NavLink key={index} to={list.path}>
                                <li className='cursor-pointer font-semibold hover:underline'>{list.name}</li>
                            </NavLink>
                        ))}
                    </ul>
                </header>
            </div>
        </div>
    );
};

export default Header;

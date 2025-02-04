import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Button from '../components/Button';

const HeroSection = () => {
    return (
        <div className='py-2 px-4'>
            <div className='max-w-[1100px] mx-auto'>
                <div className='md:flex'>
                    <div className='my-auto'>
                        <p className='text-[2rem] font-semibold mb-[1.5rem]'>Explore the World, One<br />Country at a time</p>
                        <p className='mb-[1.4rem]'>Discover the history,culture, and beauty of every nation.Sort,Search and <br /> filter through countries to find the details you need.</p>
                        <Button text='Start Exploring' icon={<FaArrowRight />} />
                    </div>
                    <div>
                        <img src="World.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
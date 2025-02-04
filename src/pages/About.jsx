import React from 'react'
import countryFacts from '../API/CountryData.json'

export const About = () => {
    return (
        <div className='py-2 px-4'>
            <div className='max-w-[1100px] mx-auto'>
                <h1 className='text-center mb-[2rem] text-[1.3rem] sm:text-[1.8rem] md:text-[2rem] font-semibold'>Here are the Interesting Facts <br />We're proud of</h1>
                <div className='md:grid grid-cols-3 gap-[2rem]'>
                    {countryFacts.map((country, index) => (
                        <div key={index} className='cursor-pointer mb-[1.5rem] md:mb-0 shadow rounded-2xl p-[1.5rem]'>
                            <h1 className='mb-[1.5rem] font-semibold text-[1.3rem] text-blue-500'>{country.countryName}</h1>
                            <p className='font-semibold'>Capital: {country.capital}</p>
                            <p className='font-semibold'>Population: {country.population}</p>
                            <p className='font-semibold'>Interesting Facts: {country.interestingFact}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

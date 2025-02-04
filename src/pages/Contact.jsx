import React from 'react'

const Contact = () => {
    const handleFormSubmit = (formData)=> {
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    }
    return (
        <div className='py-2 px-4'>
            <div className='max-w-[1100px] mx-auto'>
                <h1 className='text-[1.5rem] mb-[2rem] mt-[2rem] font-semibold text-center'>Contact Us</h1>
                <form action={handleFormSubmit} className='text-center'>
                    <input className='mb-[1.5rem] shadow rounded p-[0.5rem] w-[95%] md:w-[40%]' type="text" required autoComplete='false' name='username' placeholder='Enter your name' /><br />
                    <input className='mb-[1.5rem] shadow rounded p-[0.5rem] w-[95%] md:w-[40%]' type="email" required autoComplete='false' name='email' placeholder='Enter your email' /><br />
                    <textarea className='mb-[1.5rem] shadow rounded p-[0.5rem] w-[95%] md:w-[40%]' rows={10} required autoComplete='false' name='message' placeholder='Enter your message'></textarea><br />
                    <button className='mb-[1.5rem] shadow rounded-lg font-semibold p-[0.5rem] w-[95%] md:w-[40%]' value='send' type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
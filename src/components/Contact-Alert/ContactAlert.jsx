import React from 'react'

const ContactAlert = () => {
    return (
        <div className='w-full flex justify-between items-center bg-accent text-white lg:px-[185px] sm:px-4 px-3 lg:py-4 py-3'>
            <p className='lg:text-sm text-xs'>
                Consulting And Estimate For Your Project, <a href="#contact" className='text-primary font-semibold underline'>Contact Us Today</a>
            </p>

            <button className="bg-white text-primary lg:px-8 px-2 lg:py-2.5 py-2 lg:text-sm text-xs font-semibold transition-colors">
                <a href="#features">Explore Now</a>
            </button>
        </div>
    )
}

export default ContactAlert
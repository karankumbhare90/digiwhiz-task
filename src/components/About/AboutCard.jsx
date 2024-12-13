import React from 'react'

const AboutCard = ({ icon, title, description }) => {
    return (
        <div className=''>
            <div className="w-full flex space-x-6 items-start lg:justify-center justify-between lg:px-14 px-8 mb-4 lg:mb-0">
                <img src={icon} alt="" className="lg:w-12 lg:h-12 w-8 h-8" /> {/* Example size */}
                <div className='w-full flex flex-col items-start justify-center lg:space-y-2 space-y-1'>
                    <h2 className="lg:text-xl text-md font-semibold">{title}</h2>
                    <p className="text-[10px] text-secondary lg:text-[11px] md:text-[11px] text-justify lg:w-[80%] w-full">{description}</p>
                </div>
            </div>
        </div >
    );
};


export default AboutCard
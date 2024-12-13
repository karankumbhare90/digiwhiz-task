import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { AiOutlineLink } from "react-icons/ai";

const WorkCard = ({ work }) => (
  <div className="group relative overflow-hidden shadow-lg transition-transform duration-300">
    <img
      src={work.imageUrl}
      alt={work.title}
      className="w-full h-64 object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className='absolute flex items-center justify-between bottom-0 left-0 right-0 p-6'>
        <div>
          <h3 className="text-white text-xl font-semibold mb-2 heading-after">{work.title}</h3>
          <hr className='h-1 w-[40%]' />
        </div>
        <div className="flex items-center space-x-3">
          <button className='bg-accent p-1.5 rounded-full'>
            <FaPlus />
          </button>
          <button className='bg-accent p-1.5 rounded-full'>
            <AiOutlineLink />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default WorkCard;
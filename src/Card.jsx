import React, { useState } from 'react'; // Added useState to manage task input
import { BsBackpack4 } from "react-icons/bs";
import { HiMiniArrowDownCircle } from "react-icons/hi2";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  // State to hold the task description
  const [task, setTask] = useState(data.desc); // Initialized with the description passed in data

  // Function to handle changes in the textarea
  const handleInputChange = (e) => {
    setTask(e.target.value); // Update state with the new value as the user types
  };

  return (
    <motion.div 
    drag
    whileHover={{
      scale: 1.2,
      transition: { duration: 1 },
    }}  
    whileTap={{ scale: 0.9 }}
 
      
      dragConstraints={reference} 
      className='relative flex-shrink-0 w-60 h-72 bg-zinc-900 rounded-[45px] text-white py-10 px-8 overflow-hidden'
    >
      <BsBackpack4 />
      {/* Textarea for task input, allowing user to write or edit tasks */}
      <textarea
        value={task} // Bind textarea value to the task state
        onChange={handleInputChange} // Update state on user input
        className='text-sm leading-tight mt-5 font-semibold bg-transparent outline-none w-full resize-none' // Styled to blend with the card
        rows="4"
      />
      <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex items-center justify-between mb-3 px-8 py-3'> 
          <h5>{data.filesize}</h5>
          <HiMiniArrowDownCircle />
        </div>
        {/* Conditionally render tag if isOpen is true */}
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-yellow-600" : "bg-pink-500"} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;

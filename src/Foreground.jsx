import React, { useRef, useState } from 'react'
import Card from './card'

function Foreground() {
  const ref =useRef(null);
  // const data =[
  //   icon , desc, filesize ,closerDownload, tagdetails
  // ]
  const data = [
    { desc: "1 . ", filesize : "TASK 1", close:true, tag:{isOpen :true,tagTitle:"GRIND ON",tagColor:"yellow"}},
    { desc: "2 .", filesize : "TASK 2", close:true, tag:{isOpen :true,tagTitle:"KEEP BUILDING",tagColor:"blue"}},

    { desc: "3 .", filesize : "TASK 3", close:true, tag:{isOpen :true,tagTitle:"WORK SMART",tagColor:"green"}},
    { desc: "4 .", filesize : "TASK 4 ", close:true, tag:{isOpen :true,tagTitle:"PUSH LIMITS",tagColor:"blue"}},
    { desc: "5 .", filesize : "TASK 5 ", close:true, tag:{isOpen :true,tagTitle:"GET IT DONE",tagColor:"pink"}},
    { desc: "6 ." , filesize : "TASK 6", close:true, tag:{isOpen :true,tagTitle:"CREATE DAILY",tagColor:"blue"}},
  ]
  // useState()
  return (
 
    <div ref={ref}className='fixed top 0; z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
   {data.map((item, index)=>(<Card data={item} reference ={ref}/>))}
      
    </div>
    
  )
}

export default Foreground;
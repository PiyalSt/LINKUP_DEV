import React from 'react'
import { IoIosNotifications } from "react-icons/io";

const Notifi = ({notifi}) => {
  return (
    <>
      <div className='flex items-center gap-4 hover:bg-accent/20 transition-all duration-300 py-3 px-3 rounded-sm cursor-pointer border-b-2 border-accent/30'>
        <div className=''>
          <IoIosNotifications className='text-3xl text-white/70' />
        </div>
        <p className='text-white/80'>{notifi}</p>
      </div>
    </>
  )
}

export default Notifi

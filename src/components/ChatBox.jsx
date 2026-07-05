import React, { useState } from 'react'
import profile2 from '../assets/profile2.jpg'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Send from './Send'
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { IoCameraOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import Reply from './Reply';

const ChatBox = () => {

  const [isActive, setIsActive] = useState(true)

  return (
    <>
      <div className='flex flex-col justify-between h-full'>
        <div className='flex justify-between items-center py-4 px-4 mx-2 border-b-2 border-accent/50'>
            <div className='flex items-center gap-2'>
                <div className='w-12 h-12 rounded-full'>
                    <img className='w-full h-full rounded-full object-cover' src={profile2} alt="" />
                </div>
                <div>
                    <h4 className='text-mainText'>Naymer Jr</h4>
                    {isActive ? (
                        <p className='text-green-500'>Online</p>
                    ) : (
                        <p className='text-gray-400'>Ofline</p>
                    )}
                </div>
            </div>
            <div>
                <BsThreeDotsVertical className="text-mainText text-base cursor-pointer"/>
            </div>
        </div>
        <div className='flex-1 flex flex-col justify-end overflow-y-scroll'>
            <div className='flex flex-col items-end justify-end py-4'>
                <Send sendText={'Hay'} />
                <Send sendText={'How are you ?'} />
            </div>
            <div className='flex flex-col items-start justify-start py-4'>
                <Reply replyText={"Hay I'm fine !"}/>
                <Reply replyText={'Boss, how can I win the FIFA World Cup?'}/>
            </div>
            <div className='flex flex-col items-end justify-end py-4'>
                <Send sendText={'What? Really?'} />
                <Send sendText={'Just follow one rule.'} />
            </div>
            <div className='flex flex-col items-start justify-start py-4'>
                <Reply replyText={'Only one rule?'}/>
                <Reply replyText={'What is the rule?'}/>
            </div>
        </div>
        <div className='flex justify-between items-center gap-4 py-4 px-4 mx-2 border-t-2 border-accent/50'>
            <div className='w-full flex justify-between items-center gap-2 relative'>
                <div className='w-full'>
                    <input className='w-full py-3 px-5 pr-24  border-2 border-accent/50 rounded-sm text-mainText outline-0 text-base' type="text" placeholder='write here.....' />
                </div>
                <div className='flex gap-4 absolute right-6'>
                  <HiOutlineEmojiHappy className='text-2xl text-accent/60 cursor-pointer' />
                  <IoCameraOutline className='text-2xl text-accent/60 cursor-pointer' />
                </div>
            </div>
            <div>
              <IoIosSend className='text-3xl text-accent/90 cursor-pointer'/>
            </div>
        </div>
      </div>
    </>
  )
}

export default ChatBox

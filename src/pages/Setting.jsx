import React from 'react'
import SearchBar from '../components/SearchBar'
import profile from '../assets/messi.jpg'
import { FaUserEdit } from "react-icons/fa";
import { TbPhotoEdit } from "react-icons/tb";
import { MdHelpOutline } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { GiScrollQuill } from "react-icons/gi";
import { GiCircleSparks } from "react-icons/gi";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdBugReport } from "react-icons/md";

const Setting = () => {
  return (
    <>
      <div className='w-full h-screen overflow-hidden relative'>
        <div className='mx-4 my-4'>
          <SearchBar />
        </div>
        <div className='w-full flex mx-5 gap-2'>
          <div className='w-6/12 border-r-2 border-accent/50'>
            <h4 className='text-xl font-semibold text-mainText/90 mt-2'>
              Profile Settings
            </h4>
            <div className='border-b-2 border-accent/50 flex items-center gap-4 mt-8 py-4'>
              <div className='w-14 h-14 rounded-full'>
                <img className='w-full h-full rounded-full object-cover' src={profile} alt="" />
              </div>
              <div>
                <h4 className='text-lg text-mainText/90 font-medium'>A B M Shawon Islam</h4>
                <p className='text-base text-subText/80 font-normal'>Stay home stay safe</p>
              </div>
            </div>
            <div className='mx-8 my-10 flex flex-col gap-3'>
              <div className='flex items-center gap-4 hover:bg-accent/20 py-2 px-4 cursor-pointer'>
                <FaUserEdit className='text-2xl text-mainText/80' />
                <p className='text-lg text-mainText/80'>Edit Profile Name.</p>
              </div>
              <div className='flex items-center gap-4 hover:bg-accent/20 py-2 px-4 cursor-pointer'>
                <GiScrollQuill className='text-2xl text-mainText/80' />
                <p className='text-lg text-mainText/80'>Edit Profile Status Info.</p>
              </div>
              <div className='flex items-center gap-4 hover:bg-accent/20 py-2 px-4 cursor-pointer'>
                <TbPhotoEdit className='text-2xl text-mainText/80' />
                <p className='text-lg text-mainText/80'>Edit Profile Photo.</p>
              </div>
              <div className='flex items-center gap-4 hover:bg-accent/20 py-2 px-4 cursor-pointer'>
                <MdHelpOutline className='text-2xl text-mainText/80' />
                <p className='text-lg text-mainText/80'>Help.</p>
              </div>
            </div>
          </div>

          <div className='w-6/12 px-4'>
            <h4 className='text-xl font-semibold text-mainText/90 mt-2'>
              Account Settings
            </h4>
            <div className='mx-8 my-10 flex flex-col gap-3'>
              <div className='flex items-center gap-4 hover:bg-accent/20 py-2 px-4 cursor-pointer'>
                <MdOutlinePassword className='text-2xl text-mainText/80' />
                <p className='text-lg text-mainText/80'>Change Password</p>
              </div>
              <div className='flex items-center gap-4 hover:bg-accent/20 py-2 px-4 cursor-pointer'>
                <GiCircleSparks className='text-2xl text-mainText/80' />
                <p className='text-lg text-mainText/80'>Theme</p>
              </div>
              <div className='flex items-center gap-4 hover:bg-accent/20 py-2 px-4 cursor-pointer'>
                <RiDeleteBinLine className='text-2xl text-mainText/80' />
                <p className='text-lg text-mainText/80'>Delete Account</p>
              </div>
              <div className='flex items-center gap-4 hover:bg-accent/20 py-2 px-4 cursor-pointer'>
                <MdBugReport className='text-2xl text-mainText/80' />
                <p className='text-lg text-mainText/80'>Report here.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className='absolute bottom-4 left-1/2 -translate-1/2 text-mainText/50'>&copy; 2026 || Created By Md Sajib Khan</p>
        </div>
      </div>
    </>
  )
}

export default Setting
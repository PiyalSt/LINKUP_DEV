import React from 'react'
import SearchBar from '../components/SearchBar'
import TitleList from '../components/TitleList'
import GroupList from '../layouts/GroupList'
import FriendList from '../layouts/FriendList'
import ChatBox from '../components/ChatBox'

const Message = () => {
  return (
    <>
      <div className='w-full h-screen flex bg-primary'>
        <div className='w-6/12 border-r-2 border-accent/50'>
          <div className='flex flex-col h-full'>
            <div className='flex-1 w-full h-full'>
              <GroupList />
            </div>
            <div className='flex-1 w-full h-full'>
              <FriendList />
            </div>
          </div>
        </div>
        <div className='w-6/12 h-full'>
          <ChatBox />
        </div>
      </div>
    </>
  )
}

export default Message
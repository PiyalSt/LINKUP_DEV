import React from 'react'

const Reply = ({replyText}) => {
  return (
    <>
      <div className='bottom-0 px-4 py-2 bg-[#3874FF]/10 inline-block rounded-xl text-white/90 mx-4 my-2'>
        <p>{replyText}</p>
      </div>
    </>
  )
}

export default Reply

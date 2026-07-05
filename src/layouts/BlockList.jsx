import React from 'react'
import MakeProfile from '../components/MakeProfile'
import TitleList from '../components/TitleList'
import SearchBar from '../components/SearchBar'
import Profile2 from "../assets/profile2.jpg";

const BlockList = () => {
  return (
    <div className="h-full bg-primary rounded-md flex flex-col gap-4 p-4">
      <SearchBar />

      <div className="h-full py-4 px-5 rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-secondary/30">
        <TitleList title="Block List" />

        <div className="flex overflow-y-scroll  h-42 flex-col gap-y-3">
          <MakeProfile
            mainClassName=""
            profileImage={Profile2}
            profileName={`Naymer Jr`}
            profileStatus={`Follow me`}
            buttonText={`Join`}
          />
          <MakeProfile
            mainClassName=""
            profileImage={Profile2}
            profileName={`Naymer Jr`}
            profileStatus={`Follow me`}
            buttonText={`Join`}
          />
          <MakeProfile
            mainClassName=""
            profileImage={Profile2}
            profileName={`Naymer Jr`}
            profileStatus={`Follow me`}
            buttonText={`Join`}
          />
        </div>
      </div>
    </div>
  )
}

export default BlockList
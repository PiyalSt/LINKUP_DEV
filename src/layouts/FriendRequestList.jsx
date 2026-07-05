import React from 'react'
import MakeProfile from '../components/MakeProfile'
import TitleList from '../components/TitleList'
import SearchBar from '../components/SearchBar'
import Profile2 from "../assets/profile2.jpg";

const FriendRequestList = () => {
  return (
    <div className="bg-primary h-full rounded-md flex flex-col gap-4 p-4">
      <SearchBar />

      <div className="h-full py-4 px-5 rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-secondary/30 overflow-hidden">
        <TitleList title="Friend Request List" />

        <div className="flex flex-col gap-y-3 h-42 overflow-y-scroll">
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

export default FriendRequestList
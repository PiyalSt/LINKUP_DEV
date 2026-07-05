import React from "react";
import Image from "./Image";

const MakeProfile = ({
  mainClassName,
  profileImage,
  profileName,
  profileStatus,
  buttonText,
}) => {
  return (
    <div className={`flex items-center justify-between border-b border-subText py-2 ${mainClassName}`}>
      <div className="flex items-center gap-x-3">
        <div className="w-10 h-10 rounded-full">
          <Image
            className="w-full h-full rounded-full object-cover"
            src={profileImage}
          />
        </div>
        <div>
          <h4 className="text-base text-mainText font-semibold ">{profileName}</h4>
          <p className="text-xs text-subText font-normal ">{profileStatus}</p>
        </div>
      </div>
      <button className="text-sm text-white font-semibold rounded-md bg-accent/80 px-4 py-1 cursor-pointer">
        {buttonText}
      </button>
    </div>
  );
};

export default MakeProfile;

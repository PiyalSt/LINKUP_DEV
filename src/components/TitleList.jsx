import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const TitleList = ({ title, className }) => {
  return (
    <div className={`flex justify-between items-center pb-4 ${className}`}>
      <h3 className="text-lg text-mainText font-semibold">{title}</h3>
      <BsThreeDotsVertical className="text-mainText text-base cursor-pointer"/>
    </div>
  );
};

export default TitleList;

import React from "react";
import { MdOpenInNew } from "react-icons/md";

const ProfileCard = ({ avatar_url, bio, html_url, location, name, login }) => {
  return (
    <div className="w-full max-w-[450px] min-h-[585px] bg-black/20 text-white backdrop-blur-[32px] rounded-[32px] py-12 px-6">
      <div>
        <img className="rounded-md" src={avatar_url} />
      </div>
      <div className="text-center ">
        <h1 className="text-3xl py-2 font-semibold">{name}</h1>
        <div className="text-xl flex flex-col gap-y-2">
          <h3>{login}</h3>
          <h3>{location ? location : ""}</h3>
          <h3>{bio ? bio : ""}</h3>
          <button className="py-6 mt-2 px-6 bg-slate-300/10">
            Go to profile <MdOpenInNew/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

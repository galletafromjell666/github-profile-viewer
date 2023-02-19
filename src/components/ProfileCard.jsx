import React from "react";
import { MdOpenInNew } from "react-icons/md";

const ProfileCard = ({ avatar_url, bio, html_url, location, name, login }) => {
  return (
    <div className="w-full max-w-[450px] min-h-[585px] bg-black/20 text-white backdrop-blur-[32px] rounded-[32px] py-6 px-6 md:py-8">
      <div>
        <img className="rounded-md" src={avatar_url} />
      </div>
      <div className="text-center mt-4 ">
        <h1 className="text-3xl py-2 font-semibold">{name}</h1>
        <div className="text-xl flex flex-col gap-y-2">
          <h3>{login}</h3>
          <h3>{location ? location : ""}</h3>
          <h3>{bio ? bio : ""}</h3>
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            <button className="mx-auto py-4 rounded-lg mt-2 px-4 w-10/12 flex flex-row justify-center items-center bg-slate-300/10 hover:bg-slate-300/20 md:w-4/6">
              <div className="text-md">View on GitHub</div>{" "}
              <MdOpenInNew className="ml-2 text-2xl" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

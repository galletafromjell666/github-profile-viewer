import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
const SearchBar = ({ onChildSubmit }) => {
  const [formText, setFormText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onChildSubmit(formText);
    setFormText("")
  };
  const handleChange = (e) => setFormText(e.target.value);
  return (
    <form
      onSubmit={handleSubmit}
      className="h-16 bg-black/30 w-full max-w-[450px] rounded-full backdrop-blur-[32px] mb-2 lg:mb-8"
    >
      <div className="h-full relative flex items-center justify-between p-2">
        <input
          value={formText || ""}
          onChange={(e) => {
            handleChange(e);
          }}
          className="flex-1 relative bg-transparent outline-none placeholder:text-white text-white text-[15px] font-light pl-6 h-full"
          type="text"
          placeholder="Type a Git user..."
        />
        <button
          type="submit"
          className="bg-cyan-400/50 absolute right-2 w-14 h-12 rounded-full flex justify-center items-center transition hover:bg-cyan-700"
        >
          <IoMdSearch className="text-2xl text-white" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

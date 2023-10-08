import React from 'react';
import logo from '../images/youtube-svgrepo-com.svg';
import userIcon from '../images/user .png';
import searchIcon from '../images/search.svg';

const Header = ({ toggler }) => {
  return (
    <header className="flex justify-between items-center p-4 border-b-[1px] border-gray-300">
      <div className="flex">
        <img
          className="h-8 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
          alt="menu"
          onClick={() => {
            toggler();
          }}
        />
        <img className="h-8 ps-3 me-1" src={logo} alt="youtube-logo" />
        <p className=" font-mono text-2xl font-semibold">YOUTUBE</p>
      </div>
      <div className="flex flex-grow justify-center">
        <input
          className="bg-gray-200 flex-2 rounded-s-full outline-none border border-solid border-gray-500 ps-3 md:w-1/3"
          type="text"
        />
        <button className="group px-5 py-2 bg-gray-200 capitalize border border-solid border-gray-500 border-s-0 rounded-e-full transition-all duration-200 ease-in-out hover:bg-gray-300 ">
          <img
            className="h-5 transition-all duration-200 ease-in-out group-active:scale-90"
            src={searchIcon}
            alt="search"
          />
        </button>
      </div>
      <div className="">
        <img className="h-8" src={userIcon} alt="user-icon" />
      </div>
    </header>
  );
};

export default Header;

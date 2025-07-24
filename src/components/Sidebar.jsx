import React from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBtn = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="max-tablet:block max-mobile:block" onClick={toggleBtn}>
        {isOpen ? (
          <FaTimes className="w-[40px] h-[40px]" />
        ) : (
          <RxHamburgerMenu className="w-[40px] h-[40px]" />
        )}
      </div>
      <div
        className={
          !isOpen
            ? "hidden"
            : "w-[100%] h-screen space-y-[30px] px-[10px] bg-white "
        }
      ></div>
    </div>
  );
};

export default Sidebar;

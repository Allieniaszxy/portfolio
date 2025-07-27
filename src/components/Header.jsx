import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [services, setServices] = useState(false);

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div className="flex items-center justify-between h-[80px] max-w-[1480px] mx-auto px-4">
        <div className="flex items-center gap-3">
          <div className="w-[50px] h-[50px] max-tablet:w-[35px] max-tablet:h-[35px] rounded-full bg-[#a53dff] flex items-center justify-center font-semibold text-xl text-white">
            I
          </div>
          <h1 className="text-3xl font-semibold max-tablet:text-xl">
            Ingenious
          </h1>
        </div>

        <nav className="flex items-center gap-8 max-tablet:hidden">
          <a href="#home" className="hover:text-[#a53dff] transition">
            Home
          </a>
          <a href="#about" className="hover:text-[#a53dff] transition">
            About
          </a>

          {/* Services Dropdown */}
          <div
            className=""
            onMouseEnter={() => setServices(true)}
            onMouseLeave={() => setServices(false)}
          >
            <span className="flex items-center gap-x-[3px] hover:text-[#a53dff] transition cursor-pointer">
              Services <MdKeyboardArrowDown />
            </span>
            <div
              onMouseEnter={() => setServices(true)}
              onMouseLeave={() => setServices(false)}
              className={
                !services
                  ? "hidden"
                  : "w-[150px] h-auto fixed flex justify-between items-start   rounded-[10px] shadow shadow-gray-500 p-[20px] bg-white"
              }
            >
              <div className="w-full  flex flex-col gap-y-[10px] ">
                <a href="#work">
                  <div className=" flex justify-between items-center p-[10px] gap-x-[10px]">
                    <div className=" w-full">
                      <p className="font-[600] text-[16px] hover:text-[#a53dff] transition cursor-pointer">
                        Work
                      </p>
                    </div>
                  </div>
                </a>

                <a href="#idea">
                  {" "}
                  <div className=" flex justify-between items-center p-[10px] gap-x-[10px]">
                    <div className=" w-full">
                      <p className="font-[600] text-[16px] hover:text-[#a53dff] transition cursor-pointer">
                        Idea
                      </p>
                    </div>
                  </div>
                </a>

                <a href="#testimonial">
                  <div className=" flex justify-between items-center p-[10px] gap-x-[10px]">
                    <div className=" w-full">
                      <p className="font-[600] text-[16px] hover:text-[#a53dff] transition cursor-pointer">
                        Clients
                      </p>
                    </div>
                  </div>
                </a>
                <a href="#projects">
                  <div className=" flex justify-between items-center p-[10px] gap-x-[10px]">
                    <div className=" w-full">
                      <p className="font-[600] text-[16px] hover:text-[#a53dff] transition cursor-pointer">
                        Projects
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="bg-[#a53dff] py-2 px-4 text-white rounded hover:bg-[#922be6] transition"
          >
            Contact
          </a>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div
          className="hidden max-tablet:block cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes className="w-8 h-8 text-[#a53dff]" />
          ) : (
            <RxHamburgerMenu className="w-8 h-8 text-[#a53dff]" />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#1e293b] flex flex-col items-center justify-center space-y-6 text-white text-xl transition-all duration-300 z-40">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#14b8a6]"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#14b8a6]"
          >
            About
          </a>

          {/* Mobile Services Dropdown */}
          <div className="w-full flex flex-col items-center">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center gap-1 text-white text-xl hover:text-[#14b8a6] focus:outline-none"
            >
              Services <MdKeyboardArrowDown />
            </button>

            {mobileServicesOpen && (
              <div className="mt-2 w-[200px] bg-white text-black rounded-lg shadow p-4">
                <a
                  href="#work"
                  className="block py-2 text-base hover:text-[#a53dff]"
                  onClick={() => setIsOpen(false)}
                >
                  Work
                </a>
                <a
                  href="#idea"
                  className="block py-2 text-base hover:text-[#a53dff]"
                  onClick={() => setIsOpen(false)}
                >
                  Idea
                </a>
                <a
                  href="#testimonial"
                  className="block py-2 text-base hover:text-[#a53dff]"
                  onClick={() => setIsOpen(false)}
                >
                  Clients
                </a>
                <a
                  href="#projects"
                  className="block py-2 text-base hover:text-[#a53dff]"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </a>
              </div>
            )}
          </div>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#14b8a6]"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

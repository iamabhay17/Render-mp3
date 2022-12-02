import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";

const NavLinks = () => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-md font-medium gap-5 text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <div className="text-3xl text-blue-50 text-center font-bold">
          Render
        </div>
        <NavLinks />
        <div className="absolute md:hidden block top-6 right-3">
          {mobileMenuOpen ? (
            <RiCloseLine className="w-6 h-6 text-white mr-2" />
          ) : (
            <HiOutlineMenu className="w-6 h-6 text-white mr-2" />
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;

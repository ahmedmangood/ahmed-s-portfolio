import React from "react";
import { FloatingNav } from "./ui/FloatingNav";
import { FaBong, FaHome, FaInfoCircle } from "react-icons/fa";
import { IoLayersSharp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";

const NavBar = () => {
  const navItems = [
    { name: "Home", link: "/", icon: <FaHome /> },
    { name: "About", link: "#about", icon: <FaInfoCircle /> },
    { name: "Projects", link: "#projects", icon: <IoLayersSharp /> },
    { name: "Testimonials", link: "#testimonials", icon: <FaBong /> },
    { name: "Contact", link: "#contact", icon: <MdAlternateEmail /> },
  ];
  return (
    <div>
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default NavBar;

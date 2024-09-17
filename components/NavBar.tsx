import React from "react";
import { FloatingNav } from "./ui/FloatingNav";
import { FaBong, FaHome, FaInfoCircle } from "react-icons/fa";
import { IoLayersSharp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { useTranslations } from "next-intl";
import { RiGlobalFill } from "react-icons/ri";

const NavBar = () => {
  const t = useTranslations("Navbar");

  const navItems = [
    { name: t("Home"), link: "/", icon: <FaHome /> },
    { name: t("About"), link: "#about", icon: <FaInfoCircle /> },
    { name: t("Projects"), link: "#projects", icon: <IoLayersSharp /> },
    { name: t("Testimonials"), link: "#testimonials", icon: <FaBong /> },
    { name: t("Contact"), link: "#contact", icon: <MdAlternateEmail /> },
  ];
  return (
    <div>
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default NavBar;

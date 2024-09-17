import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="w-full pt-20 pb-20" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          {t("mainTitleOne")}{" "}
          <span className="text-purple">{t("mainTitleTwo")}</span>
        </h1>
        <p className="text-center md:mt-10 my-5 text-white-200 rtl:text-lg">
          {t("mainParagraph")}
        </p>
        <a href="mailto:ahmedmangood656@gmail.com">
          <MagicButton
            title={t("footerBtn")}
            icon={<FaLocationArrow className="ms-3" />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Ahmed-Mangood
        </p>
        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((profile) => (
            <Link
              href={profile.href}
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex items-center justify-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={profile.img} alt={profile.img} width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

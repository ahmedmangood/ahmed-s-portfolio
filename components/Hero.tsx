import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("HeroSection");
  return (
    <div className="pb-20 pt-36">
      {/* <Spotlight
        className="top-11 left-32 h-[400px] md:h-screen w-[50vw]"
        fill="white"
      />
      <Spotlight className="top-8 left-40 h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-9 left-52 h-[80vh] w-[50vw]" fill="blue" /> */}

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.09] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            {t("smallTitle")}
          </h2>
          <TextGenerateEffect
            className="text-center"
            // words="Transforming Concepts into Seamless User Experiences"
            words={`${t("mainTitle")}`}
          />
          <p className="text-center my-5 text-xl">{t("paragraph")}.</p>
          <a href="#about">
            <MagicButton
              title={t("buttonText")}
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="gap-2 hover:bg-white hover:text-black transition-all"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

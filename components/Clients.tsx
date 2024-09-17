import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies } from "@/data";
import { useTranslations } from "next-intl";

export const Clients = () => {
  const t = useTranslations("Clients");
  const testimonials = [
    {
      quote: t("clientQuoteOne"),
      name: t("clientOneName"),
      title: t("clientOneJobTitle"),
    },
    {
      quote: t("clientQuoteOne"),
      name: t("clientOneName"),
      title: t("clientOneJobTitle"),
    },
    {
      quote: t("clientQuoteOne"),
      name: t("clientOneName"),
      title: t("clientOneJobTitle"),
    },
    {
      quote: t("clientQuoteOne"),
      name: t("clientOneName"),
      title: t("clientOneJobTitle"),
    },
    {
      quote: t("clientQuoteOne"),
      name: t("clientOneName"),
      title: t("clientOneJobTitle"),
    },
  ];
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        {t("mainTitlePartOne")}{" "}
        <span className="text-purple">{t("mainTitlePartTwo")}</span>
      </h1>
      <div className="flex flex-col items-center justify-center mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="flex items-center justify-center gap-4 flex-wrap md:gap-16 mt-10 opacity-60">
          {companies.map(({ id, name, img, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <img src={img} alt={name} className="md:w-15 w-8" />
              <img src={nameImg} alt={name} className="md-w-24 w-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

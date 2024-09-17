import { useTranslations } from "next-intl";
import { Button } from "./ui/MovingBorder";

export const Experience = () => {
  const t = useTranslations("Experience");

  const workExperience = [
    {
      id: 1,
      title: t("expOneTitle"),
      desc: t("expOneDescription"),
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: t("expTwoTitle"),
      desc: t("expTwoDescription"),
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: t("expThreeTitle"),
      desc: t("expThreeDescription"),
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: t("expFourTitle"),
      desc: t("expFourDescription"),
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];

  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        {t("mainTitlePartOne")}{" "}
        <span className="text-purple">{t("mainTitlePartTwo")}</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            className="flex-1 text-white- border-neutral-200 dark:border-slate-800"
            key={card.id}
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000) + 10000}
          >
            <div className="flex flex-col lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

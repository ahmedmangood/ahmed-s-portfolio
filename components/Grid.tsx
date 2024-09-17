import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { useTranslations } from "next-intl";

const Grid = () => {
  const t = useTranslations("GridSection");

  const gridItems = [
    {
      id: 1,
      title: t("computerCardText"),
      description: "",
      className: "lg:col-span-2 md:col-span-6 md:row-span-2 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: t("globalCardText"),
      description: "",
      className: "lg:col-span-1 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: t("stackCardBigText"),
      description: t("stackCardSmallText"),
      className: "lg:col-span-1 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: t("TechCardText"),
      description: "",
      className: "lg:col-span-1 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },

    {
      id: 5,
      title: t("insideScoopCardbigText"),
      description: t("insideScoopCardsmallText"),
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: t("emailCardText"),
      description: "",
      className: "lg:col-span-1 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];

  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            titleClassName,
            img,
            imgClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;

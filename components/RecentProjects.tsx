import { PinContainer } from "./ui/3DPin";
import { FaLocationArrow } from "react-icons/fa";
import { useTranslations } from "next-intl";

const RecentProjects = () => {
  const t = useTranslations("RecentProjects");
  const projects = [
    {
      id: 1,
      title: t("projectOneTitle"),
      slug: "Solar",
      des: t("projectOneDescription"),
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "#",
    },
    {
      id: 2,
      title: t("projectTwoTitle"),
      slug: "Yoom",
      des: t("projectTwoDescription"),
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "#",
    },
    {
      id: 3,
      title: t("projectThreeTitle"),
      slug: "SaaS",
      des: t("projectThreeDescription"),
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "#",
    },
    {
      id: 4,
      title: t("projectFourTitle"),
      slug: "Iphone",
      des: t("projectFourDescription"),
      img: "/p4.svg",
      iconLists: [
        "/next.svg",
        "/tail.svg",
        "/ts.svg",
        "/three.svg",
        "/gsap.svg",
      ],
      link: "#",
    },
  ];
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        {t("recentTitlePartOne")}{" "}
        <span className="text-purple">{t("recentTitlePartTwo")}</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-20">
        {projects.map(({ id, title, slug, des, img, iconLists, link }) => (
          <div
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={id}
          >
            <PinContainer title={slug} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-image" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center gap-2">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 3}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    {t("checkLiveSite")}
                  </p>
                  <FaLocationArrow className="ms-3" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

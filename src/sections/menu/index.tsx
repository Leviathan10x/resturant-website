import NavigationFooter from "@/components/NavigationFooter";
import Link from "next/link";
import { FC, MutableRefObject, useRef, useState } from "react";
import Nav from "./Nav";
import menuImg from "../../assets/menupage.png";
import Feed from "./Feed";


const MenuSection: FC = () => {
  const startersRef = useRef<HTMLDivElement | null>(null);
  const breakfastRef = useRef<HTMLDivElement | null>(null);
  const dinnerRef = useRef<HTMLDivElement | null>(null);
  const drinksRef = useRef<HTMLDivElement | null>(null);
  const salsasRef = useRef<HTMLDivElement | null>(null);
  const nsalsaRef = useRef<HTMLDivElement | null>(null);

  function scrollToSection(sectionId: MutableRefObject<HTMLDivElement | null>) {
    if (sectionId?.current) {
      sectionId?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <section className="w-full flex flex-col lg:flex-row h-full min-h-screen ">
      <div
        style={{
          background: `url(${menuImg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-full lg:w-[50%] p-12 -m-5 flex flex-col justify-between  items-center min-h-[80vh] md:min-h-screen h-full"
      >
        <Link
          href="/"
          className=" text-white font-dancing text-[50px] md:text-[80px] leading-none cursor-pointer"
        >
          PakMan Alitas
        </Link>

        <div className="text-center   "></div>

        
      </div>
      <div className="text-center m-3">
        <h2 className=" text-white font-dancing text-[30px] md:text-[50px] leading-none ">
          La Receta Original
        </h2>
      </div>
      <div className="w-full lg:w-[50%] flex flex-col items-center h-screen">
        <Nav
          startersRef={startersRef}
          breakfastRef={breakfastRef}
          dinnerRef={dinnerRef}
          drinksRef={drinksRef}
          salsasRef={salsasRef}
          nsalsaRef={nsalsaRef}

          navigationHandler={scrollToSection}
        />
        <Feed
          startersRef={startersRef}
          breakfastRef={breakfastRef}
          dinnerRef={dinnerRef}
          drinksRef={drinksRef}
          salsasRef={salsasRef}
          nsalsaRef={nsalsaRef}
        />
      </div>
    </section>
  );
};

export default MenuSection;

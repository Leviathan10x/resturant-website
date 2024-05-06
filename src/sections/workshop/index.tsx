import NavigationFooter from "@/components/NavigationFooter";
import Link from "next/link";
import { FC } from "react";
import menuImg from "../../assets/menupage.jpg";
import Feed from "./Feed";

const WorkshopSection: FC = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row h-full min-h-screen">
      <div
        style={{
          background: require("../../assets/pakman.jpg"),
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-full lg:w-[50%] p-12 flex flex-col justify-between items-center min-h-screen h-full"
      >
        <Link href="/" className="font-semibold cursor-pointer">
          PakMan
        </Link>
        <div className="text-center">
          <h2 className="text-[#FACE8D] font-dancing text-[60px] lg:text-[80px] leading-none">
            Shop
          </h2>
          <h1 className="font-medium text-[60px] lg:text-[80px] leading-none">
            Delicious Breakfast
          </h1>
        </div>

        <NavigationFooter />
      </div>

      <div className="w-full lg:w-[50%] flex flex-col items-center h-screen px-4 lg:px-0">
        <Feed />
      </div>
    </section>
  );
};

export default WorkshopSection;

import React, { FC, MutableRefObject } from "react";

//-------------------------------------------------------
interface IProps {
  startersRef: MutableRefObject<HTMLDivElement | null>;
  breakfastRef: MutableRefObject<HTMLDivElement | null>;
  dinnerRef: MutableRefObject<HTMLDivElement | null>;
  drinksRef: MutableRefObject<HTMLDivElement | null>;
  salsasRef: MutableRefObject<HTMLDivElement | null>;
  nsalsaRef: MutableRefObject<HTMLDivElement | null>;

  navigationHandler: (ref: MutableRefObject<HTMLDivElement | null>) => void;
}
//-------------------------------------------------------

const Nav: FC<IProps> = ({
  navigationHandler,
  startersRef,
  breakfastRef,
  dinnerRef,
  drinksRef,
  salsasRef,
  nsalsaRef,
}) => {
  return (
    <div className="min-h-[74px] w-full flex justify-center items-center">
      <button
        onClick={() => navigationHandler(startersRef)}
        className="font-light text-[#fece00]"
      >
        Personales
      </button>
      <button
        onClick={() => navigationHandler(breakfastRef)}
        className="font-light hover:text-[#fece00] text-white ml-[20px] md:ml-[48px]"
      >
        Familiares
      </button>
      <button
        onClick={() => navigationHandler(dinnerRef)}
        className="font-light hover:text-[#fece00] text-white ml-[20px] md:ml-[48px]"
      >
        Combos Junior
      </button>
     
      
    </div>
  );
};

export default Nav;

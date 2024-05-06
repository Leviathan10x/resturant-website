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
        className="font-light text-[#FACE8D]"
      >
        Personales
      </button>
      <button
        onClick={() => navigationHandler(breakfastRef)}
        className="font-light hover:text-[#FACE8D] text-white ml-[20px] md:ml-[48px]"
      >
        Familiares
      </button>
      <button
        onClick={() => navigationHandler(dinnerRef)}
        className="font-light hover:text-[#FACE8D] text-white ml-[20px] md:ml-[48px]"
      >
        Combos Junior
      </button>
      <button
        onClick={() => navigationHandler(drinksRef)}
        className="font-light hover:text-[#FACE8D] text-white ml-[20px] md:ml-[48px]"
      >
        Adicionales
      </button>
      <button
        onClick={() => navigationHandler(salsasRef)}
        className="font-light hover:text-[#FACE8D] text-white ml-[20px]  md:ml-[48px]"
      >
        Bebidas
      </button>
      
    </div>
  );
};

export default Nav;

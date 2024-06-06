import React, { FC, MutableRefObject, useState } from "react";
import menuData from "./menuData";
import Image from "next/image";
import Footer from "@/components/Footer";

//---------------------------------------------
interface IProps {
  startersRef: MutableRefObject<HTMLDivElement | null>;
  breakfastRef: MutableRefObject<HTMLDivElement | null>;
  dinnerRef: MutableRefObject<HTMLDivElement | null>;
  drinksRef: MutableRefObject<HTMLDivElement | null>;
  salsasRef: MutableRefObject<HTMLDivElement | null>;
  nsalsaRef: MutableRefObject<HTMLDivElement | null>;

  navigationHandler: (ref: MutableRefObject<HTMLDivElement | null>) => void;
}
//---------------------------------------------

const Feed: FC<IProps> = ({
  navigationHandler,
  startersRef,
  breakfastRef,
  dinnerRef,
  drinksRef,
  salsasRef,
  nsalsaRef,
}) => {
  const [showOptions, setShowOptions] = useState<{ [key: number]: boolean }>(
    {}
  );

  const toggleOptions = (itemId: number) => {
    setShowOptions((prevOptions) => ({
      ...prevOptions,
      [itemId]: !prevOptions[itemId],
    }));
  };

  return (
    <div className="mt-[80px] max-w-[628px] w-full overflow-hidden overflow-y-scroll">
      <div ref={startersRef} className="w-full px-[10px]">
        <h1 className="text-[#fece00] font-nine text-[64px] leading-none mb-[32px]">
          Personales
        </h1>
        <p className="text-[16px] text-white text-opacity-50 text-center">
          ¡¡¡ Todos nuestros combos vienen acompañados de papas a la francesa y
          bebida !!!
        </p>
        <br></br>
        <h2 className="text-[#fece00] font-nine text-[54px] leading-none mb-[22px]">
          Combo Alas
        </h2>
        {menuData.personalAlas.map((item) => (
          <div
            style={{
              border: item.id === 3 ? `1px solid #fece00` : "1px solid black",
              borderRadius: 10,
            }}
            key={item.id}
            onClick={() => toggleOptions(item.id)}
            className="flex w-full mt-[16px] cursor-pointer hover:scale-95 duration-150"
          >
            <div className=" flex-shrink-0 ">
              <Image
                width={90}
                height={72}
                src={item.pictureUrl}
                alt={item.name}
                className="rounded-[10px]"
              />
            </div>

            <div className="w-full ml-[24px] pr-[20px]">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{item.price}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
              {showOptions[item.id] && (
                <div className="options-container py-1 my-1 mx-auto">
                  <div>
                    <h4 className=" text-white text-lg text-center">Bebida:</h4>

                    <h4 className=" text-gray-200 text-lg">Gaseosa en vaso:</h4>
                    <div className="flex flex-wrap">
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">Agua</p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">Uva</p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Manzana
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Colombiana
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Sprite
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Quatro
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Kola Roman
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Coca Cola
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Te Durazno
                      </p>
                    </div>

                    <h4 className=" text-gray-200 text-lg">
                      Gaseosa en Botella 237ml:
                    </h4>
                    <div className="flex flex-wrap">
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Sprite
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Coca Cola
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Quatro
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Agua INN
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Agua con gas
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Tamarindo 350ml
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Uva 400ml
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Colombiana 400ml
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Manzana 400ml
                      </p>
                    </div>
                  </div>
                  <div className=" justify-stretch  ">
                    
                  <button
                    onClick={() => navigationHandler(drinksRef)}
                    className="font-light hover:text-[#000000] text-white ml-[5px] md:ml-[48px] bg-blue-600 rounded-md px-2 m-1"
                  >
                    Adicionales
                  </button>

                  <button
                    onClick={() => navigationHandler(salsasRef)}
                    className="font-light hover:text-[#000000] text-white ml-[5px] md:ml-[48px] bg-blue-600 rounded-md px-2 m-1"
                  >
                    Bebidas
                  </button>

                  <button
                    onClick={() => navigationHandler(nsalsaRef)}
                    className="font-light hover:text-[#000000] text-white ml-[5px] md:ml-[48px] bg-blue-600 rounded-md px-2 m-1"
                  >
                    Salsas
                  </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        <br></br>
        <h2 className="text-[#fece00] font-nine text-[54px] leading-none mb-[22px]">
          Combo Costillas
        </h2>
        {menuData.personalCostillas.map((item) => (
          <div
            style={{
              border: item.id === 7 ? `1px solid #fece00` : "1px solid black",
              borderRadius: 10,
            }}
            key={item.id}
            className="flex w-full mt-[16px] cursor-pointer hover:scale-95 duration-150"
            onClick={() => toggleOptions(item.id)}
          >
            <div className=" flex-shrink-0 ">
              <Image
                width={90}
                height={72}
                src={item.pictureUrl}
                alt={item.name}
                className="rounded-[10px]"
              />
            </div>

            <div className="w-full ml-[24px] pr-[20px]">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{item.price}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
              {showOptions[item.id] && (
                <div className="options-container py-1 my-1">
                  <div>
                    <h4 className=" text-white text-lg text-center">Bebida:</h4>

                    <h4 className=" text-gray-200 text-lg">Gaseosa en vaso:</h4>
                    <div className="flex flex-wrap">
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">Agua</p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">Uva</p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Manzana
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Colombiana
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Sprite
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Quatro
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Kola Roman
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Coca Cola
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Te Durazno
                      </p>
                    </div>

                    <h4 className=" text-gray-200 text-lg">
                      Gaseosa en Botella 237ml:
                    </h4>
                    <div className="flex flex-wrap">
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Sprite
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Coca Cola
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Quatro
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Agua INN
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Agua con gas
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Tamarindo 350ml
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Uva 400ml
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Colombiana 400ml
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Manzana 400ml
                      </p>
                    </div>
                  </div>
                  <div className="justify-stretch">
                  <button
                    onClick={() => navigationHandler(drinksRef)}
                    className="font-light hover:text-[#000000] text-white ml-[20px] md:ml-[48px] bg-blue-600 rounded-md px-2 m-1"
                  >
                    Adicionales
                  </button>

                  <button
                    onClick={() => navigationHandler(salsasRef)}
                    className="font-light hover:text-[#000000] text-white ml-[20px] md:ml-[48px] bg-blue-600 rounded-md px-2 m-1"
                  >
                    Bebidas
                  </button>

                  <button
                    onClick={() => navigationHandler(nsalsaRef)}
                    className="font-light hover:text-[#000000] text-white ml-[20px] md:ml-[48px] bg-blue-600 rounded-md px-2 m-1"
                  >
                    Salsas
                  </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        <br></br>
        <h2 className="text-[#fece00] font-nine text-[54px] leading-none mb-[22px]">
          Combo Mixto
        </h2>
        {menuData.personalMixto.map((item) => (
          <div
            style={{
              border: item.id === 11 ? `1px solid #fece00` : "1px solid black",
              borderRadius: 10,
            }}
            key={item.id}
            className="flex w-full mt-[16px] cursor-pointer hover:scale-95 duration-150"
            onClick={() => toggleOptions(item.id)}
          >
            <div className=" flex-shrink-0 ">
              <Image
                width={90}
                height={72}
                src={item.pictureUrl}
                alt={item.name}
                className="rounded-[10px]"
              />
            </div>

            <div className="w-full ml-[24px] pr-[20px]">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{item.price}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>

              {showOptions[item.id] && (
                <div className="options-container py-1 my-1">
                  <div>
                    <h4 className=" text-white text-lg text-center">Bebida:</h4>

                    <h4 className=" text-gray-200 text-lg">Gaseosa en vaso:</h4>
                    <div className="flex flex-wrap">
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">Agua</p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">Uva</p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Manzana
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Colombiana
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Sprite
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Quatro
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Kola Roman
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Coca Cola
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Te Durazno
                      </p>
                    </div>

                    <h4 className=" text-gray-200 text-lg">
                      Gaseosa en Botella 237ml:
                    </h4>
                    <div className="flex flex-wrap">
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Sprite
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Coca Cola
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Quatro
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Agua INN
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Agua con gas
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Tamarindo 350ml
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Uva 400ml
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Colombiana 400ml
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Manzana 400ml
                      </p>
                    </div>
                  </div>
                  <div className="justify-stretch">
                  <button
                    onClick={() => navigationHandler(drinksRef)}
                    className="font-light hover:text-[#000000] text-white ml-[20px] md:ml-[48px] bg-blue-600 rounded-md px-2 m-1"
                  >
                    Adicionales
                  </button>

                  <button
                    onClick={() => navigationHandler(salsasRef)}
                    className="font-light hover:text-[#000000] text-white ml-[20px] md:ml-[48px] bg-blue-600 rounded-md px-2 m-1"
                  >
                    Bebidas
                  </button>

                  <button
                    onClick={() => navigationHandler(nsalsaRef)}
                    className="font-light hover:text-[#000000] text-white ml-[20px] md:ml-[48px] bg-blue-600 rounded-md px-2 m-1"
                  >
                    Salsas
                  </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div ref={breakfastRef} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#fece00] font-nine text-[64px] leading-none mb-[32px]">
          Familiares
        </h1>
        {menuData.Familiares.map((item) => (
          <div
            style={{
              border:
                item.id === 15 ? `1px solid #fece00` : "1px solid transparent",
              borderRadius: 10,
            }}
            key={item.id}
            className="flex w-full mt-[12px] cursor-pointer hover:scale-95 duration-150"
            onClick={() => toggleOptions(item.id)}
          >
            <div className=" flex-shrink-0 ">
            <Image
                width={90}
                height={72}
                src={item.pictureUrl}
                alt={item.name}
                className="rounded-[10px]"
              />
            </div>
              
            

            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{item.price}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
              {showOptions[item.id] && (
                <div className="options-container py-1 my-1">
                  <div>
                    <h4 className=" text-white text-lg text-center">Bebida:</h4>

                    <h4 className=" text-gray-200 text-lg">
                      Gaseosa en Botella 1,5 litros:
                    </h4>
                    <div className="flex flex-wrap">
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Manzana
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Colombiana
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">Uva</p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Coca Cola
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Coca Cola Zero
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Kola Roman
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Kola Roman sin azucar
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Quatro
                      </p>
                      <p className=" rounded-md bg-yellow-600 px-2 m-1">
                        Sprite
                      </p>
                    </div>

                    
                  </div>
                  <div className="justify-stretch">
                  <button
                    onClick={() => navigationHandler(drinksRef)}
                    className="font-light hover:text-[#000000] text-white ml-[20px] md:ml-[48px] bg-blue-600 rounded-md px-2 m-1"
                  >
                    Adicionales
                  </button>

                  <button
                    onClick={() => navigationHandler(salsasRef)}
                    className="font-light hover:text-[#000000] text-white ml-[20px] md:ml-[48px] bg-blue-600 rounded-md px-2 m-1"
                  >
                    Bebidas
                  </button>

                  <button
                    onClick={() => navigationHandler(nsalsaRef)}
                    className="font-light hover:text-[#000000] text-white ml-[20px] md:ml-[48px] bg-blue-600 rounded-md px-2 m-1"
                  >
                    Salsas
                  </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div ref={dinnerRef} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#fece00] font-nine text-[64px] leading-none mb-[32px]">
          Combos Junior
        </h1>
        {menuData.junior.map((item) => (
          <div
            style={{
              border: item.id === 20 ? `1px solid #fece00` : "1px solid black",
              borderRadius: 10,
            }}
            key={item.id}
            className="flex w-full mt-[16px] cursor-pointer hover:scale-95 duration-150"
            onClick={() => toggleOptions(item.id)}
          >
            <div className=" flex-shrink-0 ">
              <Image
                width={90}
                height={72}
                src={item.pictureUrl}
                alt={item.name}
                className="rounded-[10px]"
              />
            </div>

            <div className="w-full ml-[24px] pr-[20px]">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{item.price}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>

              {showOptions[item.id] && (
                      <div className="options-container py-1 my-1">
                        <div>
                          <h4 className=" text-white text-lg text-center">
                            Bebida:
                          </h4>

                          <h4 className=" text-gray-200 text-lg">
                            Gaseosa en vaso:
                          </h4>
                          <div className="flex flex-wrap">
                            <p className=" rounded-md bg-yellow-600 px-2 m-1">
                              Agua
                            </p>
                            <p className=" rounded-md bg-yellow-600 px-2 m-1">
                              Uva
                            </p>
                            <p className=" rounded-md bg-yellow-600 px-2 m-1">
                              Manzana
                            </p>
                            <p className=" rounded-md bg-yellow-600 px-2 m-1">
                              Colombiana
                            </p>
                            <p className=" rounded-md bg-yellow-600 px-2 m-1">
                              Sprite
                            </p>
                            <p className=" rounded-md bg-yellow-600 px-2 m-1">
                              Quatro
                            </p>
                            <p className=" rounded-md bg-yellow-600 px-2 m-1">
                              Kola Roman
                            </p>
                            <p className=" rounded-md bg-yellow-600 px-2 m-1">
                              Coca Cola
                            </p>
                            <p className=" rounded-md bg-yellow-600 px-2 m-1">
                              Te Durazno
                            </p>
                          </div>

                          <h4 className=" text-gray-200 text-lg">
                            Gaseosa en Botella 237ml:
                          </h4>
                          <div className="flex flex-wrap">
                            <p className=" rounded-md bg-yellow-600 px-2 m-1">
                              Sprite
                            </p>
                            <p className=" rounded-md bg-yellow-600 px-2 m-1">
                              Coca Cola
                            </p>
                            <p className=" rounded-md bg-yellow-600 px-2 m-1">
                              Quatro
                            </p>
                            <p className=" rounded-md bg-yellow-600 px-2 m-1">
                              Agua INN
                            </p>
                            <p className=" rounded-md bg-yellow-600 px-2 m-1">
                              Agua con gas
                            </p>
                            <p className=" rounded-md bg-yellow-600 px-2 m-1">
                              Tamarindo 350ml
                            </p>
                            <p className=" rounded-md bg-yellow-600 px-2 m-1">
                              Uva 400ml
                            </p>
                            <p className=" rounded-md bg-yellow-600 px-2 m-1">
                              Colombiana 400ml
                            </p>
                            <p className=" rounded-md bg-yellow-600 px-2 m-1">
                              Manzana 400ml
                            </p>
                          </div>
                        </div>
                        <div className="justify-stretch">
                  <button
                    onClick={() => navigationHandler(drinksRef)}
                    className="font-light hover:text-[#000000] text-white ml-[20px] md:ml-[48px] bg-blue-600 rounded-md px-2 m-1"
                  >
                    Adicionales
                  </button>

                  <button
                    onClick={() => navigationHandler(salsasRef)}
                    className="font-light hover:text-[#000000] text-white ml-[20px] md:ml-[48px] bg-blue-600 rounded-md px-2 m-1"
                  >
                    Bebidas
                  </button>

                  <button
                    onClick={() => navigationHandler(nsalsaRef)}
                    className="font-light hover:text-[#000000] text-white ml-[20px] md:ml-[48px] bg-blue-600 rounded-md px-2 m-1"
                  >
                    Salsas
                  </button>
                  </div>
                      </div>
                    )}

            </div>
          </div>
        ))}
      </div>

      <div ref={drinksRef} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#fece00] font-nine text-[64px] leading-none mb-[32px]">
          Adicionales
        </h1>
        {menuData.drinks.map((item) => (
          <div
            style={{
              border: item.id === 3 ? `1px solid #fece00` : "1px solid black",
              borderRadius: 10,
            }}
            key={item.id}
            className="flex w-full mt-[16px] cursor-pointer hover:scale-95 duration-150"
          >
            <div className=" flex-shrink-0 ">
            <Image
              width={90}
              height={72}
              src={item.pictureUrl}
              alt={item.name}
              className="rounded-[10px]"
            />
            </div>
            
            <div className="w-full ml-[24px] pr-[20px]">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{item.price}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div ref={salsasRef} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#fece00] font-nine text-[64px] leading-none mb-[32px]">
          Bebidas
        </h1>
        {menuData.bebidas.map((item) => (
          <div
            style={{
              border: item.id === 3 ? `1px solid #fece00` : "1px solid black",
              borderRadius: 10,
            }}
            key={item.id}
            className="flex w-full mt-[16px] cursor-pointer hover:scale-95 duration-150"
          >
            <div className=" flex-shrink-0 ">
            <Image
              width={90}
              height={72}
              src={item.pictureUrl}
              alt={item.name}
              className="rounded-[10px]"
            />
            </div>
            
            <div className="w-full ml-[24px] pr-[20px]">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{item.price}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        <br></br>
        <h2 className="text-[#fece00] font-nine text-[54px] leading-none mb-[22px]">
          Jugos:
        </h2>
        <p className="text-[16px] text-white text-opacity-50 text-center">
          ¡¡¡ Puedes pedirlos en agua $5.000 o en leche $7.000 !!!
        </p>

        {menuData.Jugos.map((item) => (
          <div
            style={{
              border: item.id === 3 ? `1px solid #fece00` : "1px solid black",
              borderRadius: 10,
            }}
            key={item.id}
            className="flex w-full mt-[16px] cursor-pointer hover:scale-95 duration-150"
          >
            <div className=" flex-shrink-0 ">
            <Image
              width={90}
              height={72}
              src={item.pictureUrl}
              alt={item.name}
              className="rounded-[10px]"
            />
            </div>
            
            <div className="w-full ml-[24px] pr-[20px]">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{item.price}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        <br></br>
        <h2 className="text-[#fece00] font-nine text-[54px] leading-none mb-[22px]">
          Nuestras limonadas:
        </h2>
        {menuData.limandas.map((item) => (
          <div
            style={{
              border: item.id === 3 ? `1px solid #fece00` : "1px solid black",
              borderRadius: 10,
            }}
            key={item.id}
            className="flex w-full mt-[16px] cursor-pointer hover:scale-95 duration-150"
          >
            <div className=" flex-shrink-0 ">
            <Image
              width={90}
              height={72}
              src={item.pictureUrl}
              alt={item.name}
              className="rounded-[10px]"
            />
            </div>
            
            <div className="w-full ml-[24px] pr-[20px]">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{item.price}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div ref={nsalsaRef} className="w-full px-[10px] mt-[96px]">
        <br></br>
        <h2 className="text-[#fece00] font-nine text-[54px] leading-none mb-[22px] text-center">
          Nuestras Salsas:
        </h2>
        <p className="text-[16px] text-white text-opacity-50 text-center">
          ¡¡¡ Cada Combo incluye 2 salsas !!!
        </p>
        <p className="text-[16px] text-white text-opacity-50 text-center">
          * Adicion $1.000
        </p>

        <h3 className="text-[20px] text-center">
          BBQ - Miel mostaza - Chile dulce - Bufalo Medio - Bufalo fuerte -
          Parmesano - Mango - Chipotle - Maracuya dulce - Maracuya picante -
          Frutos rojos dulce - Frutos rojos picante - Teriyaki - Tamarindo - Ajo
          - BBQ miel - Hot ajo
        </h3>
      </div>

      <Footer />
    </div>
  );
};

export default Feed;

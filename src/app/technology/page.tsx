"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Technology() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(1);

  const technology = [
    {
      id: 1,
      label: "LAUNCH VEHICLE",
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      img: "/Technology Image - A.svg",
    },
    {
      id: 2,
      label: "SPACEPORT",
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      img: "/Technology Image - B.svg",
    },
    {
      id: 3,
      label: "SPACE CAPSULE",
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      img: "/Technology Image - C.svg",
    },
  ];

  return (
    <section className="bg-technology h-full">
      <nav className=" md:hidden flex flex-row justify-between p-6">
        <Image src="/Logo.svg" width={40} height={40} alt="Logo" />
        <Image
          src="/menu.svg"
          width={24}
          height={21}
          alt="Hamburger Icon"
          onClick={() => setMenu(true)}
        />
      </nav>

      <nav className="hidden lg:flex flex-row justify-between pt-8 pl-14 2xl:pl-32">
        <div className="flex flex-row items-center justify-between">
          <Image src="/Logo.svg" width={48} height={48} alt="Logo" />
          <Image
            className="ml-5 z-20 2xl:ml-32"
            src="/line.svg"
            height={1}
            width={560}
            alt="line"
          />
        </div>
        <ul className="w-[736px] h-24 bg-white/5 backdrop-blur-sm flex flex-row items-center justify-evenly">
          <li>
            <a
              className="text-white text-xl font-condensed font-thin bg-gradient-to-r bg-left-bottom from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-300 ease-out pb-9"
              href="/"
            >
              00 Home
            </a>
          </li>
          <li>
            <a
              className="text-white text-xl font-condensed font-thin bg-gradient-to-r bg-left-bottom from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-300 ease-out pb-9"
              href="/destination"
            >
              01 Destination
            </a>
          </li>
          <li>
            <a
              className="text-white text-xl font-condensed font-thin bg-gradient-to-r from-white to-white bg-left-bottom bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-300 ease-out pb-9"
              href="/crew"
            >
              02 Crew
            </a>
          </li>
          <li>
            <a
              className="text-white text-xl font-condensed font-thin  bg-gradient-to-r bg-left-bottom from-white to-white   bg-no-repeat bg-[length:100%_2px] transition-all duration-300 ease-out pb-9"
              href="/technology"
            >
              03 Technology
            </a>
          </li>
        </ul>
      </nav>

      <nav className="hidden md:flex flex-row justify-between relative h-28 lg:hidden">
        <div className="relative h-full flex flex-row justify-center items-center w-1/4">
          <Image src="/Logo.svg" alt="Logo" width={70} height={80} />
        </div>
        <ul className=" bg-gradient-to-r from-[#FFFFFF]/5 via-[#F9F9F9]/5 to-[#999999]/5  0 flex flex-row justify-center gap-20 items-center w-full backdrop-blur-sm">
          <li>
            <a
              className="font-sans text-xl text-white bg-gradient-to-r bg-left-bottom bg-no-repeat from-white to-white bg-[length:0%_2px] hover:bg-[length:100%_2px] transition-all duration-300 ease-out pb-9"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="font-sans text-xl text-white bg-gradient-to-r bg-left-bottom bg-no-repeat from-white to-white bg-[length:0%_2px] hover:bg-[length:100%_2px] transition-all duration-300 ease-out pb-9"
              href="/destination"
            >
              Destination
            </a>
          </li>
          <li>
            <a
              className="font-sans text-xl text-white bg-gradient-to-r bg-left-bottom bg-no-repeat from-white to-white bg-[length:0%_2px] hover:bg-[length:100%_2px] transition-all duration-300 ease-out pb-9"
              href="/crew"
            >
              Crew
            </a>
          </li>
          <li>
            <a
              className="font-sans text-xl text-white bg-gradient-to-r bg-left-bottom bg-no-repeat from-white to-white bg-[length:100%_2px] transition-all duration-300 ease-out pb-9"
              href="/technology"
            >
              Technology
            </a>
          </li>
        </ul>
      </nav>

      {menu ? (
        <nav className="flex flex-col fixed top-0 right-0 h-full bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-md gap-32 pt-20 w-3/5 px-8">
          <div className="flex justify-end">
            <Image
              src="/X-Mark.svg"
              height={20}
              width={20}
              alt="X Mark "
              onClick={() => setMenu(false)}
            />
          </div>

          <ol>
            <li className="mb-8 text-white font-light text-2xl">
              00
              <a className="mx-5 font-light" href="/">
                Home
              </a>
            </li>
            <li className="mb-8 font-light text-white text-2xl">
              01
              <a className="mx-5 font-light" href="/destination">
                Destination{" "}
              </a>
            </li>
            <li className="mb-8 font-light text-white text-2xl">
              02
              <a className="mx-5 font-light" href="/crew">
                Crew{" "}
              </a>
            </li>
            <li className="mb-8 font-light text-white text-2xl flex items-center relative">
              <span>03</span>
              <a className="ml-5 font-light " href="/technology">
                Technology
              </a>
              <span className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-white to-white"></span>
            </li>
          </ol>
        </nav>
      ) : null}

      <div className="h-screen p-6">
        <div className="h-full flex flex-col gap-5 lg:pl-32">
          <div className="flex flex-row justify-center gap-5 md:justify-start mb-16">
            <h1 className="text-gray-600 font-barlowCondensed font-bold text-xl tracking-widest">
              03
            </h1>
            <h1 className="uppercase font-barlowCondensed text-xl text-white tracking-widest">
              space launch 101
            </h1>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row-reverse xl:gap-0">
            {technology.map((data) => {
              return (
                active === data?.id && (
                  <div key={data?.id} className="flex justify-center ">
                    <img
                      src={data?.img}
                      alt={data?.label}
                      className="object-contain xl:w-[608px] xl:h-[450px] 2xl:h-[600px]"
                    />
                  </div>
                )
              );
            })}

            <div className="flex flex-col gap-5 lg:flex-row xl:w-1/2">
              <div className="flex flex-row gap-5 justify-center lg:flex-col">
                {technology.map((data) => {
                  return (
                    <button
                      key={data?.id}
                      className={`h-10 w-10 rounded-full border-2 border-gray-600 lg:h-20 lg:w-20 lg:text-3xl ${
                        active === data?.id
                          ? `text-black bg-white`
                          : `text-white`
                      }`}
                      onClick={() => {
                        setActive(data?.id);
                      }}
                    >
                      {data?.id}
                    </button>
                  );
                })}
              </div>
              <div className="flex flex-col items-center gap-5 lg:items-start lg:justify-center">
                <h1 className="uppercase text-gray-600 tracking-widest font-bellefair xl:text-4xl">
                  the terminology...
                </h1>
                {technology.map((data) => {
                  return (
                    active === data?.id && (
                      <div
                        key={data?.id}
                        className="flex flex-col items-center gap-5 lg:items-start"
                      >
                        <h1 className="text-white text-2xl text-center font-bellefair tracking-widest xl:text-5xl">
                          {data?.label}
                        </h1>
                        <p className="tracking-widest font-barlow text-white text-center text-base leading-8 md:mx-40 lg:text-start lg:mx-0">
                          {data?.description}
                        </p>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

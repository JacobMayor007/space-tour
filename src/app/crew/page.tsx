"use client";

import Image from "next/image";
import { Suspense, useState, useEffect } from "react";
import Loading from "../destination/loading";
export default function Crew() {
  const [menu, setMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState("dh");

  const crew = [
    {
      id: "dh",
      label: "Douglas Hurley",
      img: "/douglas.svg",
      role: "Commander",
      description:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      id: "mh",
      label: "Mark Shuttleworth",
      img: "/mark.svg",
      role: "Missin Specialist",
      description:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      id: "vg",
      label: "Victor Glover",
      img: "/victor.svg",
      role: "Pilot",
      description:
        " Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    },
    {
      id: "aa",
      label: "Anousheh Ansari",
      img: "/anousheh.svg",
      role: "Flight Engineer",
      description:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="h-full flex flex-col bg-crew overflow-hidden">
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
                className="text-white text-xl font-condensed font-thin bg-gradient-to-r from-white to-white bg-left-bottom bg-no-repeat bg-[length:100%_2px] transition-all duration-300 ease-out pb-9"
                href="/crew"
              >
                02 Crew
              </a>
            </li>
            <li>
              <a
                className="text-white text-xl font-condensed font-thin  bg-gradient-to-r bg-left-bottom from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-300 ease-out pb-9"
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
                className="font-sans text-xl text-white bg-gradient-to-r bg-left-bottom bg-no-repeat from-white to-white bg-[length:100%_2px] transition-all duration-300 ease-out pb-9"
                href="/crew"
              >
                Crew
              </a>
            </li>
            <li>
              <a
                className="font-sans text-xl text-white bg-gradient-to-r bg-left-bottom bg-no-repeat from-white to-white bg-[length:0%_2px] hover:bg-[length:100%_2px] transition-all duration-300 ease-out pb-9"
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
              <li className="mb-8 font-light text-white text-2xl flex items-center relative">
                <span>02</span>
                <a className="ml-5 font-light " href="/technology">
                  Crew
                </a>
                <span className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-white to-white"></span>
              </li>
              <li className="mb-8 font-light text-white text-2xl ">
                03
                <a className="mx-5 font-light" href="/technology">
                  Technology
                </a>
              </li>
            </ol>
          </nav>
        ) : null}
        <div className="h-screen p-6 md:h-full">
          <div className="flex flex-col items-center justify-center gap-10 md:justify-start md:items-start md:p-10 h-full xl:gap-0">
            <h1 className="text-xl tracking-widest text-center font-bellefair text-white md:text-start">
              <span className="text-xl tracking-widest text-center font-bellefair text-gray-300 md:text-start">
                02
              </span>{" "}
              MEET YOUR CREW
            </h1>
            <div className="w-full flex flex-col justify-center items-center xl:flex-row ">
              {/* Crew details */}
              <div className="flex flex-col items-center my-8 xl:w-1/2 xl:justify-start xl:items-start">
                {crew.map((data) => {
                  return (
                    active === data.id && (
                      <div
                        key={data.id}
                        className="flex flex-col items-center xl:mb-28 xl:items-start xl:px-24"
                      >
                        <h2 className="text-lg uppercase text-gray-400 md:text-2xl">
                          {data.role}
                        </h2>
                        <h1 className="text-2xl uppercase my-4 text-white font-bellefair md:text-4xl">
                          {data.label}
                        </h1>
                        <p className="text-center text-gray-300 mb-6 font-barlow text-base mx-10 xl:text-justify xl:text-lg xl:mx-0">
                          {data?.description}
                        </p>
                      </div>
                    )
                  );
                })}
                <div className="flex justify-center items-center gap-4 my-8 xl:justify-start xl:items-start xl:px-24">
                  {crew.map((data) => (
                    <button
                      key={data.id}
                      className={`w-3 h-3 rounded-full ${
                        active === data.id ? "bg-white" : "bg-gray-600"
                      }`}
                      onClick={() => setActive(data.id)}
                    />
                  ))}
                </div>
              </div>
              {crew.map((data) => {
                return (
                  active === data?.id && (
                    <div
                      key={data?.id}
                      className="flex justify-center items-center xl:w-1/2"
                    >
                      <img
                        src={data.img}
                        alt={data.label}
                        className="w-96 h-96 object-contain md:h-[560px] md:w-[560px]"
                      />
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

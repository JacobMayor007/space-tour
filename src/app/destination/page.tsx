"use client";

import Image from "next/image";
import { Suspense, useState, useEffect } from "react";
import Loading from "./loading"; // Import the new component

export default function Destination() {
  const [menu, setMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState("moon");

  const nav = [
    { id: "moon", label: "Moon" },
    { id: "mars", label: "Mars" },
    { id: "europa", label: "Europa" },
    { id: "titan", label: "Titan" },
  ];

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="h-full flex flex-col bg-destination overflow-hidden">
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
                className="font-sans text-xl text-white bg-gradient-to-r bg-left-bottom bg-no-repeat from-white to-white bg-[length:0%_2px] hover:bg-[length:100%_2px] transition-all duration-300 ease-out pb-9"
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
              <li className="mb-8 font-light text-white text-2xl">
                02
                <a className="mx-5 font-light" href="/crew">
                  Crew{" "}
                </a>
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

        <div className="h-full sm:px-24 md:px-32 lg:flex lg:flex-row lg:h-screen lg:gap-10">
          <div className="lg:w-1/2">
            <div className="flex flex-row justify-center gap-5 py-6 xl:justify-start">
              <p className="text-white text-2xl font-barlow font-thin">01</p>
              <h1 className="text-white text-2xl font-barlowCondensed font-thin uppercase">
                pick your destination
              </h1>
            </div>
            <div className="h-1/3 flex justify-center lg:items-center lg:h-full 2xl:items-start 2xl:justify-center">
              {active === "moon" && (
                <Image
                  className="object-contain md:w-[400px]"
                  src="/Moon.svg"
                  width={228}
                  height={228}
                  alt="Moon"
                />
              )}
              {active === "mars" && (
                <Image
                  className="object-contain md:w-[400px]"
                  src="/Mars.svg"
                  width={228}
                  height={228}
                  alt="Mars"
                />
              )}
              {active === "europa" && (
                <Image
                  className="object-contain md:w-[400px]"
                  src="/Europa.svg"
                  width={228}
                  height={228}
                  alt="Europa"
                />
              )}
              {active === "titan" && (
                <Image
                  className="object-contain md:w-[400px]"
                  src="/Titan.svg"
                  width={228}
                  height={228}
                  alt="Titan"
                />
              )}
            </div>
          </div>
          <div className="lg:w-1/2 pt-12">
            <div className="h-1/2 pt-24 flex flex-col lg:h-full">
              <div className="flex flex-row justify-around">
                {nav?.map((data) => {
                  return (
                    <div
                      key={data.id}
                      onClick={() => {
                        setActive(data.id);
                      }}
                      className={`cursor-pointer bg-gradient-to-r bg-left-bottom bg-no-repeat bg-[length:0%_2px] hover:bg-[length:100%_2px] from-white to-white transition-all duration-300 ease-out font-barlow ${
                        active === data.id ? `text-white` : `text-[#D0D6f9]`
                      }`}
                    >
                      {data?.label}
                    </div>
                  );
                })}
              </div>
              <div className="lg:flex lg:flex-col lg:justify-center lg:items-center pt-8">
                {active === "moon" && (
                  <div className="p-6 flex flex-col gap-5 lg:p-0  w-[100%] lg:gap-10">
                    <h1 className="uppercase font-bellefair text-7xl pt-2 text-white text-center lg:text-start">
                      Moon
                    </h1>
                    <p className="text-[#D0D6f9] text-lg text-center font-barlow leading-8 mx-3 lg:mr-28 lg:text-justify">
                      See our planet as you’ve never seen it before. A perfect
                      relaxing trip away to help regain perspective and come
                      back refreshed. While you’re there, take in some history
                      by visiting the Luna 2 and Apollo 11 landing sites.
                    </p>
                  </div>
                )}
                {active === "mars" && (
                  <div className="p-6 flex flex-col gap-5 lg:p-0 justify-center w-full">
                    <h1 className="uppercase font-bellefair text-7xl pt-2 text-white text-center lg:text-start">
                      Mars
                    </h1>
                    <p className="text-[#D0D6f9] text-lg text-center font-barlow leading-8 mx-3 lg:mr-28 lg:text-justify">
                      Don’t forget to pack your hiking boots. You’ll need them
                      to tackle Olympus Mons, the tallest planetary mountain in
                      our solar system. It’s two and a half times the size of
                      Everest!
                    </p>
                  </div>
                )}
                {active === "europa" && (
                  <div className="p-6 flex flex-col gap-5 lg:p-0 justify-center w-full">
                    <h1 className="uppercase font-bellefair text-7xl pt-2 text-white text-center lg:text-start">
                      Europa
                    </h1>
                    <p className="text-[#D0D6f9] text-lg text-center font-barlow leading-8 mx-3 lg:mr-28 lg:text-justify">
                      The smallest of the four Galilean moons orbiting Jupiter,
                      Europa is a winter lover’s dream. With an icy surface,
                      it’s perfect for a bit of ice skating, curling, hockey, or
                      simple relaxation in your snug wintery cabin.
                    </p>
                  </div>
                )}
                {active === "titan" && (
                  <div className="p-6 flex flex-col gap-5 lg:p-0 justify-center w-full">
                    <h1 className="uppercase font-bellefair text-7xl pt-2 text-white text-center lg:text-start">
                      Titan
                    </h1>
                    <p className="text-[#D0D6f9] text-lg text-center font-barlow leading-8 mx-3 lg:mr-28 lg:text-justify">
                      The only moon known to have a dense atmosphere other than
                      Earth, Titan is a home away from home (just a few hundred
                      degrees colder!). As a bonus, you get striking views of
                      the Rings of Saturn.
                    </p>
                  </div>
                )}
                <hr className="text-[#979797] mt-7 mx-8" />
              </div>
              {active === "moon" && (
                <div className="flex flex-col justify-center items-center gap-5 p-6 md:flex-row md:gap-20 xl:justify-start md:px-0">
                  <div>
                    <p className="text-[#D0D6f9] text-lg font-barlowCondensed">
                      AVG. DISTANCE
                    </p>
                    <h1 className="text-white text-3xl font-bellefair uppercase">
                      384,400 km
                    </h1>
                  </div>
                  <div>
                    <p className="text-[#D0D6f9] text-lg font-barlowCondensed">
                      EST. TRAVEL TIME
                    </p>
                    <h1 className="text-white text-3xl font-bellefair">
                      3 DAYS
                    </h1>
                  </div>
                </div>
              )}

              {active === "mars" && (
                <div className="flex flex-col justify-center items-center gap-5 p-6 md:flex-row md:gap-20 xl:justify-start md:px-0">
                  <div>
                    <p className="text-[#D0D6f9] text-lg font-barlowCondensed">
                      AVG. DISTANCE
                    </p>
                    <h1 className="text-white text-3xl font-bellefair">
                      225 MIL. km
                    </h1>
                  </div>
                  <div>
                    <p className="text-[#D0D6f9] text-lg font-barlowCondensed">
                      EST. TRAVEL TIME
                    </p>
                    <h1 className="text-white text-3xl font-bellefair">
                      9 months
                    </h1>
                  </div>
                </div>
              )}
              {active === "europa" && (
                <div className="flex flex-col justify-center items-center gap-5 p-6 md:flex-row md:gap-20 xl:justify-start md:px-0">
                  <div>
                    <p className="text-[#D0D6f9] text-lg font-barlowCondensed tracking-widest">
                      AVG. DISTANCE
                    </p>
                    <h1 className="text-white text-3xl font-bellefair uppercase  tracking-widest">
                      628 MIL. km
                    </h1>
                  </div>
                  <div>
                    <p className="text-[#D0D6f9] text-lg font-barlowCondensed  tracking-widest">
                      EST. TRAVEL TIME
                    </p>
                    <h1 className="text-white text-3xl font-bellefair uppercase  tracking-widest">
                      3 years
                    </h1>
                  </div>
                </div>
              )}
              {active === "titan" && (
                <div className="flex flex-col justify-center items-center gap-5 p-6 md:flex-row md:gap-20 xl:justify-start md:px-0">
                  <div className="">
                    <p className="text-[#D0D6f9] text-lg font-barlowCondensed">
                      AVG. DISTANCE
                    </p>
                    <h1 className="text-white text-3xl font-bellefair">
                      1.6 BIL. KM
                    </h1>
                  </div>
                  <div>
                    <p className="text-[#D0D6f9] text-lg font-barlowCondensed">
                      EST. TRAVEL TIME
                    </p>
                    <h1 className="text-white text-3xl font-bellefair">
                      7 YEARS
                    </h1>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

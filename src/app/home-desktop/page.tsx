"use client";
import React from "react";
import Image from "next/image";

export default function HomeDesktop() {
  return (
    <div className="hidden h-screen xl:h-full 2xl:h-screen home-bg-desktop lg:flex flex-col">
      <nav className="flex flex-row justify-between pt-8 pl-14 2xl:pl-32">
        <div className="flex flex-row items-center justify-between">
          <Image src="/Logo.svg" width={48} height={48} alt="Logo" />
          <Image
            className="ml-20 z-20 2xl:ml-32"
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
      <div className="flex-grow pb-96 xl:py-32">
        <div className="h-full lg:px-20 xl:px-36 2xl:px-52 flex flex-row justify-center items-end">
          <div className="flex flex-col justify-start gap-10 w-1/2">
            <p className="text-lg text-blue-100 font-barlowCondensed tracking-widest md:text-2xl">
              SO, YOU WANT TO TRAVEL TO
            </p>
            <h1 className="text-white font-bellefair text-6xl tracking-widest md:text-9xl">
              SPACE
            </h1>
            <p className="text-lg text-justify font-barlow text-blue-100 tracking-widest leading-8">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well, sit back, and relax because we’ll give you a truly out
              of this world experience!
            </p>
          </div>
          <div className="flex justify-end items-center w-1/2">
            <a href="/destination">
              <button className="h-96 w-96 rounded-full flex justify-center items-center hover:bg-white/5 hover:backdrop-blur-sm">
                <Image
                  className="z-[100] bg-white rounded-full object-contain"
                  src="/Display Button States - Mobile.svg"
                  width={300}
                  height={300}
                  alt="Explore Button"
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

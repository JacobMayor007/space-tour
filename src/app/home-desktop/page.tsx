import React from "react";
import Image from "next/image";
export const HomeDesktop = () => {
  return (
    <div className="hidden h-screen xl:h-full 2xl:h-screen home-bg-desktop lg:flex flex-col">
      <nav className="flex flex-row justify-between pt-8 pl-14 2xl:pl-32">
        <div className="flex flex-row items-center justify-between ">
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
            <a className="text-white text-md font-serif" href="">
              Home
            </a>
          </li>
          <li>
            <a className="text-white text-md font-serif" href="">
              Destination
            </a>
          </li>
          <li>
            <a className="text-white text-md font-serif" href="">
              Crew
            </a>
          </li>
          <li>
            <a className="text-white text-md font-serif" href="">
              Technology
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex-grow pb-96 xl:py-32 ">
        <div className="h-full lg:px-20 xl:px-36 2xl:px-52 flex flex-row justify-center items-end ">
          <div className="flex flex-col justify-start gap-10 w-1/2 ">
            <p className=" text-lg text-blue-100 tracking-widest md:text-2xl">
              SO, YOU WANT TO TRAVEL TO
            </p>
            <h1 className=" text-white text-6xl tracking-widest md:text-9xl">
              SPACE
            </h1>
            <p className=" text-lg text-justify  text-blue-100 tracking-widest leading-8">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className=" flex justify-end items-center w-1/2">
            <button className="h-96 w-96 rounded-full flex justify-center items-center hover:bg-white/5 hover:backdrop-blur-sm">
              <Image
                className="z-[100] bg-white rounded-full"
                src="Display Button States - Mobile.svg"
                width={300}
                height={40}
                alt="Explore Button"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

"use client";
import Loading from "../destination/loading";
import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";

export default function Home() {
  const [show, setShow] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // Set loading state for 1 second
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Suspense>
      <div className="h-full home-bg-sm md:h-screen lg:hidden bg-cover bg-center py-16 p-5 md:py-0 md:p-0">
        <nav className="md:hidden flex flex-row items-center justify-between">
          <div className="relative h-14 w-16">
            <Image src="/Logo.svg" alt="Logo" fill />
          </div>
          <div className="relative h-7 w-7">
            <Image
              src="/menu.svg"
              alt="Menu"
              fill
              onClick={() => setShow(true)}
            />
          </div>
        </nav>
        <nav className="hidden md:flex flex-row justify-between relative h-28">
          <div className="relative h-full flex flex-row justify-center items-center w-1/4">
            <Image src="/Logo.svg" alt="Logo" width={70} height={80} />
          </div>
          <ul className=" bg-gradient-to-r from-[#FFFFFF]/5 via-[#F9F9F9]/5 to-[#999999]/5  0 flex flex-row justify-center gap-20 items-center w-full backdrop-blur-sm">
            <li>
              <a className="font-sans text-xl text-white" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="font-sans text-xl text-white" href="/destination">
                Destination
              </a>
            </li>
            <li>
              <a className="font-sans text-xl text-white" href="/crew">
                Crew
              </a>
            </li>
            <li>
              <a className="font-sans text-xl text-white" href="/technology">
                Technology
              </a>
            </li>
          </ul>
        </nav>

        {show ? (
          <nav className="flex flex-col fixed top-0 right-0 h-full bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-md gap-32 pt-20 w-3/5 px-8">
            <div className="flex justify-end">
              <Image
                src="/X-Mark.svg"
                height={20}
                width={20}
                alt="X Mark "
                onClick={() => setShow(false)}
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

        <div className="h-full md:h-auto md:my-32 md:mx-10 py-6 px-5 sm:py-10 sm:mx-5">
          <div className="h-full flex flex-col sm:px-20 md:px-24">
            <div className="flex flex-col gap-10 md:mb-32">
              <p className="text-center text-lg text-blue-100 tracking-widest md:text-2xl">
                SO, YOU WANT TO TRAVEL TO
              </p>
              <h1 className="text-center text-white text-6xl tracking-widest md:text-9xl">
                SPACE
              </h1>
              <p className="text-center text-lg text-wrap text-blue-100 tracking-widest leading-8">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
            <div className=" flex justify-center items-center">
              <button className="relative h-80 w-80 rounded-full flex justify-center items-center hover:bg-white/5 hover:backdrop-blur-sm">
                <Image
                  className="z-[100] bg-white rounded-full"
                  src="Display Button States - Mobile.svg"
                  width={200}
                  height={40}
                  alt="Explore Button"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import img from '../src/images/logo.png';
import webDesign from '../src/images/web-design.png';
import webDev from '../src/images/web-development.png';
import ios from '../src/images/ios.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faBars,
  faChevronCircleLeft,
  faChevronCircleRight,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import logo1 from '../src/images/self-assessment.svg';
import logo2 from '../src/images/career-exploration.svg';
import logo3 from '../src/images/networking.svg';
import logo4 from '../src/images/goal-setting.svg';
import logo5 from '../src/images/decision-making.svg';
import slide1 from '../src/images/carousel-1.svg';
import slide2 from '../src/images/carousel-2.svg';
import slide3 from '../src/images/carousel-3.svg';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [open, setOpen] = useState(false);
  const slides = {
    img: 'slide1',
  };
  return (
    <main className="bg-slate-900">
      <div className="container m-auto relative">
        <nav className="z-50 px-12 bg-slate-900 h-24 flex items-center drop-shadow fixed left-0 top-0 right-0">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center cursor-pointer">
              <div>
                <Image src={img} alt="" className="w-12" />
              </div>
              <div className="ml-2">
                <h1 className="text-2xl">Edlighten.ai</h1>
              </div>
            </div>
            <div>
              <ul
                className={`flex justify-between font-bold ${
                  open ? 'top-24' : 'top-[-490px]'
                }`}
              >
                <li className="hover:text-amber-400">
                  <a href="">Home</a>
                </li>
                <li className="ml-6 hover:text-amber-400">
                  <a href="">About</a>
                </li>
                <li className="ml-6 hover:text-amber-400">
                  <a href="">Courses</a>
                </li>
                <li className="ml-6 hover:text-amber-400">
                  <a href="">Plan</a>
                </li>
                <li className="ml-6 hover:text-amber-400">
                  <a href="">Career Board</a>
                </li>
                <li className="ml-6 hover:text-amber-400">
                  <a href="">Career Library</a>
                </li>
              </ul>
            </div>
            <div>
              <button className="hover:text-amber-400 font-bold">
                Sign in
              </button>
            </div>
            <div
              className="cursor-pointer lg:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </div>
          </div>
        </nav>
        <section className="relative mt-12">
          <div className="h-64 text-center flex flex-col items-center justify-center">
            <h1 className="text-4xl text-white mt-24 font-bold">
              Discover your passion and <br /> pathway to your dream career
            </h1>
            <div className="mt-4">
              <p>Unlock your true potential with our expertly designed tests</p>
              <div className="mt-4 flex items-center justify-evenly">
                <button className="px-6 py-2 bg-amber-500 rounded-3xl font-bold">
                  Get started
                </button>
                <button className="px-6 py-2 bg-amber-500 rounded-3xl font-bold">
                  Get started
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex">
              <Image src={slide1} alt="" className="w-[500px]" />
              <Image src={slide2} alt="" className="w-[500px]" />
              <Image src={slide3} alt="" className="w-[500px]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-between">
              <button className="text-4xl bg-white/80 hover:bg-white text-black rounded-full w-12 h-12">
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
              <button className="text-4xl bg-white/80 hover:bg-white text-black rounded-full w-12 h-12">
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
          </div>
        </section>
        <section className="">
          <div className="text-center mt-12">
            <h1 className="text-4xl py-4">5 Steps To Your Success</h1>
            <p>
              Achieve Success with the Edlighten Framework: Unlocking Your Path
              through 5 Key Steps.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 justify-items-center items-center gap-10 mt-24">
            <div className="bg-slate-700 w-96 h-96 rounded-lg p-12">
              <div className="flex items-center justify-center text-center">
                <div className="flex items-center justify-center h-28 w-28 border rounded-lg bg-white">
                  <Image src={logo1} alt="" className="" />
                </div>
              </div>
              <div className="text-center mt-4">
                <h1 className="text-lg font-bold ">Web Design</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis, quis.
                </p>
              </div>
            </div>
            <div className="bg-slate-700 w-96 h-96 rounded-lg p-12">
              <div className="flex items-center justify-center text-center">
                <div className="flex items-center justify-center h-28 w-28 border rounded-lg bg-white">
                  <Image src={logo2} alt="" className="" />
                </div>
              </div>
              <div className="text-center mt-4">
                <h1 className="text-lg font-bold ">Web Design</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis, quis.
                </p>
              </div>
            </div>
            <div className="bg-slate-700 w-96 h-96 rounded-lg p-12">
              <div className="flex items-center justify-center text-center">
                <div className="flex items-center justify-center h-28 w-28 border rounded-lg bg-white">
                  <Image src={logo4} alt="" className="" />
                </div>
              </div>
              <div className="text-center mt-4">
                <h1 className="text-lg font-bold ">Web Design</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis, quis.
                </p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 justify-items-center items-center gap-10 mt-12">
            <div className="bg-slate-700 w-96 h-96 rounded-lg p-12">
              <div className="flex items-center justify-center text-center">
                <div className="flex items-center justify-center h-28 w-28 border rounded-lg bg-white">
                  <Image src={logo3} alt="" className="" />
                </div>
              </div>
              <div className="text-center mt-4">
                <h1 className="text-lg font-bold ">Web Design</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis, quis.
                </p>
              </div>
            </div>
            <div className="bg-slate-700 w-96 h-96 rounded-lg p-12">
              <div className="flex items-center justify-center text-center">
                <div className="flex items-center justify-center h-28 w-28 border rounded-lg bg-white">
                  <Image src={logo5} alt="" className="" />
                </div>
              </div>
              <div className="text-center mt-4">
                <h1 className="text-lg font-bold ">Web Design</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis, quis.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-slate-900 h-64 "></section>
      </div>
    </main>
  );
}

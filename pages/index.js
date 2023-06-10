import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import img from '../src/images/logo.png';
import webDesign from '../src/images/web-design.png';
import webDev from '../src/images/web-development.png';
import ios from '../src/images/ios.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="bg-slate-900">
      <div className="container m-auto relative">
        <nav className="container m-auto bg-slate-900 h-24 flex items-center drop-shadow fixed left-0 top-0 right-0">
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
        <section className="">
          <div className=" h-96 w-full text-center flex items-center justify-center">
            <h1 className="text-6xl text-amber-600">Banner section</h1>
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
              <div className="flex items-center justify-center">
                <Image src={webDesign} alt="" className="mt-8" />
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
              <div className="flex items-center justify-center">
                <Image src={webDesign} alt="" className="mt-8" />
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
              <div className="flex items-center justify-center">
                <Image src={webDesign} alt="" className="mt-8" />
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
              <div className="flex items-center justify-center">
                <Image src={webDesign} alt="" className="mt-8" />
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
              <div className="flex items-center justify-center">
                <Image src={webDesign} alt="" className="mt-8" />
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

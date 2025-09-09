"use client";
import { useState } from "react";
import Image from "next/image";
import "./Navbar.scss";
import Facebook from "../../public/images/logos/fb";
import Insta from "../../public/images/logos/insta";
import Youtube from "../../public/images/logos/youtube";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white md:px-[50px] py-[10px] md:flex md:items-center md:justify-between navbar-main">
      <div className="flex items-center justify-between px-[20px] md:px-[0px]">
        <div className="header-logo-wrap">
          <a href='/'>
            <Image
            src="/images/logos/shree-jai-logo.png"
            alt="Shree Jai logo"
            className="header-logo-image rounded-[4px]"
            width={100}
            height={100}
          />
          </a>
        </div>
        <button
          className="md:hidden text-black text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      <div
        className={`overflow-hidden bg-black md:bg-white transition-[max-height] duration-500 ease-in-out md:max-h-none px-[20px] md:px-[0px] ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="list-none md:flex gap-[40px] items-center md:justify-end text-center md:text-left mt-4 md:mt-0">
          <li className="nav-list py-3 md:py-0 text-left">
            <a
              href="/about"
              className="nav-link text-white md:text-black font-semibold hover:text-[#ed1112] text-[18px]"
            >
              Products
            </a>
          </li>
          <li className="nav-list py-3 md:py-0 text-left">
            <a
              href="/about"
              className="nav-link text-white md:text-black font-semibold hover:text-[#ed1112] text-[18px]"
            >
              DealerShip
            </a>
          </li>
          <li className="nav-list py-3 md:py-0 text-left">
            <a
              href="/about"
              className="nav-link text-white md:text-black font-semibold hover:text-[#ed1112] text-[18px]"
            >
              Events
            </a>
          </li>
          <li className="nav-list py-3 md:py-0 text-left">
            <a
              href="/about"
              className="nav-link text-white md:text-black font-semibold hover:text-[#ed1112] text-[18px]"
            >
              Contact
            </a>
          </li>
          <li className="flex justify-start md:justify-start gap-4 py-3 md:py-0 text-left">
            <a href="https://www.facebook.com/ShreeJalaramfragrance#" target="_blank">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/shreejalaramfragrance/" target="_blank">
              <Insta />
            </a>
             <a href="https://www.youtube.com/channel/UCltQdibmxeNpslkCo22eJVg" target="_blank">
              <Youtube />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import renovo from "./renovo.png";
import Link from "next/link";
import Image from "next/image";
export default function Menu() {
  const [open, setOpenMenu] = useState(false);
  const abrirMenu = () => {
    setOpenMenu(!open);
  };
  return (
    <header className="  bg-white container mx-auto">
      <nav className=" flex flex-col items-center py-8 gap-8" role="navigation">
        <div className="hidden sm:flex items-center gap-4">
          <Link href="/" className="font-bold text-4xl text-yellow-600">
            AD Renovo
          </Link>
          <Image
            src={renovo}
            width={82}
            height={82}
            alt="logo renovo do espírito santo"
            className="rounded-full"
          />
        </div>
        <div className="w-full border-[2px] text-black"></div>
        <ul className="hidden  sm:flex gap-8">
          <Link
            href="/"
            className="text-md sm:text-lg hover:text-yellow-600 transition-all"
          >
            Home
          </Link>
          <Link
            href="/Agenda"
            className="text-md sm:text-lg hover:text-yellow-600 transition-all"
          >
            Agenda
          </Link>
          <Link
            href=""
            className="text-md sm:text-lg hover:text-yellow-600 transition-all"
          >
            Eventos
          </Link>
          <Link
            href="/Biblia"
            className="text-md sm:text-lg hover:text-yellow-600 transition-all"
          >
            Biblía
          </Link>
          <Link
            href="/Liderancas"
            className="text-md sm:text-lg hover:text-yellow-600 transition-all"
          >
            Nossas Lideranças
          </Link>
          <Link
            href=""
            className="text-md sm:text-lg hover:text-yellow-600 transition-all"
          >
            Nossa Galeria
          </Link>
          <Link
            href=""
            className="text-md sm:text-lg hover:text-yellow-600 transition-all"
          >
            Doação
          </Link>
        </ul>
        <div className="md:hidden w-full flex justify-around  items-center">
          <div className=" flex items-center gap-4">
            <Image
              src={renovo}
              width={42}
              height={42}
              alt="logo renovo do espírito santo"
              className="rounded-full"
            />
            <Link href="/" className="font-bold text-2xl text-yellow-600">
              AD Renovo
            </Link>
          </div>
          <button
            onClick={abrirMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
          >
            <RxHamburgerMenu className="text-2xl" />
          </button>
        </div>
        {open ? (
          <div className=" w-full items-center flex justify-center text-center">
            <ul className=" sm:hidden flex flex-col gap-4 p-4">
              <Link
                href="/"
                className="text-md sm:text-lg hover:text-yellow-600 transition-all"
              >
                Home
              </Link>
              <Link
                href="/Agenda"
                className="text-md sm:text-lg hover:text-yellow-600 transition-all"
              >
                Agenda
              </Link>
              <Link
                href=""
                className="text-md sm:text-lg hover:text-yellow-600 transition-all"
              >
                Eventos
              </Link>
              <Link
                href="/Biblia"
                className="text-md sm:text-lg hover:text-yellow-600 transition-all"
              >
                Biblía
              </Link>
              <Link
                href="/Liderancas"
                className="text-md sm:text-lg hover:text-yellow-600 transition-all"
              >
                Nossas Lideranças
              </Link>
              <Link
                href=""
                className="text-md sm:text-lg hover:text-yellow-600 transition-all"
              >
                Nossa Galeria
              </Link>
              <Link
                href=""
                className="text-md sm:text-lg hover:text-yellow-600 transition-all"
              >
                Doação
              </Link>
            </ul>
          </div>
        ) : (
          ""
        )}
      </nav>
    </header>
  );
}

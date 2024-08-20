"use client";
import React from "react";
import { MdOutlineArrowUpward } from "react-icons/md";
export default function BotaoCima() {
  const subir = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adiciona uma animação suave ao rolar
    });
  };
  return (
    <button
      onClick={subir}
      className=" bg-black/50 rounded-lg transition-all hover:rounded-full p-2 w-42 text-textoPrincipal text-sm sm:text-md gap-2 fixed bottom-4 right-4  sm:bottom-10 sm:right-10 "
    >
      <MdOutlineArrowUpward className="text-2xl text-black-100 sm:text-white sm:text-4xl" />
    </button>
  );
}

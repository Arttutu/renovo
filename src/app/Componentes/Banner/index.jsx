"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import React from "react";
import Link from "next/link";

export default function Banner() {
  const images = [
    "/assets/img/banner/banner1.jpeg",
    "/assets/img/banner/banner2.jpeg",
    "/assets/img/banner/banner3.jpeg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    // Troca de imagem a cada 3 segundos

    return () => clearInterval(interval); // Limpar o intervalo ao desmontar o componente
  }, []);
  return (
    <motion.div
      key={currentIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className=" relative  mx-auto h-[600px] flex flex-col justify-center items-center bg-white container  overflow-hidden mt-4"
    >
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-[1200px] opacity-50   h-[600px] object-contain"
      />
      <div className="flex gap-12 flex-col absolute top-42 items-center justify-center">
        <h1 className=" flex flex-col  text-4xl">Uma Igreja Família</h1>
        <div className="flex gap-4">
          <button className=" flex items-center gap-2 justify-center w-[150px] bg-yellow-600  text-white p-2 hover:bg-white hover:text-black transition-all">
            Eventos
            <IoMdArrowForward />
          </button>
          <Link href="/Agenda">
            <button className=" flex items-center gap-2 justify-center w-[150px] bg-white hover:bg-yellow-600 hover:text-white transition-all  text-black p-2">
              Nossa Agenda
              <IoMdArrowForward />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

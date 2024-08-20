"use client";
import React from "react";
import lideres from "./lideres.json";
import Lideres from "../Componentes/Lideres";
import { motion } from "framer-motion";
export default function Liderancas() {
  return (
    <main className="container flex flex-col gap-16 mx-auto py-12 bg-fundo">
      <h1 className=" text-xl sm:text-4xl  text-center">Lideranças</h1>
      <div className="flex flex-col gap-8 justify-start items-start mx-12 sm:mx-44">
        {lideres.map((index) => (
          <motion.div
            key={index.titulo}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="w-full ]  "
          >
            <Lideres
              foto={index.foto}
              titulo={index.titulo}
              descricao={index.descricao}
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
}

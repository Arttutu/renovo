"use client";
import React from "react";
import agenda from "./agenda.json";
import CardAgenda from "../CardAgenda";
import { motion } from "framer-motion";

export default function Agenda() {
  return (
    <section className="container bg-fundo mx-auto py-12">
      <div className="flex flex-col gap-8 w-full px-8 sm:w-[600px] mx-auto justify-center items-center">
        <h2 className="text-4xl flex justify-center">Agenda Renovo</h2>
        <p className="text-md text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          earum voluptas porro, neque quibusdam velit ad quas ea a, labore
          praesentium ex! Reprehenderit cum tempore voluptates quia aliquid
          porro! Saepe.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center py-12 gap-6 mx-auto ">
        {agenda.map((index) => (
          <motion.div
            key={index}
            className="w-full sm:w-[450px] md:w-[400px] lg:w-[350px]"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            <CardAgenda
              titulo={index.titulo}
              descricao={index.descricao}
              data={index.data}
              imagem={index.imagem}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

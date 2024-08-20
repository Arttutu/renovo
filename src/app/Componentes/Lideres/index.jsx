import Image from "next/image";
import React from "react";

export default function Lideres({ foto, descricao, titulo }) {
  return (
    <section className=" flex flex-col sm:flex sm:flex-row gap-12 items-start ">
      <Image
        width={400}
        height={0}
        src={foto}
        alt={`Imagem da agenda de nome ${titulo}`}
        className="w-full sm:w-[400px]"
      />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-lg">{titulo}</h1>
        <p className="w-full text-gray-600 text-md">{descricao}</p>
      </div>
    </section>
  );
}

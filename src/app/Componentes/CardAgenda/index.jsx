import Image from "next/image";
import React from "react";
export default function CardAgenda(props) {
  return (
    <article className=" flex flex-col gap-2 items-center p-8  sm:items-start ">
      <header className="w-full">
        <Image
          src={props.imagem}
          width={400}
          height={0}
          className=" w-full sm:w-[400px]"
          alt={`Imagem da agenda de nome ${props.titulo}`}
        />
      </header>
      <main className="flex gap-2 flex-col">
        <span className="text-gray-600">{props.data}</span>
        <h1 className="font-bold text-lg">{props.titulo}</h1>
        <p className="text-gray-600">{props.descricao}</p>
      </main>
      <footer></footer>
    </article>
  );
}

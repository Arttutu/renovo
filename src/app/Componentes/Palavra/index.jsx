import React from "react";

const getData = async () => {
  const data = await fetch(
    "https://www.abibliadigital.com.br/api/verses/nvi/mc/7/34"
  );
  return data.json();
};
export default async function Palavra() {
  const versiculo = await getData();
  return (
    <section className="container mx-auto py-12 bg-rodape h-400 flex flex-col gap-8 items-center justify-center  p-16">
      <h2 className="text-white text-2xl sm:text-4xl  text-center">
        Palavra da Campanha
      </h2>
      <p className="text-white text-lg sm:text-xl max-w-[600px]">
        "{versiculo.text}"
      </p>
    </section>
  );
}

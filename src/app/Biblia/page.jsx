import React from "react";

const getData = async () => {
  const data = await fetch("https://www.abibliadigital.com.br/api/books/");
  return data.json();
};

export default async function Biblia() {
  const data = await getData();
  // Separando os livros por testamento
  const oldTestament = data.filter((book) => book.testament === "VT");
  const newTestament = data.filter((book) => book.testament === "NT");

  return (
    <main className="container bg-white mt-4 mx-auto">
      <h1 className="flex justify-center text-4xl py-16">Bíblia Renovo</h1>
      <section className="mx-12">
        <h2 className="text-2xl py-4">Velho Testamento</h2>
        <ul className="flex flex-wrap gap-4 px-4 py-12">
          {oldTestament.map((book) => (
            <li
              key={book.id}
              className=" w-[150px] flex items-center justify-center border-2 rounded-lg border-yellow-600 p-2"
            >
              <h3 className="font-bold">{book.name}</h3>
            </li>
          ))}
        </ul>
      </section>
      <section className="mx-12">
        <h2 className="text-2xl py-4">Novo Testamento</h2>
        <ul className="flex flex-wrap gap-4 px-4 py-12">
          {newTestament.map((book) => (
            <li
              key={book.id}
              className=" w-[150px] flex items-center justify-center border-2 rounded-lg border-yellow-600 p-2"
            >
              <h3 className="font-bold">{book.name}</h3>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

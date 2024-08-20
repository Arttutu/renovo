"use client";
import React from "react";
import QRCode from "qrcode.react"; // Biblioteca para gerar o QR code
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";
import Link from "next/link";

const Apoie = () => {
  return (
    <div className="container mx-auto bg-white p-6 py-12  text-center flex flex-col gap-12 sm:flex sm:flex-row sm:justify-around items-start">
      <div>
        <h2 className="text-2xl sm:text-4xl mb-4">Apoie Nossa igreja</h2>
        <p className="mb-6 text-gray-600  text-md">
          Sua doação ajuda a manter este projeto vivo e a alcançar mais pessoas.
          Agradecemos seu apoio!
        </p>
        <div className=" flex flex-col mb-6  items-center gap-4">
          <h3 className="font-bold">Nosso PIX!</h3>
          <QRCode
            value="44953367898" // Link para a doação
            size={128}
            className="text-yellow-600"
          />
        </div>
      </div>
      {/*     <div className="flex flex-col">
        <h2 className="text-4xl mb-4">Nossas redes sociais</h2>
        <p className="mb-6 text-gray-600 text-md">
          Venha conheçer nossas redes sociais
        </p>
        <div className="w-[400px] flex items-center justify-center gap-2">
          <Link href={""}>
            <IoLogoFacebook className="text-yellow-600 text-4xl hover:text-yellow-400  transition-all" />
          </Link>
          <Link href={""}>
            <IoLogoInstagram className="text-yellow-600 text-4xl hover:text-yellow-400  transition-all" />
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default Apoie;

import Link from "next/link";
import React from "react";
import renovo from "./renovo.png";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";
import Image from "next/image";
export default function Rodape() {
  return (
    <footer className="bg-rodape container mx-auto mt-4 p-8 flex flex-col-reverse gap-12  sm:flex sm:flex-row items-center justify-around">
      <div className="text-white text-md text-lg w-[250px] sm:w-[400px]">
        Avenida Santo Afonso, 1264, Jardim Miriam - SP
      </div>
      <div className=" w-[400px] flex items-center flex-col gap-4">
        <div className="flex gap-4 items-center">
          <h3 className="text-white text-2xl">AD Renovo</h3>
          <Image
            src={renovo}
            width={42}
            height={42}
            alt="logo renovo do espírito santo"
            className="rounded-full"
          />
        </div>
        <p className="text-white text-md"> @Todos os direitos reservados</p>
      </div>
      <div className="w-[400px] flex items-center justify-center gap-2">
        <Link href={""}>
          <IoLogoFacebook className="text-white text-4xl" />
        </Link>
        <Link href={""}>
          <IoLogoInstagram className="text-white text-4xl" />
        </Link>
      </div>
    </footer>
  );
}

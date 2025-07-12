import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="grid w-full grid-cols-1 items-start gap-4 lg:grid-cols-2">
        <section className="flex w-full flex-col space-y-4 lg:w-auto">
          <div className="w-full">
            <Image
              src="https://storage.googleapis.com/star-lab/blog/OGs/node.png"
              width={1200}
              height={1200}
              alt="NodeJS"
              className="object-fit w-full rounded-md"
            />
          </div>

          <span className="text-xl font-extrabold text-gray-900 sm:text-2xl dark:text-gray-300">
            Node.js
          </span>

          <Link
            href="/"
            className="text-3xl font-bold text-white/90 hover:underline"
          >
            Login JWT em Node.js: aprenda a proteger APIs de forma simples
          </Link>
        </section>

        <section className="flex flex-col justify-start gap-4 text-sm text-gray-400 lg:px-20">
          <span className="text-2xl font-black text-green-500">Destaques</span>

          <Link href="/" className="group flex flex-col gap-3">
            <h3 className="text-base font-semibold text-gray-300 uppercase">
              Banco de dados
            </h3>
            <h1 className="text-xl font-bold text-gray-100 transition-all group-hover:underline">
              O que é MongoDB? Entenda o banco de dados NoSQL mais usado do...
            </h1>

            <span className="text-sm leading-relaxed font-normal text-gray-300">
              Descubra o que é MongoDB, como funciona e por que tantos
              desenvolvedores escolhem este banco NoSQL...
            </span>

            <hr />
          </Link>

          <Link href="/" className="group flex flex-col gap-3">
            <h3 className="text-base font-semibold text-gray-300 uppercase">
              Carreira
            </h3>
            <h1 className="text-xl font-bold text-gray-100 transition-all group-hover:underline">
              IA para tech leads: seu time com entregas potencializadas...
            </h1>

            <span className="text-sm leading-relaxed font-normal text-gray-300">
              Como tech lead, você pode encarar a IA como um assistente
              empoderado – ele faz as tarefas chatas e repetitivas...
            </span>

            <hr />
          </Link>

          <Link href="/" className="group flex flex-col gap-3">
            <h3 className="text-base font-semibold text-gray-300 uppercase">
              Data Analytics
            </h3>
            <h1 className="text-xl font-bold text-gray-100 transition-all group-hover:underline">
              5 conceitos da análise de dados que vão mudar a forma como você vê
              o...
            </h1>

            <span className="text-sm leading-relaxed font-normal text-gray-300">
              mundo Conheça os 5 conceitos de análise de dados essenciais para
              transformar seu pensamento analítico e turbinar sua carreira em
              data analytics.
            </span>
          </Link>
        </section>
      </div>
      <hr className="mt-8" />
    </>
  );
}

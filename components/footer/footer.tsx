"use client";

import { Instagram, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const socialsLinks = [
  {
    link: "https://github.com/luancamposdev",
    icon: Github,
  },
  {
    link: "https://linkedin.com/in/luan-campos-developer",
    icon: Linkedin,
  },
  {
    link: "https://instagram.com/camposwebsolutions",
    icon: Instagram,
  },
];

export default function Footer() {
  return (
    <footer className="bg-background text-foreground mt-12 w-full border-t">
      {/*<Newsletter />*/}

      {/* Conteúdo principal */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Branding */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold tracking-tight">Cotton News</h2>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Compartilhando tecnologia, conhecimento e novidades do universo
              dev.
            </p>
            <div className="mt-2 flex gap-4">
              {socialsLinks.map(({ link, icon: Icon }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transform transition-transform duration-200 hover:scale-110"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-3 md:col-span-2">
            <div>
              <h3 className="mb-2 font-semibold">Produto</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>
                  <Link href="/" className="hover:text-primary transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <a
                    href="https://wa.me/5562996001439?text=Olá%20gostaria%20de%20entrar%20em%20contato"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Sobre</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>
                  <a
                    href="https://github.com/luancamposdev"
                    className="hover:text-primary transition"
                  >
                    Quem somos
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/luan-campos-developer"
                    className="hover:text-primary transition"
                  >
                    Carreira
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Legal</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>
                  <a
                    href="https://www.rocketseat.com.br/privacy?utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=&subid=organic&sid2=&subid2=&subid3=&subid4=&subid5=&xcod=organichQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR&sck=organichQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR"
                    className="hover:text-primary transition"
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rocketseat.com.br/terms?utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=&subid=organic&sid2=&subid2=&subid3=&subid4=&subid5=&xcod=organichQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR&sck=organichQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR"
                    className="hover:text-primary transition"
                  >
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="border-muted text-muted-foreground border-t px-6 py-4 text-center text-xs">
        &copy; {new Date().getFullYear()} <strong>Cotton News</strong>. Todos os
        direitos reservados.
      </div>
    </footer>
  );
}

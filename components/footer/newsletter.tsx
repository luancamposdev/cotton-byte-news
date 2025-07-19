import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="w-full border-b px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h3 className="text-3xl font-bold">Assine a newsletter</h3>
          <p className="text-muted-foreground text-lg">
            Receba novidades, tutoriais e atualizações direto no seu e-mail.
          </p>
        </div>

        <form className="flex w-full max-w-xl items-center gap-4">
          <Input
            type="email"
            placeholder="seuemail@exemplo.com"
            className="h-12 w-full px-6 text-lg placeholder:text-lg"
          />
          <Button
            type="submit"
            className="bg-background hover:bg-muted h-13 cursor-pointer border px-8 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <Mail className="mr-2 h-6 w-6" />
            Assinar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

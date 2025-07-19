"use client";

import { useEffect, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Code, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export const SearchInput = () => {
  const [open, setOpen] = useState<boolean>(false);

  useHotkeys("ctrl+k, meta+k", (e) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  });

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      document.addEventListener("keydown", down);
      return () => document.removeEventListener("keydown", down);
    };
  });

  return (
    <div>
      <Button
        onClick={() => setOpen(true)}
        className="border-border text-muted-foreground hover:border-muted-foreground flex w-full items-center justify-between rounded-md border px-4 py-2 text-sm shadow-sm transition hover:cursor-pointer hover:bg-gray-800 sm:w-auto"
        variant="outline"
      >
        <span className="flex items-center gap-2">
          <Search className="h-4 w-4" />
          <span className="hidden md:inline">Buscar no blog...</span>
        </span>
        <kbd className="text-muted-foreground hidden text-xs sm:inline-block">
          Ctrl K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Buscar no blog..." />
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>

          <CommandGroup heading="Categorias">
            <CommandItem onSelect={() => alert("Typescript")}>
              <Code className="mr-2 h-4 w-4" />
              <span>Typescript</span>
            </CommandItem>
            <CommandItem onSelect={() => alert("NextJS")}>
              <Code className="mr-2 h-4 w-4" />
              <span>NextJS</span>
            </CommandItem>
            <CommandItem onSelect={() => alert("NestJS")}>
              <Code className="mr-2 h-4 w-4" />
              <span>NestJS</span>
            </CommandItem>
            <CommandItem onSelect={() => alert("PHP")}>
              <Code className="mr-2 h-4 w-4" />
              <span>PHP</span>
            </CommandItem>
            <CommandItem onSelect={() => alert("NodeJS")}>
              <Code className="mr-2 h-4 w-4" />
              <span>NodeJS</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};

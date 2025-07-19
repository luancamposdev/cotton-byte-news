"use client";

import { useEffect, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { fetchPosts } from "@/lib/fetchPosts"; // Certifique-se de que esse arquivo está correto

interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  technology?: {
    title?: string;
  };
}

export const SearchInput = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [filtered, setFiltered] = useState<Post[]>([]);
  const router = useRouter();

  // Carrega os posts uma única vez
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error("Erro ao buscar os posts:", error);
      }
    };
    loadPosts();
  }, []);

  // Filtra os posts sempre que `query` muda
  useEffect(() => {
    const lower = query.toLowerCase();

    if (!lower) {
      setFiltered([]);
      return;
    }

    const filteredPosts = posts.filter((post) => {
      const titleMatch = post.title.toLowerCase().includes(lower);
      const techMatch = post.technology?.title?.toLowerCase().includes(lower);
      return titleMatch || techMatch;
    });

    setFiltered(filteredPosts);
  }, [query, posts]);

  // Atalho de teclado (Ctrl+K ou Cmd+K)
  useHotkeys("ctrl+k, meta+k", (e) => {
    e.preventDefault();
    setOpen((prev) => !prev);
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
        <CommandInput
          placeholder="Buscar no blog..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty>Nenhum post encontrado.</CommandEmpty>

          <CommandGroup heading="Busque no blog">
            {filtered.map((post) => (
              <CommandItem
                key={post._id}
                value={post.title}
                onSelect={() => {
                  router.push(`/blog/${post.slug.current}`);
                  setOpen(false);
                }}
              >
                <Search className="mr-2 h-4 w-4" />
                <span>{post.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};

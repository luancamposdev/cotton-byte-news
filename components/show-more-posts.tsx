"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export interface PortableTextBlock {
  _type: string;
  style?: string;
  children?: {
    _type: string;
    text: string;
    marks?: string[];
  }[];
}

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  publishedAt: string;
  isMain: boolean;
  isFeatured: boolean;
  body: PortableTextBlock[];
  mainImage: {
    asset: {
      url: string;
    };
  };
  author: {
    name: string;
    image: string;
  };
  technology: {
    title: string;
  };
}

interface Props {
  posts: Post[];
}

const ShowMorePosts = ({ posts }: Props) => {
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  return (
    <>
      <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="group border-border hover:bg-muted flex w-full flex-col gap-4 rounded-xl border p-4 transition"
          >
            <div className="relative h-48 w-full overflow-hidden rounded-lg">
              <Image
                src={post.mainImage.asset.url}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-between gap-2">
              <div>
                <h3 className="text-muted-foreground text-sm font-semibold uppercase">
                  {post.technology?.title || "Tecnologia"}
                </h3>
                <h1 className="text-foreground text-xl font-bold transition-all group-hover:underline">
                  {post.title}
                </h1>
                <p className="text-muted-foreground mt-1 line-clamp-3 text-sm">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 flex justify-center">
          <Button
            onClick={() => setVisibleCount((prev) => prev + 5)}
            className="border-border text-muted-foreground hover:border-muted-foreground flex w-full items-center justify-between justify-center rounded-md border px-4 py-2 text-sm font-semibold uppercase shadow-sm transition hover:cursor-pointer hover:bg-gray-800 sm:w-auto"
            variant="outline"
          >
            <Plus className="mr-2 h-4 w-4" />
            Carregar mais
          </Button>
        </div>
      )}
    </>
  );
};

export default ShowMorePosts;

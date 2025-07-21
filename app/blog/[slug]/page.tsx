import React from "react";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { getPostBySlug } from "@/lib/queries";
import { urlFor } from "@/lib/imageUrl";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();

  const { title, mainImage, body, author } = post;

  return (
    <article className="mx-auto mt-24 max-w-3xl space-y-6 p-6">
      {mainImage && (
        <Image
          src={urlFor(post.mainImage).width(1200).height(600).url()}
          width={1200}
          height={1200}
          alt={post.title}
          priority
          className="object-fit w-full rounded-md"
        />
      )}

      <h1 className="mt-4 text-4xl font-bold">{title}</h1>

      {author && (
        <div className="mt-4 flex items-center gap-4">
          <Image
            src={author.avatar}
            alt={author.name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <p className="font-medium">{author.name}</p>
            <p className="text-sm text-gray-500">@{author.username}</p>
          </div>
        </div>
      )}

      <div className="prose prose-invert dark:prose-invert max-w-none">
        <PortableText
          value={body}
          components={{
            types: {
              code: ({ value }: any) => {
                return (
                  <SyntaxHighlighter
                    language={value.language}
                    style={vscDarkPlus}
                  >
                    {value.code}
                  </SyntaxHighlighter>
                );
              },
            },
          }}
        />
      </div>
    </article>
  );
}

import React from "react";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { getPostBySlug } from "@/lib/queries";
import { urlFor } from "@/lib/imageUrl";

interface CodeBlockValue {
  language?: string;
  code: string;
}

interface ImageValue {
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }>}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  const { title, mainImage, body, author } = post;

  return (
    <article className="mx-auto mt-24 max-w-4xl space-y-6 p-6">
      {mainImage && (
        <Image
          src={urlFor(post.mainImage).width(1200).height(600).url()}
          width={1200}
          height={600}
          alt={post.title}
          priority
          className="w-full rounded-md object-cover"
        />
      )}

      <h1 className="mt-4 text-4xl font-bold">{title}</h1>

      {author && (
        <div className="mt-4 flex items-center gap-4">
          <Image
            src={author.avatar.asset.url}
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

      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <PortableText
          value={body}
          components={{
            types: {
              code: ({ value }: { value: CodeBlockValue }) => (
                <SyntaxHighlighter
                  language={value.language || "javascript"}
                  style={vscDarkPlus}
                  customStyle={{
                    borderRadius: "0.5rem",
                    padding: "1rem",
                  }}
                >
                  {value.code}
                </SyntaxHighlighter>
              ),
              image: ({ value }: { value: ImageValue }) => (
                <Image
                  src={urlFor(value).width(800).url()}
                  alt={value.alt || "Image"}
                  width={800}
                  height={500}
                  className="my-4 rounded"
                />
              ),
            },
          }}
        />
      </div>
    </article>
  );
}

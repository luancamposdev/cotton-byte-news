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
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  const { title, mainImage, body, author } = post;

  return (
    <>
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
                code: ({ value }: any) => (
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
                image: ({ value }: any) => (
                  <Image
                    src={urlFor(value).width(800).url()}
                    alt={value.alt || "Image"}
                    width={800}
                    height={500}
                    className="my-4 rounded"
                  />
                ),
              },
              block: {
                h1: ({ children }) => (
                  <h1 className="mt-8 mb-4 text-4xl font-bold">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="mt-6 mb-3 text-3xl font-semibold">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mt-5 mb-2 text-2xl font-semibold">
                    {children}
                  </h3>
                ),
                h4: ({ children }) => (
                  <h4 className="mt-4 mb-2 text-xl font-medium">{children}</h4>
                ),
                normal: ({ children }) => (
                  <p className="mb-4 leading-7">{children}</p>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-purple-500 pl-4 text-gray-500 italic dark:text-gray-400">
                    {children}
                  </blockquote>
                ),
              },
              list: {
                bullet: ({ children }) => (
                  <ul className="mb-4 ml-6 list-disc">{children}</ul>
                ),
                number: ({ children }) => (
                  <ol className="mb-4 ml-6 list-decimal">{children}</ol>
                ),
              },
              listItem: {
                bullet: ({ children }) => <li className="mb-2">{children}</li>,
                number: ({ children }) => <li className="mb-2">{children}</li>,
              },
              marks: {
                strong: ({ children }) => (
                  <strong className="font-bold">{children}</strong>
                ),
                em: ({ children }) => <em className="italic">{children}</em>,
                code: ({ children }) => (
                  <code className="rounded bg-gray-200 px-1 py-0.5 text-sm dark:bg-gray-700">
                    {children}
                  </code>
                ),
                link: ({ children, value }) => (
                  <a
                    href={value.href}
                    className="text-purple-600 underline hover:text-purple-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
              },
            }}
          />
        </div>
      </article>
    </>
  );
}

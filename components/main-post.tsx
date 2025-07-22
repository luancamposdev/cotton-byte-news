import React from "react";
import Image from "next/image";
import Link from "next/link";

import { sanityClient } from "@/lib/sanity";
import { getMainPostQuery } from "@/lib/queries";
import { urlFor } from "@/lib/imageUrl";

const MainPost = async () => {
  const post = await sanityClient.fetch(getMainPostQuery);
  console.log(post)

  if (!post) return null;

  return (
    <section className="flex w-full flex-col space-y-4 lg:w-auto">
      <div className="w-full">
        <Image
          src={urlFor(post.mainImage).width(1200).height(600).url()}
          width={1200}
          height={1200}
          alt={post.title}
          priority
          className="object-fit w-full rounded-md"
        />
      </div>

      <span className="text-xl font-extrabold text-gray-900 sm:text-2xl dark:text-gray-300">
        {post.title}
      </span>

      <Link
        href={`/blog/${post.slug.current}`}
        className="text-3xl font-bold text-white/90 hover:underline"
      >
        {post.excerpt}
      </Link>
    </section>
  );
};
export default MainPost;

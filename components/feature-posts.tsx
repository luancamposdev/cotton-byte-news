import React from "react";
import Link from "next/link";

import { sanityClient } from "@/lib/sanity";
import { getFeaturedPostsQuery } from "@/lib/queries";

interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  technology?: {
    title: string;
  };
}

const FeaturePosts = async () => {
  const posts: Post[] = await sanityClient.fetch(getFeaturedPostsQuery);

  if (!posts || posts.length === 0) return null;

  return (
    <div className="flex flex-col gap-6">
      {posts.map((post: Post, index: number) => (
        <Link
          key={post._id}
          href={`/blog/${post.slug.current}`}
          className="group flex flex-col gap-3"
        >
          <h3 className="text-base font-semibold text-gray-300 uppercase">
            {post.technology?.title || "Technologia"}
          </h3>
          <h1 className="text-xl font-bold text-gray-100 transition-all group-hover:underline">
            {post.title || "Technologia"}
          </h1>

          <span className="text-sm leading-relaxed font-normal text-gray-300">
            {post.excerpt}
          </span>

          {index !== posts.length - 1 && <hr />}
        </Link>
      ))}
    </div>
  );
};

export default FeaturePosts;

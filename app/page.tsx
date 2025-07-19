import React from "react";

import { sanityClient } from "@/lib/sanity";
import { getAllPostsQuery } from "@/lib/queries";
import MainPost from "@/components/main-post";
import FeaturePosts from "@/components/feature-posts";
import ShowMorePosts from "@/components/show-more-posts";

export default async function HomePage() {
  const posts = await sanityClient.fetch(getAllPostsQuery);

  return (
    <>
      <div className="grid w-full grid-cols-1 items-start gap-4 lg:grid-cols-2">
        <section className="flex w-full flex-col space-y-4 lg:w-auto">
          <MainPost />
        </section>
        <section className="mt-5 flex flex-col justify-start gap-4 text-sm text-gray-400 lg:mt-auto lg:px-20">
          <span className="text-2xl font-black text-green-500">Destaques</span>
          <FeaturePosts />
        </section>
      </div>
      <hr className="mt-8" />
      <div className="py-8">
        <h1 className="mb-6 text-2xl font-bold text-green-400">
          Nossos últimos artigos
        </h1>
        <ShowMorePosts posts={posts} />
      </div>
    </>
  );
}

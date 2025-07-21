import React from "react";

import { sanityClient } from "@/lib/sanity";
import { getAllPostsQuery } from "@/lib/queries";
import MainPost from "@/components/main-post";
import FeaturePosts from "@/components/feature-posts";
import ShowMorePosts from "@/components/show-more-posts";
import { Ticker } from "@/components/ui/ticker";

export default async function HomePage() {
  const posts = await sanityClient.fetch(getAllPostsQuery);

  return (
    <>
      <div className="grid w-full grid-cols-1 items-start gap-4 px-4 py-6 pt-32 sm:px-6 lg:grid-cols-2 lg:px-8">
        <section className="flex w-full flex-col space-y-4 lg:w-auto">
          <MainPost />
        </section>

        <section className="mt-5 flex flex-col justify-start gap-4 text-sm text-gray-400 lg:mt-auto lg:px-20">
          <span className="text-2xl font-black text-green-500">Destaques</span>
          <FeaturePosts />
        </section>
      </div>

      <hr />

      <section className="px-4 py-6 pt-12 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-2xl font-bold text-green-500">
          Nossos últimos artigos
        </h1>
        <ShowMorePosts posts={posts} />
      </section>

      <hr className="mt-8" />
      <section>
        <Ticker />
      </section>
    </>
  );
}

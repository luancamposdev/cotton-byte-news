import { sanityClient } from "./sanity";
import { getAllPostsQuery } from "./queries";

export const fetchPosts = async () => {
  return await sanityClient.fetch(getAllPostsQuery);
};

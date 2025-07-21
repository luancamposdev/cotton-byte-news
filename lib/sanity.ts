import { createClient } from "@sanity/client";

const projectId = "wwwsp2ps";
const dataset = "cotton-news";
const apiVersion = "2023-07-01";

if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable");
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

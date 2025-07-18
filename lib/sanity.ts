import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-07-18",
});

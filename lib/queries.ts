import { sanityClient } from "./sanity";

export const getAllPostsQuery = `
    *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    isMain,
    isFeatured,
    mainImage {
      asset->{
        url,
        metadata { lqip }
      },
      alt
    },
    body,
    technology->{
      _id,
      title,
      slug
    },
    author->{
      _id,
      name,
      image {
        asset->{
          url
        }
      }
    }
  }
`;

export const getMainPostQuery = `
  *[_type == "post" && isMain == true && defined(title) && defined(mainImage.asset)] 
    | order(publishedAt desc)[0]{
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage {
        asset->{
          url,
          metadata { lqip }
        },
        alt
      },
      technology->{
        _id,
        title,
        slug
      },
      author->{
        _id,
        name,
        image {
          asset->{
            url
          }
        }
      }
    }
`;

export const getFeaturedPostsQuery = `
 *[_type == "post" && isFeatured == true] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage {
    asset->{
      url
    }
  },
  technology->{
    title,
    slug
  },
  author->{
    name
  }
}

`;

export async function getPostBySlug(slug: string) {
  console.log(slug);
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage {
      asset->{
        url,
        metadata { lqip }
      },
      alt
    },
    body,
    technology->{
      _id,
      title,
      slug
    },
    author->{
      _id,
      name,
      image {
        asset->{
          url
        }
      }
    }
  }`;

  return await sanityClient.fetch(query, { slug });
}

export const getAllPostsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    isMain,
    isFeatured,
    body,
    "mainImage": mainImage.asset->url,
    "author": author->{name, "image": image.asset->url},
    "technology": technology->{title}
  }
`;

export const getMainPostQuery = `
  *[_type == "post" && isMain == true][0]{
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    isMain,
    isFeatured,
    body,
    "author": author->{name, image},
    "technology": technology->{title}
  }
`;

export const getFeaturedPostsQuery = `
  *[_type == "post" && isFeatured == true] | order(publishedAt desc) {
    _id,
    title,
    technology,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    isMain,
    isFeatured,
    body,
    "author": author->{name, image},
    "technology": technology->{title}
  }
`;

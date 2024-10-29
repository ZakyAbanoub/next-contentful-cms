import "server-only";
import {
  CustomerPostQuery,
  HeroQuery,
  LogoWallQuery,
  NavigationQuery,
  SlugsForPosts,
} from "@/types";
import { contentGqlFetcher } from "./fetch";

export const getSlugsForPosts = async () => {
  const query = `#graphql
  {
    customerPostCollection {
      items {
        slug
      }
    }
  }`;

  const data = await contentGqlFetcher<SlugsForPosts>({ query });

  if (!data) {
    throw new Error("Ops!");
  }

  return data;
};

export const getContentForCustomerPost = async (slug: string) => {
  const query = `#graphql
  query CustomerPostCollection($where: CustomerPostFilter) {
    customerPostCollection(where: $where) {
      items {
        title
        slug
        customer {
          logo {
            height
            width
            url
          }
          name
        }
        body {
          json
        }
      }
    }
  }`;

  const variables = {
    where: {
      slug,
    },
  };

  const data = await contentGqlFetcher<CustomerPostQuery>({ query, variables });

  if (!data) {
    throw new Error("Ops!");
  }

  return data;
};

export const getContentForNavigation = async (name: string) => {
  const query = `#graphql
  query NavigationCollection($where: NavigationFilter) {
    navigationCollection(where: $where) {
      items {
        name
        linksCollection {
          items {
            label
            link
          }
        }
      }
    }
  }`;

  const variables = {
    where: {
      name: name,
    },
  };

  const data = await contentGqlFetcher<NavigationQuery>({ query, variables });

  if (!data) {
    throw new Error("Ops!");
  }

  return data;
};

export const getContentForLogoWall = async () => {
  const query = `#graphql
  query AssetCollection($where: AssetFilter) {
    assetCollection(where: $where) {
      items {
        width
        url
        title
        height
      }
    }
  }`;

  const variables = {
    where: {
      title_contains: "client",
    },
  };

  const data = await contentGqlFetcher<LogoWallQuery>({ query, variables });

  if (!data) {
    throw new Error("Ops!");
  }

  return data;
};

export const getContentForHero = async (isDraft = false) => {
  const query = `#graphql
    query HeroCollection {
        heroCollection(preview: ${isDraft ? "true" : "false"}) {
            items {
            title
            subtitle
            preTitle
            callToActionsCollection {
                items {
                link
                label
                }
            }
            }
        }
    }`;

  const data = await contentGqlFetcher<HeroQuery>({
    query,
    preview: isDraft,
    tags: ["hero"],
  });

  // revalidateHero()
  if (!data) {
    throw new Error("Ops!");
  }
  return data;
};

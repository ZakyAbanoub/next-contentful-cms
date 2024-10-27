import { HeroQuery, LogoWallQuery } from "@/types";
import { contentGqlFetcher } from "./fetch";

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

export const getContentForHero = async () => {
  const query = `#graphql
    query HeroCollection {
        heroCollection {
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

  const data = await contentGqlFetcher<HeroQuery>({ query });
  if (!data) {
    throw new Error("Ops!");
  }
  return data;
};

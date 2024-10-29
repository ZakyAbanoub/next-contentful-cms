import { Document } from "@contentful/rich-text-types";


export type SlugsForPosts = {
  customerPostCollection: {
    items: {
      slug: string;
    }[];
  };
};

export type CustomerPostQuery = {
  customerPostCollection: {
    items: {
      title: string;
      slug: string;
      customer: {
        logo: {
          height: number;
          width: number;
          url: string;
        };
        name: string;
      };
      body: {
        json: Document;
      };
    }[];
  };
};

export type LogoWallQuery = {
  assetCollection: {
    items: {
      width: number;
      url: string;
      title: string;
      height: number;
    }[];
  };
};

export type HeroQuery = {
  heroCollection: {
    items: {
      title: string;
      subtitle: string;
      preTitle: string;
      callToActionsCollection: {
        items: {
          link: string;
          label: string;
        }[];
      };
    }[];
  };
};

export type NavigationQuery = {
  navigationCollection: {
    items: {
      name: string;
      linksCollection: {
        items: {
          label: string;
          link: string;
        }[];
      };
    }[];
  };
};

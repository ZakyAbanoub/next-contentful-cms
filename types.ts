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

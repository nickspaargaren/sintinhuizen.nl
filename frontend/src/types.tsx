export type LayoutProps = {
  title: string,
  description: string
  canonical?: string
}

export type Images = Image[];

export type Image = {
  childImageSharp: {
    gatsbyImageData: {
      backgroundColor: string;
      height: number;
      images: {
        fallback: {
          sizes: string;
          src: string;
          srcSet: string;
        };
        sources: [{
          sizes: string;
          srcSet: string;
          type: string;
        }];
      }
      layout: "fixed" | "fullWidth" | "constrained";
      width: number;
    }
    original: {
      height: number;
      width: number;
    }
  };
  id: string;
  publicURL: string;
  relativePath: string;
};

export type ButtonProps = {
  title: string;
  url: string;
}

import { ReactElement } from 'react';

export type LayoutProps = {
  children: ReactElement,
  title: string,
  description: string
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
  };
  id: string;
  publicURL: string;
  relativePath: string;
};

export type ButtonProps = {
  title: string;
  url: string;
}

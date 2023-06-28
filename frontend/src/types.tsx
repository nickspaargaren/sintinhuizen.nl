import type { IGatsbyImageData } from 'gatsby-plugin-image';

export type Images = Image[];

export type Image = {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
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

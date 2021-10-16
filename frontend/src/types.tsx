export type LayoutProps = {
  children: any,
  title: string,
  description: string
}

export type Images = {
  fotos2019: Image[];
  fotos2020: Image[];
}

export type Image = {
  childImageSharp: object;
  id: string;
  publicURL: string;
  relativePath: string;
}

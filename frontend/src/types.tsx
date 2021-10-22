import React from 'react';

export type LayoutProps = {
  children: React.ReactNode,
  title: string,
  description: string
}

export type Images = Image[];

export type Image = {
  childImageSharp: object;
  id: string;
  publicURL: string;
  relativePath: string;
}
